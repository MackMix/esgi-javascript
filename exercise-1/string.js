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
    const array = str.toLowerCase().split(" ");
    for (let i = 0; i < array.length;) {
        array[i] = ucfirst(array[i++]);
    }
    return array.join("");
}

// console.log(camelCase('test test'));
// console.log(camelCase('Test Test'));
// console.log(camelCase('3est 3est'));
// console.log(camelCase('reSt reZf'));
// console.log(camelCase(''));
// console.log(camelCase(null));
// console.log(camelCase({}));

function snake_case(str) {
    if (typeof str !== "string" || str.length === 0) return "";
    const array = str.toLowerCase().split(" ");

    return array.join("_");
}

console.log(snake_case('test test'));
console.log(snake_case('Test Test'));
console.log(snake_case('3est 3est'));
console.log(snake_case('reSt reZf'));
console.log(snake_case(''));
console.log(snake_case(null));
console.log(snake_case({}));

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

console.log(leet('anaconda'));
console.log(leet('Test Test'));
console.log(leet('3est 3est'));
console.log(leet('reSt reZf'));
console.log(leet(''));
console.log(leet(null));
console.log(leet({}));