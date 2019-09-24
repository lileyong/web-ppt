<template>
    <div class="console" @keyup.native.left="prevPage" @keyup.native.right="nextPage">
        <router-view></router-view>
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

<style>
    @import url(../../css/ppt.css);
</style>
