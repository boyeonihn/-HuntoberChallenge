function decodeMessages(string) {
    let result = ''; 

    const legend = {
        '0': 'O',
        '1': 'I',
        '2': 'Z',
        '3': 'E',
        '4': 'h',
        '5': 'S',
        '6': 'G',
        '7': 'L',
        '8': 'B',
        '9': 'q'
    }

    for (let i = 0; i < string.length; i++) {
        if (string[i] in legend) {
            result += legend[string[i]]; 
        }
        else {
            result += string[i]
        }
    }
    return result; 
}