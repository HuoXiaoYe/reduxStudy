import { ADD_ITEM, DEL_ITEM , GET_LIST } from './actionTypes.js'

import axios from 'axios'
// import store from './index.js';

export let addItemAction = (data) => {
    return {
        type: ADD_ITEM,
        data
    }
}

export let delItemAction = (index) => {
    return {
        type: DEL_ITEM,
        index
    }
}

export const getListAction  = (data)=>({
    type:GET_LIST,
    data
})

export let getData = () => {
    return (dispatch)=>{
        axios.get("https://www.easy-mock.com/mock/5cfcce489dc7c36bd6da2c99/xiaojiejie/getList")
        .then((res)=>{
            const data = res.data.data.list
            const action = getListAction(data)
            dispatch(action)
        })
    }
}

export const getTodoList = () =>{
    return (dispatch)=>{
        axios.get('https://www.easy-mock.com/mock/5cfcce489dc7c36bd6da2c99/xiaojiejie/getList').then((res)=>{
            const data = res.data.data.list
            const action = getListAction(data)
            dispatch(action)
            
        })
    }
}