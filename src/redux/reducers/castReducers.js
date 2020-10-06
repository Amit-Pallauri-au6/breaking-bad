import { FETCH_CASTS, FUZZY_SEARCH } from '../ActionTypes'
const initialState = {
    datas : null
}

const castReducer = ( state = initialState, action ) => {
    const { type, payload } = action
    switch (type) {
        case FETCH_CASTS:
            return {...state, datas: payload}
        case FUZZY_SEARCH:
            return {...state, datas : payload}
        default:
            return state
    }
}

export default castReducer