function type_check_v1(vari, type) {
    switch (typeof vari) {
        case 'object':
            if (Array.isArray(vari)) return type === "array";
            if (vari === null) return type === "null";
        default:
            return typeof vari === type;
    }
}

// console.log(type_check_v1(1,"number"));
// console.log(type_check_v1(null,"null"));
// console.log(type_check_v1( true,"null"));
// console.log(type_check_v1(null,"object"));
// console.log(type_check_v1([1,2],"array"));
// console.log(type_check_v1( true,"array"));
// console.log(type_check_v1(undefined,"undefined"));
// console.log(type_check_v1(true,"undefined"));
// console.log(type_check_v1(function yo() {return yo;},"function"));

function type_check_v2(value, conf) {
    for(key in conf){
        switch (key) {
            case 'type':
                if(!type_check_v1(value, conf[key])) return false;
                break;
            case 'value':
                if(value != conf[key]) return false;
                break;
            case 'enum':
                if(conf[key].indexOf(value) == -1) return false;
                break;
        }
    }
    return true;
}

console.log(type_check_v2({prop1: 1}, {type: "object"}));
console.log(type_check_v2("foo", {type: "string", value: "foo"}));
console.log(type_check_v2("bar", {type: "string", value: "foo"}));
console.log(type_check_v2(3, {enum: ["foo", "bar", 3]}));
