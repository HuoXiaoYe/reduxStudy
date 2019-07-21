import { ADD_ITEM, DEL_ITEM,GET_LIST } from './actionTypes.js'
export const addItemAction = (data) => { return { type: ADD_ITEM, data } }
export const delItemAction = (index) => { return { type: DEL_ITEM, index } }
export const getListAction = (data) => { return { type: GET_LIST, data } }