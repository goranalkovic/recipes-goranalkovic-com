<script>
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';

	let ingredientsContainer;

	let checkableIngredients = [];

	onMount(() => {
		let originalIngredientList = Array.from(ingredientsContainer?.querySelectorAll('li') ?? []);

		checkableIngredients = originalIngredientList.map((element) => {
			return {
				name: element.innerHTML,
				bought: false
			};
		});
	});

	let shoppingListVisible = false;
</script>

<section class="py-10 pr-4 md:border-r border-muffin-100 recipe-ingredients">
	<div class="flex items-center justify-between mb-4">
		<h2 class="p-0 m-0">Ingredients</h2>

		<button
			on:click={() => (shoppingListVisible = true)}
			class="flex items-center content-center p-1 mb-4 transition-colors rounded-lg text-muffin hover:bg-muffin-100"
		>
			<svg
            class="w-10 h-10"
            width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
				><path
					d="M3.588 21.15L1 12.9h17.6l-2.862 8.25H3.588zM6.5 12.9l3.3-6.6 3.3 6.6M2.812 18.4H16.4M2.1 15.65h15.4"
					stroke="currentColor"
					stroke-linecap="round"
					stroke-linejoin="round"
				/><path d="M4.25 13v8M7 13v8M9.75 13v8M12.5 13v8M15 13v8" stroke="currentColor" /><path
					d="M15.3 11.25V3H23v11h-2.75"
					stroke="currentColor"
					stroke-linecap="round"
					stroke-linejoin="round"
				/><path
					d="M17.5 5.2h2.75M17.5 7.4h3.3M17.5 9.6h2.2"
					stroke="currentColor"
					stroke-linecap="round"
				/></svg
			>
		</button>
	</div>

	<div bind:this={ingredientsContainer} class="basic-list">
		<slot />
	</div>

	{#if shoppingListVisible}
		<div class="relative z-50 select-none" transition:fade>
			<div
				class="fixed inset-0 flex w-screen h-screen p-8 bg-black bg-opacity-90 bg-blend-multiply"
			>
				<div class="absolute inset-0" on:click={() => (shoppingListVisible = false)} />
				<div class="relative w-full max-w-xl p-8 pb-6 pr-6 m-auto bg-white rounded-lg shadow-2xl">
					<h2 class="pb-2">Shopping list</h2>
					<ul class="space-y-4 text-xl list-none list-inside">
						{#each checkableIngredients as { name, bought }}
							<li>
								<label class:line-through={bought} class="cursor-pointer">
									<input class="mr-4 transform scale-150" bind:checked={bought} type="checkbox" />
									<span>{name}</span>
								</label>
							</li>
						{/each}
					</ul>
					<div class="flex p-0 pt-4 m-0 mt-5 border-t border-muffin-100">
						<button
							class="px-4 py-2 ml-auto text-xl font-bold text-gray-800 transition-colors rounded-md bg-muffin-100 hover:bg-muffin hover:text-white"
							on:click={() => (shoppingListVisible = false)}>Close</button
						>
					</div>
				</div>
			</div>
		</div>
	{/if}
</section>

<style lang="postcss">
	h2 {
		@apply text-muffin;
	}

	:global(.basic-list ul) {
		@apply leading-loose text-lg list-none list-inside;
	}

    :global(.recipe-ingredients h3) {
        @apply text-muffin-600;
    }

    :global(.recipe-ingredients h3:not(:first-of-type)) {
        @apply mt-8;
    }
</style>
