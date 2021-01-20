const DEFAULT_STATE = {
  name: ''
}

const day1Reducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case 'DAY1_SET_NAME':
      return { ...state, name: action.value }
    default:
      return state
  }
}

export default day1Reducer
