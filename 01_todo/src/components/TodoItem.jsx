import React from 'react'

const TodoItem = (props) => {
  console.log('props? ',props)
  return (
    <div className="item">{props.item}</div>
  )
}

export default TodoItem