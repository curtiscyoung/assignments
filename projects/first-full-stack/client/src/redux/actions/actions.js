import axios from "axios";
const url = ("http://localhost:7800/scubasound/")

export function setData(data){
    return {
    type: "SET_DATA",
    data
    }
}

export function setTrack(data){
    return {
        type: "SET_TRACK",
        data
    }
}

export function setAlbum(data){
    return{
        type: "SET_ALBUM",
        data
    }
}

export function loadAlbum(id, review){
    return (dispatch) =>{
        axios.get(url + id, review)
            .then((response) =>{
                dispatch(setAlbum(response.data.data))
            })
            .catch((err) =>{
                console.log(err);
            })
    }
}

export function loadTrack(id){
    return (dispatch) =>{
        axios.get(url + id)
            .then((response) =>{
                dispatch(setTrack(response.data.data))
            })
            .catch((err) =>{
                console.log(err);
            })
    }
}

export function loadData(){
    return (dispatch) =>{
        axios.get(url)
            .then((response) =>{
                dispatch(setData(response.data.data))
            })
            .catch((err)=>{
                console.log(err)
            })
        
    }
}

export function postReview(review){
    return (dispatch) =>{
        axios.post(url, review)
            .then((response) =>{
                dispatch(loadData());
            })
            .catch((err) =>{
                console.log(err)
            })
    }
}

export function deleteReview(id){
    return (dispatch) =>{
        axios.delete(url + id)
            .then((response) =>{
                dispatch(loadData());
            })
            .catch((err) =>{
                console.log(err);
            })
    }
}

export function editReview(id, review){
    return (dispatch) =>{
        axios.put(url + id, review)
            .then((response) =>{
                dispatch(loadData())
            }) 
            .catch((err) =>{
                console.log(err)
            })
        }
}