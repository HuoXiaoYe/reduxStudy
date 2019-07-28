import { ADD_ITEM, DEL_ITEM,GET_LIST } from './actionTypes'

const defaultState = {
    list: [
        '早82点开晨会，分配今天的开发工作',
        '早9点和项目经理作开发需求讨论会',
        '晚5:30对今日代码进行review'
    ]

}

export default (state = defaultState, action) => {
    if (action.type === ADD_ITEM) {
        let newState = JSON.parse(JSON.stringify(state));
        newState.list.push(action.data)
        return newState
    }

    if (action.type === DEL_ITEM) {
        let newState = JSON.parse(JSON.stringify(state));
        newState.list.splice(action.index, 1)
        return newState
    }

    if (action.type === GET_LIST) {
        let newState = JSON.parse(JSON.stringify(state));
        // newState.list.splice(action.index, 1)
        newState.list = action.data
        return newState
    }
    
    return state
}