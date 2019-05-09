<template>
   <div>
    <header_top/>
    <div class="centerBox">
        <contentcom/>
        <panelBox/>
    </div>
    
   </div>
</template>
<script>
    import header_top from "../components/header_top"
    import contentcom from "../components/contentcom"
    import panelBox from "../components/panelBox"
    export default{
        name:"index",
        components:{
          header_top,
          contentcom,
          panelBox
         
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