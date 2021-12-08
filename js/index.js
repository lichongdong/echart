// 柱状图左模块
(function(){
    // 实例对象
    let myChart = echarts.init(document.querySelector(".bar .chart"));
    let option = {
        color:["#2f89cf"],
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        grid: {
          top:'10px',
          left: '1%',
          right: '4%',
          bottom: '4%',
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            data: ['旅游行业', '教育培训', '游戏行业', '医疗行业', '电商行业', '社交行业', '金融行业'],
            axisTick: {
              alignWithLabel: true
            },
           // x轴的文字和大小
            axisLabel:{
                color:"rgba(255,255,255,.6)",
                fontSize:"12"
            },
            // x轴本身的样式不显示
            axisLine:{
                show:false,
            }
          }
        ],
        yAxis: [
          {
            type: 'value',
            axisLabel:{
                color:"rgba(255,255,255,.6)",
                fontSize:"12"
            },
            axisLine:{
                lineStyle:{
                    color:"rgba(255,255,255,.1)"
                }
            },
            // 线条样式
            splitLine:{
                lineStyle:{
                    color:"rgba(255,255,255,.1)"
                }
            }
          }
        ],
        series: [
          {
            name: 'Direct',
            type: 'bar',
            barWidth: '35%',
            data: [200, 100, 300, 500, 600, 330, 900],
            itemStyle:{
                barBorderRadius:5
            }
          }
        ]
      };
    //   把配置给实例对象
      myChart.setOption(option);
      //图表跟随屏幕自适应
      window.addEventListener('resize',function(){
          myChart.resize();
      })
})();

// 技能掌握
(function(){
  var myColor = ["#1089E7", "#F57474", "#56D0E3", "#F8B448", "#8B78F6"];
  let myChart = echarts.init(document.querySelector(".bar1 .chart"));
  let option = {
    color:["#2f89cf"],
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    legend: {},
    grid: {
      top:'10%',
      left: '5%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: {
      show:false,
      type: 'value',
      boundaryGap: [0, 0.01]
    },
    yAxis: [
    {
      type: 'category',
      data: ['html', 'css', '人工智能', 'vue', 'javaScript'],
      // 反向坐标轴
      inverse:true,
      axisLine:{
        show:false
      },
       // 把刻度标签里面的文字颜色设置为白色
      axisLabel:{
        color:["#fff"]
      }
    },
    {
      data: [702, 350, 610, 793, 664],
      inverse:true,
       // 不显示y轴的线
       axisLine: {
        show: false
      },
      // 不显示刻度
      axisTick: {
        show: false
      },
      // 把刻度标签里面的文字颜色设置为白色
      axisLabel: {
        color: "#fff"
      }
    }
  ],
    series: [
      {
        type: 'bar',
        data: [70, 34, 60, 78, 69],
        //宽度
        barWidth:10,
        yAxisIndex:0,
        //修改第一组柱子的圆角
        itemStyle:{
          barBorderRadius:5,
          barCategoryGap: 50,
          color:function(params){
            // console.log(params)
            // dataIndex是当前柱子的索引号
            return myColor[params.dataIndex]
          }
        },
        // 显示柱子内的文字
        label:{
          show:true,
          position:"inside",
          // {c}会自动识别data里面的数据
          formatter:"{c}%"
        }
      },
      {
        type: 'bar',
        data: [100, 100, 100, 100, 100],
        barWidth:15,
        yAxisIndex:1,
        // barCategoryGap: 50,
        itemStyle:{
          color:'none',
          borderColor:"#00c1de",
          borderWidth:3,
          barBorderRadius:15
        }
      }
    ]
  };
  myChart.setOption(option);
  window.addEventListener('resize',function(){
    myChart.resize();
  })

})();

//人员变化
(function(){
  let myChart = echarts.init(document.querySelector(".line .chart"));
  var yearData = [
    {
      year: "2020", // 年份
      data: [
        // 两个数组是因为有两条线
        [24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120],
        [40, 64, 191, 324, 290, 330, 310, 213, 180, 200, 180, 79]
      ]
    },
    {
      year: "2021", // 年份
      data: [
        // 两个数组是因为有两条线
        [123, 175, 112, 197, 121, 67, 98, 21, 43, 64, 76, 38],
        [143, 131, 165, 123, 178, 21, 82, 64, 43, 60, 19, 34]
      ]
    }
  ];
  let option = {
    color: ['#00f2f1', '#ed3f35'],
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      data: ['新增粉丝', '新增游客'],
      // 文字的颜色
      textStyle:{
        color:'#4c9bfd'
      },
      right:'10%',
      top:'5%'
    },
    grid: {
      left: '3%',
      right: '7%',
      bottom: '3%',
      containLabel: true,
      show:true,//显示边框
      borderColor:'#012f4a'//边框颜色
    },
    toolbox: {
      feature: {
        saveAsImage: {}
      }
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
      axisTick:{
        show:false,
      },
      axisLabel:{
        color:'#4c9bfd'
      },
      axisLine:{
        show:false//去除轴线
      },
      boundaryGap:false//点直接连接到左轴
    },
    yAxis: {
      type: 'value',
      axisTick:{
        show:false
      },
      axisLabel:{
        color:'#4c9bfd'
      },
      splitLine:{
        lineStyle:{
          color:'#012f4a'
        }
      }
    },
    series: [
      {
        name: '新增粉丝',
        type: 'line',
        stack: 'Total',
        data: yearData[0].data[0],
        smooth:true//将折线改成圆滑效果
      },
      {
        name: '新增游客',
        type: 'line',
        stack: 'Total',
        data: yearData[1].data[1],
        smooth:true
      }
    ]
  };
  myChart.setOption(option);
  window.addEventListener('resize',function(){
    myChart.resize()
  })
  let h2 = document.getElementById("h2")

  let a = h2.getElementsByTagName("a");

  for(let i=0;i<a.length;i++){
    a[i].index = i;
    a[i].onclick = function(){
      // console.log(this.index) this.index 是当前的下标值
      let obj = yearData[this.index];

      option.series[0].data = obj.data[0];
      option.series[1].data = obj.data[1];
      //重新渲染数据
      myChart.setOption(option)
    }
  }
})();

//播放量折型图
(function(){
  let myChart = echarts.init(document.querySelector(".line1 .chart"));
  let option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
        label: {
          backgroundColor: '#6a7985'
        }
      }
    },
    legend: {
      data: ['播放量', '转发量'],
      top:'5%',
      textStyle:{
        color:"rgba(255,255,255,.5)",
        fontSize:12
      }
    },
    toolbox: {
      feature: {
        saveAsImage: {}
      }
    },
    grid: {
      left: '3%',
      right: '8%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: [
      {
        type: 'category',
        boundaryGap: false,
        data: [ 
          "01","02","03",
          "04","05","06",
          "07","08","09",
          "10","11","12",
          "13","14","15",
          "16","17","18",
          "19","20","21",
          "22","23","24",
          "25","26","26",
          "28","29","30"
        ],
        axisLabel:{
          textStyle: {
            color: "rgba(255,255,255,.6)",
            fontSize: 12
          }
        },
        axisLine:{
          color:"rgba(255,255,255,.2)"
        },
        axisTick:{
          show:false
        }
      }
    ],
    yAxis: [
      {
        type: 'value',
        axisLabel:{
          color:"rgba(255,255,255,.6)",
          fontSize:12
        },
        axisLine:{
          lineStyle:{
            color:"rgba(255,255,255,.2)"
          }
        },
        axisTick:{
          show:false
        },
        // 修改分割线的颜色
        splitLine:{
          lineStyle:{
            color:"rgba(255,255,255,.1)"
          }
        }
      }
    ],
    series: [
      {
        name: '播放量',
        type: 'line',
        stack: 'Total',
        smooth: true,
        lineStyle: {
          color:'#0184d5',
          width: 2
        },
        showSymbol: false,
        // 设置拐点 小圆点
        symbol: "circle",
          // 拐点大小
        symbolSize:5,
        //拐点颜色以及边框
        itemStyle:{
        color:'#0184d5',
        borderColor:'rgba(221, 220, 107, .1)',
        borderWidth:12
      },
      areaStyle: {
        // 渐变色，只需要复制即可
      color: new echarts.graphic.LinearGradient(
        0,
        0,
        0,
        1,
        [
          {
            offset: 0,
            color: "rgba(1, 132, 213, 0.4)"   // 渐变色的起始颜色
          },
          {
            offset: 0.8,
            color: "rgba(1, 132, 213, 0.1)"   // 渐变线的结束颜色
          }
        ],
        false
      ),
      shadowColor: "rgba(0, 0, 0, 0.1)"
  },
        emphasis: {
          focus: 'series'
        },
        data: [ 
          30,40,30, 
          40,30,40,
          30,60,20, 
          40,30,40,
          30,40,30,
          40,30,60,
          20,40,30,
          40,30,40,
          30,40,20,
          60,50,40
        ]
      },
      {
        name: '转发量',
        type: 'line',
        stack: 'Total',
        smooth: true,
        lineStyle: {
          width: 0,
          color:'#00d887'
        },
        // 开始不显示拐点 鼠标经过的时候才显示
        showSymbol: false,
        // 设置拐点 小圆点
        symbol: "circle",
        // 拐点大小
        symbolSize:5,
        //拐点颜色以及边框
        itemStyle:{
          color:'#0184d5',
          borderColor:'rgba(221, 220, 107, .1)',
          borderWidth:12
        },
        areaStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(
              0,
              0,
              0,
              1,
              [
                {
                  offset: 0,
                  color: "rgba(0, 216, 135, 0.4)"
                },
                {
                  offset: 0.8,
                  color: "rgba(0, 216, 135, 0.1)"
                }
              ],
              false
            ),
            shadowColor: "rgba(0, 0, 0, 0.1)"
          }
        },
        emphasis: {
          focus: 'series'
        },
        data: [ 
          130,10,20, 
          40,30,40, 
          80,60,20, 
          40,90,40,
          20,140,30, 
          40,130,20,
          20,40,80, 
          70,30,40,
          30,120,20,
          99,50,20
        ]
      }
    ]
  };
myChart.setOption(option)
window.addEventListener("resize",function(){
  myChart.resize()
})
})();

//年龄分布
(function(){
  let myChart = echarts.init(document.querySelector(".pie .chart"));
  let option = {
    color: [
      "#065aab",
      "#066eab",
      "#0682ab",
      "#0696ab",
      "#06a0ab",
    ],
    tooltip: {
      trigger: 'item'
    },
    legend: {
      //距离底部0
      bottom:'0%',
      itemWidth:10,
      itemHeight:10,
      textStyle:{
        color:'rgba(255,255,255,.5)',
        fontSize:12
      },
    },
    series: [
      {
        name: '年龄',
        type: 'pie',
        center:['50%','40%'],
        radius: ['40%', '60%'],
        avoidLabelOverlap: false,
        label: {
          show: false,
          position: 'center',
        },
        // 不显示连接线
        labelLine: { show: false },
        emphasis: {
          label: {
            show: false,
            fontSize: '40',
            fontWeight: 'bold'
          }
        },
        labelLine: {
          show: false
        },
        data: [
          { value: 1, name: '0岁以下' },
          { value: 4, name: '20-29岁' },
          { value: 2, name: '30-39岁' },
          { value: 2, name: '40-49岁' },
          { value: 1, name: '50岁以上' }
        ]
      }
    ]
  };
  myChart.setOption(option);
  window.addEventListener('resize',function(){
    myChart.resize();
  })
})();

//地区分布
(function(){
  let myChart = echarts.init(document.querySelector(".pie1 .chart"));

  let option = {
    color: ['#006cff', '#60cda0', '#ed8884', '#ff9f7f', '#0096ff', '#9fe6b8', '#32c5e9', '#1d9dff'],
    legend: {
      show:true,
      bottom:0,
      itemWidth:10,
      itemHeight:10,
      textStyle:{
        color:'rgba(255,255,255,.5)'
      }
    },
    toolbox: {
      show: true,
      feature: {
        mark: { show: true },
        dataView: { show: true, readOnly: false },
        restore: { show: true },
        saveAsImage: { show: true }
      }
    },
    series: [
      {
        name: 'Nightingale Chart',
        type: 'pie',
        radius: ['10%', '70%'],
        center: ['50%', '40%'],
        roseType: 'radius',
        label:{
          fontSize:10
        },
        itemStyle: {
          borderRadius: 8
        },
        labelLine:{
          // 连接扇形图线长
          length:6,
          // 连接文字线长
          length2:8
        },
        data: [
          { value: 40, name: '云南' },
          { value: 38, name: '北京' },
          { value: 32, name: '山东' },
          { value: 30, name: '河北' },
          { value: 28, name: '江苏' },
          { value: 26, name: '浙江' },
          { value: 22, name: '四川' },
          { value: 18, name: '湖北' }
        ]
      }
    ]
  };
  myChart.setOption(option);
  window.addEventListener('resize',function(){
    myChart.resize();
  })
})();


