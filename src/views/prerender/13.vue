<template>
    <div class="ppt superiority">
        <ppt-title>解决方案</ppt-title>
        <ppt-list :list="list" style="margin-top: 10px;"></ppt-list>
    </div>
</template>

<script>
export default {
    data () {
        return {
            list: [
                {
                    title: '翻墙',
                    text: '蓝灯等'
                },
                {
                    title: 'cnpm',
                    code: 'cnpm install prerender-spa-plugin --save-dev'
                },
                {
                    title: '跳过安装Chromium再手动下载',
                    code: 'yarn add prerender-spa-plugin --ignore-scripts'
                }
            ]
        }
    }
}
</script>
