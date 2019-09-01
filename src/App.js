import React from 'react';
import Header from './Header';
import ICC from './Icc';
import './App.css';

class App extends React.Component{
  render(){
    return (
      <div className="App">

        <Header />
        <ICC />

      </div>
    );
  }
}

export default App;
