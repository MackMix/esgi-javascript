String.prototype.ucfirst = function () {
    if (this.length === 0) return "";
    return this[0].toUpperCase() + this.substring(1);
};

String.prototype.capitalize = function() {
    if (this.length === 0) return "";
    const array = this.toLowerCase().split(" ");
    for (let i = 0; i < array.length;) {
        array[i] = array[i++].ucfirst();
    }
    return array.join(" ");
};

String.prototype.camelCase = function() {
    if (this.length === 0) return "";
    var str = this;
    for (let j = 0; j < str.length; j++) {
        str = str.replace(/[^A-Za-z0-9\\ ]/gi, " ");
    }
    const array = str.toLowerCase().split(" ");
    for (let i = 0; i < array.length;) {
        array[i] = array[i++].ucfirst();
    }
    return array.join("");
};


console.log('maxime'.ucfirst());
console.log('maxime huet'.capitalize());
console.log('m4x1-me_ huet'.camelCase());