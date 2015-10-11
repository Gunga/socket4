var Game = function (options) {
  this.stage = options.stage;
  this.grid = options.grid;
  this.player = 0;
}

Game.prototype = {
  start: function(){
    this.addCurrentPlayerCoin();
  },
  coinDropped: function(e){
    var column = this.stage.getColumnFromX(e.target.x());
    if (column) {;
      var row = 5 - this.grid.update(column, this.player)
      this.stage.animateFall(e, row);
      if( this.winner(6 - row, column) )
        alert("player "+(this.player+1)+" won!");
      else
        this.changeTurns();
    } else{
      this.stage.animateFall(e, 0);
    }
  },
  changeTurns: function(){
    this.player ^= 1
    this.addCurrentPlayerCoin();
  },
  addCurrentPlayerCoin: function(){
    var coin = this.stage.addCoin(this.player);
    coin.on("click", this.coinDropped.bind(this));
  },
  winner: function(row, column){
    regex = /([1]{4}|[2]{4})/
    return this.grid.getRow(row).match(regex) ||
           this.grid.getColumn(column).match(regex) ||
           this.diagonalCheck(row, column);
  },
  diagonalCheck: function(row, column){
    return this.grid.getDiagonal(row, column, "slash").match(regex) ||
            this.grid.getDiagonal(row, column, "backslash").match(regex);
  }
}

socket4 = new Game({stage: new Stage(), grid: new Grid()});
socket4.start();
