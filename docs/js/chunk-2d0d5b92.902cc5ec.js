(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0d5b92"],{7003:function(e,t,s){"use strict";s.r(t);var l=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("h-page-content",{attrs:{padding:""}},[s("div",{staticClass:"row"},[s("div",{staticClass:"col"},[s("div",{staticClass:"text-h4"},[e._v("Toggle")]),s("div",{ref:"tg-boolean"}),s("comp-code",{staticClass:"h-mt-lg",attrs:{title:"Boolean",code:e.ckboolean,script:e.ckbooleanScript,javascript:""}},[s("div",{staticClass:"column"},[s("div",{staticClass:"col"},[e._v("\n            Do you agree terms and conditions?\n          ")]),s("div",{staticClass:"col"},[s("h-toggle",{attrs:{text:"I agree"},model:{value:e.termAccepted,callback:function(t){e.termAccepted=t},expression:"termAccepted"}})],1),s("div",{staticClass:"col"},[e._v("\n            Your option is: "+e._s(e.termAccepted)+"\n          ")])])]),s("div",{ref:"tg-list"}),s("comp-code",{staticClass:"h-mt-lg",attrs:{title:"List",code:e.cklist,script:e.cklistScript,javascript:""}},[s("div",{staticClass:"column"},[s("div",{staticClass:"col"},[e._v("\n            Select your favorite colors\n          ")]),s("div",{staticClass:"col"},[s("h-toggle",{attrs:{text:"Red",value:"Red"},model:{value:e.colors,callback:function(t){e.colors=t},expression:"colors"}}),s("h-toggle",{attrs:{text:"Green",value:"Green"},model:{value:e.colors,callback:function(t){e.colors=t},expression:"colors"}}),s("h-toggle",{attrs:{text:"Blue",value:"Blue"},model:{value:e.colors,callback:function(t){e.colors=t},expression:"colors"}})],1),s("div",{staticClass:"col"},[e._v("\n            Your favorites colors: "+e._s(e.colors)+"\n          ")])])]),s("div",{ref:"tg-listnumbers"}),s("comp-code",{staticClass:"h-mt-lg",attrs:{title:"List with numbers",code:e.cklistnumbers,script:e.cklistnumbersScript,javascript:""}},[s("div",{staticClass:"column"},[s("div",{staticClass:"col"},[e._v("\n            Select yours favorite numbers\n          ")]),s("div",{staticClass:"col"},[s("h-toggle",{attrs:{text:"1",value:1},model:{value:e.checkedNumbers,callback:function(t){e.checkedNumbers=t},expression:"checkedNumbers"}}),s("h-toggle",{attrs:{text:"2",value:2},model:{value:e.checkedNumbers,callback:function(t){e.checkedNumbers=t},expression:"checkedNumbers"}}),s("h-toggle",{attrs:{text:"3",value:3},model:{value:e.checkedNumbers,callback:function(t){e.checkedNumbers=t},expression:"checkedNumbers"}}),s("h-toggle",{attrs:{text:"4",value:4},model:{value:e.checkedNumbers,callback:function(t){e.checkedNumbers=t},expression:"checkedNumbers"}})],1),s("div",{staticClass:"col"},[e._v("\n            Favorite numbers "+e._s(e.checkedNumbers)+"\n          ")])])]),s("h2",{staticClass:"text-primary"},[e._v(" Vue Properties")]),s("hr"),s("div",{staticClass:"flex"},[s("div",[s("h3",[e._v("Name")]),s("div",[e._v("text")]),s("div",[e._v("value")]),s("div",[e._v("checked")]),s("div",[e._v("disabled")])]),s("div",{staticClass:"h-pl-md"},[s("h3",[e._v("Type")]),s("div",[e._v("String, Number")]),s("div",[e._v("String, Number, Object")]),s("div",[e._v("Boolean")]),s("div",[e._v("Boolean")])]),s("div",{staticClass:"h-pl-md"},[s("h3",[e._v("Description")]),s("div",[e._v("Sets the text of the toggle")]),s("div",[e._v("Sets the value of the toggle")]),s("div",[e._v("If true the toggle is on")]),s("div",[e._v("if true the toggle is disabled")])])]),s("h2",{staticClass:"text-primary"},[e._v(" Vue Events")]),s("hr"),s("div",{staticClass:"flex"},[s("div",[s("h3",[e._v("Name")]),s("div",[e._v("@change(value)")])]),s("div",{staticClass:"h-pl-md"},[s("h3",[e._v("Description")]),s("div",[e._v("Triggered immediately on model change")])])])],1),s("div",{staticClass:"col-auto"},[s("list-help",[s("h-list",[s("h-list-header",{attrs:{text:"Styles"}}),s("h-list-item",{on:{click:function(t){return e.goToElement("tg-boolean")}}},[s("h-list-item-content",[s("h-list-item-text",{attrs:{title:"Boolean"}})],1)],1),s("h-list-item",{on:{click:function(t){return e.goToElement("tg-list")}}},[s("h-list-item-content",[s("h-list-item-text",{attrs:{title:"List"}})],1)],1),s("h-list-item",{on:{click:function(t){return e.goToElement("tg-listnumbers")}}},[s("h-list-item-content",[s("h-list-item-text",{attrs:{title:"Numbers"}})],1)],1)],1)],1)],1)])])},c=[],o=s("cc04"),i={data:function(){return{termAccepted:!1,colors:[],checkedNames2:["Maça","Uva","Abacaxi"],checkedNumbers:[1,3],checked2:!1,ckboolean:'\n<div class="column">\n  <div class="col">\n    Do you agree terms and conditions?\n  </div>\n  <div class="col">\n    <h-toggle v-model="termAccepted" text="I agree"/>\n  </div>\n  <div class="col">\n    Your option is: {{ termAccepted }}\n  </div>\n</div>\n',ckbooleanScript:"\n  data () {\n    return {\n      termAccepted: false\n    }\n  }    \n",cklist:'\n<div class="column">\n  <div class="col">\n    Select your favorite colors\n  </div>\n  <div class="col">\n    <h-toggle v-model="colors" text="Red" value="Red"/>\n    <h-toggle v-model="colors" text="Green" value="Green"/>\n    <h-toggle v-model="colors" text="Blue" value="Blue"/>\n  </div>\n  <div class="col">\n    Your favorites colors: {{ colors }}\n  </div>\n</div>\n',cklistScript:"\n  data () {\n    return {\n      colors: []\n    }\n  }    \n",cklistnumbers:'\n<div class="column">\n  <div class="col">\n    Select yours favorite numbers\n  </div>\n  <div class="col">\n    <h-toggle v-model="checkedNumbers" text="1" :value="1"/>\n    <h-toggle v-model="checkedNumbers" text="2" :value="2"/>\n    <h-toggle v-model="checkedNumbers" text="3" :value="3"/>\n    <h-toggle v-model="checkedNumbers" text="4" :value="4"/>\n  </div>\n  <div class="col">\n    Favorite numbers {{ checkedNumbers }}\n  </div>\n</div>\n',cklistnumbersScript:"\n  data () {\n    return {\n      checkedNumbers: [1, 3]\n    }\n  }      \n"}},methods:{goToElement:function(e){o["a"].goToElement(this.$refs[e])}}},n=i,a=s("2877"),r=Object(a["a"])(n,l,c,!1,null,null,null);t["default"]=r.exports}}]);
//# sourceMappingURL=chunk-2d0d5b92.902cc5ec.js.map