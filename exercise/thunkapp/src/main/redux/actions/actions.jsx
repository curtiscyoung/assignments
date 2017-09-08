import axios from "axios";

const url = "https://api.vschool.io/<Curtis>/todo/";

export function setData(data){
    return {
        type: "SET_DATA",
        data
    }
}

export function loadData(){
    return (dispatch) => {
        axios.get(url)
            .then((response)=>{
                dispatch(setData(response.data))
            })
            .catch((err) => {
                console.log(err);
            })
    }
}

export function addTodo(todo){
    return (dispatch) => {
        axios.post(url, todo)
            .then((response) =>{
                dispatch(loadData())
            })
            .catch((err) => {
                console.log(err);
            })
    }
}

export function deleteTodo(id){
    return (dispatch) => {
        axios.delete(url + id)
            .then((response) => {
                dispatch(loadData())
            })
            .catch((err) => {
                console.log(err);
            })
        }   
}

export function putTodo(id, todo){
    return (dispatch) => {
        axios.put(url + id, todo)
            .then((response) => {
                dispatch(loadData())
            })
            .catch((err) => {
                console.log(err);
            })
        }
}