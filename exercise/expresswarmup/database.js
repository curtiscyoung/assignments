const uuid4 = require("uuid4");

const Database = function(){
    this.items = []
}


////GET LIST///////
Database.prototype.find = function(){
    return this.items;
}

////POST ITEM//////
Database.prototype.save = function(item){
    //give the teacup an id
    item._id = uuid4();
    //add to array
    this.items.push(item);
    //return item
    return item;
}


////GET ONE///////
Database.prototype.findOne = function(id){
    let retrievedItem;
    this.items.forEach((item) => {
        if (id === item._id){
            retrievedItem = item
        }
    })
    return retrievedItem
}


////EDIT ITEM/////
Database.prototype.findOneAndUpdate = function(id, editedItem){
    let newItem;
    this.items.forEach((item, index) => {
        if (id === item._id){
            let oldItem = this.items[index]  
            newItem = Object.assign(oldItem, editedItem)
            oldItem = newItem
            
        }
    })
    return newItem;
}


/////DELETE ITEM////////
Database.prototype.findOneAndRemove = function(id){
    let removedItem;
    this.items.forEach((item, index) => {
        //find matching id
        if (id === item._id){
           removedItem = this.items.splice(index, 1)
           
        }
    })
    return removedItem[0];
}

module.exports = Database;