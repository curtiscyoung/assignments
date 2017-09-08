let defaultState = {
    todos: []

}

let mainReducer = (state = defaultState, action) => {
    switch (action.type) {
        case "SET_DATA":
            return { todos: action.data }
        default: 
            return state
        }
}

export default mainReducer;