import React from 'react'
import './App.css';
import {FirstComponent} from './components/part1/firstComponent'
import {SecondComponent} from './components/part1/secondComponent'
import {NamedComponent} from './components/part1/NamedComponent'
import {App2} from './components/part2/app2'
import {App3} from './components/part3/app3'

class App extends React.Component {
   render(){
    return (
      <div>
        <h1>PART 1</h1>
        <FirstComponent />
        <SecondComponent />
        <NamedComponent name='john' />
        <h1>PART 2</h1>
        <App2 />
        <h1>PART 3</h1>
        <App3 />
      </div>
    );
   }
}

export default App;
