var Stage = function() {
  this.stage = new Kinetic.Stage({
    container: 'game',
    width: 800,
    height: 500,
  });

  this.backLayer = new Kinetic.Layer();
  this.backLayer.add(this.generateBackground());

  this.coinLayer = new Kinetic.Layer();
  
  this.frontLayer = new Kinetic.Layer();
  this.generateBoard()

  this.stage.add(this.backLayer, this.coinLayer, this.frontLayer)
}


Stage.prototype = {
  refresh: function() {
    this.stage.draw();
  },
  generateBackground: function(){
    var background = new Kinetic.Group();

    var bg = new Kinetic.Rect({
      width:800,
      height: 350,
      fill: "#9CCF31"
    });

    var table = new Kinetic.Rect({
      y: 350,
      width:800,
      height: 150,
      fill: "#FF9E00"
    });
    background.add(bg, table);

    return background;
  },
  generateBoard: function(){
    var board = new Kinetic.Group();

    var boardImg = new Image();
    boardImg.onload = function() {
      var image = new Kinetic.Image({
        x: 112,
        y: 50,
        image: boardImg,
        width: 576,
        height: 432
      });
      this.frontLayer.add(image);
      this.refresh();
    }.bind(this);
    boardImg.src = 'img/board.png'
  },
  yellowCoin: function(){
    var coin = new Kinetic.Circle({
      x: 35,
      y: 34,
      radius: 33,
      fill: '#F7D708',
      stroke: 'black',
      strokeWidth: 2,
      draggable: true
    });

    return coin;
  },
  redCoin: function(){
    var coin = new Kinetic.Circle({
      x: 765,
      y: 34,
      radius: 33,
      fill: '#CE0000',
      stroke: 'black',
      strokeWidth: 2,
      draggable: true
    });

    return coin;
  },
  addCoin: function(player){
    var coin;

    if(player === 0)
      coin = this.yellowCoin();
    else
      coin = this.redCoin();

    this.coinLayer.add(coin);
    this.refresh();

    return coin;
  },
  animateFall: function(e, row){
    var velocity = 50;
    var game = this;
    var drop = 445 - 70*row
    var startPoint = e.target.y();
    var anim = new Kinetic.Animation(function(frame) {
      if ( e.target.y() >= drop){
        this.stop();
      } else {
        var t = (frame.time / 1000);
        var disp = startPoint + velocity * t + 9040*t*t;
        if(disp >= drop)
          e.target.y(drop);
        else
          e.target.y(disp);
      }
    }, this.coinLayer);

    anim.start();
  },
  getColumnFromX: function(xCoord){
    if(137 <= xCoord && xCoord < 219){
      return 1;
    } else if(219 <= xCoord && xCoord < 291){
      return 2;
    } else if(291 <= xCoord && xCoord < 363){
      return 3;
    } else if(363 <= xCoord && xCoord < 435){
      return 4;
    } else if(435 <= xCoord && xCoord < 507){
      return 5;
    } else if(507 <= xCoord && xCoord < 579){
      return 6;
    } else if(579 <= xCoord && xCoord < 687){
      return 7;
    }
  }

}
