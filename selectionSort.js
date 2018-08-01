// 选择排序
function selectionSort(arr) {

    var len = arr.length;
    var minIndex, temp;
    for(var i = 0; i < len - 1; i++) {
        minIndex = i;
        for(var j = i + 1; j < len; j++) {
            if(arr[j] < arr[minIndex]) { // 寻找最小的数
                minIndex = j;            // 将最小数的索引保存
            }
        }
        temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
    }
    return arr
}
//测试 
var arr=[3,44,38,5,47,15,36,26,27,2,46,4,19,50,48,22,23,102,1027,1024,3354,1,23,77,66,666];
console.time("sort");
console.log(selectionSort(arr));
console.timeEnd("sort");