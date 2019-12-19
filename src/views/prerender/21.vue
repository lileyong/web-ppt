<template>
    <div class="ppt superiority">
        <ppt-title>参考文档</ppt-title>
        <ppt-list :list="list" style="margin-top: 30px;"></ppt-list>
    </div>
</template>

<script>
export default {
    data () {
        return {
            list: [
                { title: 'prerender-spa-plugin：https://github.com/chrisvfritz/prerender-spa-plugin' }
            ]
        }
    }
}
</script>
