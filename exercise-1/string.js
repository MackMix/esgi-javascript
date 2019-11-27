function ucfirst(str) {
    if (typeof str !== "string" || str.length === 0) return "";
    return str[0].toUpperCase() + str.substring(1);
}

// console.log(ucfirst('test'));
// console.log(ucfirst('Test'));
// console.log(ucfirst('3est'));
// console.log(ucfirst('rest rezf'));
// console.log(ucfirst(''));
// console.log(ucfirst(null));
// console.log(ucfirst({}));

function capitalize(str) {
    if (typeof str !== "string" || str.length === 0) return "";
    const array = str.toLowerCase().split(" ");
    for (let i = 0; i < array.length;) {
        array[i] = ucfirst(array[i++]);
    }
    return array.join(" ");
}

// console.log(capitalize('test'));
// console.log(capitalize('Test'));
// console.log(capitalize('3est'));
// console.log(capitalize('reSt reZf'));
// console.log(capitalize(''));
// console.log(capitalize(null));
// console.log(capitalize({}));

function camelCase(str) {
    if (typeof str !== "string" || str.length === 0) return "";
    for (let j = 0; j < str.length; j++) {
        str = str.replace(/[^A-Za-z0-9\\ ]/gi, " ");
    }
    const array = str.toLowerCase().split(" ");
    for (let i = 0; i < array.length;) {
        array[i] = ucfirst(array[i++]);
    }
    return array.join("");
}

// console.log(camelCase('test_test'));
// console.log(camelCase('$Test T-est'));
// console.log(camelCase('3est 3est'));
// console.log(camelCase('reSt !eZf'));
// console.log(camelCase(''));
// console.log(camelCase(null));
// console.log(camelCase({}));

function snake_case(str) {
    if (typeof str !== "string" || str.length === 0) return "";
    return str.toLowerCase().replace(/[^A-Za-z0-9]/gi, "_");
}

// console.log(snake_case('test test'));
// console.log(snake_case('Test Test'));
// console.log(snake_case('3est 3est'));
// console.log(snake_case('r-St reZf'));
// console.log(snake_case(''));
// console.log(snake_case(null));
// console.log(snake_case({}));

function leet(str) {
    if (typeof str !== "string" || str.length === 0) return "";

    let voyelle = ['a', 'e', 'i', 'o', 'u', 'y'];
    let replace = ['4', '3', '1', '0', '(_)', '7'];
    for (let j = 0; j < str.length; j++) {
        for (let i = 0; i < voyelle.length; i++) {
            str = str.replace(voyelle[i], replace[i]);
        }
    }
    return str;
}

// console.log(leet('anaconda'));
// console.log(leet('Test Test'));
// console.log(leet('3est 3est'));
// console.log(leet('reSt reZf'));
// console.log(leet(''));
// console.log(leet(null));
// console.log(leet({}));

function verlan(str) {
    if (typeof str !== "string" || str.length === 0) return "";
    var array = str.split(" ");
    for (let i = 0; i < array.length;i++) {
        array[i] = array[i].split("").reverse().join("");
    }
    return array.join(" ");
}

// console.log(verlan('anaconda'));
// console.log(verlan('Test Test'));
// console.log(verlan('3est 3est'));
// console.log(verlan('reSt reZf'));
// console.log(verlan(''));
// console.log(verlan(null));
// console.log(verlan({}));

function yoda(str) {
    if (typeof str !== "string" || str.length === 0) return "";
    return str.split(" ").reverse().join(" ");
}

// console.log(yoda('anaconda'));
// console.log(yoda('Test Test'));
// console.log(yoda('3est 3est'));
// console.log(yoda('reSt reZf'));
// console.log(yoda(''));
// console.log(yoda(null));
// console.log(yoda({}));

function vig(str,code) {
    if (typeof str !== "string" || str.length === 0 || typeof code !== "string" || code.length === 0  ) return "";
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

console.log(vig('anticonstitutionnellement','foo'));
console.log(vig('antiConstiTutioNnellement ','foo'));
console.log(vig('une phrase tres tres longue mais qui ne veut absolument rien dire car c est juste un test','nawakdecheznawak'));
console.log(vig(' ','test'));
console.log(vig(null,'test'));
console.log(vig({},'test'));

function prop_access(object, path) {
    if (typeof path !== "string" || path.length === 0) return object

    return path
}

console.log(prop_access('dog','animal.type.name'));
console.log(prop_access('{"name":"dog"}',"animal.type"));
console.log(prop_access('{"name":"cat"}',"animals.1.type"));
console.log(prop_access(null,'test'));
