var SortingLibrary = {
    bubbleSort: function(arr, order) {
        var comparisons = 0;
        var exchanges = 0;
        var n = arr.length;
        for (var i = 0; i < n - 1; i++) {
            for (var j = 0; j < n - i - 1; j++) {
                comparisons++;
                if ((order === 'asc' && arr[j] > arr[j + 1]) || (order === 'desc' && arr[j] < arr[j + 1])) {
                    exchanges++;
                    var temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                }
            }
        }
        console.log("Bubble Sort - Comparisons: " + comparisons + ", Exchanges: " + exchanges);
        return arr;
    },

    selectionSort: function(arr, order) {
        var comparisons = 0;
        var exchanges = 0;
        var n = arr.length;
        for (var i = 0; i < n - 1; i++) {
            var minIndex = i;
            for (var j = i + 1; j < n; j++) {
                comparisons++;
                if ((order === 'asc' && arr[j] < arr[minIndex]) || (order === 'desc' && arr[j] > arr[minIndex])) {
                    minIndex = j;
                }
            }
            if (minIndex !== i) {
                exchanges++;
                var temp = arr[i];
                arr[i] = arr[minIndex];
                arr[minIndex] = temp;
            }
        }
        console.log("Selection Sort - Comparisons: " + comparisons + ", Exchanges: " + exchanges);
        return arr;
    },

    insertionSort: function(arr, order) {
        var comparisons = 0;
        var exchanges = 0;
        var n = arr.length;
        for (var i = 1; i < n; i++) {
            var current = arr[i];
            var j = i - 1;
            while (j >= 0 && ((order === 'asc' && arr[j] > current) || (order === 'desc' && arr[j] < current))) {
                comparisons++;
                arr[j + 1] = arr[j];
                j--;
                exchanges++;
            }
            arr[j + 1] = current;
        }
        console.log("Insertion Sort - Comparisons: " + comparisons + ", Exchanges: " + exchanges);
        return arr;
    }
};

const array = generateRandomArray(100); 
console.log('Початковий масив:');
console.log(array);

const bubbleSortedDescending = SortingLibrary.bubbleSort(array.slice(), 'desc');
console.log('Bubble Sort (за спаданням):');
console.log(bubbleSortedDescending);

const selectionSortedDescending = SortingLibrary.selectionSort(array.slice(), 'desc');
console.log('Selection Sort (за спаданням):');
console.log(selectionSortedDescending);

const insertionSortedDescending = SortingLibrary.insertionSort(array.slice(), 'desc');
console.log('Insertion Sort (за спаданням):');
console.log(insertionSortedDescending);

function generateRandomArray(length) {
    const array = [];
    for (let i = 0; i < length; i++) {
        array.push(Math.floor(Math.random() * 300) + 1); 
    }
    return array;
}
