import { Platform } from '$lib/types';
import { getSkills } from './skills';

export const title = 'Home';

export const name = 'Xavier';

export const lastName = 'Dixon';

export const description =
	'I’m Xavier Dixon, a builder, collaborator, and thinker exploring how tech can be more human. In INFO 442, I worked on projects that centered psychological safety, value-aligned development, and critical self-awareness — challenging the norms of conventional software teams. My goal is to create work that reflects who I am and the world I want to help shape.';

export const links: Array<{ platform: Platform; link: string }> = [
	{ platform: Platform.GitHub, link: 'https://github.com/xavierjdixon' },
	{
		platform: Platform.Linkedin,
		link: 'https://www.linkedin.com/in/xavierdixon/'
	},
	{
		platform: Platform.Email,
		link: 'xavierdixon71@gmail.com'
	}
];

export const skills = getSkills('js', 'reactjs', 'mongodb', 'expressjs', 'nodejs', 'figma');
