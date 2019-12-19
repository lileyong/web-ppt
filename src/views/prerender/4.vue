<template>
    <div class="ppt superiority">
        <ppt-title>HTMLinJS的弊端</ppt-title>
        <ppt-text>
            目前Vue、React在前端界混得风生水起，他们均是采用HTMLinJS的方式构建单页应用。
            单页面的使用带来了更好的页面切换体验，却也产生了一些其他的弊端。
        </ppt-text>
        <ppt-list :list="list" style="margin-top: 20px;"></ppt-list>
    </div>
</template>

<script>
export default {
    data () {
        return {
            list: [
                { title: '首屏加载慢' },
                { title: '白屏' },
                { title: 'SEO不友好' }
            ]
        }
    }
}
</script>
