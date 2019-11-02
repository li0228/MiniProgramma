Page({
  data:{
    name:"LiHongHao",
    students:[
      {id:1,name:"jklj", age:23},
      { id: 2, name: "dag", age: 22 },
      { id: 3, name: "jkhglj", age: 21 }
    ],
    counter:0
  },
  addCounter(){
      this.setData({
        counter:this.data.counter+1
      })
  }
})