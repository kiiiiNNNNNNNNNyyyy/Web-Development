//creating a contructor so that we can create multiple constructors
function Emitter(){
    this.events = {};
}

Emitter.prototype.on = function(type, listener){
    this.events[type] = this.events[type] || []; //create a new property in the object and make sure its an array
    this.events[type].push(listener);           //insert it in that array
}

Emitter.prototype.emit = function(type){
    if(this.events[type]){
        this.events[type].forEach(function(listener){
            listener();
        });
    }
}

module.exports = Emitter;