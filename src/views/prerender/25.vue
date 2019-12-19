<template>
    <div class="ppt superiority">
        <ppt-title>总结</ppt-title>
        <ppt-list :list="list"></ppt-list>
    </div>
</template>

<script>
export default {
    data () {
        return {
            list: [{
                title: '公司基础设施建设不完善，比如BOSS系统构建机系统过于老旧'
            }]
        }
    }
}
</script>
