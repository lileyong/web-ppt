import PPTSpokesman from './ppt-spokesman.vue'
import PPTChapter from './ppt-chapter.vue'
import PPTTitle from './ppt-title.vue'
import PPTText from './ppt-text.vue'
import PPTSteps from './ppt-steps.vue'
import PPTList from './ppt-list.vue'
import PPTCode from './ppt-code.vue'

export default function install (Vue) {
    Vue.component(PPTSpokesman.name, PPTSpokesman)
    Vue.component(PPTChapter.name, PPTChapter)
    Vue.component(PPTTitle.name, PPTTitle)
    Vue.component(PPTText.name, PPTText)
    Vue.component(PPTSteps.name, PPTSteps)
    Vue.component(PPTList.name, PPTList)
    Vue.component(PPTCode.name, PPTCode)
}
