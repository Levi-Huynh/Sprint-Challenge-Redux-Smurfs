import React, { Component } from 'react';
import './App.css';
import NavBar from '../components/NavBar';
import SmurfListView from '../components/SmurfListView';
import SmurfForm from '../components/SmurfForm';
import UpdateSmurfContainer from '../components/UpdateSmurfContainer';


import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <Route path="/" component={NavBar} />
        <Route  path="/" component={SmurfListView} />
        <Route exact path="/smurfForm" component={SmurfForm} />
      <Route exact path="/updateSmurf" component={UpdateSmurfContainer}/>
      </div>
      </Router>
    );
  }
}

export default App;
