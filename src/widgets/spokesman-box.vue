<template>
    <div class="spokesman-box">
        <img class="spokesman" src="../img/spokesman.png" />
        <slot></slot>
    </div>
</template>

<style scoped>
.spokesman-box {
    position: relative;
    display: flex;
    flex-direction: column;
    width: 544px;
    height: 124px;
    justify-content: center;
    border-radius: 62px;
    background-color: rgb(76, 166, 102);
}
.spokesman-box .spokesman {
    position: absolute;
    right: 16px;
    top: -42px;
}
.spokesman-box h1 {
    padding: 0 168px 3px 62px;
    font-size: 24px;
    color: #fff;
}
.spokesman-box p {
    padding-left: 62px;
    font-size: 22px;
    color: #fff;
}
</style>
