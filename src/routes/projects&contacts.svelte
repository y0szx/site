<script context="module">
    import { base } from "$app/paths";
    export const prerender = true;
</script>

<svelte:head>
    <title>Projects</title>
</svelte:head>

<section class="project">
    <h1>My projects</h1>
    <p>
        Actually, I have only one real project but I hope I could put more here
        later.
    </p>
    <div class="pr">
        <a
            style="text-decoration: none; font-size: 19px;"
            href="https://github.com/y0szx/MobileMessengerApp"
            target="_blank"
        >
            <!-- svelte-ignore a11y-missing-attribute -->
            <img class="image" src="{base}/images/messenger.jpg" />
            <!-- svelte-ignore a11y-structure -->
            <figcaption style="color:white;">Mobile Messenger App</figcaption>
        </a>
    </div>
</section>

<section class="contact">
    <h2>Contacts</h2>
    <div class="container">
        <div class="icons">
            <!-- svelte-ignore a11y-missing-attribute -->
            <a href="https://t.me/yuzsx" target="_blank"
                ><img
                    class="img"
                    src="{base}/images/tglogo.png"
                    width="40"
                    height="40"
                /></a
            >
            <!-- svelte-ignore a11y-missing-attribute -->
            <a href="https://vk.com/yuszx" target="_blank"
                ><img
                    class="img"
                    src="{base}/images/vklogo.png"
                    width="40"
                    height="40"
                /></a
            >
            <!-- svelte-ignore a11y-missing-attribute -->
            <a href="https://github.com/y0szx" target="_blank"
                ><img
                    class="img"
                    src="{base}/images/githublogo.png"
                    width="40"
                    height="40"
                /></a
            >
        </div>
    </div>
</section>

<style>
    .pr {
        display: flex;
        justify-content: center;
    }

    .image {
        border-radius: 35%;
        box-shadow: 0px 0px 15px 10px rgba(228, 180, 22, 0.514);
        margin-bottom: 0px;
    }

    .image:hover {
        opacity: 0.95;
    }

    .project {
        text-align: center;
        font-size: 25px;
    }

    .contact {
        text-align: center;
        font-size: 25px;
    }

    .container {
        width: 100%;
        max-width: 200px;
        margin: 0 auto;
    }

    .icons {
        display: flex;
        width: 100%;
        justify-content: space-between;
        margin-top: 10px;
    }

    .img:hover {
        opacity: 0.95;
    }
</style>
