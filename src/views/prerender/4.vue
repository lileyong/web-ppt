<template>
    <div class="ppt superiority">
        <ppt-title>什么是预渲染</ppt-title>
        <ppt-text>Prerendering is basically firing up a headless browser, loading your app's routes, and saving the results to a static HTML file. You can then serve it with whatever static-file-serving solution you were using previously.</ppt-text>
        <div class="ppt-steps-wrap">
            <ppt-steps :steps="steps"></ppt-steps>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            steps: [
                { title: 'webpack构建' },
                { title: 'puppeteer启动预渲染' },
                { title: '捕捉页面并输出html' },
                { title: 'dist目录下生成对应页面' }
            ]
        }
    }
}
</script>

<style scoped>
.img-box {
    overflow: hidden;
}
.img-box img {
    margin-top: -197px;
    margin-right: 108px;
}
.ppt-steps-wrap {
    margin-top: 60px;
}
</style>
