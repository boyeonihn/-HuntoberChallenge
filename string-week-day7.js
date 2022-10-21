function swapLetter(string){
    const abc = 'abcdefghijklmnopqrstuvwxyz';
    let result = '';
    let length = abc.length; 

    for (let i = 0; i < string.length; i++) {
        let index; 
        let letter = string[i].toLowerCase(); 
        if (abc.includes(letter)) {
            if (string[i] == string[i].toUpperCase()) {
                index = abc.indexOf(letter) + 1; 
                result += abc[length - index]; 
            }
            else {
                index = abc.indexOf(letter) + 1;
                result += abc[length - index].toUpperCase(); 
            }
        }
        else {
            result += string[i]; 
        }
    }
    return result; 
}

// FINAL ANSWER - 'HUNTOBER 1 week down. #100Devs WE GO GET!!'