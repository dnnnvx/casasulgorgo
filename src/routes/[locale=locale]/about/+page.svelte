<script lang="ts">
	import Seo from '#lib/components/site/Seo.svelte'
	import Button from '#lib/components/ui/Button.svelte'
	import Card from '#lib/components/ui/Card.svelte'
	import Icon from '#lib/components/ui/Icon.svelte'
	import SectionHeading from '#lib/components/ui/SectionHeading.svelte'
	import { getI18n } from '#lib/i18n/index.ts'
	import type { IconName } from '#lib/icons.ts'

	const i18n = getI18n()

	let a = $derived(i18n.m.about)

	const goalIcons: IconName[] = ['shield', 'trash', 'seedling', 'school', 'community', 'handshake']
	const projectIcons: IconName[] = ['recycle', 'trees', 'paw', 'binoculars', 'route', 'users']
	const joinIcons: IconName[] = ['community', 'school', 'handshake', 'users']
</script>

<Seo title={a.title} description={a.lead} />

<div class="wrap page-head">
	<h1>{a.title}</h1>
	<p>{a.lead}</p>
</div>

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
					<span class="icon"><Icon name={goalIcons[i] ?? 'leaf'} /></span>
					<strong>{goal.title}</strong>
					<span class="muted">{goal.text}</span>
				</Card>
			</li>
		{/each}
	</ul>
</section>

<section class="wrap section" aria-labelledby="projects">
	<SectionHeading id="projects" title={a.projectsTitle} lead={a.projectsLead} />
	<ul class="list">
		{#each a.projects as project, i (project.title)}
			<li>
				<span class="icon"><Icon name={projectIcons[i] ?? 'leaf'} /></span>
				<span>
					<strong>{project.title}</strong>
					<span class="muted">{project.text}</span>
				</span>
			</li>
		{/each}
	</ul>
</section>

<section class="wrap section join" aria-labelledby="join">
	<Card tone="primary">
		<SectionHeading id="join" title={a.joinTitle} lead={a.joinLead} />
		<ul class="rules">
			{#each a.join as item, i (item.title)}
				<li>
					<span class="rule-icon"><Icon name={joinIcons[i] ?? 'leaf'} /></span>
					<strong>{item.title}</strong>
					<span class="rule-text">{item.text}</span>
				</li>
			{/each}
		</ul>
		<p class="actions">
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

	.list {
		display: grid;
		grid-template-columns: repeat(2, minmax(0, 1fr));
		column-gap: var(--space-fluid-m);
		margin: 0;
		padding: 0;
		list-style: none;
	}

	@media (max-width: 52rem) {
		.list {
			grid-template-columns: 1fr;
		}
	}

	.list li {
		display: flex;
		align-items: flex-start;
		gap: var(--space-3);
		padding-block: var(--space-3);
		border-top: 1px solid var(--line);
	}

	.list li > span:last-child {
		display: flex;
		flex-direction: column;
	}

	.icon {
		display: inline-flex;
		flex: none;
		align-self: flex-start;
		padding: var(--space-2);
		border-radius: var(--radius-s);
		background: var(--primary-soft);
		color: var(--primary-ink);
	}

	strong {
		font-weight: 600;
	}

	.muted {
		color: var(--muted);
		font-size: var(--text-s);
	}

	.rules {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(14rem, 1fr));
		gap: var(--space-4) var(--space-5);
		margin: 0;
		padding: 0;
		list-style: none;
	}

	.rules li {
		display: grid;
		grid-template-columns: auto 1fr;
		column-gap: var(--space-3);
	}

	.rule-icon {
		grid-row: span 2;
		display: inline-flex;
		align-self: start;
		padding: var(--space-2);
		border-radius: var(--radius-s);
		background: rgb(255 255 255 / 0.4);
	}

	.rule-text {
		font-size: var(--text-s);
		opacity: 0.8;
	}

	.actions {
		display: flex;
		flex-wrap: wrap;
		gap: var(--space-3);
		margin-top: var(--space-4);
	}

	.join :global(.lead) {
		color: inherit;
		opacity: 0.8;
	}
</style>
