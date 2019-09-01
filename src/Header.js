import React from 'react';
import './App.css';

class Header extends React.Component{
  render(){
    return(
      <div className="app-header-icc">
        <header className="navbar navbar-expand-xl navbar-dark bg-dark fixed-top">
          <div className="container-fluid">
            <h1>
              <a className="navbar-brand navbar-dark" href="/">iCC 複利計算アプリ</a>
            </h1>
            <button className="navbar-toggler" data-toggle="collapse" data-target="#nav1">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="nav1">
              <ul className="navbar-nav">
                <li className="nav-item"><a className="nav-link navbar-dark bg-dark text-white" href="/jp">日本語</a></li>
                <li className="nav-item"><a className="nav-link navbar-dark bg-dark text-white" href="/en">English</a></li>
              </ul>  
            </div>
          </div>
        </header>
      </div>
    );
  }
} 
export default Header;