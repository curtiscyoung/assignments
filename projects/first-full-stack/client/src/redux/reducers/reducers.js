let defaultState = {
    reviews: [],
    currentAlbum: {},
    currentTrack: {}
}

export function mainReducer(state = defaultState, action) {
    switch (action.type) {
        case "SET_DATA": {
            return { ...state, reviews: action.data }
        }
        case "SET_TRACK": {
            return { ...state, currentTrack: action.data }
        }
        case "SET_ALBUM": {
            return { ...state, currentAlbum: action.data }
        }
        default:
            return state

    }
}