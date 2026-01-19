export function validateImages(files: File[]): string | null {
	for (const file of files) {
		if (!['image/jpeg', 'image/png', 'image/webp'].includes(file.type)) {
			return 'Only JPG, JPEG, PNG, WEBP allowed.';
		}
		if (file.size > 5 * 1024 * 1024) {
			return 'File size cannot exceed 5MB.';
		}
	}
	return null;
}
