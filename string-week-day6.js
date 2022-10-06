function removeDecoy(string, number) {
    let newString = '';
    for (let i = 0; i < string.length; i++) {
        if ((i + 1)% number == 0) {
            
        }
        else {
            newString += string[i]; 
        }
    }
    return newString; 
}