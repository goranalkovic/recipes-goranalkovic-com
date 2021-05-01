<script context="module">
	const posts = import.meta.glob('./recipe/*.md');

	let body = [];

	for (const path in posts) {
		body.push(posts[path]().then(({ metadata }) => metadata));
	}

	/**
	 * @type {import('@sveltejs/kit').Load}
	 */
	export async function load() {
		const posts = await Promise.all(body);
		return {
			props: {
				posts
			}
		};
	}
</script>

<script>
	export let posts;
</script>

<main>
	<section class="relative h-[60vh] bg-black w-full">
		<picture>
			<source media="(max-width: 767px)" srcset="./header-mobile.png" />
			<source media="(max-width: 1800px)" srcset="./header-medium.png" />
			<img
				class="object-cover h-full ml-auto mr-0 pointer-events-none select-none justify-self-end col-start-1 col-end-1 row-start-1 row-end-1"
				src="./header-large.png"
				alt="sliced strawberry and chocolate cake on white ceramic plate"
			/>
		</picture>
		<div class="h-full w-full max-w-7xl mx-auto px-14  justify-center absolute top-0 left-0 right-0 flex flex-col select-none">
			<span class="inline-block pl-1 -mb-2 text-xl text-white md:text-2xl">Goc’s</span>
			<h1 class="font-bold text-white font-display text-7xl sm:text-8xl">Recipe <br /> book</h1>
		</div>
	</section>

	<section class="flex flex-col min-h-screen mx-auto md:flex-row max-w-7xl">
		<div class="py-16 space-y-6 px-14">
			<h2 class="text-5xl font-bold font-display text-mint">Recipes</h2>
			<ul class="space-y-6 list-none">
				{#each posts as { title, outline, slug }}
					<li class="list-none">
						<a sveltekit:prefetch class="group" rel="prefetch" href="recipe/{slug}">
							<h3
								class="text-3xl font-bold transition-colors group-hover:text-mint text-mint-700 font-display"
							>
								{title}
							</h3>

							<p class="max-w-sm transition-colors text-mint-600 group-hover:text-mint">
								{@html outline}
							</p>
						</a>
					</li>
				{/each}
			</ul>
		</div>

		<div
			class="flex flex-col py-16 space-y-6 border-t text-muffin-600 md:border-t-0 md:border-l border-muffin-100 px-14 md:max-w-md md:ml-auto"
		>
			<h2 class="text-5xl font-bold font-display text-muffin">About</h2>
			<p class="max-w-sm text-justify">
				This page was create out of unwillingness to fiddle with your average recipe website, its
				ads and confusing measurement units.
			</p>
			<p class="max-w-sm text-justify">
				These are the recipes I really like, so the only logical thing to do was make a website that
				has all of them!
			</p>
			<p class="max-w-sm text-justify">
				Also very important — easy to read and clean recipe pages, easy checklist for buying the
				ingredients and a step by step recipe viewer.
			</p>
			<div class="h-full" />
			<span class="inline-block"
				>Created by <a class="underline" target="_blank" href="https://goranalkovic.com"
					>Goran Alković</a
				></span
			>
			<span class="inline-block opacity-30 hover:opacity-100 transition-opacity">
				Header photo by <a class="underline" target="_blank" href="https://unsplash.com/@sarahjulia"
					>Sara Julie</a
				>
			</span>
		</div>
	</section>
</main>