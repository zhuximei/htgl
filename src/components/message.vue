<template>
    <div class="UIelement">
        <div class="panel-heading">messages</div> 
        <div class="panel-body">
            <div class="alert " v-for="item in items" :key="item.index"  :style={backgroundColor:item.itembgcolor,color:item.itemcolor}>
                <!-- :color="item.itemcolor" -->
                <strong>{{item.itemtitle}}</strong>
                <!-- Well done! -->
                {{item.itemcontent}}
                 <!-- You successfully read this important alert message. -->
            </div>
        </div>
    </div>
</template>
<script>
 export default{
     name:"message",
     data(){
         return{
          "items":[
              {
                  "itemtitle":"Well done!",
                  "itemcontent":"You successfully read this important alert message",
                  "itembgcolor":"#dff0d8",
                  "itemcolor":"#3c763d"
              },
              {
                  "itemtitle":"Heads up!",
                  "itemcontent":" This alert needs your attention, but it's not super important.",
                  "itembgcolor":"#d9edf7",
                  "itemcolor":"#31708f"
              },
              {
                  "itemtitle":"Warning!",
                  "itemcontent":" Best check yo self, you're not looking too good.",
                  "itembgcolor":"#fcf8e3",
                  "itemcolor":"#8a6d3b"
              },
              {
                  "itemtitle":"Oh snap!!",
                  "itemcontent":"Change a few things up and try submitting again.",
                  "itembgcolor":"#f2dede",
                  "itemcolor":"#a94442"
              }
          ]
         }
     }
 }
</script>
<style scoped>
.UIelement{
    width: 94%;
    height:389px;
    background: white;
    margin-left: 3%;
}
.panel-heading{
    font-size: 16px;
    font-weight: bold;
    padding: 15px 15px 0px;
}
.panel-body{
    width:94%;
    height:316.4px;
    /* background: red; */
    margin-left: 3%;
    margin-top: 20px;
}
.alert{
    width:100%;
    height:50px;
    /* background: #dff0d8; */
    border: 1px solid #d6e9c6;
    border-radius: 4px;
    margin-bottom: 25px;
    font-size:14px;
    /* color:#3c7655; */
    line-height: 50px;
}
.alert strong{
    font-size:14px;
    font-weight:700;
    /* color:#3c763d; */
    line-height: 50px;
    margin-left: 20px;
}
</style>