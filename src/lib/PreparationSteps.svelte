<script>
	import { onMount } from 'svelte';
	import { slide } from 'svelte/transition';

	let ingredientsContainer;

	let steps = [];

	onMount(() => {
		steps = Array.from(ingredientsContainer?.querySelectorAll('li') ?? []).map(
			(element) => element.innerHTML
		);
	});

	let focusMode = false;

	const toggleFocusMode = () => (focusMode = !focusMode);

	let currentStep = 0;
</script>

<section class="py-10 lg:pl-10 xl:pl-20 2xl:pl-40">
	<div class="flex items-center justify-between mb-4">
		<h2 class="p-0 m-0">Preparation</h2>

		<button
			on:click={toggleFocusMode}
			class:text-muffin={!focusMode}
			class:text-mint={focusMode}
			class="flex items-center content-center p-1 mb-4 transition-colors rounded-lg hover:bg-muffin-100"
		>
			<svg
				class="w-10 h-10"
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				><path
					d="M2 21.5v-18a1 1 0 011-1h18a1 1 0 011 1v18"
					stroke="currentColor"
					stroke-linecap="round"
				/><circle cx="6.5" cy="7" r="1.5" stroke="currentColor" /><circle
					opacity=".4"
					cx="6.5"
					cy="13"
					r="1.5"
					stroke="currentColor"
				/><circle opacity=".15" cx="6.5" cy="19" r="1.5" stroke="currentColor" /><path
					d="M10.5 6H19M10.5 8h6.139"
					stroke="currentColor"
					stroke-linecap="round"
				/><path d="M10.5 13H17" stroke="currentColor" stroke-linecap="round" opacity=".4" /><g
					opacity=".15"
					stroke="currentColor"
					stroke-linecap="round"><path d="M10.45 18h5M10.5 20h3" /></g
				></svg
			>
		</button>
	</div>

	<div bind:this={ingredientsContainer} class="hidden">
		<slot />
	</div>

	{#if focusMode}
		<div
			transition:slide
			class="flex justify-center py-4 mb-6 space-x-8"
		>
			<button
				class="border step-button text-muffin-600 border-muffin-100 hover:border-muffin"
				disabled={currentStep - 1 < 0}
				on:click={() => (currentStep = currentStep - 1)}>Previous step</button
			>
			<button
				class="font-bold border border-transparent bg-muffin-100 step-button text-muffin"
				disabled={currentStep + 1 > steps.length - 1}
				on:click={() => (currentStep = currentStep + 1)}>Next step</button
			>
		</div>
	{/if}

	<!-- Include classes in output: opacity-10 opacity-20 -->
	<ol class="space-y-4 list-none list-inside">
		{#each steps as item, i}
			{#if !focusMode || (focusMode && i >= currentStep - 1 && i <= currentStep + 2)}
				<li
					transition:slide
					class:opacity-20={focusMode && (i === currentStep - 1 || i === currentStep + 1)}
					class:opacity-10={focusMode && (i === currentStep - 2 || i === currentStep + 2)}
					class="flex items-start transition-opacity"
				>
					<span
						class="flex-shrink-0 inline-block mr-4 font-bold text-center rounded-lg w-7 font-display text-muffin bg-muffin-100"
						>{i + 1}</span
					>
					<span class:text-xl={focusMode} class="text-lg transition">{@html item}</span>
				</li>
			{/if}
		{/each}
	</ol>
</section>

<style lang="postcss">
	h2 {
		@apply text-muffin;
	}

	.step-button {
		@apply text-lg disabled:border-transparent hover:text-muffin disabled:text-muffin-100 disabled:bg-transparent transition px-4 py-2 rounded-lg;
	}
</style>
