<template>
    <div class="boxRight">
        <dashboard/>
        <daily/>
        <echars/>
        <Circularprogressbar/>
        <barcharts/>
        <tablecom/>
    </div>
</template>

<script>
import dashboard from "../components/dashboard"
import daily from "../components/daily"
import echars from "../components/echars"
import Circularprogressbar from "../components/Circularprogressbar"
import barcharts from "../components/barcharts"
import tablecom from "../components/tablecom"
 export default{
     name:"componentright",
     components:{
         dashboard,
         daily,
         echars,
         Circularprogressbar,
         barcharts,
         tablecom
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
    /* height:2042px; */
    background: #e6e6e6;
    /* float: left; */
    margin-left:17%;
}

</style>