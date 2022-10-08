
function checkEquality(first, second) {
    for (let i = 0; i < first.length; i++) {
        let secondSubarr = second[i];
        let firstSubarr = first[i]; 
        for (let j = 0; j < firstSubarr.length; j++) {
            if (firstSubarr[j] !== secondSubarr[j]) return false; 
        }
    }
    return true; 
}