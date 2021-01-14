import React from 'react'
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


import Day1 from './components/Day1'
import Todo from './components/Todo'
import TTT from './components/TTT'

function App() {
  return (
    <Router>
      <div className="App">
        <nav style={{
          position: 'sticky',
          top: 0,
          backgroundColor: 'white'
        }}>
          <Link to="/day1">Day1</Link> |
          { ' ' }<Link to="/todo">Todo</Link> |
          { ' ' }<Link to="/ttt">TTT</Link>
        </nav>

        <Switch>
          <Route exact path="/day1">
            <Day1 />
          </Route>
          <Route exact path="/todo">
            <Todo/>
          </Route>
          <Route exact path="/ttt">
            <TTT/>
          </Route>
          <Route exact path="/">
            <Day1 />
          </Route>
          <Route path="*">
            welp nothing going on 404
          </Route>
        </Switch>
      </div>
    </Router>  
  );
}

export default App;
