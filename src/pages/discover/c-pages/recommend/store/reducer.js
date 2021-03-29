import * as actionTypes from './constants'

const defaultState = {
    topbanner: []
}

function reducer(state = defaultState, action) {
    switch (action.type) {
        case actionTypes.CHANGE_TOP_BANNER:
            return { ...state, topBanner: [] }
        default:
            return state
    }
}

export default reducer