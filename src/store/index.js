import Vuex from 'Vuex'
import Vue from 'Vue'
Vue.use(Vuex)

import actions from './actions'
import mutations from './mutations'
import state from './state'
import getters from './getters'

let store=new Vuex.Store({
    actions,mutations,state,getters
})

export default store