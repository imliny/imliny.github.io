(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2b5d3618"],{"0966":function(t,e,a){t.exports=a.p+"img/hide.ec08b0e3.png"},"46f8":function(t,e,a){t.exports=a.p+"img/content.799f3bec.png"},"5a60":function(t,e,a){t.exports=a.p+"img/cmd.a6efe354.png"},d5a0:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("el-card",{staticClass:"content-card",attrs:{shadow:"hover"}},[s("div",{attrs:{slot:"header"},slot:"header"},[s("span",[t._v("效果预览")])]),s("div",[s("p",[s("img",{attrs:{src:a("e1c6"),width:"250px"}})])])]),s("el-card",{staticClass:"content-card",attrs:{shadow:"hover"}},[s("div",{attrs:{slot:"header"},slot:"header"},[s("span",[t._v("方法：修改图标")])]),s("div",[s("p",[t._v(" 在优盘的根目录新建文件"),s("q",[t._v("autorun.inf")]),t._v("，文件内容如下    ["),s("a",{attrs:{href:"#"},on:{click:function(e){return t.copy("[autorun]\nICON=icon.ico,0")}}},[t._v("复制")]),t._v("] ")]),s("p",[s("img",{attrs:{src:a("46f8"),width:"280px"}})]),s("p",[t._v(" 选择喜欢的.ico图标文件，放到根目录下")]),s("p",[s("img",{attrs:{src:a("d5b2"),width:"200px"}})]),s("p",[t._v(" 此时，优盘的图标就已经修改成功了，接下来要做的就是隐藏上图中的两个文件 ")])])]),s("el-card",{staticClass:"content-card",attrs:{shadow:"hover"}},[s("div",{attrs:{slot:"header"},slot:"header"},[s("span",[t._v("方法：隐藏文件")])]),s("div",[s("p",[t._v(" 快捷键 WIN+R 输入cmd，打开命令行 ")]),s("p",[s("img",{attrs:{src:a("f30d"),width:"400px"}})]),s("p",[t._v(" 切换到优盘所在位置（输入盘符加冒号，如E:），输入如下命令    ["),s("a",{attrs:{href:"#"},on:{click:function(e){return t.copy("attrib +a +s +r +h autorun.inf\nattrib +a +s +r +h icon.ico")}}},[t._v("复制")]),t._v("] ")]),s("p",[s("img",{attrs:{src:a("5a60"),width:"280px"}})]),s("p",[t._v(" 文件被隐藏，再次打开优盘就看不到文件了 ")]),s("p",[s("img",{attrs:{src:a("0966"),width:"200px"}})])])]),s("el-card",{staticClass:"content-card",attrs:{shadow:"hover"}},[s("div",{attrs:{slot:"header"},slot:"header"},[s("span",[t._v("方法：修改盘名")])]),s("div",[s("p",[t._v(" 鼠标右键点击优盘，选择属性，在输入框中输入新的盘名 ")])])])],1)},r=[],n={name:"UsbDisk",data:function(){return{}},methods:{copy:function(t){var e=document.createElement("textarea");e.value=t,document.body.appendChild(e),e.select(),document.execCommand("Copy"),e.remove(),this.$message.success({message:"复制成功"})}}},c=n,o=a("2877"),i=Object(o["a"])(c,s,r,!1,null,null,null);e["default"]=i.exports},d5b2:function(t,e,a){t.exports=a.p+"img/file.21613f19.png"},e1c6:function(t,e,a){t.exports=a.p+"img/preview.2d2c9423.png"},f30d:function(t,e,a){t.exports=a.p+"img/run.2539c114.png"}}]);
//# sourceMappingURL=chunk-2b5d3618.82ea6dff.js.map