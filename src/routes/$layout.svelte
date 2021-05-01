<script>
	import PageTransitions from '$lib/PageTransitions.svelte';
	import { page } from '$app/stores';

	import '../app.postcss';
</script>

<PageTransitions refresh={$page.path}>
	<slot />
</PageTransitions>

<style global lang="postcss">
	.recipe {
		@apply w-full mx-auto;
	}

	.recipe .content {
		@apply md:grid grid-rows-1 max-w-5xl mx-auto gap-10 px-10 lg:px-0;
		grid-template-columns: 1fr 1.5fr;
		min-height: 80vh;
	}
	.recipe h2 {
		@apply text-4xl font-display font-bold mb-4;
	}

	.recipe h3 {
		@apply text-2xl mb-1;
	}
</style>
