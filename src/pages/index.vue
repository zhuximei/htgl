<template>
   <div>
    <header_top/>
    <div class="centerBox">
        <contentcom/>
        <componentright/>
    </div>
    
   </div>
</template>
<script>
    import header_top from "../components/header_top"
    import contentcom from "../components/contentcom"
    import componentright from "../components/componentright"
    export default{
        name:"index",
        components:{
          header_top,
          contentcom,
          componentright
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