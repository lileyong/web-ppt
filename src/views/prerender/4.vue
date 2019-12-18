<template>
    <div class="ppt superiority">
        <ppt-title>什么是预渲染</ppt-title>
        <ppt-text>Prerendering is basically firing up a headless browser, loading your app's routes, and saving the results to a static HTML file. You can then serve it with whatever static-file-serving solution you were using previously.</ppt-text>
        <div class="img-box">
            <img src="src/img/prerender/working-principle.png" />
        </div>
    </div>
</template>

<style scoped>
.img-box {
    overflow: hidden;
}
.img-box img {
    margin-top: -197px;
    margin-right: 108px;
}
</style>
