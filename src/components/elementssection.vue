<template>
    <div class="UIelement">
          <h1>
              UI Elements
              <small class="app">This is your UI elements section</small>
          </h1>
    </div>
</template>
<script>
 export default{
     name:"elementssection",
     data(){
         return{

         }
     }
 }
</script>
<style scoped>
.UIelement{
    width: 94%;
    height:79.4px;
    /* background: orange; */
    margin-left: 3%;
    margin-top:115px;
    margin-bottom: 39px;
}
.UIelement h1{
    font-size:34px;
    color:#333333;
    font-weight: normal;
    line-height: 79.4px;
}
.app{
    font-size:29px;
    color:#777777;
    font-weight: 100;
    line-height: 79.4px;
}
</style>