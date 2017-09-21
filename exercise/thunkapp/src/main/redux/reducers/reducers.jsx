let defaultState = {
    todos: []

}

const mainReducer = (state = defaultState, action) => {
    switch (action.type) {
        case "SET_DATA":
            return { todos: action.data }
        default: 
            return state
        }
}

export default mainReducer;