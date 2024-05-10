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
    },

    shellSort: function(arr, order) {
        var comparisons = 0;
        var exchanges = 0;
        var n = arr.length;
        for (var gap = Math.floor(n / 2); gap > 0; gap = Math.floor(gap / 2)) {
            for (var i = gap; i < n; i++) {
                var temp = arr[i];
                var j = i;
                while (j >= gap && ((order === 'asc' && arr[j - gap] > temp) || (order === 'desc' && arr[j - gap] < temp))) {
                    comparisons++;
                    arr[j] = arr[j - gap];
                    j -= gap;
                    exchanges++;
                }
                arr[j] = temp;
            }
        }
        console.log("Shell Sort - Comparisons: " + comparisons + ", Exchanges: " + exchanges);
        return arr;
    },

    quickSort: function(arr, order) {
        function partition(arr, low, high) {
            var pivot = arr[Math.floor((low + high) / 2)];
            var i = low - 1;
            var j = high + 1;
            while (true) {
                do {
                    i++;
                    comparisons++;
                } while ((order === 'asc' && arr[i] < pivot) || (order === 'desc' && arr[i] > pivot));

                do {
                    j--;
                    comparisons++;
                } while ((order === 'asc' && arr[j] > pivot) || (order === 'desc' && arr[j] < pivot));

                if (i >= j) return j;

                exchanges++;
                var temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }

        function quickSortHelper(arr, low, high) {
            if (low < high) {
                var partitionIndex = partition(arr, low, high);
                quickSortHelper(arr, low, partitionIndex);
                quickSortHelper(arr, partitionIndex + 1, high);
            }
        }

        var comparisons = 0;
        var exchanges = 0;
        quickSortHelper(arr, 0, arr.length - 1);
        console.log("Quick Sort - Comparisons: " + comparisons + ", Exchanges: " + exchanges);
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

const shellSortedDescending = SortingLibrary.shellSort(array.slice(), 'desc');
console.log('Shell Sort (за спаданням):');
console.log(shellSortedDescending);

const quickSortedDescending = SortingLibrary.quickSort(array.slice(), 'desc');
console.log('Quick Sort (за спаданням):');
console.log(quickSortedDescending);

function generateRandomArray(length) {
    const array = [];
    for (let i = 0; i < length; i++) {
        array.push(Math.floor(Math.random() * 300) + 1); 
    }
    return array;
}

