(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{174:function(t,e,o){var content=o(197);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(51).default)("66dad4f3",content,!0,{sourceMap:!1})},175:function(t,e,o){var content=o(199);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(51).default)("4c1febea",content,!0,{sourceMap:!1})},176:function(t,e,o){var content=o(204);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(51).default)("3f74607b",content,!0,{sourceMap:!1})},177:function(t,e,o){var content=o(206);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(51).default)("5479c54d",content,!0,{sourceMap:!1})},178:function(t,e,o){var content=o(208);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(51).default)("c40a7b3e",content,!0,{sourceMap:!1})},196:function(t,e,o){"use strict";o(174)},197:function(t,e,o){var n=o(50)(!1);n.push([t.i,'.label[data-v-208d7029]{position:absolute;top:4px;left:10px;color:#b8b8b8;transition:all .3s;z-index:-10}.label[data-v-208d7029],input[data-v-208d7029]{font-size:1.5rem}input[data-v-208d7029]{width:100%;background:hsla(0,0%,80.4%,.49412);color:hsla(0,0%,46.7%,.46667);padding:5px 10px;z-index:2}.bar[data-v-208d7029]:after{position:absolute;bottom:-1px;left:0;content:"";height:2px;width:0;background:#404040;transition:all .3s}input:focus+.bar[data-v-208d7029]:after,input:valid+.bar[data-v-208d7029]:after{width:100%}input:focus~.label[data-v-208d7029],input:valid~.label[data-v-208d7029]{top:-15px;left:2px;font-size:1rem;color:#505050;z-index:3}',""]),t.exports=n},198:function(t,e,o){"use strict";o(175)},199:function(t,e,o){var n=o(50)(!1);n.push([t.i,"div[data-v-28d85738]{height:1px;margin:20px auto}",""]),t.exports=n},203:function(t,e,o){"use strict";o(176)},204:function(t,e,o){var n=o(50)(!1);n.push([t.i,"header[data-v-17c09723]{font-size:2rem;background:rgba(71,0,151,.404);color:indigo;border-bottom:1px solid #cdcdcd}",""]),t.exports=n},205:function(t,e,o){"use strict";o(177)},206:function(t,e,o){var n=o(50)(!1);n.push([t.i,"@media (max-width:580px){header[data-v-7e9378c9]{flex-direction:column}header>div[data-v-7e9378c9]{margin-top:3rem}}header[data-v-7e9378c9]{background:transparent;box-shadow:0 0 40px -30px #404040;font-size:2rem;margin:5rem 0}",""]),t.exports=n},207:function(t,e,o){"use strict";o(178)},208:function(t,e,o){var n=o(50)(!1);n.push([t.i,".done-todos{background:rgba(0,255,204,.21961);color:#00745d}.all-todos{background:#f3f1ef}",""]),t.exports=n},209:function(t,e,o){"use strict";o.r(e);var n=o(165),l=o.n(n),r={props:["label","placeholder","value","type"],data:function(){return{theValue:""}}},c=(o(196),o(29)),d=Object(c.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"relative my-5"},["checkbox"===t.type?o("input",{directives:[{name:"model",rawName:"v-model",value:t.theValue,expression:"theValue"}],attrs:{id:t.label,placeholder:t.placeholder,required:"",type:"checkbox"},domProps:{checked:Array.isArray(t.theValue)?t._i(t.theValue,null)>-1:t.theValue},on:{input:function(e){return t.$emit("theValueInput",e,t.theValue)},change:function(e){var o=t.theValue,n=e.target,l=!!n.checked;if(Array.isArray(o)){var r=t._i(o,null);n.checked?r<0&&(t.theValue=o.concat([null])):r>-1&&(t.theValue=o.slice(0,r).concat(o.slice(r+1)))}else t.theValue=l}}}):"radio"===t.type?o("input",{directives:[{name:"model",rawName:"v-model",value:t.theValue,expression:"theValue"}],attrs:{id:t.label,placeholder:t.placeholder,required:"",type:"radio"},domProps:{checked:t._q(t.theValue,null)},on:{input:function(e){return t.$emit("theValueInput",e,t.theValue)},change:function(e){t.theValue=null}}}):o("input",{directives:[{name:"model",rawName:"v-model",value:t.theValue,expression:"theValue"}],attrs:{id:t.label,placeholder:t.placeholder,required:"",type:t.type},domProps:{value:t.theValue},on:{input:[function(e){e.target.composing||(t.theValue=e.target.value)},function(e){return t.$emit("theValueInput",e,t.theValue)}]}}),t._v(" "),o("span",{staticClass:"bar"}),t._v(" "),o("span",{staticClass:"label"},[t._v(t._s(t.label))])])}),[],!1,null,"208d7029",null).exports,h={props:["color","w"]},f=(o(198),Object(c.a)(h,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{style:{backgroundColor:t.color,width:t.w}})}),[],!1,null,"28d85738",null).exports),v=(o(200),{props:{title:{type:String,required:!0},success:{type:Number,default:0}}}),m=Object(c.a)(v,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"fixed z-50 text-xl transform -translate-x-1/2 shadow-lg top-10 left-1/2"},[0===t.success?o("header",{staticClass:"p-3 px-4 text-white bg-red-700 shadow-lg"},[t._v(t._s(t.title))]):1===t.success?o("header",{staticClass:"p-3 px-6 text-white bg-green-600 shadow-lg"},[t._v(t._s(t.title))]):o("header",{staticClass:"p-3 text-gray-700 bg-gray-100 shadow-lg"},[t._v(t._s(t.title))]),t._v(" "),o("div",{staticClass:"p-7 bg-gray-50"},[t._t("default")],2)])}),[],!1,null,null,null).exports,C={components:{BaseAlert:m},props:["isDone","topic","description","id"],emits:["done","delete","fresh-todos"],data:function(){return{alertOpen:!1,alertMessage:"",alertTitle:"",alertSuccess:null}},methods:{thisIsDone:function(t){var e=this;l.a.get("/done",{params:{id:t}}).then((function(t){e.showAlert(t.data),e.$emit("done",t.data.todos)})).catch((function(t){return e.showAlert(t.response.data)}))},deleteTodo:function(t){var e=this;l.a.get("/delete",{params:{id:t}}).then((function(t){e.showAlert(t.data),e.$emit("delete",t.data.todos)})).catch((function(t){return e.showAlert(t.response.data)}))},showAlert:function(data){var t=this;this.alertMessage=data.message,this.alertSuccess=data.success,this.alertTitle=1===data.success?"Successful":"Error",this.alertOpen=!0,setTimeout((function(){t.alertOpen=!1}),2e3)}},created:function(){}},x=Object(c.a)(C,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"flex flex-col p-3",class:{"bg-indigo-100":!t.isDone,"bg-green-100":t.isDone}},[t.alertOpen?o("base-alert",{attrs:{success:t.alertSuccess,title:t.alertTitle}},[t._v(t._s(t.alertMessage))]):t._e(),t._v(" "),o("div",{staticClass:"flex items-center justify-between p-2"},[o("div",{staticClass:"flex items-center space-x-5 cursor-pointer -z-1000",on:{click:function(e){return t.thisIsDone(t.id)}}},[o("div",{staticClass:"relative"},[o("svg",{attrs:{width:"19",height:"19",viewBox:"0 0 19 19"}},[o("path",{attrs:{d:"M16.8889 0H2.11111C0.95 0 0 0.95 0 2.11111V16.8889C0 18.05 0.95 19 2.11111 19H16.8889C18.05 19 19 18.05 19 16.8889V2.11111C19 0.95 18.05 0 16.8889 0ZM16.8889 16.8889H2.11111V2.11111H16.8889V16.8889Z",fill:t.isDone?"#00745D":"#6C5CE7"}})]),t._v(" "),t.isDone?o("svg",{staticClass:"absolute left-0.5 top-1.5",attrs:{width:"19",height:"12",viewBox:"0 0 26 19",fill:"none"}},[o("path",{attrs:{d:"M23.995 0.000434763C23.7352 0.0081759 23.4886 0.116755 23.3075 0.303169L8.01449 15.5961L1.72152 9.30317C1.62937 9.2072 1.51901 9.13057 1.39688 9.07779C1.27475 9.025 1.14332 8.99712 1.01027 8.99576C0.877234 8.99441 0.745261 9.01962 0.622083 9.06991C0.498906 9.12019 0.387001 9.19456 0.292923 9.28863C0.198844 9.38271 0.124482 9.49462 0.0741933 9.61779C0.0239041 9.74097 -0.00130181 9.87295 5.17615e-05 10.006C0.00140533 10.139 0.0292912 10.2705 0.0820761 10.3926C0.134861 10.5147 0.211484 10.6251 0.307457 10.7172L7.30746 17.7172C7.495 17.9047 7.74932 18.01 8.01449 18.01C8.27966 18.01 8.53398 17.9047 8.72152 17.7172L24.7215 1.71723C24.866 1.57677 24.9647 1.39593 25.0047 1.19841C25.0446 1.00089 25.024 0.795905 24.9455 0.610319C24.8669 0.424733 24.7341 0.267204 24.5645 0.158375C24.3949 0.0495457 24.1964 -0.0055056 23.995 0.000434763V0.000434763Z",fill:"#00745D"}})]):t._e()]),t._v(" "),o("p",{staticClass:"text-2xl font-semibold",class:{"text-gray-600":!t.isDone,"text-green-600":t.isDone,"line-through":t.isDone}},[t._v("\n        "+t._s(t.topic)+"\n      ")])]),t._v(" "),o("div",[o("svg",{staticClass:"cursor-pointer",attrs:{width:"21",height:"24",viewBox:"0 0 21 24"},on:{click:function(e){return t.deleteTodo(t.id)}}},[o("path",{attrs:{d:"M9.99862 0.000121978C9.73374 0.00426239 9.48133 0.113322 9.29678 0.303366C9.11223 0.49341 9.01061 0.748911 9.01424 1.01379V1.51379H3.51424C3.38178 1.512 3.25028 1.53653 3.12738 1.58598C3.00447 1.63543 2.89262 1.7088 2.79831 1.80184C2.704 1.89488 2.62912 2.00572 2.578 2.12794C2.52689 2.25016 2.50057 2.38132 2.50057 2.51379H1.01424C0.881731 2.51192 0.750168 2.5364 0.6272 2.58581C0.504231 2.63523 0.39231 2.70859 0.297941 2.80163C0.203571 2.89468 0.128635 3.00555 0.077487 3.12781C0.0263393 3.25007 0 3.38127 0 3.51379C0 3.64632 0.0263393 3.77752 0.077487 3.89978C0.128635 4.02204 0.203571 4.13291 0.297941 4.22595C0.39231 4.319 0.504231 4.39236 0.6272 4.44177C0.750168 4.49119 0.881731 4.51567 1.01424 4.51379H19.0142C19.1468 4.51567 19.2783 4.49119 19.4013 4.44177C19.5243 4.39236 19.6362 4.319 19.7305 4.22595C19.8249 4.13291 19.8999 4.02204 19.951 3.89978C20.0021 3.77752 20.0285 3.64632 20.0285 3.51379C20.0285 3.38127 20.0021 3.25007 19.951 3.12781C19.8999 3.00555 19.8249 2.89468 19.7305 2.80163C19.6362 2.70859 19.5243 2.63523 19.4013 2.58581C19.2783 2.5364 19.1468 2.51192 19.0142 2.51379H17.5279C17.5279 2.38132 17.5016 2.25016 17.4505 2.12794C17.3994 2.00572 17.3245 1.89488 17.2302 1.80184C17.1359 1.7088 17.024 1.63543 16.9011 1.58598C16.7782 1.53653 16.6467 1.512 16.5142 1.51379H11.0142V1.01379C11.0161 0.880004 10.991 0.747208 10.9406 0.623267C10.8902 0.499327 10.8154 0.386763 10.7207 0.292242C10.626 0.197721 10.5133 0.123164 10.3893 0.072987C10.2652 0.0228097 10.1324 -0.00196763 9.99862 0.000121978ZM1.01424 6.51379L2.80721 21.7482C2.92521 22.7552 3.77759 23.5138 4.79159 23.5138H15.2369C16.2509 23.5138 17.1023 22.7552 17.2213 21.7482L19.0142 6.51379H1.01424Z",fill:"#D63031"}})])])]),t._v(" "),o("div",[o("p",{staticClass:"p-5 text-xl font-light",class:{"text-gray-600":!t.isDone,"text-green-600":t.isDone,"line-through":t.isDone}},[t._v("\n      "+t._s(t.description)+"\n    ")])])],1)}),[],!1,null,"0c541bb1",null).exports,_={props:["title"]},w=(o(203),Object(c.a)(_,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"fixed top-0 left-0 z-50 w-full h-full"},[o("div",{staticClass:"fixed w-full h-full bg-gray-900 opacity-70",on:{click:function(e){return t.$emit("close-modal",e)}}}),t._v(" "),o("dialog",{staticClass:"fixed w-3/4 transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2",attrs:{open:""}},[o("header",{staticClass:"p-3"},[t._v(t._s(t.title))]),t._v(" "),o("div",{staticClass:"p-5"},[t._t("default")],2)])])}),[],!1,null,"17c09723",null).exports),M={components:{BaseAlert:m,BaseModal:w,TodoItems:x},data:function(){return{text:"",todosFound:null,alertOpen:!1,alertMessage:"",alertTitle:"",alertSuccess:null,isModalOpen:!1}},methods:{findTodos:function(){var t=this;l.a.get("/find",{params:{text:this.text}}).then((function(e){t.showAlert({success:1,message:e.data.message}),t.todosFound=e.data.todos,t.showSearchResult()})).catch((function(e){t.showAlert({success:0,message:e.response.data.message||"Something went wrong finding todos."})}))},showAlert:function(data){var t=this;this.alertMessage=data.message,this.alertSuccess=data.success,this.alertTitle=1===data.success?"Successful":"Error",this.alertOpen=!0,setTimeout((function(){t.alertOpen=!1}),2e3)},showSearchResult:function(){this.isModalOpen=!0},closeSearchResultBox:function(){this.isModalOpen=!1},newTodos:function(t){var e=this;l.a.get("/find",{params:{text:this.text}}).then((function(t){return e.todosFound=t.data.todos})).catch((function(t){return e.showAlert(t.response.data)})),this.$emit("new-todos",t)}},mounted:function(){}},y=(o(205),{components:{TodoItems:x,BaseDivider:f,BaseInput:d,TheHeader:Object(c.a)(M,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[t.isModalOpen?o("base-modal",{attrs:{title:"Results"},on:{"close-modal":t.closeSearchResultBox}},[o("ul",{staticClass:"grid grid-cols-1 lg:grid-cols-2"},t._l(t.todosFound,(function(e){return o("li",{key:e._id,staticClass:"m-5"},[o("todo-items",{attrs:{topic:e.topic,description:e.description,id:e._id,isDone:e.isDone},on:{done:t.newTodos,delete:t.newTodos}})],1)})),0)]):t._e(),t._v(" "),t.alertOpen?o("base-alert",{attrs:{success:t.alertSuccess,title:t.alertTitle}},[t._v(t._s(t.alertMessage))]):t._e(),t._v(" "),o("header",{staticClass:"flex items-center content-center justify-between w-full p-8 mb-10 bg-gray-200"},[o("ul",{staticClass:"flex space-x-10 text-gray-600"},[o("li",{staticClass:"float-left"},[o("button",{staticClass:"focus:border-none focus:outline-none focus:ring-0",on:{click:function(e){return t.$emit("open-modal",e)}}},[t._v("\n          New Todo\n        ")])])]),t._v(" "),o("div",{staticClass:"flex float-left space-x-10"},[o("form",{on:{submit:function(e){return e.preventDefault(),t.findTodos(e)}}},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.text,expression:"text"}],staticClass:"p-5 text-xl shadow focus:shadow-md",attrs:{placeholder:"Search For A Todo"},domProps:{value:t.text},on:{input:function(e){e.target.composing||(t.text=e.target.value)}}}),t._v(" "),o("button",{staticClass:"p-5 text-xl font-light text-gray-100 bg-indigo-900 focus:border-none focus:outline-none",attrs:{type:"submit"}},[t._v("\n          Search\n        ")])])])])],1)}),[],!1,null,"7e9378c9",null).exports,BaseModal:w,BaseAlert:m},data:function(){return{todos:[],errorMessage:"",isModalOpen:!1,topic:"",description:"",alertOpen:!1,alertMessage:"",alertTitle:"",alertSuccess:null}},methods:{getTodos:function(t){var e=this;t?this.todos=t:l.a.get("/todos").then((function(t){e.todos=t.data.todos})).catch((function(t){e.showAlert(t.response.data)}))},inputValChanged:function(t,e){"Topic"===t.target.id?this.topic=e:"Description"===t.target.id&&(this.description=e)},openModal:function(){this.isModalOpen=!0},RegisterNewTodo:function(){var t=this;""!==this.topic?""!==this.description?l.a.post("/new",{topic:this.topic,description:this.description},{headers:{ContentType:"application/json"}}).then((function(e){t.showAlert(e.data),t.isModalOpen=!t.isModalOpen,t.getTodos()})).catch((function(e){t.showAlert(e.response.data),t.isModalOpen=!t.isModalOpen})):this.showAlert({success:0,message:"Description is Required."}):this.showAlert({success:0,message:"Topic is Required."})},showAlert:function(data){var t=this;this.alertMessage=data.message,this.alertSuccess=data.success,this.alertTitle=1===data.success?"Successful":"Error",this.alertOpen=!0,setTimeout((function(){t.alertOpen=!1}),2e3)},updateTodos:function(t){this.todos=t}},mounted:function(){this.getTodos()}}),T=(o(207),Object(c.a)(y,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("TheHeader",{on:{"new-todos":t.updateTodos,"open-modal":t.openModal}}),t._v(" "),t.alertOpen?o("base-alert",{attrs:{success:t.alertSuccess,title:t.alertTitle}},[t._v(t._s(t.alertMessage))]):t._e(),t._v(" "),t.isModalOpen?o("base-modal",{attrs:{title:"New Todo"},on:{"close-modal":function(e){t.isModalOpen=!1}}},[o("div",{staticClass:"grid grid-cols-1 sm:grid-cols-3"},[o("div",{staticClass:"mx-5 mb-3 sm:col-span-1"},[o("base-input",{attrs:{type:"text",label:"Topic"},on:{theValueInput:t.inputValChanged}})],1),t._v(" "),o("div",{staticClass:"mx-5 mb-3 sm:col-span-2"},[o("base-input",{attrs:{type:"text",label:"Description"},on:{theValueInput:t.inputValChanged}})],1)]),t._v(" "),o("div",[o("button",{staticClass:"float-right p-2 px-4 mx-5 mt-2 mb-4 text-xl font-light tracking-wider text-green-600 border border-green-600 focus:outline-none hover:bg-green-600 hover:text-green-50",on:{click:t.RegisterNewTodo}},[t._v("\n        Submit\n      ")])])]):t._e(),t._v(" "),o("div",{staticClass:"mb-10"},[o("div",[o("div",{staticClass:"max-w-3xl mx-auto"},[o("ul",{staticClass:"text-lg capitalize"},[o("li",{staticClass:"flex p-4 all-todos"},[t._v("\n            all todos: "),o("span",{staticClass:"text-xl font-bold"},[t._v("  "+t._s(t.todos.length))])]),t._v(" "),o("li",{staticClass:"flex p-4 done-todos"},[o("span",{staticClass:"text-xl font-bold"},[t._v(t._s(t.todos.filter((function(t){return!1!==t.isDone})).length)+"  ")]),t._v("\n            todos done   \n            "),o("svg",{attrs:{width:"22",height:"15",viewBox:"0 0 26 19"}},[o("path",{attrs:{d:"M23.995 0.000434763C23.7352 0.0081759 23.4886 0.116755 23.3075 0.303169L8.01449 15.5961L1.72152 9.30317C1.62937 9.2072 1.51901 9.13057 1.39688 9.07779C1.27475 9.025 1.14332 8.99712 1.01027 8.99576C0.877234 8.99441 0.745261 9.01962 0.622083 9.06991C0.498906 9.12019 0.387001 9.19456 0.292923 9.28863C0.198844 9.38271 0.124482 9.49462 0.0741933 9.61779C0.0239041 9.74097 -0.00130181 9.87295 5.17615e-05 10.006C0.00140533 10.139 0.0292912 10.2705 0.0820761 10.3926C0.134861 10.5147 0.211484 10.6251 0.307457 10.7172L7.30746 17.7172C7.495 17.9047 7.74932 18.01 8.01449 18.01C8.27966 18.01 8.53398 17.9047 8.72152 17.7172L24.7215 1.71723C24.866 1.57677 24.9647 1.39593 25.0047 1.19841C25.0446 1.00089 25.024 0.795905 24.9455 0.610319C24.8669 0.424733 24.7341 0.267204 24.5645 0.158375C24.3949 0.0495457 24.1964 -0.0055056 23.995 0.000434763V0.000434763Z",fill:"#00745D"}})])])])]),t._v(" "),o("base-divider",{attrs:{color:"#cdcdcd",w:"80%"}}),t._v(" "),o("ul",{staticClass:"grid grid-cols-1 sm:grid-cols-2"},t._l(t.todos,(function(e){return o("li",{key:e._id,staticClass:"m-5"},[o("todo-items",{attrs:{topic:e.topic,description:e.description,id:e._id,isDone:e.isDone},on:{done:t.getTodos,delete:t.getTodos}})],1)})),0)],1)])],1)}),[],!1,null,null,null));e.default=T.exports}}]);