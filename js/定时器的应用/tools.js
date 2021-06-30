
        /* 在300px到800px之间移动 */
        //创建一个函数，可以：
        //obj:执行动画的对象
        // attr：要修改的属性，比如left height top width
        //speed:速度
        //target:目标位置
        //callback():回调函数;
        function move(obj , attr , speed , target , callback){
            clearInterval(obj.timer);
            //判断speed的正负,
            var current = parseInt( getStyle(obj,attr));/* 获取当前位置 */
            if(current > target){
                speed = -speed;

            }
            obj.timer = setInterval(function(){   
            var oldvalue = parseInt( getStyle(obj,attr));
            var newvalue = oldvalue + speed ;
            //达到目标位置，
            if(speed < 0 && newvalue < target){
                newvalue = target ;
            }else if(speed > 0 && newvalue > target){
                newvalue = target ;
            }
            obj.style[attr] =  newvalue + "px";
            //达到目标，关闭定时器，div停下来。
            if(newvalue == target){
                clearInterval(obj.timer);
                callback && callback();
              }
           },30) ;
        }
         //处理兼容（IE8），获取样式
         function getStyle(obj , name){
            if(window.getComputedStyle){

                return getComputedStyle(obj , null)[name];
            }else{
                return obj.currentStyle[name];
            }  
        }
