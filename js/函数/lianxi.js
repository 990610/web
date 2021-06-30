//定义一组函数，输入数字，逆转并输出汉字形式
function add() { 
    var count = 0;
    function demo() {
        count ++;
        console.log(count);
    }
    return demo;
}
var counter = add();
counter();
counter();