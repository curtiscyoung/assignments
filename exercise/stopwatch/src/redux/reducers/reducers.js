let defaultState = {
    timeOn: false,
    counter: 0,
    mins: "00",
    secs: "00",
    mils: "00",
    toggled: true,
    millisecond: 0
}

export function mainReducer(state = defaultState, action) {
    switch (action.type) {
        case "START":
        let date= new Date(state.counter)
        let seconds = date.getSeconds();
        let mils = Math.floor(date.getMilliseconds()/ 10);
        let minutes = date.getMinutes();
            return { ...state, 
                toggled: false, 
                timeOn: true, 
                lapse: false, 
                counter: state.counter + 10,
                mins: minutes < 10 ? `0${minutes}`: minutes,
                secs: seconds < 10 ? `0${seconds}`: seconds,
                mils: mils < 10 ? `0${mils}`: mils}
        case "MILLI":
            return { ...state, millisecond: state.millisecond + action.amount}
        case "SUB_RESET":
            return { ...state, millisecond: 0}        
        case "RESET":
            return { ...state, toggled: true, timeOn: false, counter: 0, mins: "00", secs: "00", mils: "00" }
        case "STOP":
            return { ...state, toggled: true, timeOn: false}    
        default:
            return state;
    }
}
