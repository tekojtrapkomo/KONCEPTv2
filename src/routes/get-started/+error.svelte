<script lang="ts">
    import { page } from '$app/stores';
</script>
<div class="error-wrapper">
    <p>{$page.status}: {$page.error?.message}</p>
    <p>хаха
        
    </p>
</div>

<style>
    .error-wrapper {
        height: 100svh;
        background: url(https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/1693d0177428193.64d5e2331a9db.jpg);
    }
    .error-wrapper p {
        padding-top: 8rem;
        font-size: 4rem;
        color: white;
        font-family: 'Aeonik', sans-serif;
    }
</style>