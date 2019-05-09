<template>
   <div>
    <header_top/>
    <div class="centerBox">
        <contentcom/>
        <forms_page/>
    </div>
    
   </div>
</template>
<script>
    import header_top from "../components/header_top"
    import contentcom from "../components/contentcom"
    import forms_page from "../components/forms_page"
    export default{
        name:"index",
        components:{
          header_top,
          contentcom,
          forms_page
         
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