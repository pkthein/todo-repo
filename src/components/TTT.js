import React from 'react'
const TTT = ({}) => {
  const [row1, setRow1] = React.useState(['-', '-', '-'])
  const [row2, setRow2] = React.useState(['-', '-', '-'])
  const [row3, setRow3] = React.useState(['-', '-', '-'])
  const [turn, setTurn] = React.useState(0)
  const [message, setMessage] = React.useState('')
  const updateRow = (r, c) => {
    let row
    if (r === 1) { row = row1 } else if (r === 2) { row = row2 } else { row = row3 }
    row[c] = turn % 2 ? 'X' : 'O'
    setTurn(turn + 1)
    if (r === 1) { setRow1(row) } else if (r === 2) { setRow2(row) } else { setRow3(row) }
    evalGame(turn - 1)
  }
  const evalGame = (turn) => {
    let flag = false
    if (row1[0] === row1[1] && row1[1] === row1[2] && row1[0] !== '-') { flag = true } else if (row2[0] === row2[1] && row2[1] === row2[2] && row2[0] !== '-') { flag = true } else if (row3[0] === row3[1] && row3[1] === row3[2] && row3[0] !== '-') { flag = true } else if (row1[0] === row2[0] && row2[0] === row3[0] && row1[0] !== '-') { flag = true } else if (row1[1] === row2[1] && row2[1] === row3[1] && row1[1] !== '-') { flag = true } else if (row1[2] === row2[2] && row2[2] === row3[2] && row1[2] !== '-') { flag = true } else if (row1[0] === row2[1] && row2[1] === row3[2] && row1[0] !== '-') { flag = true } else if (row1[2] === row2[1] && row2[1] === row3[0] && row1[2] !== '-') { flag = true }
    if (flag) { setMessage(`${(turn + 1) % 2 ? 'X' : 'O'} won!`) } else if (turn === 9) { setMessage('Tie!') }
  }
  return (
    <div> <div> { row1.map((v, i) => (<button key={ i } onClick={ () => updateRow(1, i) }>{ v }</button>)) }</div><div>{ row2.map((v, i) => (<button key={ i } onClick={ () => updateRow(2, i) }>{ v }</button>)) }</div><div>{ row3.map((v, i) => (<button key={ i } onClick={ () => updateRow(3, i) }>{ v }</button>)) }</div>{ message }</div>
  )
}
export default TTT
