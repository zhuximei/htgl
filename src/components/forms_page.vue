<template>
    <div class="boxRight">
        <best_form/>
        <formBox/>
    </div> 
   
</template>

<script>
import best_form from "../components/best_form"
import formBox from "../components/formBox"
 export default{
     name:"forms_page",
     components:{
         best_form,
         formBox
     },
     data(){
         return{

         }
     }
 }
</script>
<style scoped>
.boxRight{
    width:83%;
    height:2042px;
    background:#e6e6e6;
    /* float: left; */
    margin-left:17%;
}

</style>