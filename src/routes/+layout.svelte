<script lang="ts">
    import type { LayoutData } from './$types';
    import Header from '$lib/components/Header.svelte';
    export let data: LayoutData;
    import '../app.css'
</script>
<Header/>
<style>
</style>
<slot/>