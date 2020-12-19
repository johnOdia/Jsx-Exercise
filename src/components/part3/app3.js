import React from 'react'
import {Person} from './person'

export class App3 extends React.Component{
    render(){
        return(
            <div>
                <Person name='john' age='10' hobbies={['swimming','fishing']} />
                <Person name='halsey catherine' age='25' hobbies={['inventing','reading']} />
                <Person name='cortana' age='3' hobbies={['thinking','saving john','problem solving']} />
            </div>
        )
    }
}