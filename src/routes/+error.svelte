<script lang="ts">
    import { page } from '$app/stores';
</script>
<div class="error-wrapper">
    <div class="error-text-wrapper">
        <p class="code">{$page.status}</p>
        <p class="message">{$page.error?.message}</p>
    </div>
</div>

<style>
    .error-wrapper {
        height: 100svh;
        display: flex;
        background: url(https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/1693d0177428193.64d5e2331a9db.jpg);
    }
    .message {
        font-size: 4rem;
        color: white;
        align-self: flex-start;
        font-family: 'Aeonik', sans-serif;
    }
    .code {
        font-size: 8rem;
        font-family: 'Aeonik', sans-serif;
        font-weight: 700;
        align-self: flex-start;
        text-shadow: rgba(255,0,0,0.9) 0px 0px 39px;

          /** TEXT GRADIENT */ color: #30526b; background-image: -webkit-linear-gradient(0deg, #30526b 0%, #ed72b8 33%, #dfae82 67%); background-clip: text; -webkit-background-clip: text; text-fill-color: transparent; -webkit-text-fill-color: transparent;
          
        }
        .error-text-wrapper {
            display: flex;
            flex-direction: column;
            padding: 8rem 4rem 2rem 4rem;
            justify-content: flex-end;
        }
</style>