import { useNavigate } from 'react-router';
import { FormEvent, useState } from 'react';

import { EditHeroFormChange, EditHeroFormData } from '../model/types/edit';
import { useUpdateHeroMutation } from '../api/hero';

import { Hero } from '@/entities/Hero';

export function useHeroEdit(hero: Hero) {
	const navigate = useNavigate();
	const [formData, setFormData] = useState<EditHeroFormData>({
		nickname: hero.nickname || '',
		realName: hero.realName || '',
		originDescription: hero.originDescription || '',
		catchPhrase: hero.catchPhrase || '',
		superpowers: hero.superpowers || [],
		images: [],
		currentImages: hero.images || [],
		imagesToRemove: [],
	});

	const [updateHero] = useUpdateHeroMutation();

	const handleChange: EditHeroFormChange = (field, value) => {
		setFormData((prev) => ({ ...prev, [field]: value }));
	};

	const handleSubmit = async (e: FormEvent) => {
		e.preventDefault();

		const fd = new FormData();
		fd.append('realName', formData.realName);
		fd.append('originDescription', formData.originDescription);
		fd.append('catchPhrase', formData.catchPhrase);
		formData.superpowers.forEach((sp) => fd.append('superpowers', sp));
		formData.images.forEach((img) => fd.append('images', img));
		formData.imagesToRemove.forEach((img) => fd.append('filesToRemove', img));

		try {
			const updated = await updateHero({ id: hero.id, formData: fd }).unwrap();

			navigate(`/hero/${updated.id}`);
		} catch (e) {
			console.log(e);
		}
	};
	
	return {
		navigate,
		formData,
		handleSubmit,
		handleChange,
	}
}