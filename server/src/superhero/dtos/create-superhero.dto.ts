export class CreateSuperheroDto {
	readonly nickname: string;
	readonly realName: string;
	readonly originDescription: string;
	readonly catchPhrase: string;
	readonly superpowers: string[];
	readonly images: string[];
}
