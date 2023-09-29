export enum TodoTaskStatusEnum {
  UNDONE = 'UNDONE',
  DOME = 'DOME',
}

export type TodoTask = {
  uuid: string
  status: TodoTaskStatusEnum
  content: string
}

export enum TodoTaskAcitonTypeEnum {
  ADD_TODO = 'ADD_TODO',
  CHANGE_STATUS = 'CHANGE_STATUS',
  DELETE_TODO = 'DELETE_TODO',
  EDIT_TODO_CONTENT = 'EDIT_TODO_CONTENT',
  CLEAR_DONE = 'CLEAR_DONE',
  SET_FILTER_TYPE = 'SET_FILTER_TYPE',
}