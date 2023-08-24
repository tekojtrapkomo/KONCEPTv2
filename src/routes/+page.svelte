<script lang="ts">
    import type { PageData } from './$types';
    let w = 200;
    let h = 200;
    export let data: PageData;
</script>

{#each data.cats as cats}
    <h1>{cats.id}</h1>
    <img src={cats.url} alt="cat" width={w} height={h}> 
{/each}

