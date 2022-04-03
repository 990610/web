


// // const readline = require('readline');
// // const rl = readline.createInterface({
// // 　　input: process.stdin,
// // 　　output: process.stdout
// // });



// // 网易笔试题

// // L1 = a L2 = b L3 = c ................. L26 = z
// // Si = Si-1 + Li + reverse(invert(Si-1))
// // reverse 为翻转字符串，invert为反转每个字符比如a反转为z，b反转为y，c反转为x
// // S1 = a S2 = a + b + z = abz
// // S3 = abz + c + reverse(zya) = abzcayz
// // 输入n为Sn的意思，k为Sn字符串第k个字符
// // var arr = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
// function main(num,k){
//     let res = 'a'
//     for(let i=1;i<num;i++){
//         res = res + String.fromCharCode(97+i) + ReInvert(res)
//         // res = res + arr[i] + ReInvert(res)
//     }
//     res.split('')
//     console.log(res);
//     return res[k-1]
// }

// function ReInvert(str){
//     let res = ''
//     for(let i=0;i<str.length;i++){
//         const newCode = str[i].charCodeAt()
//         res = res+String.fromCharCode(122-newCode+97)
//     }
//     res = Array.from(res)
//     res.reverse()
//     res = res.join('')
//     return res;
// }
// console.log(main(2,1));




// let str = '12777.22'
// if(str.indexOf('.') == -1) {
//     console.log(str.replace(/(\d{1,3})(?=(\d{3})+$)/g,function(res){
//         console.log(res);
//         return res = res+','
//     }));
// }else {
//     let newStr = str.split('.')[0]
//     let newStr2 = str.split('.')[1]
//     console.log(newStr);
//     console.log(newStr2);
//     let result = newStr.replace(/(\d{1,3})(?=(\d{3})+$)/g,function(res){
//         return res = res+','
//     })
//     result = result +'.'+newStr2
//     console.log(result);
// }

// let str = 'abcdabcd'
// let res = false
// for(let i = 0; i < str.length; i++) {
//     for(let j = 0; j < str.length; j++) {
//         if(str[i] == str[j] && i!= j) {
//             break;
//         }else {
//             if(j == str.length-1) {
//                 res = true
//                 console.log(str[i],i);
//                 break
//             }
//         }
//     }
//     if(res) {
//         break
//     }
//     if(i == str.length - 1) {
//         console.log(-1);
//     }
// }

// let obj = { "value": 3,"left": { "value": 9, "left": {"value": 15, "left": null, "right": null }, "right": { "value": 7, "left": null,"right": null } }, "right": { "value": 9, "left": {"value": 15, "left": null, "right": null }, "right": { "value": 7, "left": null,"right": null } }}
// let count = 0;
// function getTreeChild(obj) {
//     if(obj.left != null) {
//         getTreeChild(obj.left)
//     }
//     if(obj.right != null) {
//         getTreeChild(obj.right)
//     }
//     if(obj.right == null && ! obj.left) {
//         count++
//     }
// }
// getTreeChild(obj)
// console.log(count);


// let arr = [{x:900,y:100},{x:100,y:100},{x:200,y:700}]
// let maxNum = 0//最大boss
// let num = 0//战斗力的累加
// let numArr = []//存放所以x值
// let res = []//存放满足条件的x值
// function fondMax() {
//     for(let j = 0; j < arr.length; j++) {
//         numArr.push(arr[j].x)
//     }
//     maxNum = Math.max(...numArr)
//     for(let i = 0; i < arr.length; i++) {
//         num = arr[i].x
//         for(let j = 0; j < arr.length; j++) {
//             num = num + arr[j].y
//         }
//         if(num > maxNum) {
//             res.push(arr[i].x)
//         }
//     }
//     return Math.min(...res)
// }
// console.log(fondMax());

// 创建一个具有唯一array值的数组，每个值不包含在其他给定的数组中。
// 注：即创建一个新数组，这个数组中的值，为第一个数字（array 参数）排除了给定数组中的值。

function differencePi(arr,list) {
    let map = new Map()
    let res = []
    arr.forEach(item => {
        map.set(item,true)
    });
    for(let i = 0; i < list.length; i++) {
        if(map.get(list[i])) {
            map.delete(list[i])
        }
    }
    console.log(map);
    console.log(map.keys());
    res = [...map.keys()]
    return res
}
// console.log(differencePi([1,2,3,4],[2,3,4,5,6]));

// 创建一个切片数组，去除array前面的n个元素。（n默认值为1。）
function dropPi(arr,num) {
    if(num) {
        arr.splice(-1,num)
    }else {
        num = 1
        arr.splice(-1,1)
    }
    return arr
}

// console.log(dropPi([1,2,3,4,5],1));
let arr = [1,2,3]
let list = arr.slice(-2)
// console.log(arr.splice(-1,));
// console.log(list);













function fondFather(str) {
    let strArr = str.split(',')
    let tempArr = [...strArr]
    let res = []

    strArr = strArr.sort((a,b) => {
        return (a.length - b.length)
    })

    if(!(strArr.length > 1)) {
        return ''
    }

    for(let i = 0,j = strArr.length-2; i < j; i++) {
        let lastItem = strArr.pop()
        let temp = strArr.filter(item => {
            let notEqual = item.split('/').length !== lastItem.split('/').length
            return notEqual && lastItem.includes(item)
        })
        res = [...new Set([...res, ...temp])]
    }
    return tempArr.filter(item => {
        return res.includes(item)
    }).join(',')
}
// fondFather('/a,/a/b,/a/c,/b/c,/b/c/d,/b/cf')
// console.log(fondFather('/a,/a/b,/a/c,/b/c,/b/c/d,/b/cf'));

let flag = 0
// lable-name, 
let arrp = [
    {
        lable: '1',
        value: 1,
        child: [
            {
                lable:'11',
                value: 2
            }
        ]
    }
]

function fun(arr) {
    arr.forEach((item) => {
        if(item.lable) {
            item.name = item.lable
            delete item.lable
        }

    })
    console.log(arr);
}
fun(arrp)









