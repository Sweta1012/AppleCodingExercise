import React, { Component } from 'react';
import './App.css';
import MyListView from './components/MyListView/MyListView';
class App extends Component {
  render() {
    return (
      <div className="App">
        <MyListView />
      </div>
    );
  }

}
export default App;
