<template>
    <div class="ppt superiority">
        <ppt-title>收益：首屏时间减少了1/3</ppt-title>
        <ppt-text>经过预渲染改造后，用lighthouse测试发现预渲染改造前首屏时间是3.1s，预渲染改造后首屏时间是2.2s，performance评分由82分提升到97分！整体效果还是不错的。</ppt-text>
        <section>
            <img src="src/img/prerender/performance-1.png" />
            <img src="src/img/prerender/performance-2.png" />
        </section>
    </div>
</template>

<style lang="scss" scoped>
section {
    display: flex;
    justify-content: space-between;
}
</style>
