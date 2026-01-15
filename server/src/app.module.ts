import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { FileUploadModule } from './file-upload/file-upload.module';
import { SuperheroModule } from './superhero/superhero.module';

@Module({
  imports: [PrismaModule, FileUploadModule, SuperheroModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
