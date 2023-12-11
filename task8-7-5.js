const numbers = [0, 1, 5, 3, -5, 10, -5, 4, 3, 6, 54, 4567, 0];

function getFilteredUniqNumbers(array) {
    return Array.from(new Set(array.sort((a,b) => a-b)));
}

const filteredNumbers = getFilteredUniqNumbers(numbers);
console.log(filteredNumbers);