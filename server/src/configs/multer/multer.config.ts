import { diskStorage } from 'multer';
import path, { extname } from 'path';
import type { Request } from 'express';

export const multerConfig = {
	storage: diskStorage({
		destination: path.join(__dirname, '..', '..', '..', '..', 'uploads'),
		filename(req: Request, file: Express.Multer.File, cb) {
			const uniqueName = crypto.randomUUID() + extname(file.originalname);
			cb(null, uniqueName);
		},
	}),
	limits: {
		fileSize: 5 * 1024 * 1024,
	},
	fileFilter: (req: Request, file: Express.Multer.File, cb) => {
		if (!file.mimetype.match(/\/(jpeg|jpg|png|webp)$/)) {
			cb(new Error('You can only upload photos!'), false);
		}
		cb(null, true);
	},
};
