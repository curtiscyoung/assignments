let defaultState = {
    items: []
}

export function mainReducer (state = defaultState, action) {
    let newItems = [...state.items]
    switch (action.type) {
        case "POST_ITEM":
            return {
                ...state,
                items: newItems.memes
            }
        case "LOAD_DATA":
            return {
                items: action.memes
            }
        case "DELETE_ITEM":
            newItems.splice(action.index, 1)
            return {
                ...state,
                items: newItems
            }
        case "EDIT_ITEM":
            newItems[action.index] = action.meme
            return{
                ...state,
                items: newItems
            }
        default:
            return state
        }

}
