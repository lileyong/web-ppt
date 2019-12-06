import Console from 'src/components/console/index.vue'
import PPT_1 from 'src/views/front-train/ppt-1.vue'
import PPT_2 from 'src/views/front-train/ppt-2.vue'
import PPT_3 from 'src/views/front-train/ppt-3.vue'
import PPT_4 from 'src/views/front-train/ppt-4.vue'
import PPT_5 from 'src/views/front-train/ppt-5.vue'
import PPT_6 from 'src/views/front-train/ppt-6.vue'
import PPT_7 from 'src/views/front-train/ppt-7.vue'
import PPT_8 from 'src/views/front-train/ppt-8.vue'
import PPT_9 from 'src/views/front-train/ppt-9.vue'
import PPT_10 from 'src/views/front-train/ppt-10.vue'
import PPT_11 from 'src/views/front-train/ppt-11.vue'
import PPT_12 from 'src/views/front-train/ppt-12.vue'

const routes = [{
    path: '/front-train',
    component: Console,
    children: [
        {
            path: 'ppt-1',
            component: PPT_1
        },
        {
            path: 'ppt-2',
            component: PPT_2
        },
        {
            path: 'ppt-3',
            component: PPT_3
        },
        {
            path: 'ppt-4',
            component: PPT_4
        },
        {
            path: 'ppt-5',
            component: PPT_5
        },
        {
            path: 'ppt-6',
            component: PPT_6
        },
        {
            path: 'ppt-7',
            component: PPT_7
        },
        {
            path: 'ppt-8',
            component: PPT_8
        },
        {
            path: 'ppt-9',
            component: PPT_9
        },
        {
            path: 'ppt-10',
            component: PPT_10
        },
        {
            path: 'ppt-11',
            component: PPT_11
        },
        {
            path: 'ppt-12',
            component: PPT_12
        }
    ]
}]

export default routes
