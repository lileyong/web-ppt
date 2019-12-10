import Console from 'src/components/console/index.vue'
import PPT_1 from 'src/views/prerender/1.vue'
import PPT_2 from 'src/views/prerender/2.vue'
import PPT_3 from 'src/views/prerender/3.vue'
import PPT_4 from 'src/views/prerender/4.vue'
import PPT_5 from 'src/views/prerender/5.vue'
import PPT_6 from 'src/views/prerender/6.vue'
import PPT_7 from 'src/views/prerender/7.vue'
import PPT_8 from 'src/views/prerender/8.vue'
import PPT_9 from 'src/views/prerender/9.vue'
import PPT_10 from 'src/views/prerender/10.vue'
import PPT_11 from 'src/views/prerender/11.vue'
import PPT_12 from 'src/views/prerender/12.vue'

const routes = [{
    path: '/prerender',
    component: Console,
    children: [{
        path: '1',
        component: PPT_1
    },
    {
        path: '2',
        component: PPT_2
    },
    {
        path: '3',
        component: PPT_3
    },
    {
        path: '4',
        component: PPT_4
    },
    {
        path: '5',
        component: PPT_5
    },
    {
        path: '6',
        component: PPT_6
    },
    {
        path: '7',
        component: PPT_7
    },
    {
        path: '8',
        component: PPT_8
    },
    {
        path: '9',
        component: PPT_9
    },
    {
        path: '10',
        component: PPT_10
    },
    {
        path: '11',
        component: PPT_11
    },
    {
        path: '12',
        component: PPT_12
    }
    ]
}]

export default routes
