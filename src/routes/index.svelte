<script context="module">
    import { browser, dev } from "$app/env";
    import { base } from "$app/paths";
    export const hydrate = dev;
    export const router = browser;
    export const prerender = true;
</script>

<svelte:head>
	<title>About me</title>
</svelte:head>

<!-- svelte-ignore a11y-missing-attribute -->
<div><img class="fig" src="{base}/images/avatar.jpg" width="200" height="200" /></div>
<!-- svelte-ignore a11y-missing-content -->
<a name="me" />
<h3 class="name">Insaf Yusupov</h3>

<!-- svelte-ignore a11y-missing-attribute -->
<section class="paragraph"><a class="paragraph">Hi! Welcome to my webpage. I'm 19 years old bachelor student from
    Innopolis University.
    I'm interested in IT, sport activities, and cars.
    Also I'm a novice web-developer.
</a>
</section>

<style>
    .fig {
        display: block;
        margin: 0 auto;
        margin-bottom: 15px;
        margin-top: 15px;
        border-radius: 100px;
        box-shadow: 0px 0px 15px 10px rgba(228, 180, 22, 0.514);
    }

    .name {
        text-align: center;
        font-size: 35px;
        margin-top: 0px;
    }
    
    .paragraph{
    width: 100%;
    max-width: 900px;
    margin: 0 auto;
    font-size: 25px;
    text-align: center;
    margin-bottom: 10px;
}
</style>
