var chess = document.getElementById("chess");
var title = document.getElementById("title");
var context = chess.getContext("2d");//获得一个画图环境
context.strokeStyle = "pink";//线的颜色

function draw(){
  //绘制横线
  for(var i = 0; i < 15; i++){
    //起点坐标
    context.moveTo(15 , 15+i*30);
    //终点终点
    context.lineTo(435 , 15+i*30);
    //连接
    context.stroke();
  }
  //绘制纵线
  for(var i = 0; i < 15; i++){
    //起点坐标
    context.moveTo(15 + i*30 ,15);
    //终点终点
    context.lineTo(15 + i*30 ,435);
    //连接
    context.stroke();
  }
}
//调用绘制函数
draw();


//赢法函数,三维数组。
var win = [];
//i,j分别表示x y轴

for(var i = 0; i < 15; i++){
  win[i] = [];
  for(var j = 0; j < 15; j++){
    win[i][j] = [];
  }
}
//每一个赢法一个编号
var count = 0;
//统计横向赢法(从0-11),k表示连续5颗
for(var i = 0; i < 15; i++){//i表示y轴
  for(var j = 0; j < 11; j++){//j表示X轴前11条线
    for(var k = 0; k < 5; k++){//k表示累计5颗棋子
      win[j+k][i][count] = true;
    }
    count++;
  } 
}//165种赢法

//统计纵向赢法(从0-11),k表示连续5颗
for(var i = 0; i < 15; i++){//i表示X轴
  for(var j = 0; j < 11; j++){//j表示y轴前11条线
    for(var k = 0; k < 5; k++){//k表示累计5颗棋子
      win[i][j+k][count] = true;
    }
    count++;
  } 
}//165种赢法

//统计正斜线(\)赢法
for(var i = 0; i < 11; i++){//i表示y轴
  for(var j = 0; j < 11; j++){//j表示X轴前11条线
    for(var k = 0; k < 5; k++){//k表示累计5颗棋子
      win[i+k][j+k][count] = true;
    }
    count++;
  }
}//121种赢法

//统计反斜线/
for(var i = 0; i < 11; i++ ){//i表示X轴
  for(var j = 14; j > 3; j--){//j表示y轴4-15条
    for(var k = 0; k < 5; k++){//连续5颗棋子
      win[i+k][j-k][count] = true;
    }
    count++;
  }
}//121种赢法
//共count = 572种赢法


//定义二维数组标记棋盘上的每个坐标是否已经下了棋子
var chessBoard = [];
for(var i = 0; i < 15; i++){
  chessBoard[i] = [];
  for(var j = 0; j < 15; j++){
    chessBoard[i][j] = 0;
  }
}

//下棋
var me = true;//标记人是否落子
var over = false;//标记游戏是否结束
var myWin = [];//记录人在赢法上的分值
var computerWin = [];//记录计算机在赢法上的分值

//初始化
for(var i = 0; i < count ; i++){
  myWin[i] = 0;
  computerWin[i] = 0;
}


//点击下棋
chess.onclick = function(event){
  //var event = event || window.event;
  if(over){
    return;
  }
  if(!me){
    return;
  }

  //获取坐标
  var x = event.offsetX
  var y = event.offsetY
  //落子的位置取整
  var i = Math.floor(x/30);
  var j = Math.floor(y/30);
  //下一个棋子
  if(chessBoard[i][j] == 0){
    //下一个棋子
    oneSetp(i, j, me);

    chessBoard[i][j] == 1;

    //判断如何赢  
    for(var k = 0; k < count; k++){//k代表  第k种赢法
      if(win[i][j][k]){
        myWin[k]++;
        if(myWin[k] == 5){
          title.innerHTML = "恭喜你获胜了~~~~~~~";
          over = true;
        } 
      }
    }
  }
  
  if(!over){
    me = !me;
    //计算机落子
    computerAI();
    
    
  }
  
  


};
//计算机落子方法
function computerAI(){
  
  //空白子在人所占赢法上的分数
  var myScore = [];
  //空白子在计算机所占赢法上的分数
  var computerScore = [];
  for(var i = 0; i < 15; i++){
    myScore[i] = [];
    computerScore[i] = [];
    for(var j = 0; j < 15; j++){
      myScore[i][j] = 0;
      computerScore[i][j] = 0;
    }
    
  }
  

  var max = 0;//空白子的最大分值
  //最大分值空白子所在的坐标
  var u = 0 , v = 0;


  for (var i = 0; i < 15; i++) {
    for (var j = 0; j < 15; j++) {
        if (chessBoard[i][j] == 0) //不能下在我下过的地方
            for (var k = 0; k < count; k++) {
                if (win[i][j][k]) {//下这里可以赢
                    if (myWin[k] == 1)
                    { myScore[i][j] += 200; }
                    else if (myWin[k] == 2)
                    { myScore[i][j] += 400; }
                    else if (myWin[k] == 3)
                    { myScore[i][j] += 2000; }
                    else if (myWin[k] == 4)
                    { myScore[i][j] += 10000; }

                    if (computerWin[k] == 1)
                    { computerScore[i][j] += 200; }
                    else if (computerWin[k] == 2)
                    { computerScore[i][j] += 420; }
                    else if (computerWin[k] == 3)
                    { computerScore[i][j] += 2100; }
                    else if (computerWin[k] == 4)
                    { computerScore[i][j] += 20000; }
                }
            }
        if (myScore[i][j] > max) {
            max = myScore[i][j];
            u = i;
            v = j;
        }
        else if (myScore[i][j] == max) {
            if (computerScore[i][j] > computerScore[u][v]) {
                u = i;
                v = j;
            }
        }
        if (computerScore[i][j] > max) {
            max = computerScore[i][j];
            u = i;
            v = j;
        }
        else if (computerScore[i][j] == max) {
            if (myScore[i][j] > myScore[u][v]) {
                u = i;
                v = j;
            }
        }
    }
}

  
  
 
  oneSetp(u, v , me); 
  chessBoard[u][v] = 1;
  for(var k = 0; k < count; k++){
    if(win[u][v][k]){
      computerWin[k] +=1;
      if(computerWin[k] == 5){
        title.innerHTML = "抱歉计算机获胜~~~~";
        over = true;
      }
    }
  }
  

  if(!over){
    me = !me;
  }
  

} 






//落子的方法
function oneSetp(i , j , me){
  //起笔
  context.beginPath();
  //绘制棋子
  context.arc(15+i*30 , 15+j*30 , 13 , 0 , 2*Math.PI);
  //落笔
  context.closePath();
  //人和机，棋子颜色
  var color;
  if(me){
    color = "pink";
  }else{
    color = "black";
  }
  //画笔的颜色（线的颜色）
  context.fillStyle = color;
  //填充颜色
  context.fill();
  
}




 






