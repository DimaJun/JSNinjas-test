import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateSuperheroDto } from './dtos/create-superhero.dto';
import { PrismaClientKnownRequestError } from '../../generated/prisma/internal/prismaNamespace';
import { FileUploadService } from '../file-upload/file-upload.service';
import { UpdateHeroDto } from './dtos/update-hero.dto';

@Injectable()
export class SuperheroService {
	constructor(
		private readonly prisma: PrismaService,
		private readonly filesService: FileUploadService,
	) {}

	async getAllSuperheroes(page: number, limit: number) {
		const skip = (page - 1) * limit;

		const [heroes, total] = await this.prisma.$transaction([
			this.prisma.superhero.findMany({
				skip,
				take: limit,
				orderBy: { createdAt: 'desc' },
			}),
			this.prisma.superhero.count(),
		]);

		return {
			heroes,
			meta: {
				total,
				page,
				limit,
				totalPages: Math.ceil(total / limit),
			},
		};
	}

	async getSuperheroById(id: string) {
		const superhero = await this.prisma.superhero.findUnique({
			where: { id },
		});
		if (!superhero) throw new NotFoundException('Superhero not found!');
		return superhero;
	}

	async createSuperhero(dto: CreateSuperheroDto) {
		try {
			const hero = await this.prisma.superhero.create({
				data: dto,
			});
			return { id: hero.id };
		} catch (e) {
			if (e instanceof PrismaClientKnownRequestError && e.code === 'P2002') {
				throw new BadRequestException('Such a superhero already exists!');
			}
			throw e;
		}
	}

	async updateSuperhero(
		id: string,
		dto: Omit<UpdateHeroDto, 'filesToRemove'>,
		filesToRemove?: string[],
		newFiles?: Express.Multer.File[],
	) {
		const superhero = await this.prisma.superhero.findUnique({ where: { id } });
		if (!superhero) throw new NotFoundException('Superhero not found!');

		let images = superhero.images;

		if (newFiles && newFiles.length > 0) {
			images = [...images, ...this.filesService.getSavedFilesPaths(newFiles)];
		}

		if (filesToRemove && filesToRemove.length > 0) {
			this.filesService.deleteFiles(filesToRemove);

			images = images.filter((img) => !filesToRemove.includes(img));
		}

		return this.prisma.superhero.update({
			where: { id },
			data: {
				...dto,
				images,
			},
		});
	}

	async removeSuperhero(id: string) {
		const exists = await this.prisma.superhero.findUnique({ where: { id } });
		if (!exists) throw new NotFoundException('Superhero not found!');

		this.filesService.deleteFiles(exists.images);
		await this.prisma.superhero.delete({ where: { id } });
		return { message: `Superhero ${exists.nickname} was successfully deleted!` };
	}
}
