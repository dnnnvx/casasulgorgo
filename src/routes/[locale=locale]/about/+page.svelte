<script lang="ts">
	import type { IconName } from '#lib/assets/icons.ts'
	import Seo from '#lib/components/site/Seo.svelte'
	import Button from '#lib/components/ui/Button.svelte'
	import Card from '#lib/components/ui/Card.svelte'
	import IconBadge from '#lib/components/ui/IconBadge.svelte'
	import IconItem from '#lib/components/ui/IconItem.svelte'
	import IconList from '#lib/components/ui/IconList.svelte'
	import PageHeader from '#lib/components/ui/PageHeader.svelte'
	import SectionHeading from '#lib/components/ui/SectionHeading.svelte'
	import { getI18n } from '#lib/i18n/index.ts'

	const i18n = getI18n()

	let a = $derived(i18n.m.about)

	const goalIcons: IconName[] = ['shield', 'trash', 'seedling', 'school', 'community', 'handshake']
	const projectIcons: IconName[] = ['recycle', 'trees', 'paw', 'binoculars', 'route', 'users']
	const joinIcons: IconName[] = ['community', 'school', 'handshake', 'users']
</script>

<Seo title={a.title} description={a.lead} />

<PageHeader title={a.title} lead={a.lead} />

<section class="wrap section" aria-labelledby="who">
	<SectionHeading id="who" title={a.whoTitle} />
	<div class="prose">
		{#each a.who as paragraph (paragraph)}
			<p>{paragraph}</p>
		{/each}
	</div>
</section>

<section class="wrap section" aria-labelledby="goals">
	<SectionHeading id="goals" title={a.goalsTitle} lead={a.goalsLead} />
	<ul class="goals">
		{#each a.goals as goal, i (goal.title)}
			<li>
				<Card tone="soft">
					<IconBadge name={goalIcons[i] ?? 'leaf'} />
					<strong>{goal.title}</strong>
					<span class="muted">{goal.text}</span>
				</Card>
			</li>
		{/each}
	</ul>
</section>

<section class="wrap section" aria-labelledby="projects">
	<SectionHeading id="projects" title={a.projectsTitle} lead={a.projectsLead} />
	<IconList columns={2}>
		{#each a.projects as project, i (project.title)}
			<IconItem icon={projectIcons[i] ?? 'leaf'} title={project.title} text={project.text} />
		{/each}
	</IconList>
</section>

<section class="wrap section join" aria-labelledby="join">
	<Card tone="primary">
		<SectionHeading id="join" title={a.joinTitle} lead={a.joinLead} />
		<IconList layout="grid">
			{#each a.join as item, i (item.title)}
				<IconItem icon={joinIcons[i] ?? 'leaf'} tone="glass" title={item.title} text={item.text} />
			{/each}
		</IconList>
		<p class="cluster actions">
			<Button href={i18n.path('/contact')} variant="dark" icon="mail">{a.contact}</Button>
			<Button href={i18n.path('/visit')} variant="outline" iconAfter="arrowRight">
				{i18n.m.home.plan}
			</Button>
		</p>
	</Card>
</section>

<style>
	.prose {
		display: flex;
		flex-direction: column;
		gap: var(--space-3);
		max-width: 44rem;
	}

	.goals {
		display: grid;
		grid-template-columns: repeat(3, minmax(0, 1fr));
		gap: var(--stack-gap) var(--card-gap);
		margin: 0;
		padding: 0;
		list-style: none;
	}

	@media (max-width: 60rem) {
		.goals {
			grid-template-columns: repeat(2, minmax(0, 1fr));
		}
	}

	@media (max-width: 40rem) {
		.goals {
			grid-template-columns: 1fr;
		}
	}

	.goals li {
		display: flex;
	}

	.goals li > :global(*) {
		flex: 1;
	}

	strong {
		font-weight: 600;
	}

	.muted {
		color: var(--muted);
		font-size: var(--text-s);
	}

	.actions {
		margin-top: var(--space-4);
	}

	.join :global(.lead) {
		color: inherit;
		opacity: 0.8;
	}
</style>
