<template>
    <div class="ppt-steps">
        <div class="step-item" v-for="item in steps" :key="item.text">{{ item.text }}</div>
    </div>
</template>

<script>
export default {
    name: 'ppt-steps',
    props: {
        steps: {
            type: Array,
            default: () => []
        }
    }
}
</script>

<style lang="scss" scoped>
.ppt-steps {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: auto;
    max-width: 90%;
    .step-item {
        position: relative;
        margin: 0 20px 20px 0;
        padding: 6px 24px;
        line-height: 36px;
        border-radius: 24px;
        background-color: #0cb46a;
        font-size: 18px;
        color: #fff;
        &::after {
            content: '';
            position: absolute;
            right: -20px;
            top: 23px;
            display: block;
            width: 20px;
            height: 2px;
            background-color: #0cb46a;
        }
        &:last-child {
            margin-right: 0;
            &::after {
                display: none;
            }
        }
    }
}
</style>
