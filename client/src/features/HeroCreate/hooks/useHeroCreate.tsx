import { useNavigate } from 'react-router';
import { FormEvent, useState } from 'react';

import { CreateHeroFormChange, CreateHeroFormData } from '../model/types/create';
import { useCreateHeroMutation } from '../api/hero';

export function useHeroCreate() {
	const navigate = useNavigate();
	const [formData, setFormData] = useState<CreateHeroFormData>({
		nickname: '',
		realName: '',
		catchPhrase: '',
		originDescription: '',
		superpowers: [],
		images: [],
	});

	const handleChange: CreateHeroFormChange = (field, value) => {
		setFormData((prev) => ({ ...prev, [field]: value }));
	};

	const [createHero] = useCreateHeroMutation();

	const handleSubmit = async (e: FormEvent) => {
		e.preventDefault();

		const fd = new FormData();
		fd.append('nickname', formData.nickname);
		fd.append('realName', formData.realName);
		fd.append('catchPhrase', formData.catchPhrase);
		fd.append('originDescription', formData.originDescription);
		formData.superpowers.forEach((sp) => fd.append('superpowers', sp));
		formData.images.forEach((img) => fd.append('images', img));

		try {
			const hero = await createHero(fd).unwrap();
			navigate(`/hero/${hero.id}`);
		} catch (e) {
			console.log(e);
		}
	};

	return {
		formData,
		handleChange,
		handleSubmit,
		navigate,
	};
}
