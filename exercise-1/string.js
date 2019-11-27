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

    // return str.toLowerCase()
    //     .split(' ')
    //     .map(function (item) {
    //         return ucfirst(item);
    //     })
    //     .join(" ");
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
        str = str.replace(/[^A-Za-z\\ ]/, " ");
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
    const array = str.toLowerCase().split(" ");

    return array.join("_");
}

// console.log(snake_case('test test'));
// console.log(snake_case('Test Test'));
// console.log(snake_case('3est 3est'));
// console.log(snake_case('reSt reZf'));
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

function vig(str, key) {
    if (typeof str !== "string" || typeof key !== "string" || str.length === 0 || key.length === 0 || str.length != key.length) return "";
    for (let i = 0; i < str.length;i++) {
        str[i] = str[i].charCodeAt(65+((str[i]-65)+((key[i]%key.length)-65))%26);
    }
    return str;
}

console.log(vig('anticonstitutionnellement - foo'));
console.log(vig('antiConstiTutioNnellement '));
console.log(vig('une phrase tres tres longue mais qui ne veut absolument rien dire car c est juste un test - nawakdecheznawak'));
console.log(vig('reSt reZf'));
console.log(vig(' - test'));
console.log(vig(null));
console.log(vig({}));

