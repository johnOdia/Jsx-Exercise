import React from 'react'
import ReactDOM from 'react-dom'
import { Tweet } from './tweet'

const date = JSON.stringify(new Date())
const message1 = 'hello nice to meet you!'
const message2 = 'how are you doing today?'
const message3 = 'ok bye!'


export class App2 extends React.Component{
    render(){
        return(
            <div>
                <Tweet userName='john117' name='john' date={date} message={message1} />
                <Tweet userName='kelly087' name='kelly' date={date} message={message2} />
                <Tweet userName='fred104' name='fred' date={date} message={message3} />
            </div>
        )
    }
}

// ReactDOM.render(<App />, document.getElementById('app'))