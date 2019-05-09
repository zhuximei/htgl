<template>
    <div class="box">
        <div class="boxLeft">
            <div class="panel-heading">
               Circle Icon Buttons 
            </div>
            <div class="panel-body">
                <el-row class="circleico">
                        <el-button icon="el-icon-search" circle></el-button>
                        <el-button type="primary" icon="el-icon-edit" circle></el-button>
                        <el-button type="success" icon="el-icon-check" circle></el-button>
                        <el-button type="info" icon="el-icon-message" circle></el-button>
                        <el-button type="warning" icon="el-icon-star-off" circle></el-button>
                        <el-button type="danger" icon="el-icon-delete" circle></el-button>
                </el-row>
                <p>Get more components at official bootstrap website i.e getbootstrap.com or <a href="#">click here</a>.</p>
            </div>
        </div>
        <div class="boxRight">
            <div class="panel-heading">
               Icons Examples : 
            </div>
            <div class="panel_right">
                <div class="bottle">
                    <i class="iconfont icones icon-pingzi"></i>
                    <i class="iconfont icone  icon-pingzi"></i>
                    <i class="iconfont icom icon-pingzi"></i>
                    <i class="iconfont icomes icon-pingzi"></i>
                    <i class="iconfont icomed icon-pingzi"></i>
                </div>
                <p>Get more Icons at official fortawesome website <a href="#">click here</a>.</p>
            </div>
        </div>
    </div>
</template>
<script>
 export default{
     name:"circleico",
     data(){
         return{
          
         }
     }
 }
</script>
<style scoped>
.box{
    width: 94%;
    height:327px;
    /* background: salmon; */
    margin-top: 20px;
    margin-left: 3%;
    display: flex;
}
.boxLeft{
    width:49%;
    height:299px;
    background:white;
}
.panel-heading{
    color: #000;
    border-color: #fff;
    font-weight:bold;
    font-size: 16px;
    padding: 15px 15px 0px; 
}
.panel-body{
    width: 96%;
    height: 200px;
    /* background: red; */
    margin-left:2%;
    margin-top:26px;
}
.circleico{
    padding-top: 50px;
}
 p{
    font-size:16px;
    line-height: 25px;
    padding-top: 20px;
    margin: 0px 0px 10px;
}
 a:hover{
    text-decoration: underline;
    text-decoration-color: #000;
}
.boxRight{
    width:49%;
    height:267px;
    background:white;
    margin-left:22px;
}
.panel_right{
    width: 96%;
    height: 175px;
    /* background: darksalmon; */
    margin-left: 2%;
    margin-top: 26px;
}
.bottle{
    padding-top:12px;
}
.icones{
    font-size:17px;
} 
.icone{
    font-size:31px;
}
.icom{
    font-size:46px;
}
.icomes{
    font-size:60px;
}
.icomed{
    font-size:77px;
}
</style>