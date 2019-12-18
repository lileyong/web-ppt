<template>
    <div class="ppt-text">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'ppt-text'
}
</script>

<style scoped>
.ppt-text {
    padding: 30px 5%;
    width: 90%;
    line-height: 36px;
    font-size: 24px;
}
</style>
