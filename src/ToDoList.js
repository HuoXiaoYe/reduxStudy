import React from "react";

import { Input, List } from "antd"
import store from './store'

import {addItemAction,delItemAction} from './store/createAction.js'



const { Search } = Input;
class ToDoList extends React.Component {
    constructor(props) {
        super(props)
       this.state = store.getState() // 将store中的值赋值给 state
       store.subscribe(this.storeChange)
    }
    render() {
        let { inputValue, list } = this.state
        return <div>
            {/* add a todo list */}
            <div style={{ width: "400px", margin: "20px" }}>
                <Search
                    placeholder={inputValue}
                    enterButton="增加"
                    size="large"
                    onSearch={this.addItem}
                    ref="itemInfo"
                />
                {/* 点击按钮会触发 onSearch 事件 // onSearch={this.addItem}*/}

            </div>
            {/* todolist */}
            <div style={{ width: "400px", margin: "20px" }}>

                <List
                    size="small"
                    bordered
                    dataSource={list}
                    renderItem={(item,index) => <List.Item onClick={this.delItem.bind(this,index)}>{item}</List.Item>}
                />
            </div>
        </div >
    }
    storeChange=()=>{
        this.setState(store.getState())
    }
    addItem=()=>{
        let data = this.refs.itemInfo.input.state.value
        const action = addItemAction(data)
        // console.log(action)
        store.dispatch(action)
        this.refs.itemInfo.input.state.value = ""
    }
    delItem=(index)=>{
        const action = delItemAction(index)
        store.dispatch(action)
    }
   
}

export default ToDoList