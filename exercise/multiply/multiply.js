let table = () => {
   let row = [];
    for (let i = 0; i < 10; i++){
        row.push([]);
        for (let j = 1; j < 11; j++){
            row[i].push((i + 1) * j);

        }
    }
    return row;
}




table();

module.exports = table;

