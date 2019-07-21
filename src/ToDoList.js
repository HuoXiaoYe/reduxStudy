import React from "react";
import { Input, List } from "antd"
import store from './store'
import {addItemAction,delItemAction, getListAction} from './store/createAction.js'
import axios from 'axios'



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
    // componentDidMount(){
    //     this.getList()
    // }
    componentWillMount(){
        this.getList()
    }
    // 从网络上获取数据，
    getList=()=>{
        axios.get("https://www.easy-mock.com/mock/5cfcce489dc7c36bd6da2c99/xiaojiejie/getList")
        .then(res=>{
            // console.log(res.data.data.list)
            let data = res.data.data.list
            const action = getListAction(data)
            store.dispatch(action)

        })
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