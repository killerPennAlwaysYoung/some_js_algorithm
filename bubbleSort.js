// 冒泡排序
function bubbleSort(arr) {

    var len = arr.length;

    for (var i = 0; i < len; i++) {
        for (var j = 0; j < len - 1 - i; j++) {
            if (arr[j] > arr[j+1]) { // 相邻元素两两对比
                var temp = arr[j+1]; // 元素交换
                arr[j+1] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr
}

//测试 
var arr=[3,44,38,5,47,15,36,26,27,2,46,4,19,50,48,22,23,102,1027,1024,3354,1,23,77,66,666];
console.time("sort");
console.log(bubbleSort(arr));
console.timeEnd("sort");

// 改进后的冒泡排序
function bubbleSort2(arr) {
    var i = arr.length - 1; // 初始时，最后位置保持不变

    while(i > 0) {
        var pos = 0; // 每趟开始时，无记录交换
        for(var j = 0; j < i; j++) {
            if (arr[j] > arr[j+1]) {
                pos = j; // 记录交换的位置
                var temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
            i = pos; // 为下一排序做准备
        }
    }
    return arr
}
//测试
console.time("sort");
console.log(bubbleSort2(arr));
console.timeEnd("sort");

// 改进后的冒泡排序
function bubbleSort3(arr) {
    var low = 0;
    var high = arr.length - 1; // 设置变量的初始值
    var temp, j;

    while(low <　high) {
        for(j = low; j < high; j++) { // 正向排序，找到最大者
            if(arr[j] > arr[j+1]) {
                temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
            high--; //修改high值，前移一位
        }
        for(j = high; j > low; j--) { //反向冒泡，找到最小者
            if(arr[j] < arr[j-1]) {
                temp = arr[j];
                arr[j] = arr[j-1];
                arr[j - 1] = temp;
            }
            low++; //修改low值，后移一位
        }
    }
    return arr
}
//测试
console.time("sort");
console.log(bubbleSort3(arr));
console.timeEnd("sort");