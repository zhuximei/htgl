<template>
<div class="box">
    <div class="boxLeft">
         <div class="panel-headding">
             Modals Example
         </div>
         <div class="clicklaunch">
             <a class="clicklaunch_btn" href="#">Click  Launch Demo Modal</a>
         </div>
    </div>
    <div class="boxRight">
        <div class="panel-headding">
             Sample Text
         </div>
         <div class="word">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et doloreullamco laboris nisi ut aliquip ex ea commodo</p>
         </div>
    </div>
</div>
</template>
<script>
 export default{
     name:"simple",
     data(){
         return{
          
         }
     }
 }
</script>
<style scoped>
.box{
    width: 94%;
    height:135.85px;
    /* background: salmon; */
    margin-top: 20px;
    margin-left: 3%;
    display: flex;
}
.boxLeft{
    width:49%;
    height:115.85px;
    background:white;
}
.panel-headding{
    font-size: 16px;
    font-weight: bold;
    color:#000;
    padding: 15px 15px 0px;
    border-color: #fff;  
}
.clicklaunch{
    width: 100%;
    height: 75.6px;
    margin-top: 26px;
    margin-left: 20px;
}
.clicklaunch_btn{
    background:#337ab7;
    font-size:14px;
    color: #fff;
    border-radius: 6px;
    padding:16px 12px;

}
.boxRight{
    width:49%;
    height:110.25px;
    background:white;
    margin-left:22px;
}
.word{
    width: 96%;
    height:70px;
    margin-left: 2%;
    margin-top: 10px;
}
.word p{
    font-size:13px;
    color:#333;
    line-height:1.42857143;
}
</style>