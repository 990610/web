// 将数组（array）拆分成多个 size 长度的区块，
function chunkPi(arr,size) {
    let result = []
    let len = Math.ceil(arr.length/size)
    for(let i = 0; i < len; i++) {
        result.push([])
        result[i] =  arr.splice(0,size)
    }
    return result
}
// console.log(chunkPi([1],1));

// 创建一个新数组，包含原数组中所有的非假值元素
function compactPi(arr) {
    return arr.filter((item) => {
        if(item) {
            return item
        }
    })
}
// console.log(compactPi([1,2,false, null,0, "", undefined, NaN,234234,'sdfa']));


console.log([] instanceof Object);




