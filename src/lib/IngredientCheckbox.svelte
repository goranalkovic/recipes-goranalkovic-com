<script>
	import { draw } from 'svelte/transition';

	export let bought;
	export let name;
</script>

<!-- Include classes in output: scale-x-0 scale-x-100 text-gray-400 -->
<label class="cursor-pointer flex items-center">
	<input class="appearance-none" bind:checked={bought} type="checkbox" />
	<div class="relative border border-gray-400 w-6 h-6 rounded-full mr-2">
		{#if bought}
			<svg
				class="text-raspberry absolute inset-0 h-4 w-4 m-auto"
				xmlns="http://www.w3.org/2000/svg"
				width="24"
				height="24"
				viewBox="0 0 24 24"
			>
				<path
					in:draw={{ duration: 300 }}
					out:draw={{ duration: 500 }}
					stroke-width="3"
					stroke-linecap="round"
					stroke="currentColor"
					d="M.95 13.685l7.559 6.657L23.05 4.092"
					fill="none"
				/>
			</svg>
		{/if}
	</div>
	<div class="relative">
		<span class:text-gray-400={bought} class:text-black={!bought} class="transition-colors"
			>{name}</span
		>
		<div
			class:scale-x-0={!bought}
			class:scale-x-100={bought}
			class="rounded-md absolute top-1/2 left-0 w-full h-[2px] origin-left transform bg-raspberry transition-transform duration-300"
		/>
	</div>
</label>
