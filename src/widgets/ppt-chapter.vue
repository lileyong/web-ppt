<template>
    <div class="ppt-text">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'ppt-chapter'
}
</script>

<style scoped>
.ppt-text {
    margin-bottom: 45px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 36px;
    min-width: 424px;
    min-height: 62px;
    border-radius: 31px;
    background-color: rgb(76, 166, 102);
    font-size: 26px;
    font-weight: bold;
    word-spacing: 15px;
    color: #fff;
}
.ppt-text.center {
    align-items: center;
}
</style>
