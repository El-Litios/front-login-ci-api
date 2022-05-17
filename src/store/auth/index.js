import state from './states'
import * as mutations from './mutations'
import * as actions from './actions'
import * as getters from './getters'
import createPersistedState from "vuex-persistedstate";

const AuthModule = {
    namespaced: true,
    actions,
    getters,
    mutations,
    state,
    plugins: [createPersistedState()],
}

export default AuthModule