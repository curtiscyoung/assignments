export function start(amount = 1){
    return {
        type: "START",
        amount
    }
}

export function reset(){
    return {
        type: "RESET"
    }
}

export function stop(){
    return {
        type: "STOP"
    }
}

export function milli(amount = 1){
    return {
        type: "MILLI",
        amount
    }
}

export function subReset(){
    return {
        type: "SUB_RESET"
    }
}