import { FETCH_CASTS, FUZZY_SEARCH } from '../ActionTypes'
import { keys } from '../../config'
import axios from 'axios'

export const fetchCasts = () => async dispatch => {
    try{
        const { data } = await axios(`${keys.BASE_URL}/characters`)
        dispatch({
            type: FETCH_CASTS,
            payload : data
        })
    }catch(err){
        console.log(err)
    }
}

export const fuzzySearch = (name) => async dispatch => {
    try {
        const fetchedData = await axios(`${keys.BASE_URL}/api/characters?name=${name}`)
        dispatch({
            type: FUZZY_SEARCH,
            payload : fetchedData
        })
    } catch (error) {
        console.log(error)
    }
}
 