function insertionSort(input, dec = false) {
    try {
        for (var i = 1; i < input.length; i++) {
            var check = input[i];
            for (var j = i - 1; j >= 0 && input[j] > check; j--) {
                input[j + 1] = input[j];
            }
            input[j + 1] = check;
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
console.info('ase', insertionSort([10, 3, 6, 81, 0]));
console.info('dec', insertionSort([10, 3, 6, 81, 0], true));