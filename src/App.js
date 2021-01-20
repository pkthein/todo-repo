import React from 'react'
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import { connect } from 'react-redux'

import Day1 from './components/Day1'
import Todo from './components/Todo'
import TTT from './components/TTT'
import Calculator from './components/Calculator'

const repo = '/2021-sp-react-boot'

function App() {
  return (
    <Router>
      <div className="App">
        <nav style={{
          position: 'sticky',
          top: 0,
          backgroundColor: 'white'
        }}>
          <Link to={ `${repo}/day1` }>Day1</Link> |
          { ' ' }<Link to={ `${repo}/todo` }>Todo</Link> |
          { ' ' }<Link to={ `${repo}/ttt` }>TTT</Link> |
          { ' ' }<Link to={ `${repo}/calculator` }>Calculator</Link>
        </nav>

        <Switch>
          <Route exact path={ `${repo}/day1` }>
            <Day1 />
          </Route>
          <Route exact path={ `${repo}/todo` }>
            <Todo/>
          </Route>
          <Route exact path={ `${repo}/ttt` }>
            <TTT/>
          </Route>
          <Route exact path={ `${repo}/calculator` }>
            <Calculator/>
          </Route>
          <Route exact path={ `${repo}/` }>
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

const mapStateToProps = state => ({

})

export default connect(mapStateToProps)(App);
