<script lang="ts">
	import { onMount } from 'svelte'
	import type { IconName } from '#lib/assets/icons.ts'
	import Icon from '#lib/components/ui/Icon.svelte'
	import { getI18n } from '#lib/i18n/index.ts'

	type Mode = 'system' | 'light' | 'dark'
	const modes: { mode: Mode; icon: IconName }[] = [
		{ mode: 'system', icon: 'auto' },
		{ mode: 'light', icon: 'sun' },
		{ mode: 'dark', icon: 'moon' }
	]

	const i18n = getI18n()
	let current = $state<Mode>('system')

	// The saved choice is applied before paint by a script in app.html; this only reflects it.
	onMount(() => {
		const saved = document.documentElement.getAttribute('data-theme')
		current = saved === 'light' || saved === 'dark' ? saved : 'system'
	})

	const choose = (mode: Mode) => {
		current = mode
		const root = document.documentElement
		if (mode === 'system') {
			root.removeAttribute('data-theme')
			localStorage.removeItem('theme')
		} else {
			root.setAttribute('data-theme', mode)
			localStorage.setItem('theme', mode)
		}
	}
</script>

<fieldset>
	<legend class="visually-hidden">{i18n.m.nav.theme}</legend>
	{#each modes as { mode, icon } (mode)}
		<label title={i18n.m.themes[mode]}>
			<input
				class="visually-hidden"
				type="radio"
				name="theme"
				value={mode}
				checked={current === mode}
				onchange={() => choose(mode)}
			>
			<Icon name={icon} size={15} />
			<span class="visually-hidden">{i18n.m.themes[mode]}</span>
		</label>
	{/each}
</fieldset>

<style>
	fieldset {
		display: inline-flex;
		margin: 0;
		padding: 3px;
		border: 0;
		border-radius: var(--radius-pill);
		background: var(--chip);
	}

	label {
		display: grid;
		place-items: center;
		width: var(--switch-size);
		height: var(--switch-size);
		border-radius: 50%;
		color: var(--muted);
		cursor: pointer;
	}

	label:hover {
		color: var(--ink);
	}

	label:has(:checked) {
		background: var(--surface);
		color: var(--ink);
		box-shadow: 0 1px 2px rgb(0 0 0 / 0.1);
	}

	label:has(:focus-visible) {
		outline: 2px solid var(--primary-ink);
		outline-offset: 1px;
	}
</style>
