<template>
    <div class="ppt superiority">
        <ppt-title>参考文档</ppt-title>
        <ppt-list :list="list"></ppt-list>
    </div>
</template>

<script>
export default {
    data () {
        return {
            list: [
                {
                    title: 'prerender-spa-plugin：https://github.com/chrisvfritz/prerender-spa-plugin'
                },
                {
                    title: 'puppeteer：https://github.com/puppeteer/puppeteer'
                },
                {
                    title: 'troubleshooting：https://github.com/puppeteer/puppeteer/blob/master/docs/troubleshooting.md#chrome-headless-doesnt-launch-on-unix'
                }
            ]
        }
    }
}
</script>
