// 插入排序
function insertionSort(arr) {

    for(var i = 1; i < arr.length; i++) {
        var key = arr[i];
        var j = i - 1;
        while(j >= 0 && arr[j] > key) {
            arr[j+1] = arr[j];
            j--;
        }
        arr[j+1] = key;
    }
    return arr
}
//测试 
var arr=[3,44,38,5,47,15,36,26,27,2,46,4,19,50,48,22,23,102,1027,1024,3354,1,23,77,66,666];
console.time("sort");
console.log(insertionSort(arr));
console.timeEnd("sort");

//采用二分法查找插入位置
function binaryInsertionSort(arr) {

    for(var i = 1; i < arr.length; i++) {
        var key = arr[i];
        var left = 0;
        var right = i - 1;
        while(left <= right) {
            var middle = parseInt((left + right) / 2);
            if(key < arr[middle]) {
                right = middle - 1;
            }else{
                left = middle + 1;
            }
        }
        for(var j = i - 1; j >= left; j--) {
            arr[j+1] = arr[j];
        }
        arr[left] = key;
    }
    return arr
}
//测试 
var arr=[3,44,38,5,47,15,36,26,27,2,46,4,19,50,48,22,23,102,1027,1024,3354,1,23,77,66,666];
console.time("sort");
console.log(binaryInsertionSort(arr));
console.timeEnd("sort");