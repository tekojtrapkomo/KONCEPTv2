<script lang="ts">
    import type { LayoutData } from './$types';
    
    export let data: LayoutData;
</script>
<nav>
    <a href="/">Cats | Home</a>
</nav>
{#if data.user}
{  data.user.name }
<form action="/logout" method="POST">
    <button type="submit" class="logout">Logout</button>
</form>
{:else}
<a href="/get-started">Login</a>
{/if}

<slot/>