function sortArray(array) {
    array = array.sort((a,b) => {
        if (!a.includes('a') && b.includes('a')) return 1;
        else if (a.includes('a') && b.includes('a')) return 0; 
        else if (a.includes('a') && !b.includes('a')) return -1; 
        else {
            if (a.length > 3 && b.length <= 3) return 1; 
            else if (a.length <= 3 && b.length > 3) return -1; 
            else return 0; 
        }
    })
    return array; 
}