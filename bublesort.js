function swap(a, b) {

    if (a > b) {
        var temp = a;
        a = b;
        b = temp;
    }
    return [a, b];
}
// define bubleSort
function bubleSort(inputArray, dec = false) {

    for (var i = inputArray.length; i > 0; i--) {
        for (var j = 0; j < i - 1; j++) {
            var result = swap(inputArray[j], inputArray[j + 1]);
            inputArray[j] = result[0];
            inputArray[j + 1] = result[1];
        }
    }
    if (dec == true) {
        return inputArray.reverse();
    }

    return inputArray;
}
console.clear();
console.info('dec \n', bubleSort([10, 2, 1, 5, 6, 74, 12, 0], true));
console.info('ase \n', bubleSort([10, 2, 1, 5, 6, 74, 12, 0]));