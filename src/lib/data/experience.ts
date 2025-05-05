import Assets from './assets';
import { getSkills } from './skills';
import { ContractType, type Experience } from '../types';

export const items: Array<Experience> = [
	{
		slug: 'Internship',
		company: 'Atlassian',
		description: 'Fullstack Developer',
		contract: ContractType.Internship,
		type: 'Software Development',
		location: 'Seattle',
		period: {from: new Date('2025-06-16'),
			to: new Date('2025-09-12')},
		skills: getSkills(),
		name: 'Software Engineer',
		color: 'blue',
		links: [],
		logo: Assets.Unknown,
		shortDescription: 'Creating awesome tools for GitBucket Team'
	}
];

export const title = 'Experience';
