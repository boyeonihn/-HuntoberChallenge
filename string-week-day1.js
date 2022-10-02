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
        '9': 'q',
        'O': '0',
        'I': '1',
        'Z': '2',
        'E': '3',
        'h': '4',
        'S': '5',
        'G': '6',
        'L': '7',
        'B': '8',
        'q': '9',
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