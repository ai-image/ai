(this["webpackJsonpai-image"]=this["webpackJsonpai-image"]||[]).push([[0],{12:function(e,a,t){},35:function(e,a,t){e.exports=t(72)},40:function(e,a,t){},72:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(9),c=t.n(r),i=(t(40),t(2)),o=t(3),s=t(5),d=t(4),u=(t(12),function(e){Object(s.a)(t,e);var a=Object(d.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"container-fluid header"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-sm-3 col-md-3 col-lg-3 col-xl-3 col-4",style:{margin:"auto 0 auto 0",textAlign:"center"}},l.a.createElement("a",{href:"/"},l.a.createElement("img",{src:"/logo192.png",className:"image",alt:""})),"AI Image"),l.a.createElement("div",{className:"col-sm-9 col-md-9 col-lg-9 col-xl-9 col-8"},l.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light "},l.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},l.a.createElement("ul",{className:"navbar-nav mr-auto"},l.a.createElement("li",{className:"nav-item dropdown"},l.a.createElement("a",{className:"nav-link dropdown-toggle",href:"#",id:"navbarDropdown",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},"Image"),l.a.createElement("div",{className:"dropdown-menu","aria-labelledby":"navbarDropdown",style:{background:"rgba(0, 0, 0, 0.1)"}},l.a.createElement("a",{className:"dropdown-item",href:"#"},"Image Inpainting")))))))))}}]),t}(l.a.Component)),m=function(e){Object(s.a)(t,e);var a=Object(d.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("ins",{className:"adsbygoogle",style:{display:"block"},"data-ad-client":"ca-pub-2104622374328156","data-ad-slot":"5405306823","data-ad-format":"auto","data-full-width-responsive":"true"}),l.a.createElement("br",null),l.a.createElement("ins",{className:"adsbygoogle",style:{display:"block"},"data-ad-client":"ca-pub-2104622374328156","data-ad-slot":"5405306823","data-ad-format":"auto","data-full-width-responsive":"true"}),l.a.createElement("script",null,"(adsbygoogle = window.adsbygoogle || []).push(",");"))}}]),t}(l.a.Component),h=t(24),g=function(e){Object(s.a)(t,e);var a=Object(d.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"container-fluid footer"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"text-center col-lg-6 offset-lg-3"},l.a.createElement("br",null),l.a.createElement("p",null,"Copyright \xa9 2019 RaLaVay.web.app"))),l.a.createElement(h.TinyButton,null))}}]),t}(l.a.Component),b=function(e){Object(s.a)(t,e);var a=Object(d.a)(t);function t(e){return Object(i.a)(this,t),a.call(this,e)}return Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("ins",{className:"adsbygoogle",style:{display:"block"},"data-ad-client":"ca-pub-2104622374328156","data-ad-slot":"4737176690","data-ad-format":"auto","data-full-width-responsive":"true"}),l.a.createElement("br",null),l.a.createElement("amp-ad",{width:"100vw",height:"320",type:"adsense","data-ad-client":"ca-pub-2104622374328156","data-ad-slot":"4737176690","data-auto-format":"rspv","data-full-width":""},l.a.createElement("div",{overflow:""})),l.a.createElement("script",null,"(adsbygoogle = window.adsbygoogle || []).push(",");"))}}]),t}(l.a.Component),v=t(10),p=t.n(v),f=t(25),E=t(7),y=t(26),w=t.n(y),N=t(27),j=t.n(N),k=function(e){Object(s.a)(t,e);var a=Object(d.a)(t);function t(e){var n;return Object(i.a)(this,t),(n=a.call(this,e)).onDrop=n.onDrop.bind(Object(E.a)(n)),n.state={pictures:[],onChange:e.onChange},n}return Object(o.a)(t,[{key:"onDrop",value:function(e){this.setState({pictures:this.state.pictures.concat(e)}),this.state.onChange(e)}},{key:"render",value:function(){return l.a.createElement(j.a,{withIcon:!0,buttonText:"Choose images",onChange:this.onDrop,imgExtension:[".jpg",".gif",".png",".bmp",".jpeg"],maxFileSize:5242880,singleImage:!0,withPreview:!0})}}]),t}(l.a.Component),O=t(32),C=t(83),x=t(69),D=function(e){Object(s.a)(t,e);var a=Object(d.a)(t);function t(e){var n;return Object(i.a)(this,t),(n=a.call(this,e)).handleChangeWidthPen=function(e,a){n.setState({value:a})},n.handleChangeMask=function(){n.setState({mask:n.canvas.current.canvas.drawing.toDataURL()})},n.state={value:20,mask:null,photo:null,result:null,loading:!1,width:300,height:200},n.canvas=l.a.createRef(),n.handleChangeWidthPen=n.handleChangeWidthPen.bind(Object(E.a)(n)),n.handleChangeMask=n.handleChangeMask.bind(Object(E.a)(n)),n.handleDownload=n.handleDownload.bind(Object(E.a)(n)),n.handleClear=n.handleClear.bind(Object(E.a)(n)),n.handleUndo=n.handleUndo.bind(Object(E.a)(n)),n.handleChangeImage=n.handleChangeImage.bind(Object(E.a)(n)),n.generate=n.generate.bind(Object(E.a)(n)),n}return Object(o.a)(t,[{key:"generate",value:function(){var e=this;this.setState({loading:!0});var a=this.state.photo,t=this.state.mask;w.a.post("https://0b439144.ngrok.io/api/image-inpainting",{photo:a,mask:t}).then((function(a){e.setState({result:"data:image/png;base64,"+a.data})})).catch((function(e){})).finally((function(){e.setState({loading:!1})}))}},{key:"handleChangeImage",value:function(){var e=Object(f.a)(p.a.mark((function e(a){var t,n,l,r,c,i;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=function(e){return new Promise((function(a,t){var n=new FileReader;n.readAsDataURL(e),n.onload=function(){return a(n.result)},n.onerror=function(e){return t(e)}}))},!a[0]){e.next=13;break}return e.next=4,t(a[0]);case 4:return n=e.sent,this.setState({photo:n}),l=function(e){return new Promise((function(a,t){var n=new Image;n.src=e,n.onload=function(){return a({width:n.width,height:n.height})},n.onerror=function(e){return t(e)}}))},e.next=9,l(n);case 9:r=e.sent,c=Math.min(window.innerWidth-50,r.width),i=r.height*c/r.width,this.setState({height:i,width:c}),this.canvas.current.drawImage();case 13:case"end":return e.stop()}}),e,this)})));return function(a){return e.apply(this,arguments)}}()},{key:"handleClear",value:function(){this.canvas.current.clear(),this.setState({mask:this.canvas.current.canvas.drawing.toDataURL()})}},{key:"handleUndo",value:function(){this.canvas.current.undo(),this.setState({mask:this.canvas.current.canvas.drawing.toDataURL()})}},{key:"convertDataURIToBinary",value:function(e){for(var a=e.indexOf(";base64,")+";base64,".length,t=e.substring(a),n=window.atob(t),l=n.length,r=new Uint8Array(new ArrayBuffer(l)),c=0;c<l;c++)r[c]=n.charCodeAt(c);return r}},{key:"handleDownload",value:function(){var e=this.state.result;e?(e=this.convertDataURIToBinary(e),x(e,"output.png")):alert("Not found image")}},{key:"render",value:function(){return l.a.createElement("div",{className:"container justify-content-around"},l.a.createElement("div",null,l.a.createElement("div",{className:"d-flex flex-wrap justify-content-center align-content-around"},l.a.createElement("div",{className:"card",style:{marginBottom:20,marginLeft:20,marginRight:20}},l.a.createElement("div",{className:"card-header"},l.a.createElement("ul",{className:"nav mb-3",role:"tablist"},l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link active","data-toggle":"pill",role:"tab","aria-selected":"true"},"Upload photo")))),l.a.createElement("div",{className:"card-body"},l.a.createElement("div",{className:"tab-content"},l.a.createElement("div",{className:"tab-pane fade show active",role:"tabpanel",style:{maxWidth:500}},l.a.createElement(k,{onChange:this.handleChangeImage}))))),l.a.createElement("div",{className:"card",style:{marginBottom:20,marginLeft:20,marginRight:20,minWidth:this.state.width}},l.a.createElement("div",{className:"card-header"},l.a.createElement("ul",{className:"nav mb-3",role:"tablist"},l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link active","data-toggle":"pill",role:"tab","aria-selected":"true"},"Draw mask")),l.a.createElement(C.a,{"aria-labelledby":"continuous-slider",value:this.state.value,onChange:this.handleChangeWidthPen,min:0,max:50,valueLabelDisplay:"auto"})),l.a.createElement("div",{className:"d-flex justify-content-between flex-wrap"},l.a.createElement("button",{type:"button",onClick:this.handleUndo,className:"btn btn-outline-secondary"},"Undo"),l.a.createElement("button",{type:"button",onClick:this.handleClear,className:"btn btn-outline-secondary"},"Clear"))),l.a.createElement(O.a,{imgSrc:this.state.photo,lazyRadius:0,brushRadius:this.state.value,brushColor:"#ffffff",onChange:this.handleChangeMask,canvasWidth:this.state.width,canvasHeight:this.state.height,immediateLoading:!0,ref:this.canvas}))),l.a.createElement("br",null)),l.a.createElement("br",null),l.a.createElement("ins",{className:"adsbygoogle",style:{display:"block"},"data-ad-client":"ca-pub-2104622374328156","data-ad-slot":"6301733323","data-ad-format":"auto","data-full-width-responsive":"true"}),l.a.createElement("script",null,"(adsbygoogle = window.adsbygoogle || []).push(",");"),l.a.createElement("div",{className:"card text-center"},l.a.createElement("div",{className:"card-header"},l.a.createElement("div",null,"Export Image"),l.a.createElement("br",null),l.a.createElement("div",{className:"d-flex justify-content-center"},l.a.createElement("div",{className:"spinner-grow text-primary",hidden:!this.state.loading,role:"status"}),l.a.createElement("button",{type:"button",onClick:this.generate,hidden:this.state.loading,className:"btn btn-outline-primary"},"Generate"),l.a.createElement("br",null))),l.a.createElement("div",{className:"card-body"},l.a.createElement("div",{className:"d-flex flex-wrap justify-content-around "},l.a.createElement("img",{src:this.state.photo,hidden:null==this.state.photo,className:"rounded float-left img-thumbnail img-fluid",style:{width:400,height:"auto"}}),l.a.createElement("img",{src:this.state.result,hidden:null==this.state.result,className:"rounded float-right img-thumbnail img-fluid",style:{width:400,height:"auto"}}))),l.a.createElement("div",{className:"card-footer text-muted"},l.a.createElement("button",{type:"button",className:"btn btn-outline-primary",onClick:this.handleDownload},"Download"))),l.a.createElement("ins",{className:"adsbygoogle",style:{display:"block","text-align":"center"},"data-ad-layout":"in-article","data-ad-format":"fluid","data-ad-client":"ca-pub-2104622374328156","data-ad-slot":"5232194231"}),l.a.createElement("script",null,"(adsbygoogle = window.adsbygoogle || []).push(",");"))}}]),t}(l.a.Component),I=function(e){Object(s.a)(t,e);var a=Object(d.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("div",{id:"header"},l.a.createElement(u,null)),l.a.createElement("div",{id:"body",className:"container-fluid"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{id:"left",className:"col-sm-12 col-md-12 col-lg-3 col-xl-2 col-12"},l.a.createElement(b,null)),l.a.createElement("div",{id:"center",className:"col-sm-12 col-md-12 col-lg-9 col-xl-7 col-12"},l.a.createElement(D,null)),l.a.createElement("div",{id:"right",className:"col-sm-12 col-md-12 col-lg-12 col-xl-3 col-12"},l.a.createElement(m,null)))),l.a.createElement("div",{id:"footer"},l.a.createElement(g,null)))}}]),t}(l.a.Component),S=function(e){Object(s.a)(t,e);var a=Object(d.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement(I,null)}}]),t}(l.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(S,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[35,1,2]]]);
//# sourceMappingURL=main.4c00ccf3.chunk.js.map
