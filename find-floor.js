function findFloor(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    //check to see if no solution can be found
    if(arr[left] >= target) return -1;

    //if max num is smaller than target
    if(arr[right] < target) return arr[right];


    while (left < right) {
        let m = Math.floor((left + right) / 2);
        // find solution
        if (arr[m] < target && arr[m + 1] >= target) {
            return arr[m];
        }
        // check left
        if (arr[m] > target) {
            right = m - 1;
        } //check right
        else {
            left = m + 1;
        }
    }


}
module.exports = findFloor