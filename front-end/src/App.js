import Search from './components/Search.js';
import './App.css';
import BasicGrid from './components/BasicGrid';
import React from 'react';

class App extends React.Component {

    render() {
        return (
            <div className="App">
                <Search />
                <BasicGrid />
            </div>
      );
    } 
}

export default App;
