<script lang="ts">
    import{ navigating } from '$app/stores';
    import { onMount } from 'svelte';
    import { scale } from 'svelte/transition';
    import {backInOut} from 'svelte/easing';
    let path = $navigating?.to?.url.pathname  || '';
    $: pathWithoutSlash = path.replace('/', '');
    onMount(() => {
        console.log($navigating?.to?.url.pathname);
    });
</script>

<div in:scale={{duration: 1000, easing: backInOut}} out:scale class="nyan-cat">
    <img src="/nyan-loader.gif" alt="nyan">
</div>  
<p in:scale={{duration: 1000, easing: backInOut}} out:scale>Going to the {pathWithoutSlash}</p>

<style>
    .nyan-cat {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        z-index: 2;
    }
    p {
        font-family: 'Space Mono', sans-serif;
        font-size: 1rem;
        color: white;
        text-transform: uppercase;
        background-color: black;
        padding: 1rem 2rem;
        border-radius: 10px;
        bottom: 0;
        right: 0;
        z-index: 1;
        position: absolute;
        margin: 8rem 4rem 2rem 4rem;
    }
</style>