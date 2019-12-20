function Pilote() {
    this.origin;
    var state;

    this.receiveData = function (date) {

    };
    this.needUpdate = function () {
        
    };
    this.getState = function() {
        return state;
    };
    this.speak = function () {
        let state = this.getState();
        switch (state) {
            case "ready":
                return "Here we go!";
            case "happy":
                return "Let's have some fun!";
            case "sad":
                return "Outch!!! Damn "+this.origin;
            case "normal" :
                return "";
            default:
                console.log("Sorry, "+state+" not exist")
        }
    }
}

function Vehicule() {
    var pilote;
    this.number;
    var weapon;
    var distance;
    
}