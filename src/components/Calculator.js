import React from 'react'

import ButtonGroup from  './ButtonGroup'

const Calculator = ({}) => {
  const [exp, setExp] = React.useState('0')
  const [var1, setVar1] = React.useState(0)
  // const [var2, setVar2] = React.useState(0)
  const [ops, setOps] = React.useState(null)
  // const [prevO, setPrevO] = React.useState(null)

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
    if (v === 'C') {
      setExp('0')
      setVar1(0)
      // setVar2(0)
      setOps(null)
      // setPrevO(null)
      return true
    } else if (v === 'CE') {
      setExp('0')
      return true
    } else if (v === '<-') {
      setExp(exp.substring(0, exp.length - 1))
      return true
    } else if (v === '\u00B1') {
      setExp((Number(exp) * -1).toString())
      return true
    }

    if (ops === null) {
      setVar1(Number(exp))
    } else {
      setVar1(evaluate())
    }
    
    if (v === '=') {
      // console.log(var1, ops, exp, evaluate(), prevO, var2)
      // if (ops === null) {
      //   if (prevO) {
      //     return new Promise((resolve) => {
      //       resolve(true)
      //     })
      //       .then(() => setVar1(Number(exp)))
      //       .then(() => setOps(prevO))
      //       .then(() => setExp(var2.toString()))
      //       .then(() => setExp(evaluate().toString()))
      //       .then(() => setOps(null))
      //       .then(() => setVar1(0))
      //       .then(() => true)
      //   } else {
      //     setExp(evaluate().toString())

      //     setOps(null)
      //     setVar1(0)
      //   }
      // } else {
      //   setPrevO(ops)
      //   setVar2(Number(exp))

      //   setExp(evaluate().toString())

      //   setOps(null)
      //   setVar1(0)
      // }
      setExp(evaluate().toString())

      setOps(null)
      setVar1(0)
    } else {
      setOps(v)
      setExp('0')
    }

    return true
  }

  const evaluate = () => {
    if (ops === '+') {
      return Number(exp) + var1
    } else if (ops === '-') {
      return Number(exp) - var1
    } else if (ops === '*') {
      return Number(exp) * var1
    } else if (ops === '/') {
      return var1 / Number(exp)
    }
    return 0
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
