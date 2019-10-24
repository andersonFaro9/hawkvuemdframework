(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d21e072"],{d48d:function(e,i,l){"use strict";l.r(i);var a=function(){var e=this,i=e.$createElement,l=e._self._c||i;return l("h-page-content",{attrs:{padding:""}},[l("div",{staticClass:"text-h4"},[e._v("FILE UPLOAD")]),l("comp-code",{staticClass:"h-mt-lg",attrs:{title:"Files",code:e.ex1,script:e.ex1Script,javascript:""}},[l("h-file-upload",{attrs:{extensions:"image/png",multiple:!0},on:{addFiles:e.onChange}})],1),l("comp-code",{staticClass:"h-mt-lg",attrs:{title:"Images",code:e.ex2,script:e.ex2Script,javascript:""}},[l("h-image-upload",{attrs:{multiple:!0,"max-size":e.maxsize},on:{addFiles:e.onChange}})],1),l("comp-code",{staticClass:"h-mt-lg",attrs:{title:"Area Drop Hidden",code:e.ex3,script:e.ex3Script,javascript:""}},[l("h-file-upload",{attrs:{multiple:!0,"allow-drop":!1},on:{addFiles:e.onChange}}),l("h-image-upload",{staticClass:"h-mt-sm",attrs:{multiple:!0,"allow-drop":!1},on:{addFiles:e.onChange}})],1),l("h2",{staticClass:"text-primary"},[e._v(" Vue Properties")]),l("hr"),l("div",{staticClass:"flex"},[l("div",[l("div",[l("h3",[e._v("Name")])]),l("div",[e._v("multiple")]),l("div",[e._v("max-size")]),l("div",[e._v("allow-drop")]),l("div",[e._v("extensions")])]),l("div",{staticClass:"h-pl-md"},[l("div",[l("h3",[e._v("Type")])]),l("div",[e._v("Boolean")]),l("div",[e._v("Number")]),l("div",[e._v("Boolean")]),l("div",[e._v("String")])]),l("div",{staticClass:"h-pl-md"},[l("div",[l("h3",[e._v("Description")])]),l("div",[e._v("Default is true. Allow select multiple files. If false in drop mode the first file is selected")]),l("div",[e._v("Sets the max size for each file")]),l("div",[e._v("Default is true. If false hidden the drag and drop zone")]),l("div",[e._v("File Upload only. Default is "),l("b",[e._v("' .* '")]),e._v(". Sets the extensions for the files")])])]),l("h2",{staticClass:"text-primary"},[e._v(" Vue Events")]),l("hr"),l("div",{staticClass:"flex"},[l("div",[l("h3",[e._v("Name")]),l("div",[e._v("@addFiles")])]),l("div",{staticClass:"h-pl-md"},[l("h3",[e._v("Description")]),l("div",[e._v("Triggered when the user finishes with drop files or select files.")])])])],1)},n=[],t=(l("7f7f"),l("ac6a"),{data:function(){return{fileList:[],maxsize:512e3,ex1:'\n<h-file-upload extensions="image/png" :multiple="true" @addFiles="onChange"/>\n',ex1Script:"\nexport default {\n  data () {\n    return {\n      fileList: []\n    }\n  },\n  methods: {\n    onChange (fileList) {\n      console.log('onChange fired')\n      fileList.forEach(file => {\n        console.log('FileName: ' + file.file.name + ' - FileSize:' + file.file.size)\n        console.log('File Type: ' + file.file.type)\n        console.log('FileSizeString: ' + file.fileSize)\n        let imageInfo = (file.imageData) ? 'has image data' : 'no image data'\n        console.log('ImageData: ' + imageInfo)\n      })\n    }\n  }\n}\n",ex2:'\n<h-image-upload :multiple="true" @addFiles="onChange" :max-size="maxsize"/>\n',ex2Script:"\nexport default {\n  data () {\n    return {\n      fileList: [],\n      maxsize: 1024 * 500\n    }\n  },\n  methods: {\n    onChange (fileList) {\n      console.log('onChange fired')\n      fileList.forEach(file => {\n        console.log('FileName: ' + file.file.name + ' - FileSize:' + file.file.size)\n        console.log('File Type: ' + file.file.type)\n        console.log('FileSizeString: ' + file.fileSize)\n        let imageInfo = (file.imageData) ? 'has image data' : 'no image data'\n        console.log('ImageData: ' + imageInfo)\n      })\n    }\n  }\n}\n",ex3:'\n<h-file-upload :multiple="true" @addFiles="onChange" :allow-drop="false" />\n\n<h-image-upload class="h-mt-sm" :multiple="true" @addFiles="onChange" :allow-drop="false" />\n',ex3Script:"\nexport default {\n  data () {\n    return {\n      fileList: []\n    }\n  },\n  methods: {\n    onChange (fileList) {\n      console.log('onChange fired')\n      fileList.forEach(file => {\n        console.log('FileName: ' + file.file.name + ' - FileSize:' + file.file.size)\n        console.log('File Type: ' + file.file.type)\n        console.log('FileSizeString: ' + file.fileSize)\n        let imageInfo = (file.imageData) ? 'has image data' : 'no image data'\n        console.log('ImageData: ' + imageInfo)\n      })\n    }\n  }\n}\n"}},methods:{onChange:function(e){console.log("onChange fired"),e.forEach(function(e){console.log("FileName: "+e.file.name+" - FileSize:"+e.file.size),console.log("File Type: "+e.file.type),console.log("FileSizeString: "+e.fileSize);var i=e.imageData?"has image data":"no image data";console.log("ImageData: "+i)})}}}),o=t,s=l("2877"),d=Object(s["a"])(o,a,n,!1,null,"56f54274",null);i["default"]=d.exports}}]);
//# sourceMappingURL=chunk-2d21e072.506af07b.js.map