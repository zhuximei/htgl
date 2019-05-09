<template>
    <div class="boxRight">
        <elementssection/>
        <message/>
        <simple/>
        <buttonexample/>
        <circleico/>
        <modals/>
    </div>
</template>

<script>
import elementssection from "../components/elementssection"
import message from "../components/message"
import simple from "../components/simple"
import buttonexample from "../components/buttonexample"
import circleico from "../components/circleico"
import modals from "../components/modals"
 export default{
     name:"ulelement",
     components:{
       elementssection,
       message,
       simple,
       buttonexample,
       circleico,
       modals
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