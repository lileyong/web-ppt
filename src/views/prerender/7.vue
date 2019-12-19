<template>
    <div class="ppt superiority">
        <ppt-title>Prerendering（预渲染）</ppt-title>
        <ppt-text>Prerendering is basically firing up a headless browser, loading your app's routes, and saving the results to a static HTML file. You can then serve it with whatever static-file-serving solution you were using previously.</ppt-text>
        <ppt-steps :steps="steps" style="margin-top: 60px;"></ppt-steps>
    </div>
</template>

<script>
export default {
    data () {
        return {
            steps: [
                { text: 'webpack构建' },
                { text: 'puppeteer启动预渲染' },
                { text: '捕捉页面并输出html' },
                { text: 'dist目录下生成对应页面' }
            ]
        }
    }
}
</script>
