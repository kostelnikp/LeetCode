let isPalindrome = function(x) {
    x = x.toString();
    let leftPointer = 0;
    let rightPointer = x.length - 1;

    while (x[leftPointer] === x[rightPointer]) {
        if (leftPointer >= rightPointer) {
            return true;
        }
        leftPointer++;
        rightPointer--;
    }
    return false;
}

console.log(isPalindrome(121));