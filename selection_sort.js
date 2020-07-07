function checkLow(input, i, j) {
    try {
        if (input[i] > input[j]) {
            var temp = input[i];
            input[i] = input[j];
            input[j] = temp;
        }
    } catch (e) {
        console.error(e);
    }

}

function selectionSort(input, dec = false) {
    try {
        for (var i = 0; i < input.length; i++) {
            for (var j = i + 1; j < input.length; j++) {
                checkLow(input, i, j);
            }
        }
        if (dec == true) {
            return input.reverse();
        }
        return input;
    } catch (e) {
        console.error(e);
        return [];
    }

}
console.clear();
console.info('ase', selectionSort([10, 2, 3, 0, -1, 35, 6]));
console.info('dec', selectionSort([10, 2, 3, 0, -1, 35, 6], true));