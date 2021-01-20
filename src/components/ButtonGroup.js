import React from 'react'

const ButtonGroup = ({ data, numClick, opsClick }) => {
  const ops = ['*', '/', '+', '-', '=', 'CE', 'C', '<-']
  const clickHandler = (v) => {
    if (!ops.includes(v)) {
      numClick(v)
    } else {
      opsClick(v)
    }
  }

  return (
    <div>
      {
        data.map((v, i) => {
          return (
            <button
              key={ i }
              onClick={ () => clickHandler(v) }
              style={{ width: 40, heigh: 40, margin: '0 2px 2px' }}
            >
              { v }
            </button>
          )
        })
      }
    </div>
  )
}

export default ButtonGroup
