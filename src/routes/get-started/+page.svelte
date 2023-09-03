<script lang="ts">
    import type { PageData } from './$types';
    
    export let data: PageData;
    console.log(data);
</script>
<div class="tom-wrapper">
  
  
<div class="formula">
    <h1>
        Pls login
    </h1>
    <form class="loginn" action="?/login" method="POST">
        <label for="email">
    <input type="email" name="email" placeholder="E-Mail" autocomplete="off"/>
        </label>
        <label for="password">
    <input type="password"  name="password" placeholder="Password" autocomplete="off" />
        </label>
        <button type="submit" class="button2">Login</button>
    </form>
</div>
</div>

<style>
    .tom-wrapper {
        height: 100svh;
        background: url(https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/1693d0177428193.64d5e2331a9db.jpg);
    }
    .formula {
        padding-top: 8rem;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
    .formula h1 {
        font-size: 4rem;
        color: white;
        font-family: 'Aeonik', sans-serif;
    }
</style>