function moveLeft(element, array) {
    let index = array.indexOf(element);
    if (index == 0) return array
    else {
        array.splice(index, 1); 
        array.splice(index-1, 0, element);
    }
    return array; 
}

function moveRight(element, array) {
    let index = array.indexOf(element);
    if (index == array.length - 1) return array
    else {
        array.splice(index, 1); 
        array.splice(index+1, 0, element);
    }
    return array; 
}