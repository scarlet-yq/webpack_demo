import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        name: '二狗子'
    },
    getters: {
      name: state => state.name
    },
    mutations: {

    },
    actions: {

    }
})