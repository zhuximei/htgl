<template>
    <div class="boxRight">
        <tableBox/>
        <echars/>
        <barcharts/>
    </div>
</template>

<script>
import tableBox from "../components/tableBox"
import echars from "../components/echars"
import barcharts from "../components/barcharts"
 export default{
     name:"ulelement",
     components:{
         tableBox,
         echars,
         barcharts
    
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
    margin-left:17%;
}

</style>