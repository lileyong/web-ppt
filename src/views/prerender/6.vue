<template>
    <div class="ppt superiority">
        <ppt-title>Server-side rendering（SSR）</ppt-title>
        <ppt-text>
            <p>SSR 直译就是服务端渲染，通过设置 SSR，你就可以在后台的 Node.js 环境中完成渲染逻辑，然后将 HTML 视图直接返回给客户端。</p>
            <p>使用服务端渲染无疑带来了更好的 SEO，更快的内容到达时间 (time-to-content)，然而使用服务器端渲染 (SSR) 时还需要注意一些权衡之处：</p>
        </ppt-text>
        <ppt-list :list="list"></ppt-list>
    </div>
</template>

<script>
export default {
    data () {
        return {
            list: [
                { title: '开发条件所限。' },
                { title: '涉及构建设置和部署的更多要求。' },
                { title: '更多的服务器端负载。' }
            ]
        }
    }
}
</script>
