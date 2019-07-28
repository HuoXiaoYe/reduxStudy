import React, { Component } from 'react';

import { Input, Button, List } from 'antd'
import store from './store/index.js'

import { addItemAction, delItemAction, getData, getTodoList } from './store/actionCteater.js'
// import axios from 'axios';

// const data = [
//     '早8点开晨会，分配今天的开发工作',
//     '早9点和项目经理作开发需求讨论会',
//     '晚5:30对今日代码进行review'
// ]



class TodoList extends Component {
    constructor(props) {
        super(props)
        this.state = store.getState()
        store.subscribe(this.storeChange)
    }
    render() {
        return (
            <div style={{ margin: '10px' }}>
                <div>
                    <Input ref="content" placeholder='write someting' style={{ width: '250px', marginRight: '10px' }} />
                    <Button type="primary" onClick={this.addItem}>增加</Button>
                </div>
                <div style={{ margin: '10px', width: '300px' }}>
                    <List
                        bordered
                        dataSource={this.state.list}
                        renderItem={(item, index) => (<List.Item onClick={this.delItem.bind(this, index)}>{item}</List.Item>)}
                    />
                </div>
            </div>
        );
    }
    componentDidMount() {
        this.getList()
    }
    storeChange = () => {
        this.setState(store.getState())
    }
    addItem = () => {
        let data = this.refs.content.state.value;
        let action = addItemAction(data)
        store.dispatch(action)
        this.refs.content.state.value = "";
    }
    delItem = (index) => {
        const action = delItemAction(index);
        store.dispatch(action)
    }
    getList = () => {
        // const action = getData()
        // store.dispatch(action)
        // 
        const action = getTodoList()
        store.dispatch(action)
    }
}
export default TodoList;