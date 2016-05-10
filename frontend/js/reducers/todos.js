import * as types from '../constants'

const initialState = [
  {
    text: 'Use Redux',
    completed: false,
    id: 0
  },
  {
    text: 'Use Redux2',
    completed: false,
    id: 1
  }
]

export default function todos(state = initialState, action) {
  switch (action.type) {
    case types.ADD_TODO:
      return [
        {
          id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
          completed: false,
          text: action.text
        },
        ...state
      ]
      case types.RECV_ERROR:
        //TODO do something
        return state
      case types.RECV_DATA:
        return state.concat({text: 'RECV_DATA', id: 110, completed: false})
      case types.REQ_DATA:
        return state
    default:
      return state
  }
}