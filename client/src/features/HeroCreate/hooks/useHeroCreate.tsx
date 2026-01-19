import { useNavigate } from 'react-router';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { CreateHeroFormChange, CreateHeroFormData } from '../model/types/create';
import { useCreateHeroMutation } from '../api/hero';
import { HeroCreateForm, heroCreateSchema } from '../model/types/schema';

import { showToast } from '@/shared/lib/toast';
import { validateImages } from '@/shared/utilities';

export function useHeroCreate() {
	const navigate = useNavigate();
	const {
		register,
		handleSubmit,
		watch,
		setValue,
		formState: { errors },
	} = useForm<HeroCreateForm>({
		resolver: zodResolver(heroCreateSchema),
		defaultValues: {
			nickname: '',
			realName: '',
			catchPhrase: '',
			originDescription: '',
			superpowers: [],
		},
		mode: 'onChange',
	});

	const [fileError, setFileError] = useState<string | null>(null);
	const [formData, setFormData] = useState<CreateHeroFormData>({
		images: [],
	});

	const handleChange: CreateHeroFormChange = (field, value) => {
		if (field === 'images') {
			const error = validateImages(value);
			setFileError(error);
			if (!error) {
				setFormData((prev) => ({ ...prev, images: value }));
			}
		} else {
			setFormData((prev) => ({ ...prev, [field]: value }));
		}
	};

	const [createHero] = useCreateHeroMutation();

	const onSubmit = async (data: HeroCreateForm) => {
		const error = validateImages(formData.images);
		if (error) {
			setFileError(error);
			return;
		}

		if (formData.images.length === 0) {
			setFileError('Add at least one photo');
			return;
		}

		const toastId = showToast.loading('Saving hero...');

		const fd = new FormData();
		fd.append('nickname', data.nickname);
		fd.append('realName', data.realName);
		fd.append('catchPhrase', data.catchPhrase);
		fd.append('originDescription', data.originDescription);
		data.superpowers.forEach((sp) => fd.append('superpowers', sp));
		formData.images.forEach((img) => fd.append('images', img));

		try {
			const hero = await createHero(fd).unwrap();
			showToast.updateSuccess(toastId, 'Success!');
			navigate(`/hero/${hero.id}`);
		} catch (e) {
			console.log(e);
			showToast.updateError(toastId, 'Error!');
		}
	};

	return {
		formData,
		handleChange,
		handleSubmit,
		watch,
		setValue,
		onSubmit,
		register,
		navigate,
		fileError,
		errors,
	};
}
