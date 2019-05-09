<template>
<div class="box">
    <div class="boxLeft">
        <div class="title">
            <h4>Tasks Panel</h4>
        </div>
        <div class="message">
            <a class="firsta" href="#" v-for="item in items" :key="item.index">
                <div class="firstbox">
                    <i :class="item.iconfont"></i>
                    {{item.content}}
                </div>
                <span class="badge">{{item.time}}</span>
            </a>
        </div>
        <div class="next">
          
              <a href="#" class="more">
                More Tasks
              </a>
            
            <div class="arrow">
                <i class="iconfont  icon-jiantou"></i>
            </div>
            
        </div>
    </div>
    <div class="boxRight">
        <div class="title">
            <h4>Responsive Table Example </h4>
        </div>
        <table border="1" cellspacing="0"  class="tablebox">
            <tr>
                <th>S No.</th>
                <th>First Name </th>
                <th>Last Name</th>
                <th>User Name</th>
                <th>Email ID.</th>
            </tr>
            <tr>
                <td>1</td>
                <td>John</td>
                <td>Doe</td>
                <td>John15482</td>
                <td>name@site.com</td>
            </tr>
            <tr>
                <td>2</td>
                <td>Kimsila</td>
                <td>Marriye</td>
                <td>Kim1425</td>
                <td>name@site.com</td>
            </tr>
            <tr>
                <td>3</td>
                <td>Rossye</td>
                <td>Nermal</td>
                <td>Rossy1245</td>
                <td>name@site.com</td>
            </tr>
            <tr>
                <td>4</td>
                <td>Richard</td>
                <td>Orieal</td>
                <td>Rich5685</td>
                <td>name@site.com</td>
            </tr>
            <tr>
                <td>5</td>
                <td>Jacob</td>
                <td>Hielsar</td>
                <td>Jac4587</td>
                <td>name@site.com</td>
            </tr>
            <tr>
                <td>6</td>
                <td>Wrapel</td>
                <td>Dere</td>
                <td>Wrap4585</td>
                <td>name@site.com</td>
            </tr>
        </table>
    </div>
</div>
</template>
<script>
 export default{
     name:"tablecom",
     data(){
         return{
         "items":[
             {
                 "iconfont":"iconfont icon-xinxi1",
                 "content":" Commented on a post",
                 "time":" 7 minutes ago "
             },
              {
                 "iconfont":"iconfont icon-huoche",
                 "content":" Order 392 shipped",
                 "time":" 16 minutes ago "
             },
              {
                 "iconfont":"iconfont icon-diqiu",
                 "content":" Invoice 653 has paid",
                 "time":" 36 minutes ago "
             },
              {
                 "iconfont":"iconfont icon-yonghu2",
                 "content":" A new user has been added",
                 "time":"1 hour ago"
             },
              {
                 "iconfont":"iconfont icon-yonghu2",
                 "content":"A new user has added",
                 "time":"1.23 hour ago"
             },
              {
                 "iconfont":"iconfont icon-diqiu",
                 "content":"Saved the world",
                 "time":"yesterday"
             }
         ]
         }
     }

 }
</script>
<style scoped>
.box{
    width: 94%;
    height:374.85px;
    /* background:red; */
    margin-left: 3%;
    margin-top: 24px;
    display: flex;
}
.boxLeft{
    width:403.067px;
    height:374.85px;
    background:white;
    margin-right:32px;
}
.title h4{
    font-size: 13px;
    color: #000000;
    margin-left: 20px;
    margin-top: 20px;
    margin-right: 20px;
    margin-bottom: 20px;
}
.message{
    width:371.467px;
    height:238.6px;
    /* background:orange; */
    border: 1px solid #dddddd;
    margin-left: 15px;
    margin-right: 15px;
    border-radius: 4px;
    /* margin-top: 20px; */
}
.message a:nth-child(6){
    border-bottom: none;
}
.firsta{
    display: flex;
    width:371.467px;
    height:39px;
    /* background:pink; */
    font-size:14px;
    color:#595d63;
    line-height: 19px;
    border-bottom: 1px solid #dddddd;
    justify-content: space-between;
}
.firstbox{
    margin-top:14px;
}
.badge{
    /* width:89px; */
    height:19px;
    background:#24c2ce;
    border-radius: 6px;
    font-size:8px;
    color: white;
    margin-top:10px;
    margin-right: 14px; 
    padding:0px 8px;
    min-width: 10px;
    text-align: center;
    vertical-align: baseline;
    white-space: nowrap;
}
.firstbox .iconfont{
    font-size:14px;
    color:#555555;
    margin-left: 16px;
    margin-right: 5px;
}
.next{
    margin-left:300px;
    margin-top: 25px;
}
.more{
    font-size:12px;
    float: left;
    color:#547ac4;
}
.more:hover{
    text-decoration: underline;
}
.arrow{
    width:13px;
    height:12px;
    background:#337ab7;
    border-radius:50%;
    float: left;
    margin-left:5px;
    line-height: 16px;
}
.arrow:hover{
  cursor: pointer;
}
.icon-jiantou{
    color:white;
    
}
.boxRight{
    width:806.133px;
    height:369.45px;
    background:white;
}
.tablebox{
    width:613px;
    height:312.2px;
    margin-top: 20px;
    border-color: #dddddd;
    margin: 0px 15px;
   
}
th{
    font-size:12px;
    color:#333333;
}
td{
    font-size:12px;
    color:#743354;
    text-indent: 6px;
}
tr:hover{
    background: #f9f9f9;
}
tr:nth-child(2n){
    background: #f9f9f9;
}
</style>