export function loadData(){
    return {
        type: "LOAD_DATA", 
        memes: [
            {
             text:"blah blah blah",
             imgUrl: "blahhhh"   
            },
            ]
    }
}

export function postItem(item){
    return {
        type: "POST",
        item
    }
}

export function deleteItem(item, index){
    return {
        type: "DELETE_ITEM",
        index,
        item
    }
}

export function editItem(item, index){
    return {
        type: "EDIT_ITEM",
        index,
        item
    }
}

