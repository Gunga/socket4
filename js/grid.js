var Grid = function(){
  this.gridState =
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
  this.slashDiagonals = [3,2,1,0,7,14] //positions based on row - column + 3
  this.backslashDiagonals = [21,28,35,36,37,38]; //positions based on row+column - 3
}


Grid.prototype = {
  reset: function(){
    this.gridState =  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
  },
  getRow: function(rowNum){
    var row = "";
    var beginning = (rowNum-1)*7; 
    for (var i = 0; i <= 6; i++)
        row+= this.gridState[beginning+i];
    return row
  },
  getColumn: function(colNum){
    var col = "";
    for (var i = colNum-1; i < this.gridState.length; i+=7)
        col+=this.gridState[i];

    return col;
  },

  getDiagonal: function(row, column, direction){
    var diagNum = 0;
    var diagonal = "";
    if (direction === "slash"){
      diagNum = row - column + 3;
      for (var i = this.slashDiagonals[diagNum] ; i < this.gridState.length; i+=8)
        diagonal += this.gridState[i];
    } else if (direction === "backslash"){
      diagNum = row + column - 5;
      for (var i = this.backslashDiagonals[diagNum] ; i >= 3; i-=6)
        diagonal += this.gridState[i]
    }

    return diagonal;
  },

  getColumnIndices: function(colNum){
    var indices = [];
    for (var i = colNum-1; i < this.gridState.length; i+=7)
        indices.push(i);

    return indices;
  },
  update: function(colNum, player){
    var indices = this.getColumnIndices(colNum);

    var columnValues = this.getColumn(colNum);
    var emptyCell = columnValues.lastIndexOf("0");

    this.gridState[indices[emptyCell]] = player+1;

    return emptyCell;
  },
}

test = new Grid();
test.gridState = 
  [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41];
