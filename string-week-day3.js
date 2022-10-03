function filterMessage(string) {
    const key = ['S', 'p', 'a', 'c', 'e'];
    for (let letter of key) {
        string.replace(letter, ' '); 
    }
    return string; 
}
