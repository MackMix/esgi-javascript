function ucfirst(str) {
    if (typeof str !== "string" || str.length === 0) return "";
    return str[0].toUpperCase() + str.substring(1);
}

function capitalize(str) {
    if (typeof str !== "string" || str.length === 0) return "";
    return str.toLowerCase()
        .split(' ')
        .map(function (item) {
            return ucfirst(item);
        })
        .join(" ");
}

function snake_case(str) {
    if (typeof str !== "string" || str.length === 0) return "";
    return str.toLowerCase().replace(/[^A-Za-z0-9]/gi, "_");
}

function leet(str) {
    if (typeof str !== "string" || str.length === 0) return "";
    return str.replace(/[aeiouy]/gi,function (car) {
        switch (car) {
            case "a":case "A":
                return 4;
            case "e":case "E":
                return 3;
            case "i":case "I":
                return 1;
            case "o":case "O":
                return 0;
            case "u":case "U":
                return "(_)";
            case "y":case "Y":
                return 7;
        }
    });
}

function verlan(str) {
    return str.split(" ").map(function (word) {
        return word.split('').reverse().join('');
    }).join(" ");
}

function yoda(str) {
    if (typeof str !== "string" || str.length === 0) return "";
    return str.split(" ").reverse().join(" ");
}

function vig(str,code) {
    while(code.length < str.length){
        code+=code;
    }
    return str.split("").map(function (car, index) {
        car = car.toLowerCase();
        const carCode = car.charCodeAt(0) -"a".charCodeAt(0);
        if(carCode<0 || carCode > 25) return car;
        const codeCode = code[index].charCodeAt(0) -"a".charCodeAt(0);
        const encodedCode =  (carCode + codeCode)%26
        return String.fromCharCode(encodedCode+'a'.charCodeAt(0));
    }).join('');
}