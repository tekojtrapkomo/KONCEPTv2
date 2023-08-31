<script lang="ts">
    import {page} from '$app/stores';
</script>
<div class="nav-wrapper">

<nav>
    <a href="/">Cats | Home</a>
    <a href="/explore">Explore</a>
    {#if $page.data.user}
        {$page.data.user.name}
        <form action="/logout" method="POST">
            <button type="submit" class="logout">Logout</button>
        </form>
    {:else}
        <a href="/get-started">Login</a>
    {/if}
</nav>
</div>

<style>
    .nav-wrapper {
        width: 100svw;
        display: flex;
        justify-content: center;
    }
    nav {
        /* From https://css.glass */
    background: rgba(255, 255, 255, 0.055);
    border-radius: 16px;
    box-shadow: 5px 6px 50px rgba(224, 219, 219, 0.068);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border: 1px solid rgba(247, 242, 242, 0.51);
    position: absolute;
    display: flex;
    width: 90%;
    height: 4rem;
    justify-content: space-between;
    align-items: center;
    padding: 0 1rem;
    margin: 2rem auto;
    }
    nav a {
        color: white;
        text-decoration: none;
        font-family: 'Aeonik', sans-serif;
        font-size: 1.2rem;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        text-transform: uppercase;
        
    }
</style>