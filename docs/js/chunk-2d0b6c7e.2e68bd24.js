(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0b6c7e"],{"1f2e":function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("h-page-content",{attrs:{padding:""}},[i("div",{staticClass:"row"},[i("div",{staticClass:"col"},[i("div",{staticClass:"text-h4"},[t._v("SideBar Menu")]),i("div",{ref:"sidebarmenu-icons"}),i("comp-code",{staticClass:"h-mt-md",attrs:{title:"Icons",code:t.icons}},[i("img",{attrs:{src:"imgsamples/sidebarMenuIcons.png"}})]),i("div",{ref:"sidebarmenu-iconstext"}),i("comp-code",{staticClass:"h-mt-md",attrs:{title:"Icons and Text",code:t.iconsText}},[i("img",{attrs:{src:"imgsamples/sidebarMenuIconsText.png"}})]),i("div",{ref:"sidebarmenu-customcolor"}),i("comp-code",{staticClass:"h-mt-md",attrs:{title:"Custom Color",code:t.customColor}},[i("img",{attrs:{src:"imgsamples/sidebarMenuCustomColor.png"}})])],1),i("div",{staticClass:"col-auto"},[i("list-help",[i("h-list",[i("h-list-header",{attrs:{text:"Styles"}}),i("h-list-item",{on:{click:function(e){return t.goToElement("sidebarmenu-icons")}}},[i("h-list-item-content",[i("h-list-item-text",{attrs:{title:"Icons"}})],1)],1),i("h-list-item",{on:{click:function(e){return t.goToElement("sidebarmenu-iconstext")}}},[i("h-list-item-content",[i("h-list-item-text",{attrs:{title:"Icons and Text"}})],1)],1),i("h-list-item",{on:{click:function(e){return t.goToElement("sidebarmenu-customcolor")}}},[i("h-list-item-content",[i("h-list-item-text",{attrs:{title:"Custom Color"}})],1)],1)],1)],1)],1)])])},s=[],l=i("cc04"),m={name:"PageSliderMenu",data:function(){return{showDrawer:!1,icons:'\n<h-side-bar-menu class="border border-gray border-radius" bg-color="bg-white" text-color="text-gray600" style="width: 70px">\n  <h-side-bar-menu-item icon=\'fas fa-th-large\' @click="$router.push(\'#\')"/>\n  <h-side-bar-menu-item icon=\'fas fa-table\' @click="$router.push(\'#\')"/>\n  <h-side-bar-menu-item icon=\'fas fa-user\' use-menu>\n    <h-list style="width: 180px">\n      <h-list-item>\n        <h-list-item-content>\n          <h-list-item-text title="Add User"/>\n        </h-list-item-content>\n      </h-list-item>\n      <h-list-item>\n        <h-list-item-content>\n          <h-list-item-text title="Account Settings"/>\n        </h-list-item-content>\n      </h-list-item>\n      <h-list-item>\n        <h-list-item-content>\n          <h-list-item-text title="Profile"/>\n        </h-list-item-content>\n      </h-list-item>\n    </h-list>\n  </h-side-bar-menu-item>\n  <h-side-bar-menu-item icon=\'far fa-question-circle\' use-menu>\n    <h-list style="width: 200px">\n      <h-list-item>\n        <h-list-item-content>\n          <h-list-item-text title="About"/>\n        </h-list-item-content>\n      </h-list-item>\n      <h-list-item>\n        <h-list-item-content>\n          <h-list-item-text title="Check for updates"/>\n        </h-list-item-content>\n      </h-list-item>\n      <h-list-item>\n        <h-list-item-content>\n          <h-list-item-text title="View license"/>\n        </h-list-item-content>\n      </h-list-item>\n    </h-list>\n  </h-side-bar-menu-item>\n  <h-side-bar-menu-item icon=\'far fa-bell\' @click="$router.push(\'#\')"/>\n</h-side-bar-menu>\n',iconsText:'\n<h-side-bar-menu\n  class="h-ml-sm border border-gray border-radius"\n  bg-color="bg-white"\n  text-color="text-gray600"\n  style="width: 200px"\n>\n  <template v-slot:header>\n    <div class="column align-items-center" style="margin-top: 30px;">\n      <h-image avatar src="img/hawk.jpg" size="64px"/>\n      <div class="text-h5">Hawk </div>\n      <div class="text-h5"> Framework</div>\n      <div>Sidebar Menu Working</div>\n    </div>\n  </template>\n  <h-side-bar-menu-item text="Dashboard" caption="View Data" icon=\'fas fa-th-large\' @click="$router.push(\'#\')"/>\n  <h-side-bar-menu-item text="Tables" caption="View Data Table" icon=\'fas fa-table\' @click="$router.push(\'#\')"/>\n  <h-side-bar-menu-item text="User" caption="User Management" title="User" icon=\'fas fa-user\' use-menu>\n    <h-list style="width: 180px">\n      <h-list-item>\n        <h-list-item-content>\n          <h-list-item-text title="Add User"/>\n        </h-list-item-content>\n      </h-list-item>\n      <h-list-item>\n        <h-list-item-content>\n          <h-list-item-text title="Account Settings"/>\n        </h-list-item-content>\n      </h-list-item>\n      <h-list-item>\n        <h-list-item-content>\n          <h-list-item-text title="Profile"/>\n        </h-list-item-content>\n      </h-list-item>\n    </h-list>\n  </h-side-bar-menu-item>\n  <h-side-bar-menu-item text="Help" caption="Help Topics" title="Help" icon=\'far fa-question-circle\' use-menu>\n    <h-list style="width: 200px">\n      <h-list-item>\n        <h-list-item-content>\n          <h-list-item-text title="About"/>\n        </h-list-item-content>\n      </h-list-item>\n      <h-list-item>\n        <h-list-item-content>\n          <h-list-item-text title="Check for updates"/>\n        </h-list-item-content>\n      </h-list-item>\n      <h-list-item>\n        <h-list-item-content>\n          <h-list-item-text title="View license"/>\n        </h-list-item-content>\n      </h-list-item>\n    </h-list>\n  </h-side-bar-menu-item>\n  <h-side-bar-menu-item text="Notifications" caption="View Nofitications" icon=\'far fa-bell\' @click="$router.push(\'#\')"/>\n</h-side-bar-menu>\n',customColor:'\n<h-side-bar-menu\n  class="h-ml-sm border border-gray border-radius"\n  bg-color="bg-primary"\n  text-color="text-white"\n  style="width: 200px"\n>\n  <template v-slot:header>\n    <div class="column align-items-center text-white" style="margin-top: 30px;">\n      <h-image avatar src="img/hawk.jpg" size="64px"/>\n      <div class="text-h5">Hawk </div>\n      <div class="text-h5"> Framework</div>\n      <div>Sidebar Menu Working</div>\n    </div>\n  </template>\n  <h-side-bar-menu-item text="Dashboard" caption="View Data" icon=\'fas fa-th-large\' @click="$router.push(\'#\')"/>\n  <h-side-bar-menu-item text="Tables" caption="View Data Table" icon=\'fas fa-table\' @click="$router.push(\'#\')"/>\n  <h-side-bar-menu-item text="User" caption="User Management" title="User" icon=\'fas fa-user\' use-menu>\n    <h-list style="width: 180px">\n      <h-list-item>\n        <h-list-item-content>\n          <h-list-item-text title="Add User"/>\n        </h-list-item-content>\n      </h-list-item>\n      <h-list-item>\n        <h-list-item-content>\n          <h-list-item-text title="Account Settings"/>\n        </h-list-item-content>\n      </h-list-item>\n      <h-list-item>\n        <h-list-item-content>\n          <h-list-item-text title="Profile"/>\n        </h-list-item-content>\n      </h-list-item>\n    </h-list>\n  </h-side-bar-menu-item>\n  <h-side-bar-menu-item text="Help" caption="Help Topics" title="Help" icon=\'far fa-question-circle\' use-menu>\n    <h-list style="width: 200px">\n      <h-list-item>\n        <h-list-item-content>\n          <h-list-item-text title="About"/>\n        </h-list-item-content>\n      </h-list-item>\n      <h-list-item>\n        <h-list-item-content>\n          <h-list-item-text title="Check for updates"/>\n        </h-list-item-content>\n      </h-list-item>\n      <h-list-item>\n        <h-list-item-content>\n          <h-list-item-text title="View license"/>\n        </h-list-item-content>\n      </h-list-item>\n    </h-list>\n  </h-side-bar-menu-item>\n  <h-side-bar-menu-item text="Notifications" caption="View Nofitications" icon=\'far fa-bell\' @click="$router.push(\'#\')"/>\n</h-side-bar-menu>\n'}},methods:{goToElement:function(t){l["a"].goToElement(this.$refs[t])}}},o=m,a=i("2877"),h=Object(a["a"])(o,n,s,!1,null,null,null);e["default"]=h.exports}}]);
//# sourceMappingURL=chunk-2d0b6c7e.2e68bd24.js.map