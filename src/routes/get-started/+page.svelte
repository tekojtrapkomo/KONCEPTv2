<script lang="ts">
    import type { PageData } from './$types';
    
    export let data: PageData;
    console.log(data);
</script>


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
