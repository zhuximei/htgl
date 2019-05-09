<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import index from "./pages/index"
import UIelements from "./pages/UIelements"
import forms from "./pages/forms"
import tab_panel from "./pages/tab_panel"
export default {
  name: 'App',
   components:{
    index,
    UIelements,
    forms,
    tab_panel
  }
}
</script>

<style>
body,p,dl,dd,ul,ol,li,div,h1,h2,h3,h4,h5,h6,form,input,table,tr,td{
	margin:0;
	padding:0;
}
body{
	font-family: "微软雅黑",Arial;
	background: #e9ecf0;
  /* width: 100%;
	height: 100%;
  box-sizing:border-box;
	display: -webkit-flex;
	flex-direction:column; */
} 
#app{
  width: 100%;
  height: 100%;
}

ul,ol{
	list-style:none;
}
img{
	border: 0;
}
a{
  text-decoration: none;
}
</style>
