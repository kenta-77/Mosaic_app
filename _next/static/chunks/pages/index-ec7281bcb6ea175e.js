(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(4186)}])},1625:function(e,r,t){"use strict";t.d(r,{Z:function(){return j}});var n=t(5893),l=t(204),i=t(3100),s=t(4418),c=t(5034),a=t(5675),o=t.n(a),x=t(1664),h=t.n(x),p=t(9603),d=t(9417);function u(){return(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)(l.k,{minWidth:"max-content",alignItems:"center",gap:"2",bg:"teal.400",opacity:"0.9",color:"#ffff",h:"50px",w:"100vw",children:[(0,n.jsx)(i.xu,{pl:"35px",_hover:{color:"gray.100"},children:(0,n.jsx)(h(),{href:"/top",children:(0,n.jsx)(s.X,{fontSize:38,fontWeight:"bold",children:"FaMo"})})}),(0,n.jsx)(c.L,{}),(0,n.jsx)(i.xu,{w:"50px",children:(0,n.jsx)(h(),{href:"/top",children:(0,n.jsx)(p.G,{icon:d.wp6,fontSize:"30px",color:"RGBA(0, 0, 0, 0.80)"})})}),(0,n.jsx)(i.xu,{w:"50px",children:(0,n.jsx)(h(),{href:"/",children:(0,n.jsx)(p.G,{fontSize:"30px",icon:d.Z30,color:"RGBA(0, 0, 0, 0.80)"})})}),(0,n.jsx)(i.xu,{mr:"25px",position:"relative",w:"38px",h:"38px",children:(0,n.jsx)(h(),{href:"https://github.com/kenta-77/Mosaic_app",children:(0,n.jsx)(o(),{src:"./github-mark.png",alt:"",width:100,height:100})})})]})})}function j(e){let{children:r}=e;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(u,{}),(0,n.jsx)("main",{children:r})]})}},4186:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return F}});var n=t(5893),l=t(1664),i=t.n(l),s=t(7294),c=t(8433),a=t(7304),o=t(5675),x=t.n(o),h=t(9222),p=t(3100),d=t(2560),u=t(204),j=t(1669),m=t(8911),g=t(7822),w=t(7754),f=t(295),b=t(1004),S=t(6005),v=t(9394),M=t(333),z=t(9558),k=t(4641),y=t(2428),_=t(6635),C=t(9603),A=t(9417),R=t(1731),N=t(9583),V=t(1625);function F(){let[e,r]=(0,s.useState)(""),[t,l]=(0,s.useState)(""),o=e=>{let{src:r}=e;return"".concat(r)},[F,L]=(0,s.useState)({mosaic_type:"0",strength:"1"}),[O,U]=(0,s.useState)([{value:"1",label:"1"},{value:"2",label:"2"}]),[E,G]=(0,s.useState)(","),[Z,I]=s.useState(!1),[P,q]=(0,s.useState)(),[B,X]=(0,s.useState)(),[D,J]=(0,s.useState)("10"),[T,K]=(0,s.useState)(),[W,Y]=(0,s.useState)(!1),$=(0,s.useRef)(null),H=(0,s.useRef)(null),Q=(0,s.useRef)(null),ee=(0,s.useRef)(null),er=e=>{for(var r=window.atob(e.replace(/^.*,/,"")),t=new Uint8Array(r.length),n=0;n<r.length;n++)t[n]=r.charCodeAt(n);return new Blob([t.buffer],{type:"image/jpeg"})},et=async e=>{if(!e.target.files[0]){K(!1),Y(!1),H.current.clearValue(),Q.current.clearValue(),ee.current.clearValue();return}K(!0),Y(!1),q(!0),H.current.clearValue(),Q.current.clearValue(),ee.current.clearValue();let t=e.target.files[0],n=new FormData;n.append("image",t),n.append("strength","1");let l=await c.Z.post("https://mosaic-app.herokuapp.com/mosaics/rectangle/",n,{headers:{"Content-Type":"multipart/form-data","X-Api-Key":"s0J3uSMD.3Fv3RqqJYiSpdrMLorUaFGBtNMP4AqVg","Access-Control-Allow-Origin":"*",mode:"cors"}}),i=er(l.data.image[1]),s=URL.createObjectURL(i),a=l.data.active_number[0];J(l.data.max_strength[0]);for(let e=0;e<Number(a);e++)0==e?U(r=>[{value:"".concat(e),label:"".concat(e+1)}]):U(r=>[...r,{value:"".concat(e),label:"".concat(e+1)}]);r(s),q(!1)},en=async()=>{if(!$.current)return;H.current.clearValue(),Q.current.clearValue(),ee.current.clearValue(),X(!0);let e=new FormData;e.append("image",$.current.files[0]),e.append("mosaic_type",String(F.mosaic_type)),e.append("strength",String(F.strength)),e.append("rect_number",E);let r=await c.Z.post("https://mosaic-app.herokuapp.com/mosaics/",e,{headers:{"content-type":"multipart/form-data","X-Api-Key":"s0J3uSMD.3Fv3RqqJYiSpdrMLorUaFGBtNMP4AqVg","Access-Control-Allow-Origin":"*",mode:"cors"}}),t=er(r.data.image[1]),n=URL.createObjectURL(t);l(n),Y(!0),X(!1)},el=e=>{L({...F,mosaic_type:String(e)})},ei=e=>{e.value,L({...F,mosaic_type:String(e.value)})},es=e=>{L({...F,strength:String(e)})},ec=e=>{let r="";e.map(e=>{r=e.value+","+r,G("".concat(r))})},ea=()=>{$.current.click()},eo=async()=>{let e=document.createElement("a");document.body.appendChild(e),e.download="sample.jpg",e.href=t,e.click(),e.remove(),URL.revokeObjectURL(t)},ex=e=>{let{option:r}=e;return(0,n.jsx)(p.xu,{children:(0,n.jsx)(x(),{src:r.label,alt:"stamp",width:30,height:30})})};return(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)(d.x,{theme:R.Z,children:[(0,n.jsx)(V.Z,{children:" "}),(0,n.jsxs)(u.k,{children:[(0,n.jsxs)(p.xu,{bg:"white",mt:"10px",ml:"3%",mr:"3%",width:"44%",height:"690px",rounded:"md",borderColor:"blackAlpha.50",children:[(0,n.jsx)(p.xu,{w:"200px",children:(0,n.jsxs)(j.g,{children:[(0,n.jsx)(m.x,{color:"blackAlpha.600",fontSize:"30px",children:"アップロード"}),(0,n.jsx)(g.i,{w:"80px",borderColor:"gray",opacity:"1"})]})}),(0,n.jsxs)(p.xu,{width:"150px",height:"40px",m:"8px",children:[(0,n.jsxs)(h.z,{onClick:ea,children:[(0,n.jsx)(C.G,{icon:A.r8p}),"Input Photo"]}),(0,n.jsx)("input",{hidden:!0,ref:$,type:"file",name:"image",accept:"image/*",onChange:et})]}),(0,n.jsx)(p.xu,{width:"100%",position:"relative",height:"300px",children:P?(0,n.jsx)(w.M,{h:"100%",children:(0,n.jsx)(f.$,{thickness:"5px",speed:"0.65s",emptyColor:"gray.200",color:"teal.500",size:"xl"})}):T?(0,n.jsx)(x(),{loader:o,src:e,alt:"input picture",unoptimized:!0,fill:!0,style:{objectFit:"contain"}}):(0,n.jsx)(w.M,{h:"100%",children:(0,n.jsx)(C.G,{icon:A.VmB,size:"3x"})})}),(0,n.jsxs)(p.xu,{width:"100%",height:"300px",rounded:"md",children:[(0,n.jsx)(w.M,{children:(0,n.jsx)(g.i,{w:"80%",borderColor:"gray",opacity:"1",p:"1"})}),(0,n.jsxs)(b.m,{variant:"soft-rounded",colorScheme:"green",onChange:e=>el(String(e)),children:[(0,n.jsx)(w.M,{pt:"2",children:(0,n.jsxs)(S.t,{children:[(0,n.jsx)(v.O,{fontSize:"13px",children:"モザイク"}),(0,n.jsx)(v.O,{fontSize:"13px",children:"ぼかし"}),(0,n.jsx)(v.O,{fontSize:"13px",children:"スタンプ"})]})}),(0,n.jsxs)(M.n,{children:[(0,n.jsx)(z.x,{children:(0,n.jsxs)(j.g,{spacing:"3%",align:"stretch",w:"100%",children:[(0,n.jsx)(m.x,{as:"b",color:"blackAlpha.600",fontSize:"17px",pl:"10%",children:"強さ"}),(0,n.jsx)(w.M,{children:(0,n.jsx)(k.U,{spacing:2,w:"80%",children:(0,n.jsxs)(y.iR,{id:"slider",step:1,defaultValue:1,min:1,max:Number(D),colorScheme:"teal",onChange:e=>es(String(e)),onMouseEnter:()=>I(!0),onMouseLeave:()=>I(!1),children:[(0,n.jsx)(y.jz,{value:1,mt:"1",ml:"-2.5",fontSize:"11px",children:"低"}),(0,n.jsx)(y.jz,{value:Number(D)/2,mt:"1",ml:"-2.5",fontSize:"11px",children:"中"}),(0,n.jsx)(y.jz,{value:Number(D),mt:"1",ml:"-2.5",fontSize:"11px",children:"高"}),(0,n.jsx)(y.Uj,{children:(0,n.jsx)(y.Ms,{})}),(0,n.jsx)(_.u,{hasArrow:!0,bg:"teal.400",color:"white",placement:"top",isOpen:Z,children:(0,n.jsx)(y.gs,{})})]})})}),(0,n.jsx)(m.x,{as:"b",color:"blackAlpha.600",fontSize:"17px",pl:"10%",pt:"2",children:"加工しない人"}),(0,n.jsx)(w.M,{children:(0,n.jsx)(p.xu,{w:"80%",children:(0,n.jsx)(a.ZP,{instanceId:"selectbox",ref:H,onChange:e=>{ec(e)},options:O,isMulti:!0})})}),T&&(0,n.jsx)(w.M,{w:"25%",pl:"10%",children:(0,n.jsx)(h.z,{colorScheme:"teal",variant:"solid",onClick:en,children:"加工する"})})]})}),(0,n.jsx)(z.x,{children:(0,n.jsxs)(j.g,{spacing:"3%",align:"stretch",w:"100%",children:[(0,n.jsx)(m.x,{as:"b",color:"blackAlpha.600",fontSize:"17px",pl:"10%",children:"強さ"}),(0,n.jsx)(w.M,{children:(0,n.jsx)(k.U,{spacing:2,w:"80%",children:(0,n.jsxs)(y.iR,{id:"slider",step:1,defaultValue:1,min:1,max:Number(D),colorScheme:"teal",onChange:e=>es(String(e)),onMouseEnter:()=>I(!0),onMouseLeave:()=>I(!1),children:[(0,n.jsx)(y.jz,{value:1,mt:"1",ml:"-2.5",fontSize:"11px",children:"低"}),(0,n.jsx)(y.jz,{value:Number(D)/2,mt:"1",ml:"-2.5",fontSize:"11px",children:"中"}),(0,n.jsx)(y.jz,{value:Number(D),mt:"1",ml:"-2.5",fontSize:"11px",children:"高"}),(0,n.jsx)(y.Uj,{children:(0,n.jsx)(y.Ms,{})}),(0,n.jsx)(_.u,{hasArrow:!0,bg:"teal.400",color:"white",placement:"top",isOpen:Z,children:(0,n.jsx)(y.gs,{})})]})})}),(0,n.jsx)(m.x,{as:"b",color:"blackAlpha.600",fontSize:"17px",pl:"10%",pt:"2",children:"加工しない人"}),(0,n.jsx)(w.M,{children:(0,n.jsx)(p.xu,{w:"80%",children:(0,n.jsx)(a.ZP,{instanceId:"selectbox",ref:Q,onChange:e=>{ec(e)},options:O,isMulti:!0})})}),T&&(0,n.jsx)(w.M,{w:"25%",pl:"10%",children:(0,n.jsx)(h.z,{colorScheme:"teal",variant:"solid",onClick:en,children:"加工する"})})]})}),(0,n.jsx)(z.x,{children:(0,n.jsxs)(j.g,{spacing:"2%",align:"stretch",w:"100%",children:[(0,n.jsx)(m.x,{as:"b",color:"blackAlpha.600",fontSize:"17px",pl:"10%",children:"種類"}),(0,n.jsx)(w.M,{children:(0,n.jsx)(p.xu,{w:"80%",children:(0,n.jsx)(a.ZP,{instanceId:"selectbox",onChange:e=>{ei(e)},options:[{value:"2",label:"/smiling_face_with_smiling_eyes_3d.png"},{value:"3",label:"/star_3d.png"},{value:"4",label:"/heart_suit_3d.png"}],formatOptionLabel:e=>(0,n.jsx)(ex,{option:e})})})}),(0,n.jsx)(m.x,{as:"b",color:"blackAlpha.600",fontSize:"17px",pl:"10%",children:"加工しない人"}),(0,n.jsx)(w.M,{children:(0,n.jsx)(p.xu,{w:"80%",children:(0,n.jsx)(a.ZP,{instanceId:"selectbox",ref:ee,onChange:e=>{ec(e)},options:O,isMulti:!0})})}),T&&(0,n.jsx)(w.M,{w:"25%",pl:"10%",children:(0,n.jsx)(h.z,{colorScheme:"teal",variant:"solid",onClick:en,children:"加工する"})})]})})]})]})]})]}),(0,n.jsxs)(p.xu,{bg:"white",mt:"10px",ml:"3%",mr:"3%",width:"44%",height:"690px",rounded:"md",borderColor:"blackAlpha.50",children:[(0,n.jsx)(p.xu,{w:"200px",children:(0,n.jsxs)(j.g,{children:[(0,n.jsx)(m.x,{color:"blackAlpha.600",fontSize:"30px",children:"ダウンロード"}),(0,n.jsx)(g.i,{w:"80px",borderColor:"gray",opacity:"1"})]})}),(0,n.jsx)(p.xu,{width:"100%",position:"relative",height:"300px",mt:"56px",rounded:"md",children:(0,n.jsx)(w.M,{h:"100%",position:"relative",children:B?(0,n.jsx)(w.M,{children:(0,n.jsx)(f.$,{thickness:"5px",speed:"0.65s",emptyColor:"gray.200",color:"teal.500",size:"xl"})}):W&&t?(0,n.jsx)(x(),{loader:o,src:t,alt:"input picture",unoptimized:!0,fill:!0,style:{objectFit:"contain"}}):(0,n.jsx)(w.M,{h:"100%",children:(0,n.jsx)(C.G,{icon:A.pkM,size:"3x"})})})}),(0,n.jsx)(w.M,{children:(0,n.jsx)(g.i,{w:"80%",borderColor:"gray",opacity:"1",p:"1"})}),(0,n.jsx)(w.M,{children:(0,n.jsx)(p.xu,{width:"80%",height:"100px",rounded:"md",children:(0,n.jsx)(p.xu,{w:"50%",mt:"10px",children:W?(0,n.jsxs)(h.z,{colorScheme:"teal",variant:"solid",onClick:eo,children:[(0,n.jsx)(C.G,{icon:A.ISu}),(0,n.jsx)(m.x,{m:"3px",children:"ダウンロード"})]}):(0,n.jsx)(p.xu,{})})})}),(0,n.jsx)(p.xu,{children:(0,n.jsxs)(j.g,{children:[(0,n.jsx)(m.x,{color:"blackAlpha.600",fontSize:"30px",children:"SHARE"}),(0,n.jsx)(g.i,{w:"80px",borderColor:"gray",opacity:"1"}),(0,n.jsx)(p.xu,{pt:"10px",children:(0,n.jsxs)(u.k,{children:[(0,n.jsxs)(p.xu,{position:"relative",w:"50px",h:"50px",mr:"10px",ml:"10px",color:"black",children:[" ",(0,n.jsx)(i(),{href:"https://twitter.com/compose/tweet",children:(0,n.jsx)(w.M,{h:"100%",w:"100%",children:(0,n.jsx)(x(),{src:"/Twitter.png",alt:"",width:100,height:100})})})]}),(0,n.jsx)(p.xu,{position:"relative",w:"50px",h:"50px",mr:"10px",ml:"10px",children:(0,n.jsx)(i(),{href:"https://www.facebook.com/",children:(0,n.jsx)(w.M,{h:"100%",w:"100%",children:(0,n.jsx)(N.Am9,{color:"#1877F2",size:"50px"})})})}),(0,n.jsxs)(p.xu,{position:"relative",w:"50px",h:"50px",mr:"10px",ml:"10px",children:[" ",(0,n.jsx)(i(),{href:"https://www.instagram.com/",children:(0,n.jsx)(w.M,{h:"100%",w:"100%",children:(0,n.jsx)(x(),{src:"/Instagram.png",alt:"",width:100,height:100})})})]}),(0,n.jsxs)(p.xu,{position:"relative",w:"50px",h:"50px",mr:"10px",ml:"10px",children:[" ",(0,n.jsx)(i(),{href:"https://timeline.line.me/social-plugin/share?url=&text=",children:(0,n.jsx)(w.M,{h:"100%",w:"100%",children:(0,n.jsx)(x(),{src:"/LINE.png",alt:"",width:100,height:100})})})]})]})})]})})]})]})]})})}}},function(e){e.O(0,[976,445,742,194,774,888,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);