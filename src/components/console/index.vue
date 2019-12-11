<template>
    <div class="console" @keyup.native.left="prevPage" @keyup.native.right="nextPage">
        <div class="content">
            <router-view></router-view>
        </div>
        <div class="controls">
            <div class="controls-btn" id="prev" @click="prevPage"></div>
            <div class="controls-btn" id="next" @click="nextPage"></div>
        </div>
        <div class="progress">
            <div class="progress-bar" :style="'width: '  + percentage + '%;'"></div>
        </div>
    </div>
</template>

<script>
import debounce from 'loadsh/debounce'

export default {
    data () {
        return {
            routesLength: 0
        }
    },
    computed: {
        percentage () {
            var path = this.$route.fullPath
            var match = path.match(/\d+/)
            var index = match ? match[0] : 1
            return index / this.routesLength * 100
        }
    },
    created () {
        this.getRoutesLength()
        document.addEventListener('keydown', (e) => {
            if (e.keyCode === 37) {
                this.prevPage()
            } else if (e.keyCode === 39) {
                this.nextPage()
            }
        }, false)
    },
    methods: {
        getRoutesLength () {
            var path = this.$route.fullPath
            var rootPath = path.match(/^.*(?=\/)/)
            var routes = []
            const context = require.context('src/router', true, /^\.\/[^/]+\/.+\.js$/)
            context.keys().forEach(key => {
                if (key.match(new RegExp(rootPath))) {
                    routes = routes.concat(context(key).default)
                }
            })

            this.routesLength = routes && routes[0] && routes[0].children && routes[0].children.length
        },
        prevPage: debounce(function () {
            var path = this.$route.fullPath
            var basePath = path.match(/^[^\d]*/)
            var match = path.match(/\d+/)
            var index = match ? match[0] : 1
            index = index > 1 ? Number(index) - 1 : 1
            this.$router.push({
                path: basePath + index
            })
        }, 20),
        nextPage: debounce(function () {
            var path = this.$route.fullPath
            var basePath = path.match(/^[^\d]*/)
            var match = path.match(/\d+/)
            var index = match ? match[0] : 1
            index = index < this.routesLength ? Number(index) + 1 : 1
            this.$router.push({
                path: basePath + index
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
    cursor: pointer;
}
.controls #prev {
    border-right-width: 22px;
    border-right-color: #24c77e;
}
.controls #next {
    border-left-width: 22px;
    border-left-color: #24c77e;
}
.progress {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 3px;
    background-color: rgba(0, 0, 0, 0.2);
}
.progress .progress-bar {
    height: 3px;
    background-color: #24c77e;
}
</style>
