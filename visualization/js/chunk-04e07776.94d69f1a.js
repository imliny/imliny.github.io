(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-04e07776"],{"1fed":function(t,e,i){t.exports=i.p+"img/img3.d4e0d304.png"},"5ced":function(t,e,i){},"9cae":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_exports__["a"]={name:"Home",data:function(){return{dataList1:null,dataList2:null}},methods:{drawChart1:function(){var t=this,e=this.$echarts.getInstanceByDom(this.$refs.chart1);e||(e=this.$echarts.init(this.$refs.chart1),this.$once("hook:beforeDestroy",(function(){t.$echarts.dispose(e)})));var i={color:["rgba(6,219,92,0.5)","rgba(255,0,0,0.5)","rgba(255,192,203,0.5)","rgba(55,162,218,0.5)","rgba(255,219,92,0.5)","rgba(0,0,92,0.5)"],title:{text:"2020世界GPD前5",left:"center"},tooltip:{trigger:"item",formatter:"<b>{a}</b> <br/>{b} : {c} <i>({d}%)</i>"},legend:{top:"bottom",left:"center"},series:[{name:"GDP(万亿美元)",type:"pie",radius:["35%","75%"],itemStyle:{borderRadius:10},label:{show:!1,position:"center"},labelLine:{show:!1},avoidLabelOverlap:!1,emphasis:{label:{show:!0,fontSize:"26",fontWeight:"bold"}},data:this.dataList1}]};e.setOption(i),window.addEventListener("resize",e.resize)},drawChart2:function(){var t=this,e=this.$echarts.getInstanceByDom(this.$refs.chart2);e||(e=this.$echarts.init(this.$refs.chart2),this.$once("hook:beforeDestroy",(function(){t.$echarts.dispose(e)})));var i={title:{text:"中国GDP",left:"center"},tooltip:{trigger:"item"},xAxis:{type:"category",data:[2011,2012,2013,2014,2015,2016,2017,2018,2019,2020]},yAxis:{type:"value"},series:[{type:"line",name:"GDP(万亿美元)",data:this.dataList2[0],itemStyle:{color:"#F57474"}},{type:"bar",name:"占世界(%)",data:this.dataList2[1],itemStyle:{color:"rgba(131,191,246,0.5)"}}]};e.setOption(i),window.addEventListener("resize",e.resize)}},mounted:function mounted(){var _this3=this;this.$axios.get("/visualization/data/world-gdp.dat").then((function(resp){_this3.dataList1=eval(resp.data),_this3.drawChart1()})),this.$axios.get("/visualization/data/china-gdp.dat").then((function(t){_this3.dataList2=t.data,_this3.drawChart2()}))}}},a3dec:function(t,e,i){t.exports=i.p+"img/img4.135378f5.png"},bb51:function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"home-box"},[s("h1",{staticClass:"home-title"},[t._v(" 中国经济数据可视化 "),s("el-popover",{attrs:{placement:"bottom",trigger:"hover"}},[s("img",{attrs:{src:i("e2f2"),width:"200"}}),s("i",{staticClass:"el-icon-info",staticStyle:{"font-size":"16px"},attrs:{slot:"reference"},slot:"reference"})])],1),s("el-carousel",{staticClass:"carousel",attrs:{type:"card",height:"250px"}},[s("el-carousel-item",{staticClass:"carousel-card"},[s("img",{staticClass:"carousel-img",attrs:{src:i("ef57")}})]),s("el-carousel-item",{staticClass:"carousel-card"},[s("img",{staticClass:"carousel-img",attrs:{src:i("fe58")}})]),s("el-carousel-item",{staticClass:"carousel-card"},[s("img",{staticClass:"carousel-img",attrs:{src:i("1fed")}})]),s("el-carousel-item",{staticClass:"carousel-card"},[s("img",{staticClass:"carousel-img",attrs:{src:i("a3dec")}})])],1),s("div",{staticClass:"home-contant"},[s("p",[t._v("2020年，我国GDP突破100万亿元大关，占世界比重17.38%，人均GDP突破1万美元，形成世界最大规模中等收入群体。")]),s("div",{ref:"chart1",staticClass:"home-chart"}),s("p",[t._v("过去10年里，我国经济持续发展，在攻坚克难中书写了新的历史巨变：农业转移人口成为新市民，贫困人口实现脱贫，困扰中华民族几千年的绝对贫困问题将历史性得到解决；经济实力、科技实力、综合国力跃上新的大台阶。")]),s("div",{ref:"chart2",staticClass:"home-chart"}),t._m(0),t._m(1)])],1)},a=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("p",[t._v("本项目收集了2011-2020年内各省份的人口、GDP、工资以及房价数据进行可视化。（数据来源： "),i("a",{attrs:{href:"https://www.baidu.com/",target:"_blank"}},[t._v("万能的互联网")]),t._v("）")])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("p",{staticClass:"home-contant-foot"},[i("sub",{staticClass:"el-icon-date"},[t._v(" 2021/12/30")])])}],r=i("9cae"),c=r["a"],o=(i("cccb"),i("2877")),h=Object(o["a"])(c,s,a,!1,null,null,null);e["default"]=h.exports},cccb:function(t,e,i){"use strict";i("5ced")},e2f2:function(t,e){t.exports="data:image/png;base64,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"},ef57:function(t,e,i){t.exports=i.p+"img/img1.c21afa6f.png"},fe58:function(t,e,i){t.exports=i.p+"img/img2.56cf0a93.png"}}]);
//# sourceMappingURL=chunk-04e07776.94d69f1a.js.map