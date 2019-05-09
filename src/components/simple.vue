<template>
<div>
 <div class="box">
     <div class="boxLeft">
         <div class="panel-heading">
             Simple Progress Bars
         </div>
         <div class="progressBars">
             <el-progress :text-inside="true" :stroke-width="18" :percentage="40" color="#5cb85c"></el-progress>
             <el-progress :text-inside="true" :stroke-width="18" :percentage="20" color="#5bc0de"></el-progress>
             <el-progress :text-inside="true" :stroke-width="18" :percentage="60" color="#f0ad4e"></el-progress>
             <el-progress :text-inside="true" :stroke-width="18" :percentage="80" color="#d9534f"></el-progress>
         </div>
     </div>
     <div class="boxRight">
         <div class="panel-heading">
            Progress Bars
         </div>
         <div class="progress">
                <div class="loderBox">
                    <div class="loader"></div>
                </div>
                <div class="loderBox">
                    <div class="loader loaders"></div>
                </div>
                <div class="loderBox">
                    <div class="loader loaderes"></div>
                </div>
                <div class="loderBox">
                    <div class="loader lodered"></div>
                </div>
         </div>
     </div>
 </div>
 <div class="animation">
    <div class="animation_left">
        <div class="panel-heading">
             Animated Progress Bars
        </div>
        <div class="animation_Bar">
            <div class="loderBox">
                    <div class="loader_box"></div>
            </div>
        </div>
    </div>
    <div class="animation_right">
        <div class="panel-heading">
             Stacked Progress Bars
        </div>
        <div class="stack">
            <div class="stackBox">
                <div class="stackLeft"></div>
                <div class="stackCenter"></div>
                <div class="stackRight"></div>
            </div>
        </div>
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
    height:285px;
    /* background:greenyellow; */
    margin-left: 3%;
    margin-top:27px;
    display: flex;
}
.boxLeft{
    width:49%;
    height:285px;
    background:white;
}
.panel-heading{
    font-size:16px;
    color: #000;
    font-weight: bold;
    padding: 15px 15px 0px;
}
.progressBars{
    width:94%;
    height: 190px;
    /* background: sandybrown; */
    margin-top: 20px;
    margin-left: 3%;  
}
.el-progress{
    margin-bottom:25px;
}
.boxRight{
    width:49%;
    height:285px;
    background:white;
    margin-left: 22px;
}
.progress{
    width:94%;
    height: 190px;
    /* background: sandybrown; */
    margin-top: 20px;
    margin-left: 3%;
}
.loderBox{
    width: 100%;
    height: 18px;
    background: #f5f5f5;
    border-radius:5px;
    margin-bottom: 25px;
}
@keyframes loader{
    0% {
 
    }
    100% {
    background-position:200px;  
    }
}
.loader{
    width:40%;
    height: 18px;
    /* border-radius: 10px; */
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    margin: 0;
    padding: 0;
    /* background: #fff; */
    background-image: linear-gradient(45deg, #5cb85c 32%,#74c374 33%,#74c374 66%,#5cb85c 67%);
    background-size: 60px 18px;
    /* animation: loader 5s linear infinite;   */
}
.loaders{
    width:20%;
    height: 18px;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    margin: 0;
    padding: 0;
    background-image: linear-gradient(45deg, #5bc0de 32%,#73c9e3 33%,#73c9e3 66%,#5bc0de 67%);
    background-size: 60px 18px;
    /* animation: loader 5s linear infinite;   */
}
.loaderes{
    width:60%;
    height: 18px;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    margin: 0;
    padding: 0;
    background-image: linear-gradient(45deg, #f0ad4e 32%,#f2b968 33%,#f2b968 66%,#f0ad4e 67%);
    background-size: 60px 18px;
    /* animation: loader 5s linear infinite;   */
}
.lodered{
    width:80%;
    height: 18px;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    margin: 0;
    padding: 0;
    background-image: linear-gradient(45deg, #d9534f 32%,#df6d69 33%,#df6d69 66%,#d9534f 67%);
    background-size: 60px 18px;
    /* animation: loader 5s linear infinite;   */
}
.animation{
    width: 94%;
    height:137px;
    /* background: #74c374; */
    margin-left: 3%;
    margin-top:27px;
    display: flex;
}
.animation_left{
    width:49%;
    height:137px;
    background:white;
}
.animation_Bar{
    width:94%;
    height:70px;
    /* background: sandybrown; */
    margin-top: 20px;
    margin-left: 3%;
    border-radius: 5px;
}
.loader_box{
    width:40%;
    height: 18px;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    margin: 0;
    padding: 0;
    background-image: linear-gradient(45deg, #337ab7 32%,#518ec2 33%,#518ec2 66%,#337ab7 67%);
    background-size: 60px 18px;
    animation: loader 5s linear infinite;  
}
.animation_right{
    width:49%;
    height:137px;
    background:white;
    margin-left: 22px;
}
.stack{
    width:94%;
    height:70px;
    /* background:slateblue; */
    margin-top: 20px;
    margin-left: 3%;
    border-radius: 5px;
}
.stackBox{
    width: 100%;
    height: 18px;
    background: #f5f5f5;
    border-radius: 5px;
    display: flex;
}
.stackLeft{
    width:33%;
    height: 18px;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    background: #5cb85c;
}
.stackCenter{
    width:19%;
    height: 18px;
    background: #f0ad4e;
}
.stackRight{
    width:9%;
    height: 18px;
    background: #d9534f;
}
</style>