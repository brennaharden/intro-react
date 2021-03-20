import React from 'react'

export default class Nav extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            username: this.props.pickle
        }
    }

    render(){
        console.log(this.props)
        return (
            <div>
                <h2>{this.props.pickle} from Nav</h2>
            </div>
        )
    }
}