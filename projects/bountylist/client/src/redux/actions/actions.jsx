import axios from "axios";

const url = ("http://localhost:8080/bounties/")

export function setData(data){
    return {
        type: "SET_DATA",
        data
    }
}

export function loadData(){
    return (dispatch) =>{
        axios.get(url)
            .then((response) =>{
                dispatch(setData(response.data.data))
            })
            .catch((err) =>{
                console.log(err)
            }) 
    }
}

export function postData(bounty){
    console.log(bounty);
    return (dispatch) =>{
        axios.post(url, bounty) 
            .then((response)=>{
                dispatch(loadData())
            })
            .catch((err) =>{
                console.log(err)
            })
        }
            
    }

export function deleteData(id){
    return (dispatch) =>{
        axios.delete(url + id)
            .then((response)=>{
                dispatch(loadData())
            })
            .catch((err) =>{
                console.log(err)
            })
        }
}

export function editData(id, bounty){
    return (dispatch) => {
        axios.put(url + id, bounty)
            .then((response) =>{
                dispatch(loadData())
            })
            .catch((err) =>{
                console.log(err)
            })
        }
    }

export function getOne(id){
    return (dispatch) =>{
        axios.get(url, id)
            .then((response) =>{
                dispatch(loadData())
            })
            .catch((err) => {
                console.log(err)
            })
        }
    }
