import {
	Body,
	Controller,
	Delete,
	Get,
	HttpCode,
	HttpStatus,
	Param,
	Patch,
	Post,
	Query,
	UploadedFiles,
	UseInterceptors,
} from '@nestjs/common';
import { SuperheroService } from './superhero.service';
import { FileUploadService } from '../file-upload/file-upload.service';
import { FilesInterceptor } from '@nestjs/platform-express';
import { multerConfig } from '../configs/multer/multer.config';
import { CreateSuperheroDto } from './dtos/create-superhero.dto';
import { UpdateHeroDto } from './dtos/update-hero.dto';

@Controller('superhero')
export class SuperheroController {
	constructor(
		private readonly superheroService: SuperheroService,
		private readonly filesService: FileUploadService,
	) {}

	@Get('/all')
	@HttpCode(HttpStatus.OK)
	async getAllSuperheroes(@Query('page') page?: string, @Query('limit') limit?: string) {
		const pageNumber = Number(page) || 1;
		const limitNumber = Number(limit) || 5;
		return this.superheroService.getAllSuperheroes(pageNumber, limitNumber);
	}

	@Get('/:id')
	@HttpCode(HttpStatus.OK)
	async getSuperheroById(@Param('id') id: string) {
		return this.superheroService.getSuperheroById(id);
	}

	@Post('/create')
	@UseInterceptors(FilesInterceptor('images', 6, multerConfig))
	@HttpCode(HttpStatus.OK)
	async createSuperhero(@Body() body: CreateSuperheroDto, @UploadedFiles() images: Express.Multer.File[]) {
		const imagesPaths = this.filesService.getSavedFilesPaths(images);

		const dto: CreateSuperheroDto = {
			...body,
			images: imagesPaths,
		};

		return this.superheroService.createSuperhero(dto);
	}

	@Patch('/update/:id')
	@UseInterceptors(FilesInterceptor('images', 6, multerConfig))
	@HttpCode(HttpStatus.OK)
	async updateSuperhero(
		@Param('id') id: string,
		@Body() body: UpdateHeroDto,
		@UploadedFiles() files?: Express.Multer.File[],
	) {
		const { filesToRemove, ...dto } = body;
		return this.superheroService.updateSuperhero(id, dto, filesToRemove, files);
	}

	@Delete('/remove/:id')
	@HttpCode(HttpStatus.OK)
	async removeSuperhero(@Param('id') id: string) {
		return this.superheroService.removeSuperhero(id);
	}
}
