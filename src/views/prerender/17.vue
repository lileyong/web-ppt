<template>
    <div class="ppt superiority">
        <ppt-title>使用注意事项</ppt-title>
        <ppt-list :list="list"></ppt-list>
        <section>
            <img src="../../img/prerender/duplicate-content.png" width="1200px" />
        </section>
    </div>
</template>

<script>
export default {
    data () {
        return {
            list: [
                {
                    title: '预渲染仅支持单页应用的HTML5 history API模式'
                },
                {
                    title: '需在根节点设置data-server-rendered="true",否则会渲染出来两个页面。'
                }]
        }
    }
}
</script>
