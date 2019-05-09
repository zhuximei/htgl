<template>
       
   <!-- content -->
        <!-- <div class="content"> -->
            <div class="content-left">
                <ul class="ulListcom">
                    <li class="li-com">
                                <div class="ico-small">
                                    <router-link to="/index">
                                        <i class="iconfont  icon-yibiao"></i>
                                    </router-link>
                                </div>
                                <div class="word">
                                    <p>
                                        <router-link to="/index">
                                            Dashboard
                                        </router-link>
                                    </p>
                                </div>
                    </li>

                    <li class="li-com">
                                <div class="ico-small">
                                    <router-link to="/UIelements">
                                        <i class="iconfont  icon-diannao"></i> 
                                    </router-link>
                                </div>
                                <div class="word">
                                    <p>
                                        <router-link to="/UIelements">
                                             UI Elements
                                        </router-link>
                                    </p>
                                </div>
                    </li>

                    <li class="li-com">
                                <div class="ico-small">
                                    <router-link to="/tab_panel">
                                        <i class="iconfont icon-tubiaozhuxingtu"></i>
                                    </router-link> 
                                </div>
                                <div class="word">
                                    <p>
                                        <router-link to="/tab_panel">
                                             Charts
                                        </router-link>
                                    </p>
                                </div>
                    </li>

                    <li class="li-com">
                                <div class="ico-small">
                                    <i class="iconfont icon-erweima"></i> 
                                </div>
                                <div class="word">
                                    <p>Table & Panels</p>                                        
                                </div>
                    </li>

                    <li class="li-com">
                                <div class="ico-small">
                                        <i class="iconfont icon-biaoge"></i> 
                                </div>
                                <div class="word">
                                    <p>Responsive Tables</p>
                                </div>
                    </li>

                    <li class="li-com">
                                <div class="ico-small">
                                    <router-link to="/forms">
                                        <i class="iconfont icon-JGHandle"></i> 
                                    </router-link>
                                </div>
                                <div class="word">
                                    <p>
                                        <router-link to="/forms">
                                             Forms
                                        </router-link>
                                    </p>
                                </div>
                    </li>

                    <li class="li-com">
                                <div class="ico-small">
                                        <i class="iconfont icon-tubiao"></i> 
                                </div>
                                <div class="word">
                                    <p @click="reveal=!reveal">Multi-Level Dropdown&nbsp;&nbsp;&nbsp;&nbsp;&lt;</p>
                                </div>
                    </li>

                    <div class="secondLevel" v-show="reveal">
                         <ul>
                             <li class="secBox">Second Level Link</li>
                             <li class="secBox">Second Level Link</li>
                             <li class="secBox" >Second Level Link</li>
                         </ul>
                    </div>

                    <li class="li-com">
                                <div class="ico-small">
                                        <i class="iconfont icon-kongbaiye"></i> 
                                </div>
                                <div class="word">
                                    <p>Empty Page</p>
                                </div>
                    </li>
                </ul>
                <div class="box" @click="box=!box">
                    <img class="box_img" src="../assets/img/right_triangle.png"/>
                </div>
            </div>
        <!-- </div> -->
</template>

<script>
 export default{
     name:"contentcom",
     data(){
         return{
             reveal:false
         }
     }
 }
</script>
<style scoped>
  /* content */
  .secondLevel{
      width: 100%;
      height:150px;
  }
  .secBox{
      width: 100%;
      height:50px;
      background: #096e75;
      line-height: 50px;
      font-size:12px;
      color: white;
      text-indent:35px;
  }
     a{
         color:white;
     }
    .content-left{
        width:17%;
        height:626px;
        background:#21bfcb;
        position: fixed;
        top:60px;
        left:0px;
    }
    .word p{
        font-size: 12px;
        color: white;
    }
    .li-com{
        display: flex;
        width: 100%;
        height:54px;
        border-bottom: 1px solid #2cb8c2;
        position: relative;
    }
    .li-com:hover{
        cursor: pointer;
    }
    .li-com:nth-child(1){
        margin-top: 20px;
        background:#18a0a9;
    }
    .ico-small{
        margin-left: 17px;
        margin-top: 22px;
        margin-right: 21px;
        display:flex;
        color: white;
    }
    .word{
        margin-top: 22px;
    }
    .box{
        width: 28px;
        height: 29px;
        background:#cfcece;
        border-top-right-radius: 10px;
        border-bottom-right-radius: 10px;
        position: absolute;
        top:10px;
        left:235px;
       
    }
    .box_img{
        display: block;
        padding-top: 9px;
        margin-left:8px;
    }
</style>