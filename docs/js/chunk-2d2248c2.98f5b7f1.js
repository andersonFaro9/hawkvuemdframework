(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d2248c2"],{e133:function(t,e,o){"use strict";o.r(e);var s=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("h-page-content",{attrs:{padding:""}},[o("div",{staticClass:"text-h4"},[t._v("Search")]),o("comp-code",{staticClass:"h-mt-lg",attrs:{title:"Standard",code:t.exsearch,script:t.exsearchScript,javascript:""}},[o("h-input",{attrs:{"input-search":"",label:"Search","trailing-icon":"fas fa-search",dense:"",clearable:"",options:t.options},on:{onFilter:t.onSearch},model:{value:t.model1,callback:function(e){t.model1=e},expression:"model1"}}),o("div",[t._v("\n      model: "+t._s(t.model1)+"\n    ")])],1),o("comp-code",{staticClass:"h-mt-lg",attrs:{title:"Inside Toolbar",code:t.exsearch2,script:t.exsearchScript2,javascript:""}},[o("h-app-toolbar",{attrs:{"bg-color":"bg-primary","text-color":"text-white"}},[o("h-app-toolbar-container",[o("h-app-toolbar-title",{staticClass:"text-body1"},[t._v("\n          Collection\n        ")]),o("h-app-toolbar-action",[o("div",[o("h-input",{attrs:{"input-search":"",label:"Search","trailing-icon":"fas fa-search",dense:"","bg-color":"bg-primary",clearable:"",options:t.options2},on:{onFilter:t.onSearch2},model:{value:t.model2,callback:function(e){t.model2=e},expression:"model2"}})],1)])],1)],1)],1),o("h2",{staticClass:"text-primary"},[t._v(" Vue Events")]),o("hr"),o("div",{staticClass:"flex"},[o("div",[o("h3",[t._v("Name")]),o("div",[t._v("@onFilter(text)")])]),o("div",{staticClass:"h-pl-md"},[o("h3",[t._v("Description")]),o("div",[t._v("Triggered when the input changes after 1/2 second")])])])],1)},n=[],a=(o("6762"),o("2fdb"),o("2ef0")),l=o.n(a),i={components:{},data:function(){return{model1:"",model2:"",selectOptions:[],options:[],options2:[],exsearch:'\n<h-input\n  v-model="model1"\n  input-search\n  label="Search"\n  leading-icon="fas fa-search"\n  trailing-icon="fas fa-search"\n  @onFilter="onSearch"\n  dense\n  clearable\n/>\n\n<div>\n  model: {{model1}}\n</div>\n',exsearchScript:"\nimport _ from 'lodash'\nexport default {\n  data () {\n    return {\n      model1: '',\n      selectOptions: [],\n      options: []\n    }\n  },\n  mounted () {\n    this.loadOptions()\n  },\n  methods: {\n    loadOptions () {\n      this.selectOptions = []\n      this.selectOptions.push({ avatar: 'avatar/turtle.png', text: 'Ninja Turtle', desc: 'I kill you', value: 'Ninja Turtle' })\n      this.selectOptions.push({ img: 'avatar/folder_open.png', text: 'Photos', desc: 'Dez 12, 2017', value: 'Photos' })\n      this.selectOptions.push({ icon: 'fas fa-volleyball-ball', text: 'Attractions', desc: 'Lets go to the movie?', value: 'Attractions' })\n      this.selectOptions.push({ avatar: 'avatar/turtle.png', text: 'Ninja Turtle 2', desc: 'I kill you', value: 'Ninja Turtle' })\n      this.selectOptions.push({ img: 'avatar/folder_open.png', text: 'Photos 2', desc: 'Dez 12, 2017', value: 'Photos' })\n      this.selectOptions.push({ icon: 'fas fa-volleyball-ball', text: 'Attractions 2', desc: 'Lets go to the movie?', value: 'Attractions' })\n      this.selectOptions.push({ avatar: 'avatar/turtle.png', text: 'Ninja Turtle 3', desc: 'I kill you', value: 'Ninja Turtle' })\n      this.selectOptions.push({ img: 'avatar/folder_open.png', text: 'Photos 3', desc: 'Dez 12, 2017', value: 'Photos' })\n      this.selectOptions.push({ icon: 'fas fa-volleyball-ball', text: 'Attractions 3', desc: 'Lets go to the movie?', value: 'Attractions' })\n    },\n    onSearch (query) {\n      this.options = []\n      if (query.length === 0) {\n        this.options = _.cloneDeep(this.selectOptions)\n      } else {\n        this.options = this.selectOptions.filter(opt => _.includes(opt.text.toLowerCase(), query.toLowerCase()))\n      }\n    }\n  }\n}\n",exsearch2:'\n<h-app-toolbar-container>\n  <h-app-toolbar-title class="text-body1">\n    Collection\n  </h-app-toolbar-title>\n  <h-app-toolbar-action>\n    <div>\n      <h-input\n        v-model="model2"\n        input-search\n        label="Search"\n        trailing-icon="fas fa-search"\n        @onFilter="onSearch2"\n        dense\n        bg-color="bg-primary"\n        clearable\n        :options="options2"\n      />\n    </div>\n  </h-app-toolbar-action>\n</h-app-toolbar-container>\n</h-app-toolbar>\n',exsearchScript2:"\nimport _ from 'lodash'\nexport default {\n  data () {\n    return {\n      model2: '',\n      selectOptions: [],\n      options2: []\n    }\n  },\n  mounted () {\n    this.loadOptions()\n  },\n  methods: {\n    loadOptions () {\n      this.selectOptions = []\n      this.selectOptions.push({ avatar: 'avatar/turtle.png', text: 'Ninja Turtle', desc: 'I kill you', value: 'Ninja Turtle' })\n      this.selectOptions.push({ img: 'avatar/folder_open.jpeg', text: 'Photos', desc: 'Dez 12, 2017', value: 'Photos' })\n      this.selectOptions.push({ icon: 'fas fa-volleyball-ball', text: 'Attractions', desc: 'Lets go to the movie?', value: 'Attractions' })\n      this.selectOptions.push({ avatar: 'avatar/turtle.png', text: 'Ninja Turtle 2', desc: 'I kill you', value: 'Ninja Turtle' })\n      this.selectOptions.push({ img: 'avatar/folder_open.jpeg', text: 'Photos 2', desc: 'Dez 12, 2017', value: 'Photos' })\n      this.selectOptions.push({ icon: 'fas fa-volleyball-ball', text: 'Attractions 2', desc: 'Lets go to the movie?', value: 'Attractions' })\n      this.selectOptions.push({ avatar: 'avatar/turtle.png', text: 'Ninja Turtle 3', desc: 'I kill you', value: 'Ninja Turtle' })\n      this.selectOptions.push({ img: 'avatar/folder_open.jpeg', text: 'Photos 3', desc: 'Dez 12, 2017', value: 'Photos' })\n      this.selectOptions.push({ icon: 'fas fa-volleyball-ball', text: 'Attractions 3', desc: 'Lets go to the movie?', value: 'Attractions' })\n    },\n    onSearch2 (query) {\n      this.options2 = []\n      if (query.length === 0) {\n        this.options2 = _.cloneDeep(this.selectOptions)\n      } else {\n        this.options2 = this.selectOptions.filter(opt => _.includes(opt.text.toLowerCase(), query.toLowerCase()))\n      }\n    }\n  }\n}\n"}},mounted:function(){this.loadOptions()},methods:{loadOptions:function(){this.selectOptions=[],this.selectOptions.push({avatar:"avatar/turtle.png",text:"Ninja Turtle",desc:"I kill you",value:"Ninja Turtle"}),this.selectOptions.push({img:"avatar/folder_open.png",text:"Photos",desc:"Dez 12, 2017",value:"Photos"}),this.selectOptions.push({icon:"fas fa-volleyball-ball",text:"Attractions",desc:"Lets go to the movie?",value:"Attractions"}),this.selectOptions.push({avatar:"avatar/turtle.png",text:"Ninja Turtle 2",desc:"I kill you",value:"Ninja Turtle"}),this.selectOptions.push({img:"avatar/folder_open.png",text:"Photos 2",desc:"Dez 12, 2017",value:"Photos"}),this.selectOptions.push({icon:"fas fa-volleyball-ball",text:"Attractions 2",desc:"Lets go to the movie?",value:"Attractions"}),this.selectOptions.push({avatar:"avatar/turtle.png",text:"Ninja Turtle 3",desc:"I kill you",value:"Ninja Turtle"}),this.selectOptions.push({img:"avatar/folder_open.png",text:"Photos 3",desc:"Dez 12, 2017",value:"Photos"}),this.selectOptions.push({icon:"fas fa-volleyball-ball",text:"Attractions 3",desc:"Lets go to the movie?",value:"Attractions"})},onSearch:function(t){this.options=[],0===t.length?this.options=l.a.cloneDeep(this.selectOptions):this.options=this.selectOptions.filter(function(e){return l.a.includes(e.text.toLowerCase(),t.toLowerCase())})},onSearch2:function(t){this.options2=[],0===t.length?this.options2=l.a.cloneDeep(this.selectOptions):this.options2=this.selectOptions.filter(function(e){return l.a.includes(e.text.toLowerCase(),t.toLowerCase())})}}},r=i,c=o("2877"),p=Object(c["a"])(r,s,n,!1,null,null,null);e["default"]=p.exports}}]);
//# sourceMappingURL=chunk-2d2248c2.98f5b7f1.js.map