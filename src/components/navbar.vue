<template xmlns:v-bind="http://www.w3.org/1999/xhtml">
    <div class="navbar">
        <div class="navbar-inner">
            <div class="container">
                <a href="/" class="brand">
                    <img v-bind:src="Logo" />
                </a>
            </div>
        </div>
    </div>
</template>

<style>
    .navbar {
        background: #444 none repeat scroll 0 0;
        font-size: 13px;
        margin-bottom: 0;
        position: relative;
        width: 100%;
        z-index: 9;
        min-height: 40px;
    }
    .navbar-inner {
        background: rgba(0, 0, 0, 0) none repeat scroll 0 0;
        border: medium none;
        border-radius: 0;
        box-shadow: none;
        margin: auto;
        padding: 5px;
        width: 90%;
    }
    .navbar .container {
        margin: 0 auto;
        max-width: 1400px;
        min-width: 960px;
        width: 100%;
    }
    .navbar .brand {
        height: 28px;
        padding: 3px 20px;
        width: 120px;
    }
    .navbar .brand {
        color: #777;
        display: block;
        float: left;
        font-size: 20px;
        font-weight: 200;
        margin-left: -20px;
        padding: 5px 20px;
        text-shadow: 0 1px 0 #fff;
    }
    .brand img {
        height: 25px;
    }
    img {
        border: 0 none;
        height: auto;
        max-width: 100%;
        vertical-align: middle;
    }
</style>

<script>
    import Logo from '../assets/images/logo.png';

    export default{
        data () {
            return {
                Logo: Logo
            }
        },
    }
</script>
