"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[498],{789:(t,e,s)=>{s.r(e),s.d(e,{default:()=>c});var r=s(3343),a=s(2657);const o={components:{ProjectHeader:r.Z,ContentSidebar:a.Z},data:function(){return{project:{}}},methods:{getProject:function(){var t=this;axios.get("/admin/content/project/"+this.$route.params.project_id).then((function(e){t.project=e.data}))}},mounted:function(){this.getProject()}};const c=(0,s(1900).Z)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"flex h-full overflow-hidden"},[e("div",{staticClass:"w-96 overflow-x-hidden h-full bg-white"},[e("project-header",{staticClass:"bg-white",attrs:{project:t.project}}),t._v(" "),e("content-sidebar",{staticClass:"h-full",attrs:{project:t.project}})],1)])}),[],!1,null,null,null).exports},2657:(t,e,s)=>{s.d(e,{Z:()=>a});const r={data:function(){return{searchCollection:"",openSearchInput:!1}},computed:{filterSearch:function(){var t=this;if(void 0!==this.project.collections)return this.project.collections.filter((function(e){return!t.searchCollection||e.name.toLowerCase().indexOf(t.searchCollection.toLowerCase())>-1}))}},props:["project"]};const a=(0,s(1900).Z)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"p-4 bg-white"},[e("div",{staticClass:"mb-4"},[t.openSearchInput?t._e():e("h4",{staticClass:"mb-2 p-2 font-bold text-lg flex justify-between items-center h-10"},[e("div",[t._v("\n                Content    \n            ")]),t._v(" "),e("div",[e("a",{staticClass:"text-sm text-blue-500 p-1 px-3 cursor-pointer rounded-md hover:bg-gray-100",on:{click:function(e){t.openSearchInput=!0}}},[e("i",{staticClass:"fas fa-search"})])])]),t._v(" "),t.openSearchInput?e("div",{staticClass:"mb-2 relative flex w-full flex-wrap items-stretch mb-2 h-10"},[t._m(0),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.searchCollection,expression:"searchCollection"}],staticClass:"px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded-sm text-sm w-full pl-10 border-gray-200 focus:border-gray-300",attrs:{type:"text",placeholder:"Search...",autofocus:""},domProps:{value:t.searchCollection},on:{input:function(e){e.target.composing||(t.searchCollection=e.target.value)}}}),t._v(" "),e("span",{staticClass:"z-9 h-full leading-snug font-normal absolute text-center text-gray-400 absolute bg-transparent rounded-sm text-base items-center justify-center w-8 py-3 right-0 pr-3 cursor-pointer",on:{click:function(e){t.searchCollection="",t.openSearchInput=!1}}},[e("i",{staticClass:"fas fa-times-circle"})])]):t._e()]),t._v(" "),e("ul",[t._l(t.filterSearch,(function(s){return e("li",{key:s.id,staticClass:"mb-2"},[e("router-link",{staticClass:"block w-full p-2 cursor-pointer hover:bg-gray-100 rounded",attrs:{to:{name:"projects.content.list",params:{project_id:t.project.id,col_id:s.id}}}},[t._v(t._s(s.name))])],1)})),t._v(" "),t._m(1),t._v(" "),e("li",{staticClass:"mb-2"},[void 0!==t.project.id?e("router-link",{staticClass:"block w-full p-2 cursor-pointer hover:bg-gray-100 rounded",attrs:{to:{name:"projects.media_library",params:{id:t.project.id}}}},[e("i",{staticClass:"fas fa-images text-gray-600 mr-3"}),t._v(" Media Library")]):t._e()],1)],2)])}),[function(){var t=this._self._c;return t("span",{staticClass:"z-9 h-full leading-snug font-normal absolute text-center text-gray-400 absolute bg-transparent rounded-sm text-base items-center justify-center w-8 pl-3 py-3"},[t("i",{staticClass:"fas fa-search"})])},function(){var t=this._self._c;return t("li",{staticClass:"mb-2"},[t("hr")])}],!1,null,null,null).exports},3343:(t,e,s)=>{s.d(e,{Z:()=>a});const r={props:["project"],methods:{checkRole:s(3787).Z}};const a=(0,s(1900).Z)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"p-4 flex border-b"},[e("div",{staticClass:"w-full"},[e("div",{staticClass:"text-xl font-bold"},[t._v("\n            "+t._s(t.project.name)+"\n        ")]),t._v(" "),e("div",{staticClass:"text-sm"},[t._v(t._s(t.project.description))])]),t._v(" "),e("div",{staticClass:"flex items-center"},[void 0!==t.project.id&&t.checkRole(["admin"+t.project.id])?e("router-link",{staticClass:"text-xl text-gray-600 cursor-pointer",attrs:{to:{name:"projects.settings",params:{project_id:t.project.id}},"exact-active-class":"bg-none"}},[e("i",{staticClass:"fas fa-cog"})]):t._e()],1)])}),[],!1,null,null,null).exports}}]);