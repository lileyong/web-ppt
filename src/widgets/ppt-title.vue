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
    margin: 50px 50px 0 50px;
    font-size: 20px;
    font-weight: bold;
    color: #333;
}
</style>
