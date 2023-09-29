import { FC, useState } from "react"
import { TodoTask, TodoTaskAcitonTypeEnum, TodoTaskStatusEnum } from "../typings/todo"
import { useTodoStore } from "../store"
import { CheckIcon, DeleteIcon, UnCheckIcon } from "./Icon"

const TodoItem: FC<{ data: TodoTask }> = ({ data }) => {
  const [, todoStoreDispatch] = useTodoStore()
  const [isEdit, setIsEdit] = useState(false)
  const [editContent, setEditContent] = useState(data.content)

  const handleChangeStatus = () => {
    todoStoreDispatch({ type: TodoTaskAcitonTypeEnum.CHANGE_STATUS, data: { uuid: data.uuid } })
  }

  const handleDeleteTodoItem = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation()
    todoStoreDispatch({ type: TodoTaskAcitonTypeEnum.DELETE_TODO, data: { uuid: data.uuid } })
  }

  const handleSubmitEditTodoItem = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const content = editContent.trim()
    if (e.key !== 'Enter' || !content.length) return
    setIsEdit(false)
    todoStoreDispatch({
      type: TodoTaskAcitonTypeEnum.EDIT_TODO_CONTENT,
      data: {
        uuid: data.uuid,
        content,
      },
    })
  }

  const handleEditTodoItem = () => {
    setIsEdit(true)
    setEditContent(data.content)
  }

  const Icon = ({ className = '' }) => {
    const Icon = data.status === TodoTaskStatusEnum.DOME ? CheckIcon : UnCheckIcon
    return <Icon {...{ className }} />
  }

  return <li className="flex border-b border-gray-500 hover:bg-gray-700 transition-all">
    <div className="px-2 flex items-center" onClick={handleChangeStatus}>
      <Icon className="w-5 h-5" />
    </div>
    { isEdit
      ? <input
        value={editContent}
        className="outline-none py-2 w-full hover:bg-gray-700"
        style={{ backgroundColor: 'var(--bgc)' }}
        autoFocus
        onChange={e => setEditContent(e.target.value)}
        onBlur={() => setIsEdit(false)}
        onKeyDown={handleSubmitEditTodoItem}
      />
      : <div
        className={`${data.status === TodoTaskStatusEnum.DOME ? 'line-through text-gray-500' : ''} flex-1 transition-all text-ellipsis-1 py-2`}
        title={data.content}
        onDoubleClick={handleEditTodoItem}
      >{data.content}</div> }
    <div className="px-3 flex items-center justify-center" onClick={handleDeleteTodoItem}>
      <DeleteIcon />
    </div>
  </li>
}

export default TodoItem