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
    margin: 50px 45px 0 45px;
    font-size: 20px;
    font-weight: bold;
    color: #333;
}
</style>
