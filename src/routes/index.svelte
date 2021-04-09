<script>
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
	<section
		bind:this={heroSection}
		class="intro h-screen grid grid-cols-1 grid-rows-1 bg-black pl-10 md:pl-24 2xl:pl-96"
	>
		<picture>
			<source media="(max-width: 767px)" srcset="./header-mobile.png" />
			<source media="(max-width: 1800px)" srcset="./header-medium.png" />
			<img
				class="intro-image select-none pointer-events-none h-screen justify-self-end object-cover ml-auto mr-0"
				src="./header-large.png"
				alt="sliced strawberry and chocolate cake on white ceramic plate"
			/>
		</picture>
		<div class="self-center flex flex-col select-none">
			<span class="inline-block pl-1 text-xl md:text-2xl text-white -mb-2">Goc’s</span>
			<h1 class="text-white font-display text-7xl sm:text-8xl font-bold">Recipe <br /> book</h1>
		</div>
		<span class="justify-self-end m-3 text-gray-700 hover:text-gray-200 transition-colors">
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
	</section>
</main>

<style style lang="postcss">
	.intro > * {
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
