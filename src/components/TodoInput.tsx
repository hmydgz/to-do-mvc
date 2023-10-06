import { FC, useState } from "react";
import { useTodoStore } from "../store";
import { TodoTaskAcitonTypeEnum } from "../typings/todo";

const TodoInput: FC = () => {
  const [taskContent, setTaskContent] = useState('')
  const [, todoStoreDispatch] = useTodoStore()

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const content = taskContent.trim()
    if (e.key !== 'Enter' || !content.length) return
    todoStoreDispatch({ type: TodoTaskAcitonTypeEnum.ADD_TODO, data: { content } })
    setTaskContent('')
  }

  return <div className="p-2 border-b border-gray-500 rounded-t-md sticky top-0 z-10" style={{ backgroundColor: 'var(--bgc)' }}>
    <input
      type="text"
      placeholder="What needs to be done?"
      className="outline-none py-2 px-4 w-full text-base rounded border-transparent border focus:border-cyan-400 transition-all"
      style={{ backgroundColor: 'var(--input-bgc)' }}
      value={taskContent}
      onChange={(e) => setTaskContent(e.target.value)}
      onKeyDown={handleKeyDown}
    />
  </div>
}

export default TodoInput