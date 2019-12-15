<template>
    <div class="text-box">
        <slot></slot>
    </div>
</template>

<style scoped>
.text-box {
    margin-bottom: 45px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 31px;
    min-width: 424px;
    min-height: 62px;
    border-radius: 31px;
    background-color: rgb(76, 166, 102);
    font-size: 30px;
    font-weight: bold;
    color: #fff;
}
.text-box.center {
    align-items: center;
}
</style>
