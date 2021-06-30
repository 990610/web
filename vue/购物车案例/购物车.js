const box = new Vue({  
  el:'#box',
  data:{
  goods:[
  {
    id: 1,
    name:'衣服',
    price:'168.00',
    count:1
  },
  {
    id: 2,
    name:'口红',
    price:'88.00',
    count:1
  },
  {
    id: 3,
    name:'香水',
    price:'888.00',
    count:1
  },
  {
    id: 4,
    name:'卫衣',
    price:'128.00',
    count:1
  },]
  },
  methods:{
    //添加¥符号，可以用过滤器
    /* getFinalPrice(price){
      return '¥'+ price
    }, */
    increment(index){
      this.goods[index].count++
      
    },
    decrement(index){
      if(this.goods[index].count>1){
        this.goods[index].count--
      }
      //或者设置disable属性为true
    },
    remove(index){
      this.goods.splice(index,1)
    }
  },
  computed:{
    totalPrice(){
      let totalPrice = 0
      for(let i = 0;i < this.goods.length; i++){
      totalPrice += this.goods[i].price * this.goods[i].count
      }
      return totalPrice
    },
  },
  //过滤器
  filters:{
    showPrice(price){
      return '¥'+ price
    }

  }
});