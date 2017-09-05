let defaultState = {
    timeOn: false,
    counter: 0,
    toggled: true,
    millisecond: 0
}

export function mainReducer(state = defaultState, action) {
    switch (action.type) {
        case "START":
            return { ...state, toggled: false, timeOn: true, lapse: false, counter: state.counter + action.amount}
        case "MILLI":
            return { ...state, millisecond: state.millisecond + action.amount}
        case "SUB_RESET":
            return { ...state, millisecond: 0}        
        case "RESET":
            return { ...state, toggled: true, timeOn: false, counter: 0 }
        case "STOP":
            return { ...state, toggled: true, timeOn: false}    
        default:
            return state;
    }
}
