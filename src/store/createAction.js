import { ADD_ITEM, DEL_ITEM } from './actionTypes.js'
export const addItemAction = (data) => { return { type: ADD_ITEM, data } }
export const delItemAction = (index) => { return { type: DEL_ITEM, index } }