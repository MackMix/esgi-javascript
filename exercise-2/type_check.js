function type_check_v1(value, type){
    // if (typeof type !== "string" || type.length === 0) return "";
    if(typeof value == type)return true;
    return false;
}
console.log(type_check_v1(1,"number"))