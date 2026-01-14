import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import path from 'path';

async function bootstrap() {
	const app = await NestFactory.create<NestExpressApplication>(AppModule);
	app.enableCors({
		origin: 'http://localhost:3000',
	});
	app.useStaticAssets(path.join(__dirname, '..', '..', 'uploads'), {
		prefix: '/images/',
	});
	await app.listen(process.env.PORT ?? 8000);
}
bootstrap();
