function swapLetter(string){
    const lower = 'abcdefghijklmnopqrstuvwxyz';
    let result = '';
    let length = lower.length; 

    for (let i = 0; i < string.length; i++) {
        let index; 
        let letter = string[i].toLowerCase(); 
        if (lower.includes(letter)) {
            if (string[i] == string[i].toUpperCase()) {
                index = lower.indexOf(letter) + 1; 
                result += lower[length - index]; 
            }
            else {
                index = lower.indexOf(letter) + 1;
                result += lower[length - index].toUpperCase(); 
            }
        }
        else {
            result += string[i]; 
        }
    }
    return result; 
}