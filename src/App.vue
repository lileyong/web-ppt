<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>

<style>
    * {
        margin: 0;
        padding: 0;
    }
    html, body {
        height: 100%;
    }
    #app {
        width: 100%;
        height: 100%;
        background: url(./img/ppt-bg.png) right 10px top 10px / 246px 100px no-repeat;
    }
</style>