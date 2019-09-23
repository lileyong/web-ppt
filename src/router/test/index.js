import Console from '../../views/console/index.vue'
import DataToDom from '../../views/test/data-to-dom.vue'
import VFor from '../../views/test/v-for.vue'

const routes = [{
    path: '/test',
    component: Console,
    children: [
        {
            path: 'v-for',
            component: VFor
        },
    ]
}]

export default routes