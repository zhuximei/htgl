<template>
   <div>
        <header_top/>
        <div class="centerBox">
            <contentcom/>
            <ulelement/>
        </div>
    
   </div>
</template>
<script>
    import header_top from "../components/header_top"
    import contentcom from "../components/contentcom"
    import ulelement from "../components/ulelement"
    export default{
        name:"UIelements",
        components:{
          header_top,
          contentcom,
          ulelement
        },
        data(){
            return{

            }
        }
    }
</script>
<style scoped>
.centerBox{
    display:flex;
}
</style>