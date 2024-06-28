System.register(["./chunk-three.module.js"],(function(t){"use strict";var e,i,s,r,h,n,o,a,d,c,p,l,g,u,y,m,w,v,z,b,x,S,F,f;return{setters:[function(t){e=t.P,i=t.i,s=t.S,r=t.W,h=t.O,n=t.j,o=t.k,a=t.l,d=t.m,c=t.e,p=t.T,l=t.n,g=t.o,u=t.p,y=t.A,m=t.B,w=t.C,v=t.q,z=t.b,b=t.r,x=t.s,S=t.d,F=t.f,f=t.V}],execute:function(){const A=window,E=document.body,I=document.documentElement;class Warplines{constructor(t){this.onInit=this.onInit.bind(this),this.onFrame=this.onFrame.bind(this),this.create=this.create.bind(this),this.count=8e3,this.acceleration=.03,this.accelerationTail=.005,this.hyperDelay=1e3,this.warplinesPos=100,this.geometry=null,this.group=null,this.ready=!1,this.stage=t}onInit(){this.group=new h,this.create(),this.ready=!0}onFrame(){if(this.ready&&this.hyper){for(let t=0;t<this.count;t++){const e=this.geometry.getAttribute("position").array,i=this.geometry.getAttribute("velocity").array,s=2*t,r=2*t+1,h=6*t+2,o=6*t+5;if(i[s]+=this.acceleration,i[r]+=this.acceleration-this.accelerationTail,e[h]+=i[s],e[o]+=i[r],e[o]>this.warplinesPos){const t=n.randFloatSpread(500);e[h]=t,e[o]=t,i[s]=0,i[r]=0}}this.geometry.getAttribute("position").needsUpdate=!0}}create(){this.geometry=new o,this.geometry.setAttribute("position",new a(new Float32Array(6*this.count),3)),this.geometry.setAttribute("velocity",new a(new Float32Array(2*this.count),1));for(let i=0;i<this.count;i++){const t=n.randFloatSpread(400),e=n.randFloatSpread(200),s=n.randFloatSpread(500),r=t,h=e,o=s,a=this.geometry.getAttribute("position").array,d=this.geometry.getAttribute("velocity").array,c=6*i;a[c]=t,a[c+1]=e,a[c+2]=s,a[c+3]=r,a[c+4]=h,a[c+5]=o,d[2*i]=d[2*i+1]=0}const t=new d({color:16777215}),e=new c(this.geometry,t);this.group.add(e)}hyperStart(){this.hyper=!0,this.stage.scene.add(this.group)}hyperStop(){setTimeout((()=>{this.hyper=!1,this.stage.scene.remove(this.group)}),this.hyperDelay)}}class Wormhole{constructor(t){this.onInit=this.onInit.bind(this),this.onFrame=this.onFrame.bind(this),this.create=this.create.bind(this),this.group=null,this.texture=null,this.ease=10,this.hyperDelay=1e3,this.hype={normalize:.001,scale:.15,speed:6.26},this.ready=!1,this.hyper=!1,this.stage=t}onFrame(){if(!this.ready||!this.hyper||!this.texture)return;const{hype:t,stage:e}=this;this.texture.offset.y-=t.normalize*t.speed,this.texture.needsUpdate=!0,this.group.scale.set(t.scale,t.scale,1);const{rotation:i,position:s}=e.camera;this.group.rotation.set(i.x,i.y,i.z),this.group.position.set(s.x,s.y,s.z),this.group.rotation.z-=.008}onInit(){this.create(),this.ready=!0}create(){this.group=new h,this.group.position.z=this.stage.camera.position.z;const t=new p;this.texture=t.load("/images/modules/signup/launch_codes/wormhole.jpg"),this.texture.wrapT=l,this.texture.wrapS=l;const e=new g(100,0,300,40,40,!0),i=new u({color:16777215,opacity:1,map:this.texture,blending:y,side:m,transparent:!0,depthTest:!0}),s=new w;s.setHSL(Math.random(),1,.8);const r=new v(s,4,100);r.position.set(0,0,0);const n=new z(e,i);n.position.set(0,0,0),n.rotation.x=Math.PI/2,this.group.add(n),this.group.add(r)}hyperStart(){this.hyper=!0,setTimeout((()=>{this.stage.scene.add(this.group)}),this.hyperDelay)}hyperStop(){setTimeout((()=>{this.hyper=!1}),this.hyperDelay)}}class Starfield{constructor(t){this.onInit=this.onInit.bind(this),this.onFrame=this.onFrame.bind(this),this.create=this.create.bind(this),this.total=600,this.spread=2e3,this.size=25,this.destinationSize=75,this.distance=-3e3,this.destinationPos=200,this.hyperDistance=5e3,this.hyperEnd=this.hyperDistance-this.distance-this.destinationPos,this.ease=15,this.move={x:0,y:0,z:this.distance},this.look={x:0,y:0,z:0},this.group=null,this.ready=!1,this.hyper=!1,this.stage=t}onInit(){this.group=new h,this.group.position.set(this.move.x,this.move.y,this.move.z-this.hyperDistance),this.group.rotation.set(this.look.x,this.look.y,this.look.z),this.create(),this.ready=!0}onFrame(){this.ready&&this.group&&(this.group.position.z+=(this.move.z-this.group.position.z)/this.ease)}create(){const t=new o,e=(new p).load("/images/modules/signup/launch_codes/star.png"),i=new b({size:this.size,color:16777215,opacity:.8,blending:y,transparent:!0,map:e}),s=new Float32Array(3*(this.total+1)),r=new f;for(let o=0;o<this.total;o++)r.x=n.randFloatSpread(this.spread),r.y=n.randFloatSpread(this.spread),r.z=n.randFloatSpread(this.hyperEnd),r.toArray(s,3*o);t.setAttribute("position",new a(s,3));const h=new x(t,i);this.group.add(h)}createLandingStar(){const t=(new p).load("/images/modules/signup/launch_codes/star.png"),e=new S(this.destinationSize,32),i=new F({color:16777215,opacity:1,blending:y,transparent:!1,map:t}),s=new z(e,i);return s.position.set(0,0,this.destinationPos),s}hyperStart(){this.stage.scene.add(this.group),this.move={x:0,y:0,z:this.distance},this.group.scale.set(.75,.75,1),this.ease+=100,this.move.z-=this.hyperDistance,this.hyper=!0;const t=this.createLandingStar();this.group.add(t)}hyperStop(){this.group.scale.set(1,1,1.99),this.ease-=100,this.move.z+=this.hyperEnd,this.hyper=!1}}class WarpStage{constructor(t,r){this.triggerEvent=this.triggerEvent.bind(this),this.drawFrame=this.drawFrame.bind(this),this.onResize=this.onResize.bind(this),this.init=this.init.bind(this),this.objects=[new Starfield(this),new Wormhole(this),new Warplines(this)],this.width=0,this.height=0,this.ease=20,this.move={x:0,y:0,z:200},this.look={x:0,y:0,z:0},this.id=t,this.renderer=this.resolveRenderer(r||{}),this.camera=new e(60,window.innerWidth/window.innerHeight,.1,1e4),this.light=new i(16777215,1,3e3,.4,.5,1),this.scene=new s,this.renderer.setPixelRatio(window.devicePixelRatio),this.renderer.setClearColor(0,0),this.renderer.sortObjects=!1,this.camera.position.set(this.move.x,this.move.y,this.move.z),this.camera.rotation.set(this.look.x,this.look.y,this.look.z),this.camera.lookAt(this.scene.position),this.light.position.set(this.move.x,this.move.y,this.move.z),this.scene.add(this.light),this.ready=!0}resolveRenderer(t){return new r(t=t||{})}triggerEvent(t){if(this.ready)for(const e of this.objects)if("function"==typeof e[t]){e[t].call(e)}}drawFrame(){this.ready&&(this.triggerEvent("onFrame"),this.renderer.render(this.scene,this.camera)),requestAnimationFrame(this.drawFrame)}screenInfo(){const t=Math.max(0,A.innerWidth||I.clientWidth||E.clientWidth||0),e=Math.max(0,A.innerHeight||I.clientHeight||E.clientHeight||0);return{width:t,height:e,ratio:t/e,centerX:t/2,centerY:e/2}}onResize(){const t=this.screenInfo();this.width=t.width,this.height=t.height,this.ready&&(this.renderer.setSize(this.width,this.height),this.camera.aspect=this.width/this.height,this.camera.updateProjectionMatrix())}hyperStart(){this.triggerEvent("hyperStart")}hyperStop(){this.triggerEvent("hyperStop")}init(){var t;this.renderer&&this.renderer.domElement&&(this.renderer.domElement.setAttribute("id",this.id),null===(t=document.querySelector(".js-signup-warp-bg"))||void 0===t||t.appendChild(this.renderer.domElement)),this.onResize(),this.triggerEvent("onInit"),this.drawFrame(),window.addEventListener("resize",(()=>this.onResize()))}}t({stageSetup:W=()=>{if((()=>{try{const t=document.createElement("canvas");return!(!window.WebGLRenderingContext||!t.getContext("webgl")&&!t.getContext("experimental-webgl"))}catch(t){return!1}})())return new WarpStage("warp-stage",{alpha:!0,antialias:!0,precision:"mediump"})},default:W});var W}}}));
//# sourceMappingURL=chunk-webgl-warp-0e964efa.js.map