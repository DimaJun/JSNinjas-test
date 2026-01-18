import { ChangeEvent } from 'react';

export function handleFileSelect(
	e: ChangeEvent<HTMLInputElement>,
	currentFiles: File[],
	onChange: (files: File[]) => void
) {
	const files = e.target.files;
	if (!files) return;

	const newFiles = Array.from(files);

	onChange([...currentFiles, ...newFiles]);

	e.target.value = '';
}
