<script lang="ts">
	import Seo from '#lib/components/site/Seo.svelte'
	import Button from '#lib/components/ui/Button.svelte'
	import Card from '#lib/components/ui/Card.svelte'
	import Icon from '#lib/components/ui/Icon.svelte'
	import { limits, roles } from '#lib/contact.ts'
	import { getI18n } from '#lib/i18n/index.ts'
	import { enhance } from '$app/forms'
	import type { PageProps } from './$types'

	let { form }: PageProps = $props()
	const i18n = getI18n()

	let c = $derived(i18n.m.contact)
	let values = $derived(form && 'values' in form ? form.values : undefined)
	let errors = $derived(form && 'errors' in form ? form.errors : undefined)
	let problem = $derived(form && 'problem' in form ? form.problem : undefined)
	let sending = $state(false)
</script>

<Seo title={c.title} description={c.lead} />

<div class="wrap page-head">
	<h1>{c.title}</h1>
	<p>{c.lead}</p>
</div>

<section class="wrap section">
	{#if form && 'sent' in form}
		<Card tone="primary">
			<h2 class="sent"><Icon name="check" /> {c.sent.title}</h2>
			<p>{c.sent.text}</p>
			<p class="actions">
				<Button href={i18n.path('/nature')} variant="dark" iconAfter="arrowRight">
					{i18n.m.home.explore}
				</Button>
				<Button href={i18n.path('/contact')} variant="outline">{c.sent.again}</Button>
			</p>
		</Card>
	{:else}
		<Card>
			<form
				method="POST"
				novalidate
				use:enhance={() => {
					sending = true
					return async ({ update }) => {
						await update()
						sending = false
					}
				}}
			>
				<fieldset>
					<legend>{c.role}</legend>
					<div class="roles">
						{#each roles as role (role)}
							<label class="role">
								<input
									type="radio"
									name="role"
									value={role}
									checked={(values?.role ?? 'other') === role}
								>
								<span>{c.roles[role]}</span>
							</label>
						{/each}
					</div>
				</fieldset>

				<div class="pair">
					<label class="field">
						<span class="label">{c.name}</span>
						<input
							name="name"
							autocomplete="name"
							required
							maxlength={limits.name}
							value={values?.name ?? ''}
							aria-invalid={errors?.name || undefined}
						>
						{#if errors?.name}
							<span class="error">{c.errors.name}</span>
						{/if}
					</label>
					<label class="field">
						<span class="label">{c.email}</span>
						<input
							name="email"
							type="email"
							autocomplete="email"
							required
							maxlength={limits.email}
							value={values?.email ?? ''}
							aria-invalid={errors?.email || undefined}
						>
						{#if errors?.email}
							<span class="error">{c.errors.email}</span>
						{/if}
					</label>
				</div>

				<label class="field">
					<span class="label">{c.message}</span>
					<textarea
						name="message"
						rows="7"
						required
						minlength={limits.message.min}
						maxlength={limits.message.max}
						placeholder={c.messageHint}
						aria-invalid={errors?.message || undefined}
					>{values?.message ?? ''}</textarea>
					{#if errors?.message}
						<span class="error">{c.errors.message}</span>
					{/if}
				</label>

				<!-- Hidden from people, tempting for bots. -->
				<label class="trap" aria-hidden="true">
					Website <input name="website" tabindex="-1" autocomplete="off">
				</label>

				{#if problem === 'throttled' || problem === 'failed'}
					<p class="error" role="alert">{c.errors[problem]}</p>
				{/if}

				<div class="submit">
					<Button type="submit" icon="mail">{sending ? c.sending : c.send}</Button>
					<p class="privacy">{c.privacy}</p>
				</div>
			</form>
		</Card>
	{/if}
</section>

<style>
	form {
		display: flex;
		flex-direction: column;
		gap: var(--space-5);
	}

	input,
	textarea {
		width: 100%;
		padding: var(--space-3);
		border: var(--border-width) solid var(--border);
		border-radius: var(--radius-s);
		background: var(--bg);
		color: var(--ink);
		font: inherit;
	}

	textarea {
		resize: vertical;
	}

	input:focus-visible,
	textarea:focus-visible {
		border-color: var(--primary);
		outline: none;
	}

	[aria-invalid="true"] {
		border-color: var(--accent);
	}

	fieldset {
		margin: 0;
		padding: 0;
		border: 0;
	}

	legend,
	.label {
		margin-bottom: var(--space-2);
		font-size: var(--text-s);
		font-weight: 600;
	}

	.roles {
		display: flex;
		flex-wrap: wrap;
		gap: var(--space-2);
	}

	/* The radio sits invisibly over its pill, so it never sticks out of the page. */
	.role {
		position: relative;
	}

	.role input {
		position: absolute;
		inset: 0;
		width: 100%;
		height: 100%;
		margin: 0;
		padding: 0;
		opacity: 0;
		cursor: pointer;
	}

	.role span {
		display: inline-block;
		padding: var(--space-2) var(--space-4);
		border: var(--border-width) solid var(--border);
		border-radius: var(--radius-pill);
		font-size: var(--text-s);
		cursor: pointer;
	}

	.role input:checked + span {
		border-color: var(--primary);
		background: var(--primary);
		color: var(--on-primary);
	}

	.role input:focus-visible + span {
		outline: 2px solid var(--primary);
		outline-offset: 2px;
	}

	.pair {
		display: grid;
		grid-template-columns: repeat(2, minmax(0, 1fr));
		gap: var(--space-5);
	}

	@media (max-width: 40rem) {
		.pair {
			grid-template-columns: 1fr;
		}
	}

	.field {
		display: flex;
		flex-direction: column;
	}

	.error {
		margin-top: var(--space-1);
		color: var(--accent);
		font-size: var(--text-s);
	}

	.trap {
		position: absolute;
		width: 1px;
		height: 1px;
		overflow: hidden;
		clip-path: inset(50%);
	}

	.submit {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		gap: var(--space-3) var(--space-5);
	}

	.privacy {
		display: flex;
		flex: 1 1 16rem;
		align-items: flex-start;
		gap: var(--space-2);
		color: var(--muted);
		font-size: var(--text-s);
	}

	.sent {
		display: flex;
		align-items: center;
		gap: var(--space-2);
		font-size: var(--text-xl);
	}

	.actions {
		display: flex;
		flex-wrap: wrap;
		gap: var(--space-3);
		margin-top: var(--space-3);
	}
</style>
