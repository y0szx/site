<script lang="ts">
    async function test() {
        const res: Response = await fetch(
            "https://dog.ceo/api/breeds/image/random"
        );
        const json = await res.json();
        return json;
    }

    interface Dogs {
        image1: string;
    }
    let temp: string;
    test().then((dog) => {
        const img = dog.message;
        let inter: Dogs = {
            image1: img,
        };

        temp = inter.image1;
    });
</script>

<!-- svelte-ignore a11y-missing-content -->
<a name="randomdogs" />
<h4 class="titlefordogs">Below you can see random dogs. Enjoy:)</h4>
<div class="dog">
    <!-- svelte-ignore a11y-missing-attribute -->
    <img class="img1" id="puppy" src={temp} />
</div>

<style>
    .titlefordogs {
        text-align: center;
        font-size: 35px;
    }

    .dog {
        display: flex;
        justify-content: center;
        height: 400px;
    }

    .img1 {
        box-shadow: 0px 0px 15px 10px rgba(228, 180, 22, 0.514);
        border-radius: 15%;
    }
</style>
