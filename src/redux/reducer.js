import * as types from './actionType'

const initialState = {
    users: [],
    user: {},
    msg: ""
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_USERS:
            return {
                ...state,
                users: action.payload,
            }

        case types.ADD_USER:
        case types.DELETE_USER:
        case types.UPDATE_USER:
            return {
                ...state,
                msg: action.payload,
            }

        case types.GET_SINGLE_USER:
            return {
                ...state,
                user: action.payload
            }

        default:
            return state
    }
}

export default userReducer;