<template>
    <div class="ppt superiority">
        <ppt-title>总结</ppt-title>
        <ppt-text>经过这次收银台预渲染改造，我学到了不少，总结以下几点：</ppt-text>
        <ppt-list :list="list"></ppt-list>
    </div>
</template>

<script>
export default {
    data () {
        return {
            list: [{
                title: '需加强Linux命令学习'
            }, {
                title: 'BOSS系统构建机系统过于老旧，需要有话语权的人推动升级'
            }]
        }
    }
}
</script>
