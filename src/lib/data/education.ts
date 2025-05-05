import Assets from './assets';
import type { Education } from '../types';

export const items: Array<Education> = [
	{
		degree: 'Bachelor degree of Informatics',
		description: '',
		location: 'Seattle, Washington',
		logo: Assets.Unknown,
		name: '',
		organization: 'ISTIC',
		period: { from: new Date(2020, 0, 1), to: new Date(2022, 5, 1) },
		shortDescription: '',
		slug: 'dummy-education-item',
		subjects: ['OOP', 'Algorithm', 'Algebra', 'Python', 'C++', 'Java', 'English']
	}
];

export const title = 'Education';
