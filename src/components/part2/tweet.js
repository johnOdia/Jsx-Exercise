import React from 'react'
import './tweet.css'

export class Tweet extends React.Component{
    render(){
        return (
            <div>
                <div className='username'>{this.props.userName}</div>
                <div className='name'>{this.props.name}</div>
                <div className='date'>{this.props.date}</div>
                <div className='message'>{this.props.message}</div>
            </div>
        )
    }
}