<template>
    <div class="box">
      <div class="summary">
          <h1>
              Dashboard
              <small class="app">Summary of your App</small>
          </h1>
      </div>
      <div class="home">
           <ul class="homeList">
               <li>
                   <a href="#">
                     Home
                   </a>
                  
                </li>
               <li>/</li>
               <li>
                   <a href="#">
                      Library
                   </a>
                   
                </li>
               <li>/</li>
               <li>Data</li>
           </ul>
      </div>
    </div>
</template>

<script>
 export default{
     name:"dashboard",
     data(){
         return{

         }
     }
 }
</script>
<style scoped>
.box{
    width: 97%;
    height: 155.4px;
    /* background: orange; */
    margin-top:110px;
    margin-left: 3%;
}
.summary{
    width:94%;
    height:50px;
    /* background:grey; */
    margin-top: 12px;
    line-height: 50px;
}
.summary h1{
    font-size: 27px;
    color: #333333;
    font-weight: normal;
}
.app{
    font-size:24px;
    color:#77777c;
    font-weight: normal;
}
.home{
    width: 94%;
    height:56px;
    background:white;
    border-bottom: 1px solid #dadada;
    margin-top: 37px;
}
.home a{
    font-size:12px;
    color:#747ab7;
    display:flex;
}
.home a:hover{
    text-decoration: underline;
    text-decoration-color: #23527c;
}
.homeList{
    display:flex;
    line-height: 56px;
    margin-left: 19px;
    }
.homeList li{
    margin-right: 8px;
}
.homeList li:nth-child(2){
    font-size:10px;
    color:#d2d1dd;
}
.homeList li:nth-child(4){
    font-size:10px;
    color:#d2d1dd;
}
.homeList li:nth-child(5){
    font-size:10px;
    color:#777777;
}
</style>