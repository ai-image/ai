(this["webpackJsonpai-image"]=this["webpackJsonpai-image"]||[]).push([[0],{14:function(e,a,t){},35:function(e,a,t){e.exports=t(69)},40:function(e,a,t){},69:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(10),c=t.n(l),i=(t(40),t(2)),o=t(3),s=t(5),m=t(4),d=(t(14),function(e){Object(s.a)(t,e);var a=Object(m.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"container-fluid header"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-sm-3 col-md-3 col-lg-3 col-xl-3 col-5",style:{margin:"auto 0 auto 0"}},r.a.createElement("a",null,r.a.createElement("img",{src:"/logo192.png",className:"image",alt:""})),"AI Image"),r.a.createElement("div",{className:"col-sm-6 col-md-6 col-lg-6 col-xl-6 col-6"},r.a.createElement("nav",{className:"navbar navbar-expand navbar-light"},r.a.createElement("div",{className:"collapse navbar-collapse"},r.a.createElement("ul",{className:"navbar-nav mr-auto"},r.a.createElement("li",{className:"nav-item dropdown"},r.a.createElement("a",{className:"nav-link dropdown-toggle",role:"button","data-toggle":"dropdown"},"Image"),r.a.createElement("div",{className:"dropdown-menu",style:{background:"rgba(0, 0, 0, .10)"}},r.a.createElement("a",{className:"dropdown-item"},"Image Inpainting"),r.a.createElement("a",{className:"dropdown-item"},"Style Image")))))))))}}]),t}(r.a.Component)),u=function(e){Object(s.a)(t,e);var a=Object(m.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null)}}]),t}(r.a.Component),h=function(e){Object(s.a)(t,e);var a=Object(m.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"container-fluid footer"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"text-center col-lg-6 offset-lg-3"},r.a.createElement("br",null),r.a.createElement("p",null,"Copyright \xa9 2020 ai-image.github.io"))))}}]),t}(r.a.Component),g=function(e){Object(s.a)(t,e);var a=Object(m.a)(t);function t(e){return Object(i.a)(this,t),a.call(this,e)}return Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null)}}]),t}(r.a.Component),v=t(9),b=t.n(v),f=t(11),p=t(6),E=t(12),w=t.n(E),y=t(27),N=t.n(y),j=function(e){Object(s.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(i.a)(this,t),(n=a.call(this,e)).onDrop=n.onDrop.bind(Object(p.a)(n)),n.state={pictures:[],onChange:e.onChange},n}return Object(o.a)(t,[{key:"onDrop",value:function(e){this.setState({pictures:this.state.pictures.concat(e)}),this.state.onChange(e)}},{key:"render",value:function(){return r.a.createElement(N.a,{withIcon:!0,buttonText:"Choose images",onChange:this.onDrop,imgExtension:[".jpg",".gif",".png",".bmp",".jpeg"],maxFileSize:5242880,singleImage:!0,withPreview:!0})}}]),t}(r.a.Component),k=t(32),C=t(80),O=(r.a.Component,r.a.Component,t(26)),x=["https://77fb6aee.ngrok.io","https://45b9f1b1.ngrok.io"];var I=function(e){Object(s.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(i.a)(this,t),(n=a.call(this,e)).handleChangeWidthPen=function(e,a){n.setState({value:a})},n.handleChangeMask=function(){n.setState({mask:n.canvas.current.canvas.drawing.toDataURL()})},n.state={value:20,mask:"",photo:"",result:"",loading:!1,width:300,height:200},n.canvas=r.a.createRef(),n.handleChangeWidthPen=n.handleChangeWidthPen.bind(Object(p.a)(n)),n.handleChangeMask=n.handleChangeMask.bind(Object(p.a)(n)),n.handleDownload=n.handleDownload.bind(Object(p.a)(n)),n.handleClear=n.handleClear.bind(Object(p.a)(n)),n.handleUndo=n.handleUndo.bind(Object(p.a)(n)),n.handleChangeImage=n.handleChangeImage.bind(Object(p.a)(n)),n.generate=n.generate.bind(Object(p.a)(n)),n}return Object(o.a)(t,[{key:"generate",value:function(){var e=this;this.setState({loading:!0});var a,t=this.state.photo,n=this.state.mask,r=(a=x.length,Math.floor(Math.random()*Math.floor(a)));w.a.post("".concat(x[r],"/api/image-inpainting"),{photo:t,mask:n}).then((function(a){e.setState({result:"data:image/png;base64,"+a.data})})).catch((function(e){})).finally((function(){e.setState({loading:!1})}))}},{key:"handleChangeImage",value:function(){var e=Object(f.a)(b.a.mark((function e(a){var t,n,r,l,c,i;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=function(e){return new Promise((function(a,t){var n=new FileReader;n.readAsDataURL(e),n.onload=function(){return a(n.result)},n.onerror=function(e){return t(e)}}))},!a[0]){e.next=15;break}return this.handleClear(),e.next=5,t(a[0]);case 5:return n=e.sent,r=function(e){return new Promise((function(a,t){var n=new Image;n.src=e,n.onload=function(){return a({width:n.width,height:n.height})},n.onerror=function(e){return t(e)}}))},e.next=9,r(n);case 9:l=e.sent,c=Math.min(window.innerWidth-50,l.width),c=Math.min(c,700),i=l.height*c/l.width,this.setState({height:i,width:c,photo:n,result:""}),this.canvas.current.drawImage();case 15:case"end":return e.stop()}}),e,this)})));return function(a){return e.apply(this,arguments)}}()},{key:"handleClear",value:function(){this.canvas.current.clear(),this.setState({mask:this.canvas.current.canvas.drawing.toDataURL()})}},{key:"handleUndo",value:function(){this.canvas.current.undo(),this.setState({mask:this.canvas.current.canvas.drawing.toDataURL()})}},{key:"convertDataURIToBinary",value:function(e){for(var a=e.indexOf(";base64,")+";base64,".length,t=e.substring(a),n=window.atob(t),r=n.length,l=new Uint8Array(new ArrayBuffer(r)),c=0;c<r;c++)l[c]=n.charCodeAt(c);return l}},{key:"handleDownload",value:function(){var e=this.state.result;e?(e=this.convertDataURIToBinary(e),O(e,"output.png")):alert("Not found image")}},{key:"render",value:function(){return r.a.createElement("div",{className:"container justify-content-around"},r.a.createElement("div",null,r.a.createElement("div",{className:"d-flex flex-wrap justify-content-center align-content-around"},r.a.createElement("div",{className:"card",style:{marginBottom:20,marginLeft:20,marginRight:20,minWidth:this.state.width}},r.a.createElement("div",{className:"card-header"},r.a.createElement("ul",{className:"nav mb-3",role:"tablist"},r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link active","data-toggle":"pill",role:"tab","aria-selected":"true"},"Upload photo")))),r.a.createElement("div",{className:"card-body"},r.a.createElement("div",{className:"tab-content d-flex justify-content-center"},r.a.createElement("div",{className:"tab-pane fade show active",role:"tabpanel",style:{maxWidth:500}},r.a.createElement(j,{onChange:this.handleChangeImage}))))),r.a.createElement("div",{className:"card",style:{marginBottom:20,marginLeft:20,marginRight:20,minWidth:this.state.width}},r.a.createElement("div",{className:"card-header"},r.a.createElement("ul",{className:"nav mb-3",role:"tablist"},r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link active","data-toggle":"pill",role:"tab","aria-selected":"true"},"Draw mask")),r.a.createElement(C.a,{"aria-labelledby":"continuous-slider",value:this.state.value,onChange:this.handleChangeWidthPen,min:0,max:50,valueLabelDisplay:"auto"})),r.a.createElement("div",{className:"d-flex justify-content-between flex-wrap"},r.a.createElement("button",{type:"button",onClick:this.handleUndo,className:"btn btn-outline-secondary"},"Undo"),r.a.createElement("button",{type:"button",onClick:this.handleClear,className:"btn btn-outline-secondary"},"Clear"))),r.a.createElement("div",{style:{backgroundImage:"url("+this.state.photo+")",backgroundPosition:"center",backgroundSize:"cover"}},r.a.createElement(k.a,{lazyRadius:0,brushRadius:this.state.value,brushColor:"#ffffff",onChange:this.handleChangeMask,canvasWidth:this.state.width,canvasHeight:this.state.height,immediateLoading:!0,ref:this.canvas})))),r.a.createElement("br",null)),r.a.createElement("br",null),r.a.createElement("div",{className:"card text-center"},r.a.createElement("div",{className:"card-header"},r.a.createElement("div",null,"Export Image"),r.a.createElement("br",null),r.a.createElement("div",{className:"d-flex justify-content-center"},r.a.createElement("div",{className:"spinner-grow text-primary",hidden:!this.state.loading,role:"status"}),r.a.createElement("button",{type:"button",onClick:this.generate,hidden:this.state.loading,className:"btn btn-outline-primary"},"Generate"),r.a.createElement("br",null))),r.a.createElement("div",{className:"card-body"},r.a.createElement("div",{className:"d-flex flex-wrap justify-content-around "},r.a.createElement("img",{src:this.state.photo,hidden:""==this.state.photo,className:"rounded float-left img-thumbnail img-fluid",style:{width:400,height:"auto"}}),r.a.createElement("img",{src:this.state.result,hidden:""==this.state.result,className:"rounded float-right img-thumbnail img-fluid",style:{width:400,height:"auto"}}))),r.a.createElement("div",{className:"card-footer text-muted"},r.a.createElement("button",{type:"button",className:"btn btn-outline-primary",onClick:this.handleDownload},"Download"))))}}]),t}(r.a.Component),D=t(26),S=(r.a.Component,function(e){Object(s.a)(t,e);var a=Object(m.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{id:"header"},r.a.createElement(d,null)),r.a.createElement("div",{id:"body",className:"container-fluid"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{id:"left",className:"col-sm-12 col-md-12 col-lg-3 col-xl-2 col-12"},r.a.createElement(g,null)),r.a.createElement("div",{id:"center",className:"col-sm-12 col-md-12 col-lg-9 col-xl-7 col-12"},r.a.createElement(I,null)),r.a.createElement("div",{id:"right",className:"col-sm-12 col-md-12 col-lg-12 col-xl-3 col-12"},r.a.createElement(u,null)))),r.a.createElement("div",{id:"footer"},r.a.createElement(h,null)))}}]),t}(r.a.Component)),U=function(e){Object(s.a)(t,e);var a=Object(m.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement(S,null)}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(U,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[35,1,2]]]);
//# sourceMappingURL=main.0865a42a.chunk.js.map