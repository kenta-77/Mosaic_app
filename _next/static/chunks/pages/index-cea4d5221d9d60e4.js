(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return i(4186)}])},1625:function(e,t,i){"use strict";i.d(t,{Z:function(){return j}});var r=i(5893),n=i(204),l=i(3100),s=i(4418),c=i(5034),a=i(5675),o=i.n(a),x=i(1664),h=i.n(x),p=i(9603),d=i(9417);function u(){return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)(n.k,{minWidth:"max-content",alignItems:"center",gap:"2",bg:"teal.400",opacity:"0.9",color:"#ffff",h:"50px",w:"100vw",children:[(0,r.jsx)(l.xu,{pl:"35px",_hover:{color:"gray.100"},children:(0,r.jsx)(h(),{href:"Mosaic_app/top",children:(0,r.jsx)(s.X,{fontSize:38,fontWeight:"bold",children:"FaMo"})})}),(0,r.jsx)(c.L,{}),(0,r.jsx)(l.xu,{w:"50px",children:(0,r.jsx)(h(),{href:"Mosaic_app/top",children:(0,r.jsx)(p.G,{icon:d.wp6,fontSize:"30px",color:"RGBA(0, 0, 0, 0.80)"})})}),(0,r.jsx)(l.xu,{w:"50px",children:(0,r.jsx)(h(),{href:"Mosaic_app/",children:(0,r.jsx)(p.G,{fontSize:"30px",icon:d.Z30,color:"RGBA(0, 0, 0, 0.80)"})})}),(0,r.jsx)(l.xu,{mr:"25px",position:"relative",w:"38px",h:"38px",children:(0,r.jsx)(h(),{href:"https://github.com/kenta-77/Mosaic_app",children:(0,r.jsx)(o(),{src:"./github-mark.png",alt:"",width:100,height:100})})})]})})}function j(e){let{children:t}=e;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(u,{}),(0,r.jsx)("main",{children:t})]})}},4186:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return V}});var r=i(5893),n=i(1664),l=i.n(n),s=i(7294),c=i(8433),a=i(7304),o=i(5675),x=i.n(o),h=i(9222),p=i(3100),d=i(2560),u=i(204),j=i(1669),m=i(8911),g=i(7822),w=i(7754),f=i(295),b=i(1004),S=i(6005),M=i(9394),v=i(333),z=i(9558),y=i(4641),k=i(2428),_=i(6635),A=i(9603),C=i(9417),F=i(1731),N=i(9583),R=i(1625);function V(){let[e,t]=(0,s.useState)(""),[i,n]=(0,s.useState)(""),o=e=>{let{src:t}=e;return"".concat(t)},[V,q]=(0,s.useState)({mosaic_type:"0",strength:"1"}),[L,G]=(0,s.useState)([{value:"1",label:"1"},{value:"2",label:"2"}]),[U,P]=(0,s.useState)(","),[E,J]=s.useState(!1),[O,Z]=(0,s.useState)(),[B,I]=(0,s.useState)(),[X,D]=(0,s.useState)("10"),[K,Y]=(0,s.useState)(),[T,W]=(0,s.useState)(!1),$=(0,s.useRef)(null),H=(0,s.useRef)(null),Q=(0,s.useRef)(null),ee=(0,s.useRef)(null),et=async e=>{if(!e.target.files[0]){Y(!1),W(!1),H.current.clearValue(),Q.current.clearValue(),ee.current.clearValue();return}let i={"X-Api-Key":"s0J3uSMD.3Fv3RqqJYiSpdrMLorUaFGBtNMP4AqVg"};await fetch("http://127.0.0.1:8000/mosaics/",{headers:i}),Y(!0),W(!1),Z(!0),H.current.clearValue(),Q.current.clearValue(),ee.current.clearValue();let r=e.target.files[0],n=new FormData;n.append("image",r),n.append("strength","1"),await c.Z.post("http://127.0.0.1:8000/mosaics/rectangle/",n,{headers:{"Content-Type":"multipart/form-data","X-Api-Key":"s0J3uSMD.3Fv3RqqJYiSpdrMLorUaFGBtNMP4AqVg"}});let l=await fetch("http://127.0.0.1:8000/mosaics/",{headers:i}),s=await l.json(),a="http://127.0.0.1:8000"+s.rectangle,o=s.active_number;D(s.max_strength);for(let e=0;e<Number(o);e++)0==e?G(t=>[{value:"".concat(e),label:"".concat(e+1)}]):G(t=>[...t,{value:"".concat(e),label:"".concat(e+1)}]);t(a),Z(!1)},ei=async()=>{if(!$.current)return;H.current.clearValue(),Q.current.clearValue(),ee.current.clearValue(),I(!0);let e=new FormData;e.append("image",$.current.files[0]),e.append("mosaic_type",String(V.mosaic_type)),e.append("strength",String(V.strength)),e.append("rect_number",U),await c.Z.post("http://127.0.0.1:8000/mosaics/",e,{headers:{"content-type":"multipart/form-data","X-Api-Key":"s0J3uSMD.3Fv3RqqJYiSpdrMLorUaFGBtNMP4AqVg"}}),er(),W(!0),I(!1)},er=async()=>{try{let e=await fetch("http://127.0.0.1:8000/mosaics/",{headers:{"X-Api-Key":"s0J3uSMD.3Fv3RqqJYiSpdrMLorUaFGBtNMP4AqVg"}}),t=await e.json(),i="http://127.0.0.1:8000"+t.result;n(i)}catch(e){console.log("error")}},en=e=>{q({...V,mosaic_type:String(e)})},el=e=>{e.value,q({...V,mosaic_type:String(e.value)})},es=e=>{q({...V,strength:String(e)})},ec=e=>{let t="";e.map(e=>{t=e.value+","+t,P("".concat(t))})},ea=()=>{$.current.click()},eo=async()=>{let e=await fetch("http://127.0.0.1:8000/mosaics/",{headers:{"X-Api-Key":"s0J3uSMD.3Fv3RqqJYiSpdrMLorUaFGBtNMP4AqVg"}}),t="http://127.0.0.1:8000"+(await e.json()).result,i=await (await fetch(t)).blob(),r=URL.createObjectURL(i),n=document.createElement("a");document.body.appendChild(n),n.download="sample.jpg",n.href=r,n.click(),n.remove(),URL.revokeObjectURL(r)},ex=e=>{let{option:t}=e;return(0,r.jsx)(p.xu,{children:(0,r.jsx)(x(),{src:t.label,alt:"stamp",width:30,height:30})})};return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)(d.x,{theme:F.Z,children:[(0,r.jsx)(R.Z,{children:" "}),(0,r.jsxs)(u.k,{children:[(0,r.jsxs)(p.xu,{bg:"white",mt:"10px",ml:"3%",mr:"3%",width:"44%",height:"690px",rounded:"md",borderColor:"blackAlpha.50",children:[(0,r.jsx)(p.xu,{w:"200px",children:(0,r.jsxs)(j.g,{children:[(0,r.jsx)(m.x,{color:"blackAlpha.600",fontSize:"30px",children:"アップロード"}),(0,r.jsx)(g.i,{w:"80px",borderColor:"gray",opacity:"1"})]})}),(0,r.jsxs)(p.xu,{width:"150px",height:"40px",m:"8px",children:[(0,r.jsxs)(h.z,{onClick:ea,children:[(0,r.jsx)(A.G,{icon:C.r8p}),"アップロード"]}),(0,r.jsx)("input",{hidden:!0,ref:$,type:"file",name:"image",accept:"image/*",onChange:et})]}),(0,r.jsx)(p.xu,{width:"100%",position:"relative",height:"300px",children:O?(0,r.jsx)(w.M,{h:"100%",children:(0,r.jsx)(f.$,{thickness:"5px",speed:"0.65s",emptyColor:"gray.200",color:"teal.500",size:"xl"})}):K?(0,r.jsx)(x(),{loader:o,src:e,alt:"input picture",unoptimized:!0,fill:!0,style:{objectFit:"contain"}}):(0,r.jsx)(w.M,{h:"100%",children:(0,r.jsx)(A.G,{icon:C.VmB,size:"2x"})})}),(0,r.jsxs)(p.xu,{width:"100%",height:"300px",rounded:"md",children:[(0,r.jsx)(w.M,{children:(0,r.jsx)(g.i,{w:"80%",borderColor:"gray",opacity:"1",p:"1"})}),(0,r.jsxs)(b.m,{variant:"soft-rounded",colorScheme:"green",onChange:e=>en(String(e)),children:[(0,r.jsx)(w.M,{pt:"2",children:(0,r.jsxs)(S.t,{children:[(0,r.jsx)(M.O,{fontSize:"13px",children:"モザイク"}),(0,r.jsx)(M.O,{fontSize:"13px",children:"ぼかし"}),(0,r.jsx)(M.O,{fontSize:"13px",children:"スタンプ"})]})}),(0,r.jsxs)(v.n,{children:[(0,r.jsx)(z.x,{children:(0,r.jsxs)(j.g,{spacing:"3%",align:"stretch",w:"100%",children:[(0,r.jsx)(m.x,{as:"b",color:"blackAlpha.600",fontSize:"17px",pl:"10%",children:"強さ"}),(0,r.jsx)(w.M,{children:(0,r.jsx)(y.U,{spacing:2,w:"80%",children:(0,r.jsxs)(k.iR,{id:"slider",step:1,defaultValue:1,min:1,max:Number(X),colorScheme:"teal",onChange:e=>es(String(e)),onMouseEnter:()=>J(!0),onMouseLeave:()=>J(!1),children:[(0,r.jsx)(k.jz,{value:1,mt:"1",ml:"-2.5",fontSize:"11px",children:"低"}),(0,r.jsx)(k.jz,{value:Number(X)/2,mt:"1",ml:"-2.5",fontSize:"11px",children:"中"}),(0,r.jsx)(k.jz,{value:Number(X),mt:"1",ml:"-2.5",fontSize:"11px",children:"高"}),(0,r.jsx)(k.Uj,{children:(0,r.jsx)(k.Ms,{})}),(0,r.jsx)(_.u,{hasArrow:!0,bg:"teal.400",color:"white",placement:"top",isOpen:E,children:(0,r.jsx)(k.gs,{})})]})})}),(0,r.jsx)(m.x,{as:"b",color:"blackAlpha.600",fontSize:"17px",pl:"10%",pt:"2",children:"加工しない人"}),(0,r.jsx)(w.M,{children:(0,r.jsx)(p.xu,{w:"80%",children:(0,r.jsx)(a.ZP,{instanceId:"selectbox",ref:H,onChange:e=>{ec(e)},options:L,isMulti:!0})})}),(0,r.jsx)(w.M,{w:"25%",pl:"10%",children:(0,r.jsx)(h.z,{colorScheme:"teal",variant:"solid",onClick:ei,children:"加工する"})})]})}),(0,r.jsx)(z.x,{children:(0,r.jsxs)(j.g,{spacing:"3%",align:"stretch",w:"100%",children:[(0,r.jsx)(m.x,{as:"b",color:"blackAlpha.600",fontSize:"17px",pl:"10%",children:"強さ"}),(0,r.jsx)(w.M,{children:(0,r.jsx)(y.U,{spacing:2,w:"80%",children:(0,r.jsxs)(k.iR,{id:"slider",step:1,defaultValue:1,min:1,max:Number(X),colorScheme:"teal",onChange:e=>es(String(e)),onMouseEnter:()=>J(!0),onMouseLeave:()=>J(!1),children:[(0,r.jsx)(k.jz,{value:1,mt:"1",ml:"-2.5",fontSize:"11px",children:"低"}),(0,r.jsx)(k.jz,{value:Number(X)/2,mt:"1",ml:"-2.5",fontSize:"11px",children:"中"}),(0,r.jsx)(k.jz,{value:Number(X),mt:"1",ml:"-2.5",fontSize:"11px",children:"高"}),(0,r.jsx)(k.Uj,{children:(0,r.jsx)(k.Ms,{})}),(0,r.jsx)(_.u,{hasArrow:!0,bg:"teal.400",color:"white",placement:"top",isOpen:E,children:(0,r.jsx)(k.gs,{})})]})})}),(0,r.jsx)(m.x,{as:"b",color:"blackAlpha.600",fontSize:"17px",pl:"10%",pt:"2",children:"加工しない人"}),(0,r.jsx)(w.M,{children:(0,r.jsx)(p.xu,{w:"80%",children:(0,r.jsx)(a.ZP,{instanceId:"selectbox",ref:Q,onChange:e=>{ec(e)},options:L,isMulti:!0})})}),(0,r.jsx)(w.M,{w:"25%",pl:"10%",children:(0,r.jsx)(h.z,{colorScheme:"teal",variant:"solid",onClick:ei,children:"加工する"})})]})}),(0,r.jsx)(z.x,{children:(0,r.jsxs)(j.g,{spacing:"2%",align:"stretch",w:"100%",children:[(0,r.jsx)(m.x,{as:"b",color:"blackAlpha.600",fontSize:"17px",pl:"10%",children:"種類"}),(0,r.jsx)(w.M,{children:(0,r.jsx)(p.xu,{w:"80%",children:(0,r.jsx)(a.ZP,{instanceId:"selectbox",onChange:e=>{el(e)},options:[{value:"2",label:"/smiling_face_with_smiling_eyes_3d.png"},{value:"3",label:"/star_3d.png"},{value:"4",label:"/heart_suit_3d.png"}],formatOptionLabel:e=>(0,r.jsx)(ex,{option:e})})})}),(0,r.jsx)(m.x,{as:"b",color:"blackAlpha.600",fontSize:"17px",pl:"10%",children:"加工しない人"}),(0,r.jsx)(w.M,{children:(0,r.jsx)(p.xu,{w:"80%",children:(0,r.jsx)(a.ZP,{instanceId:"selectbox",ref:ee,onChange:e=>{ec(e)},options:L,isMulti:!0})})}),(0,r.jsx)(w.M,{w:"25%",pl:"10%",children:(0,r.jsx)(h.z,{colorScheme:"teal",variant:"solid",onClick:ei,children:"加工する"})})]})})]})]})]})]}),(0,r.jsxs)(p.xu,{bg:"white",mt:"10px",ml:"3%",mr:"3%",width:"44%",height:"690px",rounded:"md",borderColor:"blackAlpha.50",children:[(0,r.jsx)(p.xu,{w:"200px",children:(0,r.jsxs)(j.g,{children:[(0,r.jsx)(m.x,{color:"blackAlpha.600",fontSize:"30px",children:"ダウンロード"}),(0,r.jsx)(g.i,{w:"80px",borderColor:"gray",opacity:"1"})]})}),(0,r.jsx)(p.xu,{width:"100%",position:"relative",height:"300px",mt:"56px",rounded:"md",children:(0,r.jsx)(w.M,{h:"100%",position:"relative",children:B?(0,r.jsx)(w.M,{children:(0,r.jsx)(f.$,{thickness:"5px",speed:"0.65s",emptyColor:"gray.200",color:"teal.500",size:"xl"})}):T&&i?(0,r.jsx)(x(),{loader:o,src:i,alt:"input picture",unoptimized:!0,fill:!0,style:{objectFit:"contain"}}):(0,r.jsx)(w.M,{h:"100%",children:(0,r.jsx)(A.G,{icon:C.pkM,size:"3x"})})})}),(0,r.jsx)(w.M,{children:(0,r.jsx)(g.i,{w:"80%",borderColor:"gray",opacity:"1",p:"1"})}),(0,r.jsx)(w.M,{children:(0,r.jsx)(p.xu,{width:"80%",height:"100px",rounded:"md",children:(0,r.jsx)(p.xu,{w:"50%",mt:"10px",children:T?(0,r.jsxs)(h.z,{colorScheme:"teal",variant:"solid",onClick:eo,children:[(0,r.jsx)(A.G,{icon:C.ISu}),(0,r.jsx)(m.x,{m:"3px",children:"ダウンロード"})]}):(0,r.jsx)(p.xu,{})})})}),(0,r.jsx)(p.xu,{children:(0,r.jsxs)(j.g,{children:[(0,r.jsx)(m.x,{color:"blackAlpha.600",fontSize:"30px",children:"SHARE"}),(0,r.jsx)(g.i,{w:"80px",borderColor:"gray",opacity:"1"}),(0,r.jsx)(p.xu,{pt:"10px",children:(0,r.jsxs)(u.k,{children:[(0,r.jsxs)(p.xu,{position:"relative",w:"50px",h:"50px",mr:"10px",ml:"10px",color:"black",children:[" ",(0,r.jsx)(l(),{href:"https://twitter.com/compose/tweet",children:(0,r.jsx)(w.M,{h:"100%",w:"100%",children:(0,r.jsx)(x(),{src:"./Twitter.png",alt:"",width:100,height:100})})})]}),(0,r.jsx)(p.xu,{position:"relative",w:"50px",h:"50px",mr:"10px",ml:"10px",children:(0,r.jsx)(l(),{href:"https://www.facebook.com/",children:(0,r.jsx)(w.M,{h:"100%",w:"100%",children:(0,r.jsx)(N.Am9,{color:"#1877F2",size:"50px"})})})}),(0,r.jsxs)(p.xu,{position:"relative",w:"50px",h:"50px",mr:"10px",ml:"10px",children:[" ",(0,r.jsx)(l(),{href:"https://www.instagram.com/",children:(0,r.jsx)(w.M,{h:"100%",w:"100%",children:(0,r.jsx)(x(),{src:"./Instagram.png",alt:"",width:100,height:100})})})]}),(0,r.jsxs)(p.xu,{position:"relative",w:"50px",h:"50px",mr:"10px",ml:"10px",children:[" ",(0,r.jsx)(l(),{href:"https://timeline.line.me/social-plugin/share?url=&text=",children:(0,r.jsx)(w.M,{h:"100%",w:"100%",children:(0,r.jsx)(x(),{src:"./LINE.png",alt:"",width:100,height:100})})})]})]})})]})})]})]})]})})}}},function(e){e.O(0,[976,445,742,194,774,888,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);