import React from 'react'

import ButtonGroup from  './ButtonGroup'

const Calculator = ({}) => {
  const [exp, setExp] = React.useState('0')
  const [var1, setVar1] = React.useState(0)
  const [var2, setVar2] = React.useState(0)

  const keys = [
    ['1', '2', '3', '*', 'CE'],
    ['4', '5', '6', '/', 'C'],
    ['7', '8', '9', '+', '<-'],
    ['0', '\u00B1', '.', '-', '=']
  ]

  const handleNumClick = (v) => {
    if (exp === '0') {
      setExp(v)
    } else {
      setExp(exp + v)
    }
  }

  const handleOpsClick = (v) => {
    if (v === '+') {
      setVar1(Number(exp) + var1)
    } else if (v === '-') {
      setVar1(Number(exp) - var1)
    } else if (v === '*') {
      setVar1(Number(exp) * var1)
    } else if (v === '/') {
      setVar1(Number(exp) / var1)
    }

    if (v === '=') {
      setExp(var1.toString())
    } else {
      setExp('0')
    }
  }

  return (
    <div align="center" style={{ margin: '8px 0' }}>
      <div
        style={{
          border: 'black solid',
          borderRadius: 5,
          height: 30,
          display: 'flex',
          justifyContent: 'flex-end',
          padding: '0 4px',
          width: '80%',
          marginBottom: 8,
          maxWidth: 220
        }}>
        { exp }
      </div>

      {
        keys.map((v, i) => {
          return (
            <ButtonGroup
              key={ i } data={ v }
              numClick={ handleNumClick }
              opsClick={ handleOpsClick }
            />
          )
        })
      }
    </div>
  )
}

export default Calculator
