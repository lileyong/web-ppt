<template>
    <div class="console" @keyup.native.left="prevPage" @keyup.native.right="nextPage">
        <router-view></router-view>
        <div class="controls">
            <div class="controls-btn" id="prev"></div>
            <div class="controls-btn" id="next"></div>
        </div>
    </div>
</template>

<script>
import debounce from 'loadsh/debounce'

export default {
    data () {
        return {
            len: 12
        }
    },
    created () {
        document.addEventListener('keydown', (e) => {
            if (e.keyCode === 37) {
                this.prevPage()
            } else if (e.keyCode === 39) {
                this.nextPage()
            }
        }, false)
    },
    methods: {
        prevPage: debounce(function () {
            var path = this.$route.fullPath
            var match = path.match(/\d+/)
            var index = match ? match[0] : 1
            index = index > 1 ? Number(index) - 1 : 1
            this.$router.push({
                path: '/front-train/ppt-' + index
            })
        }, 20),
        nextPage: debounce(function () {
            var path = this.$route.fullPath
            var match = path.match(/\d+/)
            var index = match ? match[0] : 1
            index = index < this.len ? Number(index) + 1 : 1
            this.$router.push({
                path: '/front-train/ppt-' + index
            })
        }, 20)
    }
}
</script>

<style src="../../css/ppt.css"></style>
<style scoped>
.controls {
    position: absolute;
    right: 10px;
    bottom: 30px;
    display: flex;
    justify-content: space-around;
    width: 110px;
}
.controls .controls-btn {
    width: 0;
    height: 0;
    border: 12px solid transparent;
}
.controls #prev {
    border-right-width: 22px;
    border-right-color:#24C77E;
}
.controls #next {
    border-left-width: 22px;
    border-left-color:#24C77E;
}
</style>
