import { ADD_ITEM, DEL_ITEM, GET_LIST } from './actionTypes.js'



const defaultState = {//默认数据
    inputValue : 'Write Something',
    list:[
        '早上4点起床，锻炼身体',
        '中午下班游泳一小时',
        '早上4点起床，锻炼身体',
        '中午下班游泳一小时',
        '早上4点起床，锻炼身体',
        '中午下班游泳一小时'
    ]
}

export default (state=defaultState,action)=>{
    if(action.type === ADD_ITEM){
        let newState = JSON.parse(JSON.stringify(state));
        newState.list.push(action.data);
        return newState
    }
    if(action.type === DEL_ITEM){
        let newState = JSON.parse(JSON.stringify(state));
        newState.list.splice(action.index,1);
        return newState
    }
    if(action.type === GET_LIST){
        let newState = JSON.parse(JSON.stringify(state))
        newState.list = action.data
        return newState

    }
    return state
}

