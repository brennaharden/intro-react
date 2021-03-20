import React, { Component } from 'react'
import Nav from './Nav'
import Greeting from './Greeting'

class Header extends Component {
    constructor(){
        super();
        this.state = {
            user: 'Terry',
            users: [{name: 'Bill', age: 22}, {name: 'Sally', age: 35}, {name: 'Jack', age: 50}],
            groupId: null,
            editing: false
        }
    }

    hello = () => {
        return this.state.user + "says hello"
    }

    render(){
        return (
            <div>
                <h1>Howdy</h1>
                <Nav pickle={this.state.user} hello={this.hello}/>
                <Greeting person={this.state.user} users={this.state.users}/>
            </div>
        )
    }
}

export default Header