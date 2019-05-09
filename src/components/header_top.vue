<template>
       
       <!-- header -->
       <div class="header">
           <div class="header-left">
               <div class="box">
                    <div class="ico-box">
                            <i class="iconfont icon-shezhi"></i>
                    </div>
                    <span class="letter">HYBRID</span>
               </div>
           </div>
           <div class="header-right">
               <div class="icon-box1">
                   <ul class="ulList">
                     <li class="liDom">
                            <div class="icon2">
                                <i  @click="asd" class="iconfont icoms icon-xinfeng"></i> 
                            </div>
                            <div class="photo">
                                <img src="../assets/img/triangle.png"/>
                            </div>
                     </li>
                     <div class="today" v-show="reveal">
                        <a  class="lorem" href="#">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt est vitae ultrices accumsan. 
                        </a>
                     </div>
                      <li class="liDom">
                            <div class="icon2">
                                <i @click="asd02" class="iconfont icoms icon-caidan1"></i> 
                            </div>
                            <div class="photo">
                                <img src="../assets/img/triangle.png"/>
                            </div>
                      </li>
                      <div class="today todays" v-show="reveal02">
                        <a class="lorem" href="#">
                                Laaaaaorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt est vitae ultrices accumsan. 
                        </a>
                      </div>
                       <li class="liDom">
                            <div class="icon2">
                                <i  @click="asd03" class="iconfont icon-notice"></i> 
                            </div>
                            <div class="photo">
                                <img src="../assets/img/triangle.png"/>
                            </div>
                        </li>
                       <div class="today yester" v-show="reveal03">
                            <a  class="lorem" href="#">
                                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt est vitae ultrices accumsan. 
                            </a>
                       </div>
                       <li class="liDom">
                            <div class="icon2">
                                <i  @click="asd04" class="iconfont icon-yonghu"></i> 
                            </div>
                            <div class="photo">
                                <img src="../assets/img/triangle.png"/>
                            </div>
                       </li>
                       <div class="today years" v-show="reveal04">
                          <a  class="lorem" href="#">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt est vitae ultrices accumsan. 
                          </a>
                       </div>
                   </ul>

               </div>
           </div>
       </div>
</template>

<script>
 export default{
     name:"header-top",
     data(){
         return{
            reveal:false,
            reveal02:false,
            reveal03:false,
            reveal04:false
         }
     },
     methods:{
         asd:function(){
            this.reveal=!this.reveal;
            this.reveal02=false;
            this.reveal03=false;
            this.reveal04=false;
         },
         asd02:function(){
            this.reveal02=!this.reveal02;
            this.reveal=false;
            this.reveal03=false;
            this.reveal04=false;
         },
         asd03:function(){
            this.reveal03=!this.reveal03;
            this.reveal=false;
            this.reveal02=false;
            this.reveal04=false;
         },
          asd04:function(){
            this.reveal04=!this.reveal04;
            this.reveal=false;
            this.reveal02=false;
            this.reveal03=false;
         }
     }
 }
</script>
<style scoped>
/* header */
.today{
    width:537px;
    height:51px;
    background: orange;
    position: absolute;
    right:227px;
    top: 60px;
}
.todays{
    background:orchid;
    right: 40px;
}
 .yester{
    right: 30px;
} 
.years{
    right: 10px;
}
.header{
    width:100%;
    height:60px;
     position: fixed;
     z-index:1000;
}
.lorem{
    color: #333;
    font-size: 14px;
}
.box{
    width: 144px;
    height:27px;
     margin-left: 14px;
    margin-top: 20px;
}
.box :hover{
    color:#1cc09f;
}


.header-left{
    background:#24383a;
    width:17%;
    height:60px;
    float: left;
}
.ico-box{
    width: 22px;
    height: 21px;
    float: left;
    margin-right: 7px;
}
i{
    display: block;
    color: white;
}
.icon-shezhi{
    font-size:21px;
    color: white;
}
.letter{
font-size:18px;
color: white;
display: block;
float: left;
}
.header-right{
    width:83%;
    height: 60px;
    background:#4a4a4a;
    float: left;
    position: relative;
}
.ulList{
    display:flex;
}
.photo{
    margin-top: 29px;
    margin-left: 6px;
}
.photo img{
    display:block;
}
.liDom{
    display: flex;
    margin-left: 46px;
}
.icon2{
    margin-top: 24px;
}
.icon-box1{
    float: right;
}
</style>