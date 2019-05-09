<template>
  <div class="box">
      <div class="progressBox" v-for="item in items" :key="item.index">
          <div class="title">
             <span> {{item.itemTitle}}</span>
             <!-- Customers -->
          </div>
          <div class="circleBar">
            <el-progress type="circle" :width="item.itemWidth" :height="item.itemHeight" :percentage="item.itemNum" :color="item.itemColor"></el-progress>
            <!-- 82 -->
          </div>   
      </div>
  </div>
</template>
<script>
 export default{
     name:"Circularprogressbar",
     data(){
         return{
          "items":[
              {
                  "itemTitle":"Customers",
                  "itemNum":82,
                  "itemWidth":100,
                  "itemHeight":100
              },
               {
                  "itemTitle":"Customers",
                  "itemNum":55,
                  "itemColor":"#ffb53e",
                  "itemWidth":100,
                  "itemHeight":100
              },
               {
                  "itemTitle":"Customers",
                  "itemNum":84,
                  "itemColor":"#1ebfae",
                  "itemWidth":100,
                  "itemHeight":100
              },
               {
                  "itemTitle":"Customers",
                  "itemNum":46,
                  "itemColor":"#f9243f",
                  "itemWidth":100,
                  "itemHeight":100
              }
          ]
         }
     }
 }
</script>
<style scoped>
.box{
    width:94%;
    height:213.4px;
    /* background: skyblue; */
    margin-left: 3%;
    margin-top: 24px;
    display: flex;
    justify-content: space-between;
}
.progressBox{
    width:23.5%;
    height:213.4px;
    background:white;
}
.title{
    width:100%;
    height: 29.8px;
    margin-top: 26px;
    line-height: 29.8px;
    text-align: center;
}
.title span{
    font-size:13px;
    color:#333333;
    display: block;
}
.circleBar{
    width:126px;
    height: 126px;
    margin-left:29%;
    margin-top: 24px;
}
</style>