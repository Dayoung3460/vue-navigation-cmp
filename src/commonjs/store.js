import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        firstName: '',
        email: '',
        hasFourthStep: true,
    },

    mutations: {
        setFirstName(state, payload) {
            state.firstName = payload.firstName
        },
        setEmail(state, payload) {
            state.email = payload.email
        }
    }

})
