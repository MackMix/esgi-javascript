function type_check_v1(value, type){
    if(typeof value == "object" && type == "array") return Array.isArray(value);
    if(typeof value == "object" && type == "null") return value === null;
    return typeof value === type;
}
// console.log(type_check_v1(1,"number"));
// console.log(type_check_v1(null,"null"));
// console.log(type_check_v1( true,"null"));
// console.log(type_check_v1( null,"object"));
// console.log(type_check_v1([1,2],"array"));
// console.log(type_check_v1( true,"array"));
// console.log(type_check_v1(undefined,"undefined"));
// console.log(type_check_v1(true,"undefined"));
// console.log(type_check_v1(function yo() {return yo;},"function"));