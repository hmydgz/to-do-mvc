import { BaseActionTuple } from '../../typings'
import { TodoTask, TodoTaskAcitonTypeEnum, TodoTaskStatusEnum } from '../../typings/todo'
import { createCustomStore } from '../utils'
import { v4 as uuid } from 'uuid'
import store from 'store'

const defaultState = {
  todoList: [] as TodoTask[],
  filterType: 'ALL' as TodoTaskStatusEnum | 'ALL'
}

const initalState = store.get('todoStore', defaultState) as typeof defaultState

type AllAction = BaseActionTuple<[
  [TodoTaskAcitonTypeEnum.ADD_TODO, { content: string }],
  [TodoTaskAcitonTypeEnum.CHANGE_STATUS, { uuid: string }],
  [TodoTaskAcitonTypeEnum.DELETE_TODO, { uuid: string }],
  [TodoTaskAcitonTypeEnum.CLEAR_DONE],
  [TodoTaskAcitonTypeEnum.SET_FILTER_TYPE, { filterType: typeof defaultState.filterType }],
  [TodoTaskAcitonTypeEnum.EDIT_TODO_CONTENT, { uuid: string, content: string }]
]>

function reducer(state = initalState, action: AllAction): typeof initalState {
  switch (action.type) {
    case TodoTaskAcitonTypeEnum.ADD_TODO: {
      const task: TodoTask = {
        uuid: uuid(),
        content: action.data.content,
        status: TodoTaskStatusEnum.UNDONE,
      }
      state.todoList.unshift(task)
      return { ...state, todoList: [...state.todoList] }
    }

    case TodoTaskAcitonTypeEnum.CHANGE_STATUS: {
      const index = state.todoList.findIndex(v => v.uuid === action.data.uuid)
      const item = state.todoList[index]
      item.status = item.status === TodoTaskStatusEnum.DOME
        ? TodoTaskStatusEnum.UNDONE
        : TodoTaskStatusEnum.DOME
      return { ...state, todoList: [...state.todoList] }
    }

    case TodoTaskAcitonTypeEnum.EDIT_TODO_CONTENT: {
      state.todoList.find(v => v.uuid === action.data.uuid)!.content = action.data.content
      return { ...state }
    }

    case TodoTaskAcitonTypeEnum.DELETE_TODO: {
      return { ...state, todoList: state.todoList.filter(v => v.uuid !== action.data.uuid) }
    }

    case TodoTaskAcitonTypeEnum.CLEAR_DONE: {
      return { ...state, todoList: state.todoList.filter(v => v.status !== TodoTaskStatusEnum.DOME) }
    }

    case TodoTaskAcitonTypeEnum.SET_FILTER_TYPE: {
      return { ...state, filterType: action.data.filterType }
    }
  }
}

export const [TodoProvider, useTodoStore] = createCustomStore({
  initalState,
  reducer,
  storgeKey: 'todoStore'
})