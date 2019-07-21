import React from "react";

import { Input, List } from "antd"
import store from './store/index.js'
const { Search } = Input;
class ToDoList extends React.Component {
    constructor(props) {
        super(props)
        this.state = store.getState()
        store.subscribe(this.storeChange) // 订阅,store中的数据发生改变，需要给state重新赋值
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
                {/* 点击按钮会触发 onSearch 事件*/}

            </div>
            {/* todolist */}
            <div style={{ width: "400px", margin: "20px" }}>

                <List
                    size="small"
                    bordered
                    dataSource={list}
                    renderItem={(item, index) => <List.Item onClick={this.delItem.bind(this, index)}>{item}</List.Item>}
                />

            </div>
        </div >
    }
    delItem = (index) => {
        let action = {
            type: "delItem",
            index
        }
        // console.log(index)
        store.dispatch(action)
    }
    addItem = () => {
        let val = this.refs.itemInfo.input.state.value;
        let action = {
            type : "addItem",
            val
        }
        store.dispatch(action)
        this.refs.itemInfo.input.state.value = ""
    }    
    storeChange = () => {
        this.setState(store.getState())
    }
}

export default ToDoList