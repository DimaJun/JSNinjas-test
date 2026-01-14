import { Injectable } from '@nestjs/common';
import path from 'path';
import fs from 'fs';

@Injectable()
export class FileUploadService {
	private readonly uploadPath = path.join(__dirname, '..', '..', '..', 'uploads');

	constructor() {
		if(!fs.existsSync(this.uploadPath)) {
			fs.mkdirSync(this.uploadPath, { recursive: true })
		}
	}

	getAbsolutePath(relativePath: string): string {
		return path.join(this.uploadPath, relativePath);
	}

	deleteFiles(filenames: string[]) {
		for(const filename of filenames) {
			const fullPath = this.getAbsolutePath(filename);
			if(fs.existsSync(fullPath)) {
				fs.unlinkSync(fullPath)
			}
		}
		return {message: 'Success!'};
	}

	getSavedFilesPaths(files: Express.Multer.File[]): string[] {
		return files.map(f => f.filename);
	}
}
