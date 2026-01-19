import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import path from 'path';
import 'dotenv/config';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
	const app = await NestFactory.create<NestExpressApplication>(AppModule);
	app.enableCors({
		origin: 'http://localhost:3000',
	});
	app.useStaticAssets(path.join(__dirname, '..', '..', 'uploads'), {
		prefix: '/images/',
	});
	app.useGlobalPipes(
		new ValidationPipe({
			whitelist: true,
			forbidNonWhitelisted: false,
			transform: true,
		}),
	);
	await app.listen(process.env.PORT ?? 8000);
}
bootstrap();
