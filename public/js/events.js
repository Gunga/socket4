var Event = function (details){
  this.player = details.player;
  this.row = details.row;
  this.column = details.column;
  this.previous;
}

var EventLog = function (genesis) {
  this.genesis = genesis;
  this.events = {"tail": genesis};
}

EventLog.prototype = {
  addEvent: function(e){
    var prev = this.events["tail"];
    e.previous = this.hashPointer(prev);
    this.events[e.previous] = prev;
    this.events["tail"] = e;
  },
  hashPointer: function(e){
    var bitArray = sjcl.hash.sha256.hash(e);  
    return sjcl.codec.hex.fromBits(bitArray);
  },
  validateUpdatedLog: function(eventLog){
    
  }
}
