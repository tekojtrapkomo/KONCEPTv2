<script lang="ts">
    import type { PageData } from './$types';
    export let data: PageData;
    console.log(data);
    const topicArray = Array.isArray(data.topic) ? data.topic : [data.topic];
</script>

<!-- {#each data.cats as cats}
    <h1>{cats.id}</h1>
    <img src={cats.url} alt="cat" width={w} height={h}> 
{/each} -->


<div class="main-wrapper">
    <h1>Welcome to KONCEPT by MONARK</h1>
    {topicArray[0]?.color}

</div>

<style>
    .main-wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        width: 100vw;
        background: url(https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/1693d0177428193.64d5e2331a9db.jpg);
    }
    .main-wrapper h1 {
        font-size: 5rem;
        color: white;
        font-family: 'Aeonik', sans-serif;
    }
</style>