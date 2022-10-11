function filterMessage(string) {
    const secrets = ['S', 'p', 'a', 'c', 'e'];
    for (let letter of secrets) {
        string.replaceAll(letter, ' '); 
    }
    return string; 
}

const msg = 'sfQmg4ly#viOS1hcDjVV^PpYWLuDM2.aA#1t00!wVdEHDedbv'; 