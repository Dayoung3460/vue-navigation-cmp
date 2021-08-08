import Vue from 'vue'
import Router from 'vue-router'
import store from "../commonjs/store"
Vue.use(Router)

import FirstStep from "../components/FirstStep"
import SecondStep from "../components/SecondStep"
import ThirdStep from "../components/ThirdStep"
import FourthStep from "../components/FourthStep"


const router = new Router({
    routes: [
        {
            path: '/',
            name: 'firstStep',
            component: FirstStep
        },
        {
            path: '/2',
            name: 'secondStep',
            component: SecondStep
        },
        {
            path: '/3',
            name: 'thirdStep',
            component: ThirdStep
        },
        {
            path: '/4',
            name: 'fourthStep',
            component: FourthStep
        },
]})


router.beforeEach((to, from, next) => {
    if(to.path === '/4' && !store.state.hasFourthStep) {
        next(false)
    } else {
        next()
    }
})

export default router
