import logo from '../logo.svg';
import React from 'react'

import { connect } from 'react-redux'

import { day1SetName } from '../redux/actions/day1Actions'

const Day1 = ({ dispatch, name }) => {
  const setName = val => {
    dispatch(day1SetName(val))
  }

  return (
    <div>
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
        <input
          placeholder="Name please..."
          value={ name }
          onChange={ e => setName(e.target.value) }
        />

        {
          name && name === 'Phyo' ?
          <div>Phyo Master Race =)</div> :
          <div>welp no name guy</div>
        }
      </header>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    name: state.day1Reducer.name
  }
}

export default connect(mapStateToProps)(Day1);
