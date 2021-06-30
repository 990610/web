//导入
import{flag,sum} from "./first.js";

if(flag){
  console.log('这是second文件');
  console.log(sum(20,30));
}
//导入所有 放在一个对象里
import * as all from "./first.js";
console.log(all.flag);



