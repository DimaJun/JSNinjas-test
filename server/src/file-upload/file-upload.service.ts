import { Injectable } from '@nestjs/common';
import path from 'path';
import fs from 'fs';

@Injectable()
export class FileUploadService {
	private readonly uploadPath = path.join(__dirname, '..', '..', '..', 'uploads');

	constructor() {
		if (!fs.existsSync(this.uploadPath)) {
			fs.mkdirSync(this.uploadPath, { recursive: true });
		}
	}

	getAbsolutePath(relativePath: string): string {
		return path.join(this.uploadPath, relativePath);
	}

	deleteFiles(filenames: string[]) {
		for (const filename of filenames) {
			if (!filename) continue;

			const safeName = path.basename(filename);
			const fullPath = this.getAbsolutePath(safeName);

			if (fs.existsSync(fullPath) && fs.lstatSync(fullPath).isFile()) {
				fs.unlinkSync(fullPath);
			}
		}
		return { message: 'Success!' };
	}

	getSavedFilesPaths(files: Express.Multer.File[]): string[] {
		return files.map((f) => f.filename);
	}
}
