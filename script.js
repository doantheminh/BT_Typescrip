function sort(arr, compare) {
    var result = __spreadArray([], arr, true);
    for (var i = 0; i < result.length; i++) {
        for (var j = i + 1; j < result.length; j++) {
            if (compare(result[i], result[j]) > 0) {
                var temp = result[i];
                result[i] = result[j];
                result[j] = temp;
            }
        }
    }
    return result;
}
var numbers = [5, 3, 7, 1, 9];
function compareNumbers(a, b) {
    return b - a;
}
var sortedNumbers = sort(numbers, compareNumbers);
console.log(sortedNumbers);