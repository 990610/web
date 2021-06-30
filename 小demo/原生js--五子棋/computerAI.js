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
  var x = 0;
  var y = 0;


  for(var i = 0; i < 15; i++){
    for(var j = 0; j < 15; j++){
      //
      if(chessBoard[i][j] == 0){

        for(var k = 0; k < count; k++){
          if(win[i][j][k] ){

            //人分值
            if(myWin[k] == 1){
              myScore[i][j] += 200;
            }else if(myWin[k] == 2){
              myScore[i][j] += 400;
            }else if(myWin[k] == 3){
              myScore[i][j] +=2000;
            }else if(myWin[k] == 4){
              myScore[i][j] += 10000;
            }

            //计算机分值
            if(computerWin[k] == 1){
              computerScore[i][j] += 220;
            }else if(computerWin[k] == 2){
              computerScore[i][j] += 420;
            }else if(computerWin[k] == 3){
              computerScore[i][j] += 2200;
            }else if(computerWin[k] == 4){
              computerScore[i][j] += 20000;
            }
          } 
        }
        if(myScore[i][j] > max){
          max = myScore[i][j];
          x = i;
          y = j;
        }else if(myScore[i][j] == max){
          if(computerScore[i][j] > max){
          max = computerScore[i][j];
          x = i;
          y = j;
          }
        }


        if(computerScore[i][j] > max){
          max = computerScore[i][j];
          x = i;
          y = j;
        }else if(computerScore[i][j] == max){
          if(myScore[i][j] > max){
            max = myScore[i][j];
            x = i;
            y = j;
          }
        }

      }
    }

  }

  oneSetp(x , y , me); 
  chessBoard[x][y] = 1;
       
  for(var k = 0; k < count; k++){
    if(win[x][y][k]){
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





