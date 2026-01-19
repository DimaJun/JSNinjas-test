import { useNavigate } from 'react-router';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { EditHeroFormChange, EditHeroFormData } from '../model/types/edit';
import { useUpdateHeroMutation } from '../api/hero';
import { HeroEditForm, heroEditSchema } from '../model/types/schema';

import { Hero } from '@/entities/Hero';
import { showToast } from '@/shared/lib/toast';
import { validateImages } from '@/shared/utilities';

export function useHeroEdit(hero: Hero) {
	const navigate = useNavigate();
	const {
		register,
		watch,
		setValue,
		handleSubmit,
		formState: { errors },
	} = useForm<HeroEditForm>({
		resolver: zodResolver(heroEditSchema),
		defaultValues: {
			nickname: hero.nickname || '',
			realName: hero.realName || '',
			catchPhrase: hero.catchPhrase || '',
			originDescription: hero.originDescription || '',
			superpowers: hero.superpowers || [],
		},
		mode: 'onChange',
	});

	const [fileError, setFileError] = useState('');
	const [formData, setFormData] = useState<EditHeroFormData>({
		images: [],
		currentImages: hero.images || [],
		imagesToRemove: [],
	});

	const [updateHero] = useUpdateHeroMutation();

	const handleChange: EditHeroFormChange = (field, value) => {
		if (field === 'images') {
			const error = validateImages(value as File[]);
			setFileError(error);
			if (!error) {
				setFormData((prev) => ({ ...prev, images: value as File[] }));
			}
		} else {
			setFormData((prev) => ({ ...prev, [field]: value }));
		}
	};

	const onSubmit = async (data: HeroEditForm) => {
		if (fileError) return;
		const toastId = showToast.loading('Updating...');

		const fd = new FormData();
		fd.append('realName', data.realName);
		fd.append('originDescription', data.originDescription);
		fd.append('catchPhrase', data.catchPhrase);
		data.superpowers.forEach((sp) => fd.append('superpowers', sp));
		formData.images.forEach((img) => fd.append('images', img));
		formData.imagesToRemove.forEach((img) => fd.append('filesToRemove', img));

		try {
			const updated = await updateHero({ id: hero.id, formData: fd }).unwrap();
			showToast.updateSuccess(toastId, 'Success!');
			navigate(`/hero/${updated.id}`);
		} catch (e) {
			showToast.updateError(toastId, 'Error!');
			console.log(e);
		}
	};

	return {
		navigate,
		register,
		watch,
		errors,
		setValue,
		formData,
		onSubmit,
		handleSubmit,
		handleChange,
		fileError,
		setFileError,
	};
}
