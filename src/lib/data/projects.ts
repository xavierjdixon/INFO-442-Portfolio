import Assets from './assets';
import { getSkills } from './skills';
import type { Project } from '../types';

export const items: Array<Project> = [
	{
		slug: 'slick-portfolio-angular',
		color: '#5e95e3',
		description:
		'Digital Fridge is a full-stack web application designed to help users manage their food inventory and reduce waste. Built in a team setting for INFO 442, the app allows users to add, categorize, and track food items in their virtual fridge. Our focus was not only on technical implementation using MongoDB, Express.js, Node.js, and React, but also on building a psychologically safe and collaborative team environment throughout the project lifecycle.',
		shortDescription:
		'A full-stack web app for managing fridge inventory and reducing food waste, built collaboratively with a focus on team dynamics and value-aligned development.',
		links: [{ to: 'https://github.com/ryancho7/Digital-Fridge', label: 'GitHub' }],
		logo: Assets.ReactJs,
		name: 'Digit Fridge',
		period: {
			from: new Date('2025-04-16'),
			to: new Date('2025-04-30')
		},
		skills: getSkills('js', 'reactjs', 'mongodb', 'nodejs', 'expressjs', 'tailwind'),
		type: 'Website Template'
	},
	{
		slug: 'slick-portfolio-svelte',
		color: '#ff3e00',
		description:
			'Coming Soon...',
		shortDescription:
			'Coming Soon...',
		links: [{ to: 'https://github.com/xavierjdixon', label: 'GitHub' }],
		logo: Assets.ReactJs,
		name: 'Coming Soon...',
		period: {
			from: new Date()
		},
		skills: getSkills(),
		type: 'Website Template',
		screenshots: [
			{
				label: 'screen 1',
				src: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZ3JhbW1pbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'
			},
			{
				label: '2',
				src: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZ3JhbW1pbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'
			},
			{
				label: '3',
				src: 'https://images.unsplash.com/photo-1537432376769-00f5c2f4c8d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHByb2dyYW1taW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
			},
			{
				label: '4',
				src: 'https://images.unsplash.com/photo-1542903660-eedba2cda473?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2dyYW1taW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
			},
			{
				label: '5',
				src: 'https://images.unsplash.com/photo-1619410283995-43d9134e7656?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHByb2dyYW1taW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
			},
			{
				label: '6',
				src: 'https://images.unsplash.com/photo-1585079542156-2755d9c8a094?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHByb2dyYW1taW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
			}
		]
	}
];

export const title = 'Projects';
