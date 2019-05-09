<template>
 <div class="box">
    <div class="panel-heading">
         Basic Form Elements
    </div>
    <div class="panel-body">
        <div class="boxLeft">
            <form>
                <div class="form-group">
                    <label>Text Input</label>
                    <input type="text" class="form-control"/>
                    <p class="help-block">Example block-level help text here.</p>
                    <label>Text Input with Placeholder</label>
                    <input type="text" class="form-control" placeholder="Enter text"/>
                    <label class="label_box">Static Control</label>
                    <p class="form-control-static">email@example.com</p>
                </div>
                <div class="form-group">
                    <label>File input</label>
                    <input type="button" class="file" value="浏览..."/>
                </div>
                <div class="form-group">
                    <label>Text area</label>
                    <textarea class="form-control" rows="3"></textarea>
                </div>
                <div class="form-group">
                    <label>Checkboxes</label>
                    <div class="checkbox">
                        <label>
                            <input type="checkbox" value=""/>
                            <span class="spanBox">Checkbox 1</span> 
                        </label>
                    </div>
                    <div class="checkbox">
                        <label>
                            <input type="checkbox" value=""/>
                            <span class="spanBox">Checkbox 1</span> 
                        </label>
                    </div>
                    <div class="checkbox">
                        <label>
                            <input type="checkbox" value=""/>
                            <span class="spanBox">Checkbox 1</span> 
                        </label>
                    </div>
                </div>
                <div class="form-group">
                    <label>Inline Checkboxes</label>
                    <label class="checkbox-inline">
                        <input type="checkbox"><span class="num">1</span>
                    </label>
                    <label class="checkbox-inline">
                        <input type="checkbox"><span class="num">2</span>
                    </label>
                    <label class="checkbox-inline">
                        <input type="checkbox"><span class="num">3</span>
                    </label>
                </div>
                <div class="form-group">
                    <label>Radio Buttons</label>
                    <div class="checkbox">
                        <label>
                            <input type="radio"  name="b" checked="checked" value=""/>
                            <span class="spanBox">Checkbox 1</span> 
                        </label>
                    </div>
                    <div class="checkbox">
                        <label>
                            <input type="radio" name="b" value=""/>
                            <span class="spanBox">Checkbox 1</span> 
                        </label>
                    </div>
                    <div class="checkbox">
                        <label>
                            <input type="radio" name="b" value=""/>
                            <span class="spanBox">Checkbox 1</span> 
                        </label>
                    </div>
                </div>
                <div class="form-group">
                    <label>Inline Radio Buttons</label>
                    <label class="checkbox-inline">
                        <input type="radio" name="a" checked="checked"><span class="num">1</span>
                    </label>
                    <label class="checkbox-inline">
                        <input type="radio" name="a"><span class="num">2</span>
                    </label>
                    <label class="checkbox-inline">
                        <input type="radio" name="a"><span class="num">3</span>
                    </label>
                </div>
                <div class="form-group">
                    <label>Selects</label>
                    <select class="form-control">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                </div>
                <div class="form-group">
                    <label>Multiple Selects</label>
                    <select class="form-control form_box " multiple="">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                </div>
                <button class="btn btn-default" type="submit">Submit Button</button>
                <button class="btn btn-default" type="submit">Reset Button</button>
            </form>
        </div>
        <div class="boxRight">
            <h4>Disabled Form States</h4>
            <form role="form">
                <div class="form-group">
                    <label for="disabledSelect">Disabled input</label>
                    <input id="disabledInput" class="form-control" type="text" placeholder="Disabled input" disabled=""/>
                </div>
                <div class="form-group">
                    <label for="disabledSelect">Disabled select menu</label>
                    <select id="disabledSelect" class="form-control disbox"  disabled="disabled">
                        <option>Disabled select</option>
                    </select>
                </div>
                <div class="checkbox">
                        <label>
                            <input type="checkbox"  value=""/>
                            <span class="spanBox">Disabled Checkbox</span> 
                        </label>
                </div>
                <button class="btn btn-primary" type="submit" disabled="disabled">Disabled Button</button>
            </form>
            <h4>Form Validation States</h4>
            <form role="form">
              <div class="form-group has-success">
                  <label class="control-label" for="inputSuccess">Input with success</label>
                  <input id="inputSuccess" class="form-control" type="text"/>
              </div>
              <div class="form-group has-warning">
                  <label class="control-label" for="inputSuccess">Input with warning</label>
                  <input id="inputSuccess" class="form-control" type="text"/>
              </div>
              <div class="form-group has-error">
                  <label class="control-label" for="inputSuccess">Input with warning</label>
                  <input id="inputSuccess" class="form-control" type="text"/>
              </div>
            </form>
            <h4>Input Groups</h4>
            <form role="form">
                <div class="form-group input-group">
                    <span class="input-group-addon">@</span>
                    <input class="form-control text_box" type="text" placeholder="Username">
                </div>
                <div class="form-group input-group">
                    <input class="form-control text_box" type="text">
                    <span class="input-group-addon number">.00</span>
                </div>
                <div class="form-group input-group">
                    <span class="input-group-addon">@</span>
                    <input class="form-control text_box" type="text" placeholder="Font Awesome Icon">
                </div>
                <div class="form-group input-group">
                    <span class="input-group-addon ">$</span>
                    <input class="form-control text_box box-ra" type="text">
                    <span class="input-group-addon number">.00</span>
                </div>
                <div class="form-group input-group">
                    <input class="form-control text_box" type="text">
                    <span class="input-group-addon">
                       <i class="iconfont icon-fangdajing"></i>
                    </span>
                    
                </div>
            </form>
        </div>
    </div>
     
 </div>
</template>
<script>
 export default{
     name:"formBox",
     data(){
         return{

         }
     }
 }
</script>
<style scoped>
.box{
    width:96%;
    /* height:700px; */
    background:white;
    margin-left: 36px;
}

.panel-heading{
    color:#000;
    font-weight: bold;
    border-color: #fff;
    font-size: 16px;
    padding: 15px 8px 0px;
}
.panel-body{
    width: 100%;
    height:1029.4px;
    display: flex;
    margin-top: 20px;
}
.boxLeft{
    width:50%;
    height:1029.4px;
    background:white;
    padding-left:10px;
}
.form-group{
    margin-bottom: 15px;
}
label{
    display:inline-block;
    max-width: 100%;
    margin-bottom: 5px;
    /* font-weight: 700; */
}
.form-control{
    display: block;
    width:95%;
    height:30px;
    padding: 6px 12px;
    font-size: 14px;
    line-height: 1.42857143;
    color: #555;
    background: #fff;
    border: 1px solid #ccc;
    border-radius: 4px;
}
.help-block{
    display: block;
    margin-top:5px;
    margin-bottom: 10px;
    color: #737373;
    font-size: 16px;
    line-height: 25px;
    padding-top: 20px;
    margin: 0px 0px 10px;
}
.label_box{
    margin-top:10px;
}
.form-control-static{
    min-height: 34px;
    padding-top: 7px;
    padding-bottom: 7px;
    margin-bottom: 0;
    font-size: 16px;
    line-height: 25px;
    margin: 0px 0px 10px;
}
.file{
    display: block;
    font-size: 12px;
}
textarea .form-control{
    height: auto;
}
.checkbox{
    position: relative;
    display: block;
    margin-top: 10px;
}
.checkbox input{
    position: absolute;
    margin: 4px 0px 0px;
    box-sizing: border-box;
}
.spanBox{
    margin-left:18px;
}
.checkbox-inline{
    position: relative;
    display: inline-block;
    padding-left: 20px;
    font-weight: 400;
    vertical-align: middle;
    cursor: pointer;
}
.num{
    margin-left: 5px;
}
.select [multiple]{
    height: auto;
}
.btn{
    display: inline-block;
    padding: 6px 12px;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.42857143;

    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    touch-action:manipulation;
    cursor: pointer;
    border: 1px solid #ccc;
    border-radius: 4px;
}
.btn-default{
    color: #333;
    border-color: #ccc;
}
.form_box{
    height:60px;
}
.boxRight{
    width:50%;
    height:1029.4px;
    background:white;
    margin-left:20px;
    padding-right: 10px;
}
h4{
    font-size: 18px;
    margin-top: 10px;
    margin-bottom: 10px;
    font-weight: 500;
    line-height: 1.1;
    color:inherit;
}
#disabledInput{
    background: #eee;
}
.disbox{
    width: 100%;
    background: #eee;
}
.btn-primary{
    background: #7aa9d0;
    border: 1px solid #7aa9d0;
}
.has-success .control-label{
    color: #3c763d;
}

.has-warning .control-label{
    color:#8a6d3b;
}
.has-error .control-label{
    color:#a94442;
}
.has-success .form-control{
    border-color:#3c763d;
    outline: none;
}
.has-warning .form-control{
    border-color:#8a6d3b;
    outline: none;
}
.has-error .form-control{
    border-color:#a94442;
    outline: none;
}
.input-group{
    position: relative;
    display: table;
    border-collapse: separate;
}
.input-group-addon{
    padding: 6px 12px;
    font-size: 14px;
    font-weight: 400;
    line-height: 1;
    color:#555;
    text-align: center;
    background-color: #eee;
    border: 1px solid #ccc;
    width: 1%;
    vertical-align: middle;
    white-space: nowrap;
    display: table-cell;
    border-top-left-radius:3px;
    border-bottom-left-radius:3px;
    border-right: none;
}
.input-group .form-control:last-child{
    border-top-left-radius:0px;
    border-bottom-left-radius:0px;    
}
.input-group .form-control:first-child,{
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
}
.number{
    border-top-right-radius:3px;
    border-bottom-right-radius:3px;
}
.box-ra{
    border-top-left-radius:0px;
    border-bottom-left-radius:0px;
}
</style>