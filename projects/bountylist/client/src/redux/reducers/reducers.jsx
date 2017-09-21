let defaultState = {
    bounties: []
}

export function mainReducer(state = defaultState, action) {
    switch (action.type) {
        case "SET_DATA": {
            return { bounties: action.data }
        }
        default:
            return state

    }
}