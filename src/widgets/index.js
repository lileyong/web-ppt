import PPTSpokesman from './ppt-spokesman.vue'
import PPTChapter from './ppt-chapter.vue'
import PPTTitle from './ppt-title.vue'

export default function install (Vue) {
    Vue.component(PPTSpokesman.name, PPTSpokesman)
    Vue.component(PPTChapter.name, PPTChapter)
    Vue.component(PPTTitle.name, PPTTitle)
}
