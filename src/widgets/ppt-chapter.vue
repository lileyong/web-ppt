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
    padding: 0 50px;
    min-width: 636px;
    min-height: 90px;
    line-height: 90px;
    border-radius: 45px;
    box-sizing: border-box;
    background-color: rgb(76, 166, 102);
    font-size: 36px;
    font-weight: bold;
    word-spacing: 10px;
    color: #fff;
}
.ppt-text.center {
    align-items: center;
}
</style>
