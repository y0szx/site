<script lang="ts">
	import Header from "$lib/header/Header.svelte";
	import "../app.css";
</script>

<Header />

<main>
	<slot />
</main>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Inconsolata&display=swap');
	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 1024px;
		margin: 0 auto;
		box-sizing: border-box;
	}
</style>
