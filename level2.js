var arr = [1, [2, [3, [4, 5]]], 6];
//递归
function even(arr) {
    return arr.reduce((pre, cur) => {
        return pre.concat(Array.isArray(cur) ? even(cur) : cur);
    }, []);
}

//字符串S
// function even(arr){
//     return arr.toString().split(',').map(function(item){
//         return Number(item)
//     })
// }

even(arr) //[1,2,3,4,5,6]