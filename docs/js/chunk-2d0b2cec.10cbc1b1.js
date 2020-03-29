(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0b2cec"],{"264f":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("h-page-content",{attrs:{padding:""}},[s("div",{staticClass:"row"},[s("div",{staticClass:"col"},[s("div",{staticClass:"text-h4"},[t._v("CHIPS")]),s("div",{ref:"chip-standard"}),s("comp-code",{staticClass:"h-mt-lg",attrs:{title:"Standard",code:t.chipStandard}},[s("div",{staticClass:"row"},[s("div",{staticClass:"col"},[s("h-chips",{attrs:{text:"Peyton Smith"}}),s("h-chips",{attrs:{text:"Jonas Eckhart"}}),s("h-chips",{attrs:{text:"John Pella"}}),s("h-chips",{attrs:{text:"Francis Pernille"}})],1)]),s("div",{staticClass:"row h-mt-md"},[s("div",{staticClass:"col"},[s("h-chips",{attrs:{outlined:"",text:"Peyton Smith"}}),s("h-chips",{attrs:{outlined:"",text:"Jonas Eckhart"}}),s("h-chips",{attrs:{outlined:"",text:"John Pella"}}),s("h-chips",{attrs:{outlined:"",text:"Francis Pernille"}})],1)]),s("div",{staticClass:"row h-mt-md"},[s("div",{staticClass:"col"},[s("h-chips",{attrs:{dense:"",text:"Peyton Smith"}}),s("h-chips",{attrs:{dense:"",text:"Jonas Eckhart"}}),s("h-chips",{attrs:{dense:"",text:"John Pella"}}),s("h-chips",{attrs:{dense:"",text:"Francis Pernille"}})],1)]),s("div",{staticClass:"row h-mt-md"},[s("div",{staticClass:"col"},[s("h-chips",{attrs:{dense:"",outlined:"",text:"Peyton Smith"}}),s("h-chips",{attrs:{dense:"",outlined:"",text:"Jonas Eckhart"}}),s("h-chips",{attrs:{dense:"",outlined:"",text:"John Pella"}}),s("h-chips",{attrs:{dense:"",outlined:"",text:"Francis Pernille"}})],1)])]),s("div",{ref:"chip-icons"}),s("comp-code",{staticClass:"h-mt-lg",attrs:{title:"Icons",code:t.chipIcons}},[s("div",{staticClass:"row"},[s("div",{staticClass:"col"},[s("h-chips",{attrs:{text:"Portland",icon:"fas fa-map-marker-alt"}}),s("h-chips",{attrs:{text:"Biking",icon:"fas fa-biking"}}),s("h-chips",{attrs:{outlined:"",text:"Portland",icon:"fas fa-map-marker-alt"}}),s("h-chips",{attrs:{outlined:"",text:"Biking",icon:"fas fa-biking"}})],1)]),s("div",{staticClass:"row h-mt-md"},[s("div",{staticClass:"col"},[s("h-chips",{attrs:{dense:"",text:"Portland",icon:"fas fa-map-marker-alt"}}),s("h-chips",{attrs:{dense:"",text:"Biking",icon:"fas fa-biking"}}),s("h-chips",{attrs:{dense:"",outlined:"",text:"Portland",icon:"fas fa-map-marker-alt"}}),s("h-chips",{attrs:{dense:"",outlined:"",text:"Biking",icon:"fas fa-biking"}})],1)])]),s("div",{ref:"chip-avatar"}),s("comp-code",{staticClass:"h-mt-lg",attrs:{title:"Avatar",code:t.chipAvatar}},[s("div",{staticClass:"row"},[s("div",{staticClass:"col"},[s("h-chips",{attrs:{text:"Kostenlose",avatar:"avatar/Kostenlose.jpg"}}),s("h-chips",{attrs:{text:"Eduard",avatar:"avatar/Eduard.jpg"}}),s("h-chips",{attrs:{outlined:"",text:"Kostenlose",avatar:"avatar/Kostenlose.jpg"}}),s("h-chips",{attrs:{outlined:"",text:"Eduard",avatar:"avatar/Eduard.jpg"}})],1)]),s("div",{staticClass:"row h-mt-md"},[s("div",{staticClass:"col"},[s("h-chips",{attrs:{dense:"",text:"Kostenlose",avatar:"avatar/Kostenlose.jpg"}}),s("h-chips",{attrs:{dense:"",text:"Eduard",avatar:"avatar/Eduard.jpg"}}),s("h-chips",{attrs:{dense:"",outlined:"",text:"Kostenlose",avatar:"avatar/Kostenlose.jpg"}}),s("h-chips",{attrs:{dense:"",outlined:"",text:"Eduard",avatar:"avatar/Eduard.jpg"}})],1)])]),s("div",{ref:"chip-select"}),s("comp-code",{staticClass:"h-mt-lg",attrs:{title:"Select",code:t.chipSelect}},[s("div",{staticClass:"row"},[s("div",{staticClass:"col"},[s("h-chips",{attrs:{filter:"",text:"Travel",icon:"fas fa-plane"},model:{value:t.chipsFilter.travel,callback:function(e){t.$set(t.chipsFilter,"travel",e)},expression:"chipsFilter.travel"}}),s("h-chips",{attrs:{filter:"",text:"Movies",icon:"fas fa-film"},model:{value:t.chipsFilter.movies,callback:function(e){t.$set(t.chipsFilter,"movies",e)},expression:"chipsFilter.movies"}}),s("h-chips",{attrs:{filter:"",text:"Food",icon:"fas fa-utensils"},model:{value:t.chipsFilter.food,callback:function(e){t.$set(t.chipsFilter,"food",e)},expression:"chipsFilter.food"}})],1)])]),s("tabs-help",{staticClass:"h-mt-md",attrs:{properties:t.helpTopics.properties,events:t.helpTopics.events}})],1),s("div",{staticClass:"col-auto"},[s("list-help",[s("h-list",[s("h-list-header",{attrs:{text:"Styles"}}),s("h-list-item",{on:{click:function(e){return t.goToElement("chip-standard")}}},[s("h-list-item-content",[s("h-list-item-text",{attrs:{title:"Standard"}})],1)],1),s("h-list-item",{on:{click:function(e){return t.goToElement("chip-icons")}}},[s("h-list-item-content",[s("h-list-item-text",{attrs:{title:"Icons"}})],1)],1),s("h-list-item",{on:{click:function(e){return t.goToElement("chip-avatar")}}},[s("h-list-item-content",[s("h-list-item-text",{attrs:{title:"Avatar"}})],1)],1),s("h-list-item",{on:{click:function(e){return t.goToElement("chip-select")}}},[s("h-list-item-content",[s("h-list-item-text",{attrs:{title:"Select"}})],1)],1)],1)],1)],1)])])},i=[],n=s("cc04"),o={properties:[{name:"v-model",type:"Boolean.",description:"Model of the component."},{name:"dense",type:"Boolean",description:"Sets the chips to dense mode."},{name:"outlined",type:"Boolean",description:"Sets the chips to outlined mode."},{name:"icon",type:"String",description:"Sets the icon to the chip."},{name:"avatar",type:"String",description:"Sets a avatar to the chip."},{name:"filter",type:"Boolean",description:" If both filter and model is true the chips is selected."},{name:"text",type:"String or Number",description:"Sets the text of the chips."}],events:[]},l={data:function(){return{helpTopics:{properties:[],events:[]},chipsFilter:{travel:!1,movies:!1,food:!1},chipStandard:'\n<div class="row">\n  <div class="col">\n    <h-chips text="Peyton Smith"/>\n    <h-chips text="Jonas Eckhart"/>\n    <h-chips text="John Pella"/>\n    <h-chips text="Francis Pernille"/>\n  </div>\n</div>\n\n<div class="row h-mt-md">\n  <div class="col">\n    <h-chips outlined text="Peyton Smith"/>\n    <h-chips outlined text="Jonas Eckhart"/>\n    <h-chips outlined text="John Pella"/>\n    <h-chips outlined text="Francis Pernille"/>\n  </div>\n</div>\n\n<div class="row h-mt-md">\n  <div class="col">\n    <h-chips dense text="Peyton Smith"/>\n    <h-chips dense text="Jonas Eckhart"/>\n    <h-chips dense text="John Pella"/>\n    <h-chips dense text="Francis Pernille"/>\n  </div>\n</div>\n\n<div class="row h-mt-md">\n  <div class="col">\n    <h-chips dense outlined text="Peyton Smith"/>\n    <h-chips dense outlined text="Jonas Eckhart"/>\n    <h-chips dense outlined text="John Pella"/>\n    <h-chips dense outlined text="Francis Pernille"/>\n  </div>\n</div>      \n',chipIcons:'\n<div class="row">\n  <div class="col">\n    <h-chips text="Portland" icon="fas fa-map-marker-alt"/>\n    <h-chips text="Biking" icon="fas fa-biking"/>\n    <h-chips outlined text="Portland" icon="fas fa-map-marker-alt"/>\n    <h-chips outlined text="Biking" icon="fas fa-biking"/>\n  </div>\n</div>\n\n<div class="row h-mt-md">\n  <div class="col">\n    <h-chips dense text="Portland" icon="fas fa-map-marker-alt"/>\n    <h-chips dense text="Biking" icon="fas fa-biking"/>\n    <h-chips dense outlined text="Portland" icon="fas fa-map-marker-alt"/>\n    <h-chips dense outlined text="Biking" icon="fas fa-biking"/>\n  </div>\n</div>      \n',chipAvatar:'\n<div class="row">\n  <div class="col">\n    <h-chips text="Kostenlose" avatar="avatar/Kostenlose.jpg"/>\n    <h-chips text="Eduard" avatar="avatar/Eduard.jpg"/>\n    <h-chips outlined text="Kostenlose" avatar="avatar/Kostenlose.jpg"/>\n    <h-chips outlined text="Eduard" avatar="avatar/Eduard.jpg"/>\n  </div>\n</div>\n\n<div class="row h-mt-md">\n  <div class="col">\n    <h-chips dense text="Kostenlose" avatar="avatar/Kostenlose.jpg"/>\n    <h-chips dense text="Eduard" avatar="avatar/Eduard.jpg"/>\n    <h-chips dense outlined text="Kostenlose" avatar="avatar/Kostenlose.jpg"/>\n    <h-chips dense outlined text="Eduard" avatar="avatar/Eduard.jpg"/>\n  </div>\n</div>      \n',chipClosable:'\n<div class="row">\n  <div class="col">\n    <h-chips closable text="Portland" icon="fas fa-map-marker-alt"/>\n    <h-chips closable text="Kostenlose" avatar="avatar/Kostenlose.jpg"/>\n    <h-chips closable outlined text="Portland" icon="fas fa-map-marker-alt"/>\n    <h-chips closable outlined text="Kostenlose" avatar="avatar/Kostenlose.jpg"/>\n  </div>\n</div>\n\n<div class="row h-mt-md">\n  <div class="col">\n    <h-chips dense closable text="Portland" icon="fas fa-map-marker-alt"/>\n    <h-chips dense closable text="Kostenlose" avatar="avatar/Kostenlose.jpg"/>\n    <h-chips dense outlined closable text="Portland" icon="fas fa-map-marker-alt"/>\n    <h-chips dense outlined closable text="Kostenlose" avatar="avatar/Kostenlose.jpg"/>\n  </div>\n</div>      \n',chipSelect:'\n<div class="row">\n  <div class="col">\n    <h-chips filter v-model="chipsFilter.travel" text="Travel" icon="fas fa-plane"/>\n    <h-chips filter v-model="chipsFilter.movies" text="Movies" icon="fas fa-film"/>\n    <h-chips filter v-model="chipsFilter.food" text="Food" icon="fas fa-utensils"/>\n  </div>\n</div>\n',chipSelectScript:"\nexport default {\n  data () {\n    return {\n      chipsFilter: {\n        travel: false,\n        movies: false,\n        food: false\n      }\n    }\n  }\n}\n"}},mounted:function(){this.helpTopics.properties=o.properties,this.helpTopics.events=o.events},methods:{goToElement:function(t){n["a"].goToElement(this.$refs[t])}}},c=l,r=s("2877"),h=Object(r["a"])(c,a,i,!1,null,null,null);e["default"]=h.exports}}]);
//# sourceMappingURL=chunk-2d0b2cec.10cbc1b1.js.map