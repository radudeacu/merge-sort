// Merge sort works by:

// Dividing the array into two halves.
// Recursively sorting each half.
// Merging the two sorted halves back together.
// Steps in Merge Sort
// Divide: Split the array into two halves.
// Conquer: Recursively sort the two halves.
// Combine: Merge the two sorted halves into a single sorted array.


function mergeSort(array) {
    if (array.length <= 1) {
        return array;
    }

    // Divide the array into two halves
    const mid = Math.floor(array.length / 2);
    const arrayOne = array.slice(0, mid);
    const arrayTwo = array.slice(mid);
    // console.log("array one: " + " " + arrayOne);
    // console.log("array two: " + " " + arrayTwo);

    // Recursively sort each half
    const sortedArrayOne = mergeSort(arrayOne);
    const sortedArrayTwo = mergeSort(arrayTwo);
    // console.log("sorted array one: " + " " + sortedArrayOne);
    // console.log("sorted array two: " + " " + sortedArrayTwo);

    // Merge the sorted halves
    return merge(sortedArrayOne, sortedArrayTwo);
}

function merge(arrayOne, arrayTwo) {
    const mergedArray = [];

    // Merge arrays while both have elements
    while (arrayOne.length > 0 && arrayTwo.length > 0) {
        if (arrayOne[0] <= arrayTwo[0]) {
            mergedArray.push(arrayOne.shift());
        } else {
            mergedArray.push(arrayTwo.shift());
        }
    }

    // Add remaining elements from arrayOne
    while (arrayOne.length > 0) {
        mergedArray.push(arrayOne.shift());
    }

    // Add remaining elements from arrayTwo
    while (arrayTwo.length > 0) {
        mergedArray.push(arrayTwo.shift());
    }

    return mergedArray;
}

// Example usage:
const unsortedArray = [2, 8, 5, 3, 9, 4, 1, 7];
const sortedArray = mergeSort(unsortedArray);
console.log(sortedArray);
