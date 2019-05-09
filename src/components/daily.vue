<template>
<div class="box">
  <div class="visits">
      <div class="visit_box">
            <div class="visit-left">
                 <i class="iconfont icom icon-yanjing"></i>
            </div>
            <div class="visit-right">
            <h3>8,457</h3>
            <p>Daily Visits</p>
            </div> 
      </div>
  </div>
  <div class="sales">
      <div class="saleBox">
          <i class="iconfont icomen icon-gouwuche1-copy-copy"></i>
      </div>
      <div class="saleWord">
           <h3>52,160</h3>         
           <p> Sales</p>
      </div>
  </div>

   <div class="sales">
      <div class="saleBox saleBoxcom">
          <i class="iconfont icomencom icon-wechat"></i>
      </div>
      <div class="saleWord">
           <h3>15,823 </h3>         
           <p>Comments</p>
      </div>
  </div>

   <div class="sales">
      <div class="saleBox salemen">
          <i class="iconfont icomens icon-yonghu1"></i>
      </div>
      <div class="saleWord">
           <h3>36,752 </h3>         
           <p> No. of Visits</p>
      </div>
  </div>
</div>
</template>
<script>
 export default{
     name:"daily",
     data(){
         return{

         }
     }
 }
</script>
<style scoped>
.box{
    width: 94%;
    height:284px;
    /* background: skyblue; */
    margin-left: 3%;
    margin-top: 24px;
}
.visits{
    width:264.3px;
    height:125.6px;
    background: white;
    border-bottom: 1px solid #dadada;
    margin-right:16px;
    float: left;
}
.visit_box{
    overflow: hidden;
}
.visit-left{
    width: 100px;
    height: 100px;
    background: #32d088;
    margin-left: 13px;
    margin-top:13px;
    border-radius: 50%;
    float: left;
}
.icom{
    display: block;
    font-size: 36px;
    color: #bff0da;
    margin-left: 28px;
    margin-top: 30px;
}
.visit-right{
    width: 131.267px;
    height: 125.6px;
    /* background: white; */
    float: left;
    margin-left: 20px;
}
.visit-right h3{
    font-size:29px;
    color: #8a8a8a;
    font-weight: 100;
    margin-top: 25px;
}
.visit-right p{
    font-size:14px;
    color:#5a5b5c;
    margin-top: 8px;
}
.sales{
    width:233.3px;
    height:249.6px;
    background:white;
    float: left;
    margin-right: 17px;
}
.saleBox{
    width:100px;
    height:100px;
    background:#32cee4;
    border-radius: 50%;
    margin-left: 13px;
    margin-top: 13px;
}
.saleWord h3{
    font-size:29px;
    color:#8a8a8a;
    font-weight:100;
    margin-left: 22px;
    margin-top: 35px;
}
.saleWord p{
    font-size:12px;
    color:#2b2e33;
    margin-left: 24px;
    margin-top: 13px;

}
.icomen{
    display: block;
    font-size:33px;
    color:#bff0f7;
    margin-left:32px;
    line-height:100px;
}
.saleBoxcom{
    background: #fb6e51;
}
.salemen{
    background: #f5b252;
}
.icomencom{
    display: block;
    font-size:33px;
    color:#fed2c9;
    margin-left:32px;
    line-height:100px;
}
.icomens{
    display: block;
    font-size:33px;
    color:#fce7c9;
    margin-left:32px;
    line-height:100px;
}
</style>