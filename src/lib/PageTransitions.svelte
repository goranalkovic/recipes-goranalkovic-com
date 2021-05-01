<script>
	import { slide, fade } from 'svelte/transition';
	export let refresh = '';
</script>

{#key refresh}
	<div in:slide={{ duration: 500, delay: 50 }} out:slide={{ duration: 500 }}>
		<slot />
	</div>
{/key}
