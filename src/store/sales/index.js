import state from './states'
import * as mutations from './mutations'
import * as actions from './actions'
import * as getters from './getters'

const Sales = {
    namespaced: true,
    state,
    mutations,
    actions,
    getters,
}

export default Sales;