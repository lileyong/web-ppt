<template>
    <div class="ppt-title">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'ppt-title'
}
</script>

<style scoped>
.ppt-title {
    padding: 20px 35px 30px 35px;
    line-height: 48px;
    font-size: 36px;
    font-weight: bolder;
    color: #0cb46a;
}
</style>
