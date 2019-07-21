
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

export default (state = defaultState,action)=>{  //就是一个方法函数
    if(action.type==="addItem"){

    }
    if(action.type==="delItem"){
        let newState = JSON.parse(JSON.stringify(state));
        newState.list.splice(action.index,1);
        
        return newState
    }
    if(action.type === "addItem"){
        let newState = JSON.parse(JSON.stringify(state));
        newState.list.push(action.val);
        return newState
    }
    return state
}