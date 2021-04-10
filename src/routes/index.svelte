<script context="module">
	const posts = import.meta.glob('./recipe/*.md');

	let body = [];

	for (const path in posts) {
		body.push(posts[path]().then(({ metadata }) => metadata));
	}

	/**
	 * @type {import('@sveltejs/kit').Load}
	 */
	export async function load({ page, fetch }) {
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
	let heroSection;

	const scrollDown = () => {
		window.scrollTo({
			top: heroSection.scrollHeight,
			left: 0,
			behavior: 'smooth'
		});
	};
</script>

<main>
	<section bind:this={heroSection} class="intro h-screen grid grid-cols-1 grid-rows-1 bg-black">
		<picture>
			<source media="(max-width: 767px)" srcset="./header-mobile.png" />
			<source media="(max-width: 1800px)" srcset="./header-medium.png" />
			<img
				class="intro-image select-none pointer-events-none h-screen justify-self-end object-cover ml-auto mr-0"
				src="./header-large.png"
				alt="sliced strawberry and chocolate cake on white ceramic plate"
			/>
		</picture>
		<div class="intro-content-wrap pl-16 grid grid-cols-1 grid-rows-1 w-full max-w-7xl mx-auto">
			<div class="self-center flex flex-col select-none">
				<span class="inline-block pl-1 text-xl md:text-2xl text-white -mb-2">Goc’s</span>
				<h1 class="text-white font-display text-7xl sm:text-8xl font-bold">Recipe <br /> book</h1>
			</div>
			<span
				class="justify-self-end self-start m-3 text-gray-700 hover:text-gray-200 transition-colors"
			>
				Photo by <a class="underline" target="_blank" href="https://unsplash.com/@sarahjulia"
					>Sara Julie</a
				>
			</span>
			<button
				on:click={scrollDown}
				class="flex space-x-3 uppercase tracking-wider text-raspberry hover:text-white transition-colors self-end justify-self-start mb-20"
			>
				<svg
					width="22"
					height="22"
					viewBox="0 0 22 22"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<circle cx="11" cy="11" r="10.5" stroke="currentColor" />
					<path
						d="M11 6.76923V15.2308M11 15.2308L15.2308 10.7511M11 15.2308L6.76923 10.7511"
						stroke="currentColor"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
				</svg>
				<span>Explore</span>
			</button>
		</div>
	</section>

	<section class="flex flex-col md:flex-row min-h-screen max-w-7xl mx-auto">
		<div class="px-14 py-16 space-y-6">
			<h2 class="text-5xl font-display font-bold text-mint">Recipes</h2>
			<ul class="list-none space-y-6">
				{#each posts as { title, outline, slug }}
					<li class="list-none">
						<a class="group" rel="prefetch" href="recipe/{slug}">
							<h3
								class="text-3xl group-hover:text-mint transition-colors text-mint-700 font-display font-bold"
							>
								{title}
							</h3>

							<p class="text-mint-600 max-w-sm group-hover: text-mint transition-colors">
								{@html outline}
							</p>
						</a>
					</li>
				{/each}
			</ul>
		</div>

		<div
			class="text-muffin-600 border-t md:border-t-0 md:border-l border-muffin-100 px-14 py-16 space-y-6 flex flex-col md:max-w-md md:ml-auto"
		>
			<h2 class="text-5xl font-display font-bold text-muffin">About</h2>
			<p class="text-justify max-w-sm">
				This page was create out of unwillingness to fiddle with your average recipe website, its
				ads and confusing measurement units.
			</p>
			<p class="text-justify max-w-sm">
				These are the recipes I really like, so the only logical thing to do was make a website that
				has all of them!
			</p>
			<p class="text-justify max-w-sm">
				Also very important — easy to read and clean recipe pages, easy checklist for buying the
				ingredients and a step by step recipe viewer.
			</p>
			<div class="h-full" />
			<span class="inline-block"
				>Created by <a class="underline" target="_blank" href="https://goranalkovic.com"
					>Goran Alković</a
				></span
			>
		</div>
	</section>
</main>

<style style lang="postcss">
	.intro > *,
	.intro-content-wrap > * {
		grid-row: 1;
		grid-column: 1;
	}

	@screen md {
		.intro,
		.intro-image {
			height: 80vmin;
		}
	}
</style>
