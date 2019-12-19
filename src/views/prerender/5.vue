<template>
    <div class="ppt superiority">
        <ppt-title>解决方案</ppt-title>
        <ppt-text>为了解决单页应用首屏加载慢、白屏以及SEO不友好等问题，孜孜不倦的前端朋友们给出了几个解决方案：</ppt-text>
        <ppt-list :list="list" style="margin-top: 30px;"></ppt-list>
    </div>
</template>

<script>
export default {
    data () {
        return {
            list: [
                { title: 'Server-side rendering（SSR）' },
                { title: 'Prerendering（预渲染）' }
            ]
        }
    }
}
</script>
