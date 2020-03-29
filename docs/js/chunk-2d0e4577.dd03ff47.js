(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0e4577"],{"908b":function(t,e,l){"use strict";l.r(e);var i=function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("h-page-content",{attrs:{padding:""}},[l("div",{staticClass:"text-h4"},[t._v("Collapsible")]),l("div",{staticClass:"row"},[l("div",{staticClass:"col"},[l("div",{ref:"col-standard"}),l("comp-code",{attrs:{title:"standard",code:t.ex1}},[l("h-collapsible",[l("h-collapsible-menu",{attrs:{icon:"fas fa-film",text:"Attractions"}},[l("h-collapsible-item",{attrs:{text:"Shopping"}}),l("h-collapsible-item",{attrs:{text:"Museum"}})],1),l("h-collapsible-menu",{attrs:{icon:"fas fa-utensils",text:"Dining"}},[l("h-collapsible-item",{attrs:{text:"Restaurants"}})],1)],1)],1),l("div",{ref:"col-customcolor"}),l("comp-code",{staticClass:"h-mt-md",attrs:{title:"Custom Color",code:t.ex2}},[l("h-collapsible",[l("h-collapsible-menu",{attrs:{icon:"fa fa-film",text:"Attractions","bg-color":"bg-primary","text-color":"text-white"}},[l("h-collapsible-item",{attrs:{text:"Shopping","bg-color":"bg-primary","text-color":"text-white"}}),l("h-collapsible-item",{attrs:{text:"Museum","bg-color":"bg-primary","text-color":"text-white"}})],1),l("h-collapsible-menu",{attrs:{icon:"fas fa-utensils",text:"Dining","bg-color":"bg-primary","text-color":"text-white"}},[l("h-collapsible-item",{attrs:{text:"Restaurants","bg-color":"bg-primary","text-color":"text-white"}})],1)],1)],1),l("div",{ref:"col-customcontent"}),l("comp-code",{staticClass:"h-mt-md",attrs:{title:"Custom Content",code:t.ex3}},[l("h-collapsible",[l("h-collapsible-menu",{attrs:{icon:"fa fa-envelope",text:"Letter"}},[l("div",{staticClass:"row align-items-center justify-center"},[l("div",[l("h-image",{attrs:{avatar:"",src:"img/hawk.jpg",size:"64px"}})],1),l("div",[l("h1",[t._v("Free Framework CSS")])])])]),l("h-collapsible-menu",{attrs:{icon:"fas fa-utensils",text:"Dining"}},[l("div",{staticClass:"row align-items-center justify-center"},[l("div",[l("h-image",{attrs:{avatar:"",src:"img/icons/mstile-150x150.png",size:"64px"}})],1),l("div",[l("h1",[t._v("Vue JS")])])])])],1)],1),l("tabs-help",{staticClass:"h-mt-md",attrs:{title:"Collapsible Menu Help",properties:t.helpTopics.collapsibleMenuProperties,events:t.helpTopics.collapsibleMenuEvents}}),l("tabs-help",{staticClass:"h-mt-md",attrs:{title:"Collapsible Item Help",properties:t.helpTopics.collapsibleItemProperties,events:t.helpTopics.collapsibleItemEvents}})],1),l("div",{staticClass:"col-auto"},[l("list-help",[l("h-list",[l("h-list-header",{attrs:{text:"Styles"}}),l("h-list-item",{on:{click:function(e){return t.goToElement("col-standard")}}},[l("h-list-item-content",[l("h-list-item-text",{attrs:{title:"Standard"}})],1)],1),l("h-list-item",{on:{click:function(e){return t.goToElement("col-customcolor")}}},[l("h-list-item-content",[l("h-list-item-text",{attrs:{title:"Custom Color"}})],1)],1),l("h-list-item",{on:{click:function(e){return t.goToElement("col-customcontent")}}},[l("h-list-item-content",[l("h-list-item-text",{attrs:{title:"Custom content"}})],1)],1)],1)],1)],1)])])},s=[],o=l("cc04"),n={collapsibleMenuProperties:[{name:"bg-color",type:"String",description:"Sets the background color."},{name:"text-color",type:"String",description:"Sets the text color."},{name:"text",type:"String",description:"Sets the text."},{name:"icon",type:"String",description:"Sets the icon."}],collapsibleMenuEvents:[],collapsibleItemProperties:[{name:"bg-color",type:"String",description:"Sets the background color."},{name:"text-color",type:"String",description:"Sets the text color."},{name:"text",type:"String",description:"Sets the text."}],collapsibleItemEvents:[]},a={data:function(){return{helpTopics:{collapsibleMenuProperties:[],collapsibleMenuEvents:[],collapsibleItemProperties:[],collapsibleItemEvents:[]},ex1:'\n<h-collapsible>\n  <h-collapsible-menu icon="fas fa-film" text="Attractions">\n    <h-collapsible-item text="Shopping"></h-collapsible-item>\n    <h-collapsible-item text="Museum"></h-collapsible-item>\n  </h-collapsible-menu>\n  <h-collapsible-menu icon="fas fa-utensils" text="Dining">\n    <h-collapsible-item text="Restaurants"></h-collapsible-item>\n  </h-collapsible-menu>\n</h-collapsible>\n',ex2:'\n<h-collapsible>\n  <h-collapsible-menu icon="fa fa-film" text="Attractions"\n    bg-color="bg-primary" text-color="text-white"\n  >\n    <h-collapsible-item text="Shopping" bg-color="bg-primary"\n      text-color="text-white"></h-collapsible-item>\n    <h-collapsible-item text="Museum" bg-color="bg-primary"\n      text-color="text-white"></h-collapsible-item>\n  </h-collapsible-menu>\n  <h-collapsible-menu icon="fas fa-utensils" text="Dining"\n    bg-color="bg-primary" text-color="text-white"\n  >\n    <h-collapsible-item text="Restaurants" bg-color="bg-primary"\n      text-color="text-white"></h-collapsible-item>\n  </h-collapsible-menu>\n</h-collapsible>\n',ex3:'\n<h-collapsible>\n  <h-collapsible-menu icon="fa fa-envelope" text="Letter">\n    <div class="row align-items-center justify-center">\n      <div>\n        <h-image avatar src="img/hawk.png" size="64px"/>\n      </div>\n      <div>\n        <h1>Free Framework CSS</h1>\n      </div>\n    </div>\n  </h-collapsible-menu>\n  <h-collapsible-menu icon="fas fa-utensils" text="Dining">\n    <div class="row align-items-center justify-center">\n      <div>\n        <h-image avatar src="img/icons/mstile-150x150.png" size="64px"/>\n      </div>\n      <div>\n        <h1>Vue JS</h1>\n      </div>\n    </div>\n  </h-collapsible-menu>\n</h-collapsible>\n'}},mounted:function(){this.helpTopics.collapsibleMenuProperties=n.collapsibleMenuProperties,this.helpTopics.collapsibleMenuEvents=n.collapsibleMenuEvents,this.helpTopics.collapsibleItemProperties=n.collapsibleItemProperties,this.helpTopics.collapsibleItemEvents=n.collapsibleItemEvents},methods:{goToElement:function(t){o["a"].goToElement(this.$refs[t])}}},c=a,r=l("2877"),p=Object(r["a"])(c,i,s,!1,null,null,null);e["default"]=p.exports}}]);
//# sourceMappingURL=chunk-2d0e4577.dd03ff47.js.map