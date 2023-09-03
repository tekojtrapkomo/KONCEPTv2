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
<div class="second-wrapper">
    <h1>Second Wrapper</h1>
    {topicArray[0]?.color}
</div>
<style>
    .main-wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100svh;
        flex-direction: column;
        background: url(https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/1693d0177428193.64d5e2331a9db.jpg);
    }
    .main-wrapper h1 {
        font-size: 4rem;
        color: white;
        font-family: 'Aeonik', sans-serif;
    }
    .second-wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100svh;
        flex-direction: column;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        background: url(https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/1693d0177428193.64d5e2331a9db.jpg);
    }
</style>