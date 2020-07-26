import React from 'react';
import CardArray from '../components/CardArray.js';
import Searchbar from '../components/Searchbar.js';
import {robots} from '../components/robots.js';
import Scroll from '../components/Scroll.js';
//import logo from './logo.svg';
// import './App.css';

/*function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}*/

class App extends React.Component {
  constructor(){
    super();
    this.state={
      robots: robots,
      searchfield: ''
    }
  }

  onsearchchange = (event) =>{
    this.setState({searchfield: event.target.value})
    
  }

  render() {
    const filteredrobots = this.state.robots.filter(robots => {
      return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
    })
    return (
      <div className='tc'>
          <h1>Robot Searchbar</h1>
        <Searchbar onsearchchange={this.onsearchchange}/>
        <div>
          <Scroll>
            <CardArray robots={filteredrobots}/>
          </Scroll>
        </div>
      </div>
    );
  }
}

export default App;
