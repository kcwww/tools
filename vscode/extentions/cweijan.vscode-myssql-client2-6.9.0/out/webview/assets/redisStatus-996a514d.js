import{_ as r,a as i}from"./table-d84da22f.js";import{_ as n}from"./switch-a034bfa4.js";import{n as o,i as c}from"./pinia-d2c8f655.js";import"./checkbox-917a8077.js";import"./scrollbar-eb41de40.js";import"./index-0c4a9f33.js";import"./checkbox-group-d76ce3a9.js";import"./index-3e66c890.js";import"./focus-34de79c8.js";const l={mixins:[c],data(){return{autoRefresh:!1,refreshTimer:null,refreshInterval:2e3,connectionStatus:{},statusConnection:null}},computed:{DBKeys(){const e=[];for(const t in this.connectionStatus)if(t.startsWith("db")){const a=this.connectionStatus[t].split(",");e.push({db:t,keys:a[0].split("=")[1],expires:a[1].split("=")[1],avg_ttl:a[2].split("=")[1]})}return e},AllRedisInfo(){const e=[];for(const t in this.connectionStatus)e.push({key:t,value:this.connectionStatus[t]});return e}},mounted(){this.refreshInit(),this.on("info",e=>{this.initStatus(e)}),this.emit("routed")},destroyed(){clearInterval(this.refreshTimer)},methods:{refreshInit(){this.refreshTimer=setInterval(()=>{this.autoRefresh&&this.emit("routed")},2e3)},sortByKeys(e,t){return e.keys-t.keys},sortByExpires(e,t){return e.expires-t.expires},sortByTTL(e,t){return e.avg_ttl-t.avg_ttl},initStatus(e){if(!e)return{};e=e.split(`
`);const t={};for(let s of e){if(s=s.replace(/\s/gi,""),s.startsWith("#")||!s)continue;const a=s.split(":");t[a[0]]=a[1]}this.connectionStatus=t}}};var p=function(){var t=this,s=t._self._c;return s("div",{staticClass:"redis-status-container",attrs:{id:"app"}},[s("div",[s("vsc-tag",{attrs:{type:"info"}},[s("i",{staticClass:"el-icon-refresh"}),t._v(" Auto Refresh ")]),s("vsc-tooltip",{staticClass:"item",staticStyle:{"margin-left":"20px"},attrs:{effect:"dark",content:"Auto Refresh Switch, Refresh Every 2 Seconds",placement:"bottom"}},[s(n,{on:{change:t.refreshInit},model:{value:t.autoRefresh,callback:function(a){t.autoRefresh=a},expression:"autoRefresh"}})],1)],1),s("div",{staticClass:"grid grid-cols-3 gap-4 mt-4 px-3"},[s("div",{staticClass:"col-span-1"},[s("div",{staticClass:"box-card p-3 bg-secondBg mb-3"},[s("span",{staticClass:"text-base mb-2 block"},[t._v("Server")]),s("p",{staticClass:"server-status-tag-p"},[s("vsc-tag",{staticClass:"server-status-container",attrs:{type:"info",size:"big"}},[t._v(" Redis Version: "),s("span",{staticClass:"server-status-text"},[t._v(t._s(t.connectionStatus.redis_version))])])],1),s("p",{staticClass:"server-status-tag-p"},[s("vsc-tag",{staticClass:"server-status-container",attrs:{type:"info",size:"big"}},[t._v(" OS: "),s("span",{staticClass:"server-status-text",attrs:{title:t.connectionStatus.os}},[t._v(t._s(t.connectionStatus.os))])])],1),s("p",{staticClass:"server-status-tag-p"},[s("vsc-tag",{staticClass:"server-status-container",attrs:{type:"info",size:"big"}},[t._v(" Process ID: "),s("span",{staticClass:"server-status-text"},[t._v(t._s(t.connectionStatus.process_id))])])],1)])]),s("div",{staticClass:"col-span-1"},[s("div",{staticClass:"box-card p-3 bg-secondBg mb-3"},[s("span",{staticClass:"text-base mb-2 block"},[t._v(" Memory")]),s("p",{staticClass:"server-status-tag-p"},[s("vsc-tag",{staticClass:"server-status-container",attrs:{type:"info",size:"big"}},[t._v(" Used Memory: "),s("span",{staticClass:"server-status-text"},[t._v(t._s(t.connectionStatus.used_memory_human))])])],1),s("p",{staticClass:"server-status-tag-p"},[s("vsc-tag",{staticClass:"server-status-container",attrs:{type:"info",size:"big"}},[t._v(" Used Memory Peak: "),s("span",{staticClass:"server-status-text"},[t._v(t._s(t.connectionStatus.used_memory_peak_human))])])],1),s("p",{staticClass:"server-status-tag-p"},[s("vsc-tag",{staticClass:"server-status-container",attrs:{type:"info",size:"big"}},[t._v(" Used Memory Lua: "),s("span",{staticClass:"server-status-text"},[t._v(t._s(Math.round(t.connectionStatus.used_memory_lua/1024))+"K")])])],1)])]),s("div",{staticClass:"col-span-1"},[s("div",{staticClass:"box-card p-3 bg-secondBg mb-3"},[s("span",{staticClass:"text-base mb-2 block"},[t._v("Stats")]),s("p",{staticClass:"server-status-tag-p"},[s("vsc-tag",{staticClass:"server-status-container",attrs:{type:"info",size:"big"}},[t._v(" Connected Clients: "),s("span",{staticClass:"server-status-text"},[t._v(t._s(t.connectionStatus.connected_clients))])])],1),s("p",{staticClass:"server-status-tag-p"},[s("vsc-tag",{staticClass:"server-status-container",attrs:{type:"info",size:"big"}},[t._v(" Total Connections: "),s("span",{staticClass:"server-status-text"},[t._v(t._s(t.connectionStatus.total_connections_received))])])],1),s("p",{staticClass:"server-status-tag-p"},[s("vsc-tag",{staticClass:"server-status-container",attrs:{type:"info",size:"big"}},[t._v(" Total Commands: "),s("span",{staticClass:"server-status-text"},[t._v(t._s(t.connectionStatus.total_commands_processed))])])],1)])])]),s("div",{staticClass:"mt-4 px-3"},[s("div",{staticClass:"box-card p-3 bg-secondBg mb-3"},[s("span",{staticClass:"text-base mb-2 block"},[t._v("Key Statistics")]),s(r,{attrs:{data:t.DBKeys}},[s(i,{attrs:{prop:"db",label:"DB"}}),s(i,{attrs:{sortable:"",prop:"keys",label:"Keys","sort-method":t.sortByKeys}}),s(i,{attrs:{sortable:"",prop:"expires",label:"Expires","sort-method":t.sortByExpires}}),s(i,{attrs:{sortable:"",prop:"avg_ttl",label:"Avg TTL","sort-method":t.sortByTTL}})],1)],1)]),s("div",{staticClass:"mt-4 px-3"},[s("div",{staticClass:"box-card p-3 bg-secondBg mb-3"},[s("span",{staticClass:"text-base mb-2 block"},[t._v(" All Redis Info")]),s(r,{attrs:{data:t.AllRedisInfo}},[s(i,{attrs:{prop:"key",label:"Key"}}),s(i,{attrs:{prop:"value",label:"Value"}})],1)],1)])])},u=[],v=o(l,p,u,!1,null,"e9a103ff",null,null);const x=v.exports;export{x as default};
