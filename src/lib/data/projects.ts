import Assets from './assets';
import { getSkills } from './skills';
import type { Project } from '../types';

export const items: Array<Project> = [
	{
		slug: 'digital-fridge',
		color: '#5e95e3',
		description:
			'This project was my first experience building a full-stack application from scratch. I stepped out of my comfort zone and worked with MongoDB, Express.js, React, Node.js, and Tailwind—technologies I had to (re)learn along the way. Even though I wasn’t passionate about the "digital fridge" concept itself, this project pushed me to develop technical skills, understand team collaboration in depth, and explore user-focused design. I contributed to the entire stack, designed a clean interface, and built functionality to help users track what’s in their fridge and reduce waste. I also learned how to organize team work, communicate progress, and support others. I frequently helped my teammates work through both frontend and backend blockers, and adapted to changes in requirements mid-project by making major updates to our backend. This experience helped me realize how important it is to build projects that reflect personal values and meaning. I now better understand what psychological safety means in practice—especially how shared respect, clarity in delegation, and team alignment can make or break a technical project.',
		shortDescription:
			'A MERN-stack fridge management app built in a team setting, focused on learning full-stack development and exploring team dynamics.',
		links: [{ to: 'https://github.com/ryancho7/Digital-Fridge', label: 'GitHub' }],
		logo: Assets.ReactJs,
		name: 'Digital Fridge',
		period: {
			from: new Date('2025-03-30'),
			to: new Date('2025-04-29')
		},
		skills: getSkills('js', 'reactjs', 'mongodb', 'nodejs', 'expressjs', 'tailwind'),
		type: 'Team Project',
		screenshots: [
			{ src: '/logos/screenshot-fridge-login.png', label: 'Login Page' },
			{ src: '/logos/screenshot-fridge-dashboard.png', label: 'User Dashboard' },
			{ src: '/logos/screenshot-fridge-add.png', label: 'Add Item Modal' },
			{ src: '/logos/screenshot-fridge-current.png', label: 'Current Fridge View' }
		]
	},
	{
		slug: 'transit-kiosk',
		color: '#3A7CA5',
		name: 'Interactive Transit Kiosk',
		description:
			'This project meant a lot to me. I wanted to create something that reflected my values and had real-world impact—so I focused on improving Seattle’s public transportation experience. Unlike my first project, this one didn’t require any coding. Instead, I worked entirely in Figma to design a kiosk system that would help people—especially those without reliable phone access—navigate public transit more easily. I created detailed maps, signage systems, and route visualizations to show alternate travel options, transit delays, and detours. I spent hours mapping Seattle’s streets, designing UI layouts, and making sure everything was both clear and accessible. I also proposed the project concept, helped organize responsibilities, and collaborated closely with a teammate on the Figma design. The rest of the team contributed to motion graphics and presentation slides. This project let me lean into user-centered design and taught me how psychological safety and good collaboration lead to stronger outcomes.',
		shortDescription:
			'A Figma-based design project for an interactive kiosk system that improves public transit access in Seattle through clear maps, signage, and alternate travel route options.',
		logo: Assets.Figma,
		period: {
			from: new Date('2025-04-31'),
			to: new Date('2025-05-31')
		},
		links: [
			{ to: 'https://www.figma.com/design/kl4mLnM0su4Ec0V31DSfj9/INFO-442-Project-2?node-id=0-1&t=bC9FzjENomHhCUbq-1', label: 'Figma Design' },
			{ to: 'https://youtu.be/epG7aVKWHHI', label: 'Motion Demo Video' },
			{ to: 'https://www.canva.com/design/DAGoSyPc0TQ/w6DSiVEbdokrYI5rzo4Fig/edit?utm_content=DAGoSyPc0TQ&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton', label: 'Slides' }
		],
		skills: getSkills('figma'),
		type: 'Team Project',
		screenshots: [
			{ src: '/logos/screenshot-kiosk-map.png', label: 'Transit Map' },
			{ src: '/logos/screenshot-kiosk-signage.png', label: 'Signage & Alerts' },
			{ src: '/logos/screenshot-kiosk-routes.png', label: 'Bus Route View' },
			{ src: '/logos/screenshot-kiosk-options.png', label: 'Alternate Travel Options' }
		]
	}
];

export const title = 'Projects';
