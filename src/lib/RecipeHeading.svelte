<script>
	export let title;
	export let outline;
	export let published;
	export let image;
	export let imageBy;
</script>

<svelte:head>
	<title>{title}</title>
	<meta property="og:title" content="Goc's Recipe book - {title}" />
	<meta property="og:description" content={outline.replace('<br>', '')} />
	<meta property="og:image" content={image} />
</svelte:head>

<div class="grid grid-cols-1 grid-rows-1 select-none recipe-heading">
	<img class="object-cover w-full h-full" src={image} alt={title} />
	<span class="self-end m-4 text-gray-300 opacity-80 bg-blend-difference justify-self-end"
		>Image by {imageBy}</span
	>
	<div
		class="self-end p-8 mb-20 ml-40 mr-20 bg-white rounded-lg bg-opacity-80 backdrop-blur-md backdrop-filter justify-self-start"
	>
		<h1 class="text-6xl font-bold font-display text-muffin-600">{@html title}</h1>
		<p class="text-lg text-gray-700">{@html outline}</p>
		<p class="mt-8 text-gray-400">Added on {published}</p>
	</div>

	<a
		class="self-start px-2.5 py-1 uppercase tracking-wider mt-20 ml-40 mr-20 bg-muffin-600 hover:bg-muffin-100 transition-colors hover:text-muffin-600 rounded-lg justify-self-start text-sm bg-opacity-60 text-muffin-100 backdrop-blur-md backdrop-filter"
		href="/">&larr; All recipes</a
	>
</div>

<style lang="postcss">
	.recipe-heading > * {
		@apply col-start-1 col-end-1 row-start-1 row-end-1;
	}

	.recipe-heading {
		height: 80vh;
	}
</style>
