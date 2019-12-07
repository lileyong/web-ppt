<template>
    <div class="console" @keyup.native.left="prevPage" @keyup.native.right="nextPage">
        <div class="content">
            <router-view></router-view>
        </div>
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
.console {
    position: relative;
    width: 100%;
    height: 100%;
}

.console .content {
    height: 100%;
    overflow: auto;
    scroll-behavior: smooth;
    -webkit-overflow-scrolling: touch;
}

.controls {
    position: absolute;
    right: 10px;
    bottom: 10px;
    display: flex;
    width: 110px;
    height: 110px;
    justify-content: space-between;
    align-items: center;
}
.controls .controls-btn {
    width: 0;
    height: 0;
    border: 12px solid transparent;
}
.controls #prev {
    border-right-width: 22px;
    border-right-color: #24c77e;
}
.controls #next {
    border-left-width: 22px;
    border-left-color: #24c77e;
}
</style>
