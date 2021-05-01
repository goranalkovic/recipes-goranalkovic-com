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

<div class="relative select-none h-[85vh] md:h-[65vh]">
	<img class="absolute inset-0 object-cover w-full h-full" src={image} alt={title} />
	<span class="absolute bottom-4 right-4 text-gray-300 opacity-80 bg-blend-difference"
		>Image by {imageBy}</span
	>

	<div class="absolute left-0 right-0 mx-auto h-full w-full max-w-7xl px-10 lg:px-32 py-16 flex flex-col items-start">
		<a
		class="self-start px-2.5 py-1 uppercase tracking-wider bg-muffin-600 hover:bg-muffin-100 transition-colors hover:text-muffin-600 rounded-lg text-sm bg-opacity-60 text-muffin-100 backdrop-blur-md backdrop-filter"
		href="/">&larr; All recipes</a
	>
		<div
			class="mt-auto p-8 bg-white rounded-lg bg-opacity-80 backdrop-blur-md backdrop-filter"
		>
			<h1 class="text-5xl mb-2 md:text-6xl font-bold font-display text-muffin-600">{@html title}</h1>
			<p class="text-lg text-gray-700">{@html outline}</p>
			<p class="mt-8 text-gray-400">Added on {published}</p>
		</div>
	</div>


</div>
