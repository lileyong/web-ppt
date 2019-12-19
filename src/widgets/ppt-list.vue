<template>
    <div class="ppt-list">
        <div v-for="item in list" :key="item.title">
            <div class="list-item">{{ item.title }}</div>
            <ppt-text v-if="item.text">{{ item.text }}</ppt-text>
            <ppt-code v-if="item.code">
                <pre><code>{{ item.code }}</code></pre>
            </ppt-code>
            <ppt-list v-if="item.list" :list="item.list"></ppt-list>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ppt-list',
    props: {
        list: {
            type: Array,
            default: () => []
        }
    }
}
</script>

<style lang="scss" scoped>
.ppt-list {
    margin: 0 auto;
    width: 90%;
    .list-item {
        position: relative;
        display: flex;
        align-items: center;
        padding: 10px 0;
        font-size: 24px;
        color: #0cb46a;
        &::before {
            content: '';
            margin-right: 10px;
            flex-shrink: 0;
            display: block;
            width: 20px;
            height: 20px;
            background-color: #0cb46a;
        }
    }
}
</style>
