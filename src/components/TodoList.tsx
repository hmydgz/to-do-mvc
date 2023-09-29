import { FC, useMemo } from "react";
import { useTodoStore } from "../store";

import TodoInput from "./TodoInput";
import TodoItem from "./TodoItem";
import Footer from "./Footer";

const TodoList: FC = () => {
  const [todoStore] = useTodoStore()

  const filterTodoList = useMemo(() => {
    if (todoStore.filterType === 'ALL') return todoStore.todoList
    return todoStore.todoList.filter(v => v.status === todoStore.filterType)
  }, [todoStore.todoList, todoStore.filterType])

  return <div>
    <h1 className="text-5xl pb-4">TODOS</h1>
    <div className="border border-gray-500 rounded-md relative">
      <TodoInput />
      <ul>
        { filterTodoList.length
          ? filterTodoList.map(v => <TodoItem data={v} key={v.uuid} />)
          : <div className="text-center py-3 border-b border-gray-500">Empty</div> }
      </ul>
      <Footer />
    </div>
  </div>
}

export default TodoList