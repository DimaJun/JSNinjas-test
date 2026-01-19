import {
	ArrayNotEmpty,
	IsArray,
	IsNotEmpty,
	IsOptional,
	IsString,
	MaxLength,
	MinLength,
} from 'class-validator';
import { Transform } from 'class-transformer';

export class CreateSuperheroDto {
	@IsString()
	@IsNotEmpty({ message: 'Nickname is required' })
	@MinLength(2, { message: 'Nicknames must be between 2 and 40 characters long' })
	@MaxLength(40, { message: 'Nicknames must be between 2 and 40 characters long' })
	nickname: string;

	@IsString()
	@IsNotEmpty({ message: 'Real name is required' })
	@MinLength(2, { message: 'Real name must be between 2 and 40 characters long.' })
	@MaxLength(40, { message: 'Real name must be between 2 and 40 characters long.' })
	realName: string;

	@IsString()
	@IsNotEmpty({ message: 'Origin description is required' })
	@MaxLength(600, {
		message: 'Origin description must be at most 600 characters long',
	})
	originDescription: string;

	@IsString()
	@IsNotEmpty({ message: 'Catch phrase is required' })
	@MaxLength(200, {
		message: 'Catch phrase must be at most 200 characters long',
	})
	catchPhrase: string;

	@Transform(({ value }) => (Array.isArray(value) ? value : [value]))
	@IsArray({ message: 'Superpowers must be an array' })
	@ArrayNotEmpty({ message: 'Superpowers array cannot be empty' })
	@IsString({ each: true, message: 'Each superpower must be a string' })
	superpowers: string[];

	@IsOptional()
	images?: string[];
}
