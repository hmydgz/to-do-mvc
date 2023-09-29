import { FC } from "react";
import { TodoTaskAcitonTypeEnum, TodoTaskStatusEnum } from "../typings/todo";
import { useTodoStore } from "../store";

const FilterMap = {
  ALL: 'All',
  [TodoTaskStatusEnum.UNDONE]: 'Active',
  [TodoTaskStatusEnum.DOME]: 'Completed'
}

const FilterOptions = Object.entries(FilterMap).map(([key, value]) => ({ label: value, value: key as TodoTaskStatusEnum | 'ALL' }))

const Footer: FC = () => {
  const [todoStore, todoStoreDispatch] = useTodoStore()

  const handleSetFilterType = (data: keyof typeof FilterMap) => {
    todoStoreDispatch({ type: TodoTaskAcitonTypeEnum.SET_FILTER_TYPE, data: { filterType: data } })
  }

  const handleClearDone = () => {
    todoStoreDispatch({ type: TodoTaskAcitonTypeEnum.CLEAR_DONE })
  }

  const undoneCount = todoStore.todoList.filter(v => v.status === TodoTaskStatusEnum.UNDONE).length

  return <div className="flex py-2 px-3 sticky bottom-0 z-10 rounded-b-md border-t border-gray-500" style={{ backgroundColor: 'var(--bgc)' }}>
    <div className="flex-1">{ undoneCount || 'No' } items left</div>
    <div className="flex-1 flex justify-center">
      <div className="flex gap-1 text-sm">
        { FilterOptions.map(v => <div
          key={v.value}
          className={`${v.value === todoStore.filterType ? 'text-cyan-400 border-cyan-400' : ''} transition-all border border-transparent py-0.5 px-2 rounded`}
          onClick={() => handleSetFilterType(v.value)}
        >{ v.label }</div>) }
      </div>
    </div>
    { undoneCount === todoStore.todoList.length
      ? <div className="flex-1"></div>
      : <div className="flex-1 text-right" onClick={handleClearDone}>Clear completed</div> }
  </div>
}

export default Footer