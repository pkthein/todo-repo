import React from 'react'

const TodoListings = ({
  title, data, success, danger, warning,
  successClick, dangerClick, warningClick
}) => {
  return (
    <div>
      <b>{ title }</b>
      <hr />

      {
        data && data.length > 0 && data.map((v, index) => {
          return (
            <div key={ index }>
              { v }

              {
                success && success.value && (
                  <span style={{ marginLeft: 4 }}>
                    <button
                      className="btn btn-outline-success btn-sm"
                      onClick={ () => successClick(index) }
                    >
                      { success.value }
                    </button>
                  </span>
                )
              }

              {
                danger && danger.value &&
                warning && warning.value && (
                  <span style={{ marginLeft: 4 }}>
                    <span style={{ marginRight: 4 }}>
                      <button
                        className="btn btn-outline-danger btn-sm"
                        onClick={ () => dangerClick(index) }
                      >
                        Checkout
                      </button>
                    </span>

                    <button
                      className="btn btn-outline-warning btn-sm"
                      onClick={ () => warningClick(index) }
                    >
                      Undo
                    </button>
                  </span>
                )
              }
            </div>
          )
        })
      }
    </div>
  )
}

export default TodoListings
