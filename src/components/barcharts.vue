<template>
<div class="box">
    <div class="boxLeft" id="boxLeft"></div>
    <div class="boxRight" id="boxRight"></div>
</div>
</template>
<script>
var echarts = require('echarts')
 export default{
     name:"barcharts",
     data(){
         return{

         }
     },
     mounted() {
// 基于准备好的dom，初始化echarts实例
     var myChart = echarts.init(document.getElementById('boxLeft'));
     var myChartment = echarts.init(document.getElementById('boxRight'));
// 绘制图表
     app.title = '坐标轴刻度与标签对齐';

       myChart.setOption({
            title: {
                text: 'Bar Chart Example '
            },
            color: ['#3398DB'],
            tooltip : {
                trigger: 'axis',
                axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                    type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis : [
                {
                    type : 'category',
                    data : ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                    axisTick: {
                        alignWithLabel: true
                    }
                }
            ],
            yAxis : [
                {
                    type : 'value'
                }
            ],
            series : [
                {
                    name:'直接访问',
                    type:'bar',
                    barWidth: '60%',
                    data:[10, 52, 200, 334, 390, 330, 220]
                }
            ]
        });

        app.title = '环形图';

            myChartment.setOption({
                    tooltip: {
                        trigger: 'item',
                        formatter: "{a} <br/>{b}: {c} ({d}%)"
                    },
                    legend: {
                        orient: 'vertical',
                        x: 'left',
                        data:['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
                    },
                    series: [
                        {
                            name:'访问来源',
                            type:'pie',
                            radius: ['50%', '70%'],
                            avoidLabelOverlap: false,
                            label: {
                                normal: {
                                    show: false,
                                    position: 'center'
                                },
                                emphasis: {
                                    show: true,
                                    textStyle: {
                                        fontSize: '30',
                                        fontWeight: 'bold'
                                    }
                                }
                            },
                            labelLine: {
                                normal: {
                                    show: false
                                }
                            },
                            data:[
                                {value:335, name:'直接访问'},
                                {value:310, name:'邮件营销'},
                                {value:234, name:'联盟广告'},
                                {value:135, name:'视频广告'},
                                {value:1548, name:'搜索引擎'}
                            ]
                        }
                    ]
                });
}
 }
</script>
<style scoped>
.box{
    width: 94%;
    height:468.65px;
    /* background: orange; */
    margin-left: 3%;
    margin-top: 24px;
    display: flex;
}
.boxLeft{
    width:875.3px;
    height: 468.65px;
    background:white;
}
.boxRight{
    width: 302.3px;
    height:468.65px;
    background:white;
    margin-left: 32px;
}
</style>