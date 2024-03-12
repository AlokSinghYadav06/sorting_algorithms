function mergeSort(arr) {
    var n = arr.length;
    if (n < 2) {
        return;
    }

    var middle = Math.floor(n / 2);
    var left = arr.slice(0, middle);
    var right = arr.slice(middle);

    mergeSort(left);
    mergeSort(right);
    merge(arr, left, right);
}

function merge(arr, left, right) {
    var i = 0, j = 0, k = 0;
    while (i < left.length && j < right.length) {
        if (left[i] <= right[j]) {
            arr[k] = left[i];
            i++;
        } else {
            arr[k] = right[j];
            j++;
        }
        k++;
    }

    while (i < left.length) {
        arr[k] = left[i];
        i++;
        k++;
    }

    while (j < right.length) {
        arr[k] = right[j];
        j++;
        k++;
    }
}

var arr = [64, 34, 25, 12, 22, 11, 90];
mergeSort(arr);
console.log("Sorted array: " + arr.join(" "));