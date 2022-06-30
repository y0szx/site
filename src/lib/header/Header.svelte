<script lang="ts">
	import { page } from "$app/stores";
	import { base } from "$app/paths";
</script>

<div class="header">
	<div class="nav">
		<ul>
			<li class:active={$page.url.pathname === "/"}>
				<a class="test" sveltekit:prefetch href="{base}/">About me</a>
			</li>
			
			<li class:active={$page.url.pathname === "/projects&contacts"}>
				<a class="test" sveltekit:prefetch href="{base}/projects&contacts"
					>Projects&Contacts</a
				>
			</li>

			<li class:active={$page.url.pathname === "/randomDogs"}>
				<a class="test" sveltekit:prefetch href="{base}/randomDogs">Random Dogs</a>
			</li>
		</ul>
	</div>
</div>

<style>
.header {
        width: 100%;
		position: relative;
        top: 0;
        left: 0;
        right: 0;
        z-index: 1000;
    }

    .nav {
        /* font-size: 15px; */
		display: flex;
		justify-content: space-evenly;
		align-items: center;
        text-transform: uppercase;
        margin-top: 20px;
    }

	.test{
		margin: 0 15px;
	}

	ul {
		padding: 0;
		position: relative;
		margin: 0;
		height: 3em;
		display: flex;
		justify-content: space-evenly;
		list-style: none;
		background: var(--background);
		background-size: contain;
	}

	li {
		position: relative;
		height: 100%;
	}

	li.active::before {
		--size: 6px;
		content: "";
		width: 0;
		height: 0;
		position: absolute;
		top: 0;
		left: calc(50% - var(--size));
		border: var(--size) solid transparent;
		border-top: var(--size) solid var(--accent-color);
	}

	a:hover {
		color: var(--accent-color);
	}

	.test {
        color: black;
        text-decoration: none;
        transition: color 0.2s linear;
        margin: 0 30px;
        font-size: 20px;
        font-weight: 500;
    }

    .test:hover {
        color: rgb(228, 180, 22);
    }
</style>
