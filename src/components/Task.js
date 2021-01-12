import React from 'react'

const Task = ({ data, index, doneClick }) => {
  return (
    <div>
      { data }

      <span style={{ marginLeft: 4 }}>
        <button
          className="btn btn-outline-success btn-sm"
          onClick={ () => doneClick(index) }
        >
          Done
        </button>
      </span>
    </div>
  )
}

export default Task
