<script lang="ts">
	import { items, title } from '@data/projects';
	import * as skills from '@data/skills';
	import type { Project, Skill } from '$lib/types';

	import Chip from '$lib/components/Chip/Chip.svelte';
	import ProjectCard from '$lib/components/ProjectCard/ProjectCard.svelte';
	import UIcon from '$lib/components/Icon/UIcon.svelte';

	interface SkillFilter extends Skill {
		isSelected?: boolean;
	}

	let filters: Array<SkillFilter> = skills.items.filter((it) =>
		items.some((project) => project.skills.some((skill) => skill.slug === it.slug))
	);

	let displayed: Array<Project> = [];

	const isSelected = (slug: string): boolean =>
		filters.some((item) => item.slug === slug && item.isSelected);

	const onSelected = (slug: string) => {
		filters = filters.map((tech) => {
			if (tech.slug === slug) {
				tech.isSelected = !isSelected(slug);
			}
			return tech;
		});
	};

	$: {
		displayed = items.filter((project) => {
			const isFiltered =
				filters.every((item) => !item.isSelected) ||
				project.skills.some((tech) =>
					filters.some((filter) => filter.isSelected && filter.slug === tech.slug)
				);
			return isFiltered;
		});
	}
</script>

<section class="projects-container">
	<h1 class="projects-title">{title}</h1>

	<div class="projects-filters">
		{#each filters as tech}
			<Chip active={tech.isSelected} classes="text-0.8em" on:click={() => onSelected(tech.slug)}>
				{tech.name}
			</Chip>
		{/each}
	</div>

	{#if displayed.length === 0}
		<div class="empty-state">
			<UIcon icon="i-carbon-cube" classes="text-3.5em" />
			<p class="font-300">Could not find anything...</p>
		</div>
	{:else}
		<div class="projects-list">
			{#each displayed as project}
				<ProjectCard {project} />
			{/each}
		</div>
	{/if}
</section>

<style lang="scss">
	.projects-container {
		padding: 2rem;
		max-width: 1200px;
		margin: 0 auto;
	}

	.projects-title {
		font-size: 3rem;
		text-align: center;
		margin-bottom: 2rem;
	}

	.projects-filters {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		gap: 0.5rem;
		margin-bottom: 3rem;
	}

	.projects-list {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
		gap: 2rem;
		justify-content: center;
	}

	.empty-state {
		padding: 5rem 2rem;
		text-align: center;
		color: var(--accent-text);
	}
</style>
