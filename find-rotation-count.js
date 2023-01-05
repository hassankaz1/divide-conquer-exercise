function findRotationCount(arr) {

    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        let m = Math.floor((left + right) / 2);

        //check if found (i > i+1)
        if (m < right && arr[m] > arr[m + 1]) {
            return m+1;
        }

        if (m > left && arr[m] < arr[m - 1]) {
            return m;
        }

        if (arr[m] > arr[right]) {
            left = m + 1;
        }
        else {
            right = m - 1;
        }
    }
    return 0;
}


module.exports = findRotationCount