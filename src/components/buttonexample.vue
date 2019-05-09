<template>
<div class="box">
     <div class="boxLeft">
         <div class="panel-heading">
             Simple Buttons Examples
         </div>
         <div class="panel-body">
             <div class="panel_top">
                 <h4>Default Button</h4>
                 <a href="#" class="btn btn-default">default</a>
                 <a href="#" class="btn btn-primary">primary</a>
                 <a href="#" class="btn btn-danger">danger</a>
                 <a href="#" class="btn btn-success">success</a>
                 <a href="#" class="btn btn-info">info</a>
                 <a href="#" class="btn btn-warning">warning</a>
             </div>
              <div class="panel_top">
                 <h4>Small Button</h4>
                 <a href="#" class="btn btn-default btn-sm">default</a>
                 <a href="#" class="btn btn-primary btn-sm">primary</a>
                 <a href="#" class="btn btn-danger btn-sm">danger</a>
                 <a href="#" class="btn btn-success btn-sm">success</a>
                 <a href="#" class="btn btn-info btn-sm">info</a>
                 <a href="#" class="btn btn-warning btn-sm">warning</a>
             </div>
             <div class="panel_top">
                 <h4>Large Button</h4>
                 <a href="#" class="btn btn-default btn-lg">default</a>
                 <a href="#" class="btn btn-primary btn-lg">primary</a>
                 <a href="#" class="btn btn-danger btn-lg">danger</a>
                 <a href="#" class="btn btn-success btn-lg">success</a>
                 <a href="#" class="btn btn-info btn-lg">info</a>
                 <a href="#" class="btn btn-warning btn-lg">warning</a>
             </div>
         </div>
     </div>
     <div class="boxRight">
         <div class="panel-heading">
             Button Dropdowns
         </div>
        <div class="panel_body">
                <div class="dropdown">
                    <h3>Simple Button Dropdown Examples </h3>
                    
                    <select class="sec">
                        <option value="Action">Action</option>
                        <option value="Another action">Another action</option>
                        <option value="Something else here">Something else here</option>
                        <option value="Sepereted link">Sepereted link</option>
                    </select>
                    <select class="sec sect">
                        <option value="Action">Danger</option>
                        <option value="Another action">Another action</option>
                        <option value="Something else here">Something else here</option>
                        <option value="Sepereted link">Sepereted link</option>
                    </select>
                    <select class="sec sece">
                        <option value="Action">Danger</option>
                        <option value="Another action">Another action</option>
                        <option value="Something else here">Something else here</option>
                        <option value="Sepereted link">Sepereted link</option>
                    </select>
                    <select class="sec secn">
                        <option value="Action">Success</option>
                        <option value="Another action">Another action</option>
                        <option value="Something else here">Something else here</option>
                        <option value="Sepereted link">Sepereted link</option>
                    </select>
                    <select class="sec secb">
                        <option value="Action">Info</option>
                        <option value="Another action">Another action</option>
                        <option value="Something else here">Something else here</option>
                        <option value="Sepereted link">Sepereted link</option>
                    </select>
                    <select class="sec secf">
                        <option value="Action">Default</option>
                        <option value="Another action">Another action</option>
                        <option value="Something else here">Something else here</option>
                        <option value="Sepereted link">Sepereted link</option>
                    </select>
               </div>

               <div class="dropdown">
                    <h3>Simple Button Dropdown Examples </h3>
                    
                    <select class="sec">
                        <option value="Action">Action</option>
                        <option value="Another action">Another action</option>
                        <option value="Something else here">Something else here</option>
                        <option value="Sepereted link">Sepereted link</option>
                    </select>
                    <select class="sec sect">
                        <option value="Action">Danger</option>
                        <option value="Another action">Another action</option>
                        <option value="Something else here">Something else here</option>
                        <option value="Sepereted link">Sepereted link</option>
                    </select>
                    <select class="sec sece">
                        <option value="Action">Danger</option>
                        <option value="Another action">Another action</option>
                        <option value="Something else here">Something else here</option>
                        <option value="Sepereted link">Sepereted link</option>
                    </select>
                    <select class="sec secn">
                        <option value="Action">Success</option>
                        <option value="Another action">Another action</option>
                        <option value="Something else here">Something else here</option>
                        <option value="Sepereted link">Sepereted link</option>
                    </select>
                    <select class="sec secb">
                        <option value="Action">Info</option>
                        <option value="Another action">Another action</option>
                        <option value="Something else here">Something else here</option>
                        <option value="Sepereted link">Sepereted link</option>
                    </select>
                    <select class="sec secf">
                        <option value="Action">Default</option>
                        <option value="Another action">Another action</option>
                        <option value="Something else here">Something else here</option>
                        <option value="Sepereted link">Sepereted link</option>
                    </select>
               </div>

               <div class="dropdown">
                    <h3>Buttons With Icons</h3>
                    <el-button-group>
                        <el-button type="primary" icon="el-icon-edit" class="btn_box">Edit</el-button>
                    </el-button-group>
                    <el-button-group>
                        <el-button type="primary" icon="el-icon-refresh" class="rote" >Update</el-button>
                    </el-button-group>
                    <el-button-group>
                        <el-button type="primary" icon="el-icon-delete-solid" class="delete">Delete</el-button>
                    </el-button-group>
               </div>
          </div>
    </div>
</div> 
</template>
<script>
 export default{
     name:"buttonexample",
     data(){
         return{
          
         }
     }
 }
</script>
<style scoped>
.el-button-group .rote{
     background:white;
    color: #333;
    margin-right: 5px;
    border: 1px solid #ccc;
}
.delete{
    background: #d9534f;
    border: 1px solid #d9534f;
}
/* .rote{
    
} */
.btn_box{
    background:#337ab7;
    border: 1px solid #337ab7;
    margin-right:5px;
}
.dropdown{
    width:100%;
    height:110px;
}
.sec{
    width:76px;
    height:30px;
    background: #337ab7;
    outline: none;
    border-radius: 5px;
    color: white;
    text-indent:8px;
    float: left;
    margin-right:6px;
}
.sect{
    background: #d9534f;
}
.sece{
    background: #f0ad4e;
}
.secn{
    background: #5cb85c;
}
.secb{
    background: #5bc0de;
}
.secf{
    background: white;
    color:#333;
    margin-top: 5px;
}
option{
    background:white;
    color:#333;
}
option:hover{
    background:orchid;
}
.box{
    width: 94%;
    height:494px;
    /* background:greenyellow; */
    margin-left: 3%;
    margin-top:27px;
    display: flex;
}
.boxLeft{
    width:57%;
    height:409px;
    background:white;
}
.panel-heading{
    font-size:16px;
    color: #000;
    font-weight: bold;
    padding: 15px 15px 0px;
}   
.panel-body{
    width:96%;
    height:288.2px;
    /* background:orange; */
    margin-top: 22px;
    margin-left:2%;
}
.panel_top h4{
    font-size: 18px;
    padding-top:10px;
    margin-bottom: 10px;
    font-weight:normal;
    color:inherit;
}
.btn{
    display: inline-block;
    padding: 6px 12px;
    margin-bottom: 0;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.42857143;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    cursor: pointer;
    border:1px solid transparent;
    border-radius: 4px;
}
.btn-default{
    color: #333;
    background: #fff;
    border-color: #ccc;
}
.btn-primary{
    color:#fff;
    background-color: #337ab7;
    border-color:#2e6da4;
}
.btn-danger{
    color:#fff;
    background-color: #d9534f;
    border-color:#d43f3a;
}
.btn-success{
    color:#fff;
    background-color: #5cb85c;
    border-color:#4cae4c;
}
.btn-info{
    color:#fff;
    background-color: #5bc0de;
    border-color:#46b8da;;
}
.btn-warning{
    color:#fff;
    background-color: #f0ad4e;
    border-color:#eea236;;
}
.btn-sm{
    padding: 5px 10px;
    font-size: 12px;
    line-height: 1.5;
    border-radius: 3px;
}
.btn-lg{
    padding: 10px 16px;
    font-size: 18px;
    line-height: 1.3333333;
    border-radius: 6px;
}
.boxRight{
    width:40%;
    height:494px;
    background:white;
    margin-left:33px;
}
.panel_body{
    /* padding: 15px; */
    width: 96%;
    height: 357.4px;
    margin-left:2%;
    margin-top: 22px;
    /* background:#5cb85c; */
}
.panel_body h3{
    font-size:18px;
    padding-top: 14px;
    margin-top: 10px;
    margin-bottom: 10px;
    font-weight: 500;
    line-height: 1.1;
    color: inherit;
}
</style>