import{c as v}from"./g2-1485342a.js";import{n as _,i as y}from"./pinia-b67edd83.js";import{e as k}from"./notify-e76d0bf8.js";class f{constructor(t,s){this.ele=t,this.option=s}update(t){const s=t.percent;this.value=s,this.chart.changeData([{value:0},{value:s}])}render(){v.registerShape("point","pointer",{draw(s,r){const d=s.points[0],c=this.parsePoint({x:0,y:0}),i=this.parsePoint({x:d.x,y:.9}),e={x:c.x-i.x,y:c.y-i.y},a=Math.sqrt(e.x*e.x+e.y*e.y);e.x*=1/a,e.y*=1/a;const n=-Math.PI/2,l=Math.cos(n)*e.x-Math.sin(n)*e.y,u=Math.sin(n)*e.x+Math.cos(n)*e.y,h=Math.PI/2,p=Math.cos(h)*e.x-Math.sin(h)*e.y,m=Math.sin(h)*e.x+Math.cos(h)*e.y,g=[["M",i.x+l,i.y+u],["L",c.x+l*3,c.y+u*3],["L",c.x+p*3,c.y+m*3],["L",i.x+p,i.y+m],["Z"]];return r.getCount()>1&&r.removeChild(r.getLast()),r.addShape("path",{attrs:{path:g,fill:s.color}})}});const t=new v.Chart({container:this.ele,autoFit:!0,width:this.option.width,height:this.option.height,padding:[0,0,0,0]});this.value=0,this.chart=t,this.settingChart(),this.bindAnnotaion(),t.data([{value:0}]),t.render()}settingChart(){const t=this.chart;t.coordinate("polar",{startAngle:-10/8*Math.PI,endAngle:2/8*Math.PI,radius:.75}),t.scale("value",{min:0,max:1,tickInterval:1}),t.axis(!1),t.point().position("value*1").shape("pointer").color("#d8d8d8").animate({appear:{animation:"fade-in"}})}bindAnnotaion(){this.chart.annotation().arc({top:!1,start:[0,1],end:[1,1],style:{stroke:"#ebedf0",lineWidth:10}}),this.chart.annotation().arc({start:[0,1],animate:!1,end:()=>[Math.min(this.value,1),1],style:{stroke:"#5B8FF9",lineWidth:10}}),this.chart.annotation().text({position:["50%","75%"],content:()=>`${(this.value*100).toFixed(1)}%`,animate:!1,style:{fontSize:14,fill:this.option.fColor??"#E8EDF3",fontWeight:500,textAlign:"center"},offsetX:0,offsetY:10})}}const C={name:"Status",mixins:[y],data(){return{info:{serverType:"linux",os:"Loading",kernelVersion:"Loading",arch:"x86_64",hostname:"localhost",upTime:"0",diskUsage:{total:"0G",used:"0G",available:"0G",usePercent:0},memoryUsage:{total:"0 GB",used:"0 GB",free:"0 MB",usePercent:0},cpu:{name:"",clock:"0GHz",logicCoreCount:"0",usePercent:0}},task:{cpu:null,memory:null,network:null},dashBoard:{traffic:{data:[],lock:!1,chart:null,previous:null}}}},mounted(){const o=this.getColor("--vscode-editor-foreground"),t=new f("cpuUsage",{height:120,width:120,autoFit:!1,percent:this.info.cpu.usePercent,color:["#5B8FF9","#E8EDF3"],fColor:o,statistic:{content:{style:{color:"var(--vscode-editor-foreground)"}}}});t.render();const s=new f("diskUsage",{height:120,width:120,autoFit:!1,percent:this.info.diskUsage.usePercent,color:["#5B8FF9","#E8EDF3"],fColor:o,statistic:{content:{style:{color:"var(--vscode-editor-foreground)"}}}});s.render();const r=new f("memoryUsage",{height:120,width:120,autoFit:!1,percent:this.info.memoryUsage.usePercent,color:["#5B8FF9","#E8EDF3"],fColor:o,statistic:{content:{style:{color:"var(--vscode-editor-foreground)"}}}});r.render();const d=(i,e)=>{const a=new v.Chart({container:i,autoFit:!0,height:300});return a.data(e),a.axis("value",{label:{style:{fill:o},formatter:n=>`${n}KB`}}),a.axis("now",{label:{style:{fill:o}}}),a.legend({itemName:{style:{fill:o}}}),a.line().position("now*value").color("type").size(2),a.render(),a};function c(i,e,a,n){const l=JSON.parse(JSON.stringify(a));if(e.previous||(e.previous=l),e.data.push(...a),n&&n(a,e.previous),e.previous=l,!e.chart)e.chart=d(i,e.data);else{if(e.data.length>=a.length*60)for(let u=0;u<a.length;u++)e.data.shift();e.chart.changeData(e.data)}e.lock=!1}this.on("error",()=>{k("SSH service connection failed!")}).on("info",i=>{this.info=i,this.task.memory||(this.task.memory=setInterval(()=>this.emit("memory"),3e3)),i.serverType=="windows"?this.emit("cpu"):(this.emit("network"),this.task.network||(this.task.network=setInterval(()=>this.emit("network"),1e3))),this.task.cpu||(this.task.cpu=setInterval(()=>this.emit("cpu"),1e3)),r.update({percent:i.memoryUsage.usePercent}),s.update({percent:i.diskUsage.usePercent}),t.update({percent:i.cpu.usePercent})}).on("cpu",i=>{this.info.cpu.usePercent=i,t.update({percent:i})}).on("memory",i=>{this.info.memoryUsage=i,r.update({percent:i.usePercent})}).on("network",i=>{c("traffic",this.dashBoard.traffic,i,(e,a)=>{for(let n=0;n<a.length;n++)e[n].value=parseFloat(((e[n].value-a[n].value)/1024).toFixed(2))})}).init()},methods:{getColor(o){return document.documentElement.style.getPropertyValue(o)},remainHeight(){return window.outerHeight-150}}};var x=function(){var t=this,s=t._self._c;return s("div",{staticClass:"status-container"},[s("div",{staticClass:"info-container"},[s("div",{staticStyle:{display:"inline-block","margin-right":"50px"}},[s("div",{staticClass:"info-title"},[t._v(" "+t._s(t.$t("sshStatus.systemInfo"))+": ")]),s("div",[t._v(" "+t._s(t.$t("sshStatus.runTime"))+": "+t._s(t.info.upTime)+" ")]),s("span",{staticClass:"info-col"},[t._v(t._s(t.$t("sshStatus.arch"))+": "),s("span",{domProps:{innerHTML:t._s(t.info.arch)}})]),s("span",{staticClass:"info-col"},[t._v(t._s(t.$t("sshStatus.hostname"))+": "+t._s(t.info.hostname))]),s("span",{staticClass:"info-col"},[t._v(t._s(t.$t("sshStatus.os"))+": "),s("span",{staticClass:"red"},[t._v(t._s(t.info.os))])]),s("span",{staticClass:"info-col"},[t._v(t._s(t.$t("sshStatus.kernelVersion"))+": "+t._s(t.info.kernelVersion))])]),s("div",{staticStyle:{display:"inline-block"}},[s("div",{staticClass:"info-title"},[t._v(" "+t._s(t.$t("sshStatus.cpuInfo"))+": ")]),s("div",[s("span",{staticClass:"info-col"},[t._v(" "+t._s(t.$t("sshStatus.cpuClock"))+":"+t._s(t.info.cpu.clock)+" ")]),s("span",{staticClass:"info-col"},[t._v(" "+t._s(t.$t("sshStatus.cpuCoreCount"))+":"+t._s(t.info.cpu.logicCoreCount)+" ")]),s("span",{staticClass:"info-col"},[t._v(" "+t._s(t.$t("sshStatus.cpuName"))+": "),s("span",{domProps:{innerHTML:t._s(t.info.cpu.name)}})])])])]),s("div",[s("div",{staticClass:"info-title"},[t._v(" "+t._s(t.$t("sshStatus.systemStatus"))+": ")]),s("div",{staticClass:"ring-graph-status"},[s("div",{staticStyle:{margin:"auto"}},[t._v("CPU")]),s("div",{staticStyle:{margin:"auto"},attrs:{id:"cpuUsage"}}),s("div",{staticStyle:{margin:"auto"}},[t._v(" "+t._s(t.info.cpu.clock)+" ")])]),s("div",{staticClass:"ring-graph-status"},[s("div",{staticStyle:{margin:"auto"}},[t._v(" "+t._s(t.$t("sshStatus.memory")))]),s("div",{staticStyle:{margin:"auto"},attrs:{id:"memoryUsage"}}),s("div",{staticStyle:{margin:"auto"}},[t._v(" "+t._s(t.info.memoryUsage.used)+"/"+t._s(t.info.memoryUsage.total)+" ")])]),s("div",{staticClass:"ring-graph-status"},[s("div",{staticStyle:{margin:"auto"}},[t._v(" "+t._s(t.$t("sshStatus.disk")))]),s("div",{staticStyle:{margin:"auto"},attrs:{id:"diskUsage"}}),s("div",{staticStyle:{margin:"auto"}},[t._v(" "+t._s(t.info.diskUsage.used)+"/"+t._s(t.info.diskUsage.total)+" ")])])]),s("div",{directives:[{name:"show",rawName:"v-show",value:t.info.serverType!="windows",expression:"info.serverType!='windows'"}],staticClass:"netword-container"},[s("div",{staticClass:"info-title"},[t._v(" "+t._s(t.$t("sshStatus.network"))+": ")]),s("div",{staticStyle:{width:"600px"},attrs:{id:"traffic"}})])])},S=[],w=_(C,x,S,!1,null,null,null,null);const $=w.exports;export{$ as default};