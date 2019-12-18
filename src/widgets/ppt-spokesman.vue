<template>
    <div class="spokesman-box">
        <img class="spokesman" src="../img/spokesman.png" />
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'ppt-spokesman'
}
</script>

<style scoped>
.spokesman-box {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 816px;
    height: 186px;
    border-radius: 93px;
    background-color: rgb(76, 166, 102);
}
.spokesman-box .spokesman {
    position: absolute;
    right: 10px;
    bottom: -25px;
}
.spokesman-box h1 {
    padding: 0 168px 3px 62px;
    font-size: 36px;
    color: #fff;
}
.spokesman-box p {
    padding: 10px 62px;
    font-size: 32px;
    color: #fff;
}
</style>
