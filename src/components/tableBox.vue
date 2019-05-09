<template>
    <div class="box">
            <div class="summary">
                <h1>
                   Charts 
                    <small class="app">Show up your stats</small>
                </h1>
            </div>
    </div>
</template>

<script>
 export default{
     name:"tab_panel",
     data(){
         return{

         }
     }
 }
</script>
<style scoped>
.box{
    width: 94%;
    height:79.4px;
    /* background: orange; */
    margin-top:110px;
    margin-left: 3%;
}
.summary{
    width:94%;
    height:50px;
    /* background:grey; */
    margin-top: 12px;
    line-height:79.4px;
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
</style>