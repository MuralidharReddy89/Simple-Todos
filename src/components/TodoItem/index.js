import './index.css'

const TodoItem = props => {
  const {todoDetails, onDeleteTodo} = props
  const {id, title} = todoDetails

  const handleDelete = () => {
    onDeleteTodo(id)
  }

  return (
    <li className="todo-item-container">
      <p className="description">{title}</p>
      <button className="button" type="button" onClick={handleDelete}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
