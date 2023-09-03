<script lang="ts">
    import type { LayoutData } from './$types';
    import Header from '$lib/components/Header.svelte';
    export let data: LayoutData;
    import '../app.css'
    import {navigating} from '$app/stores'
    import Loading from '$lib/components/Loading.svelte';
    import { fade } from 'svelte/transition';
    import '@fontsource/space-mono';


</script>
{#if $navigating}
    <Loading/>
{/if}
<Header/>
{#key data.url}
<div transition:fade>
    <slot/>
</div>
{/key}