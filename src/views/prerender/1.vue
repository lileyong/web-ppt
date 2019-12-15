<template>
    <div class="ppt">
        <spokesman-box>
            <h1 class="title">预渲染及其在收银台项目中的运用</h1>
            <p class="smalltitle center">promise.li</p>
        </spokesman-box>
    </div>
</template>

<script>
import SpokesmanBox from 'src/widgets/spokesman-box.vue'

export default {
    components: {
        SpokesmanBox
    }
}
</script>

<style scoped>
.container {
    position: relative;
    width: 544px;
    height: 124px;
    border-radius: 62px;
    background-color: rgb(76, 166, 102);
}
.container .spokesman {
    position: absolute;
    right: 16px;
    top: -42px;
    margin: 0;
}
</style>
