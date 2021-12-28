import * as types from './actionType'
import axios from 'axios'

const API = 'http://localhost:5000'

const getUsers = (users) => ({
    type: types.GET_USERS,
    payload: users
})

const getUser = (user) => ({
    type: types.GET_SINGLE_USER,
    payload: user
})

const userAdded = (msg) =>({
    type: types.ADD_USER,
    payload: msg
})

const userDeleted = (msg) =>({
    type: types.DELETE_USER,
    payload: msg
})

const userUpdate = (msg) =>({
    type: types.UPDATE_USER,
    payload: msg
})

export const loadUsers = () => {
    return function(dispatch) {
        axios
        .get(`${API}/users`)
        .then((resp) => dispatch(getUsers(resp.data)))
        .catch(err => console.log(err))
    }
}

export const loadUser = (id) => {
    return function(dispatch) {
        axios
        .get(`${API}/user/${id}`)
        .then((resp) => {
            dispatch(getUser(resp.data))
        })
        .catch(err => console.log(err))
    }
}

export const addUser = (user) => {
    return function(dispatch) {
        axios
        .post(`${API}/users`, user)
        .then((resp) => {
            dispatch(userAdded(resp.data.msg))
            dispatch(loadUsers())
        })
        .catch(err => console.log(err))
    }
}

export const updateUser = (user, id) => {
    return function(dispatch) {
        axios
        .put(`${API}/user/${id}`, user)
        .then((resp) => {
            dispatch(userUpdate(resp.data.msg))
            dispatch(loadUsers())
        })
        .catch(err => console.log(err))
    }
}

export const deleteUser = (id) => {
    return function(dispatch) {
        axios
        .delete(`${API}/user/${id}`)
        .then((resp) => {
            dispatch(userDeleted(resp.data.msg))
            dispatch(loadUsers())
        })
        .catch(err => console.log(err))
    }
}