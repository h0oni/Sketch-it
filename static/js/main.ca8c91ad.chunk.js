(this["webpackJsonpe-commerce"]=this["webpackJsonpe-commerce"]||[]).push([[0],{61:function(e,t,a){"use strict";a.r(t);var i=a(0),n=a(14),c=a.n(n),r=a(18),s=a(80),o=a(81),l=a(82),d=a(90),j=a(83),b=a(84),p=a(24),h=a(78),m=a(12),x=Object(h.a)((function(e){return{appBar:Object(p.a)({boxShadow:"none",borderBottom:"1px solid rgba(0, 0, 0, 0.12)"},e.breakpoints.up("sm"),{width:"calc(100% - ".concat(0,"px)"),marginLeft:0}),title:{flexGrow:1,alignItems:"center",display:"flex",textDecoration:"none"},image:{marginRight:"10px"},menuButton:Object(p.a)({marginRight:e.spacing(2)},e.breakpoints.up("sm"),{display:"none"}),grow:{flexGrow:1},search:Object(p.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(m.b)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(m.b)(e.palette.common.white,.25)},marginRight:e.spacing(2),marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{width:"auto"}),searchIcon:{padding:e.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:Object(p.a)({padding:e.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(e.spacing(4),"px)"),transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("md"),{width:"20ch"})}})),g=a(2),u=function(){var e=x();return Object(g.jsx)("div",{children:Object(g.jsx)(s.a,{position:"fixed",className:e.appBar,color:"inherit",children:Object(g.jsxs)(o.a,{children:[Object(g.jsxs)(l.a,{variant:"h6",className:e.title,color:"inherit",children:[Object(g.jsx)("img",{src:"https://th.bing.com/th/id/R6575fffe71b6c294055e417efc34ffe3?rik=ZajaT4IslV%2bd2A&riu=http%3a%2f%2fcdn.onlinewebfonts.com%2fsvg%2fimg_467479.png&ehk=lHrGkwnBKYRuxr1B83zTe9VK1BBa%2bqJcXMyHeeFFzh4%3d&risl=&pid=ImgRaw",alt:"Sketch-it",height:"25px",className:e.image}),"Sketch-it"]}),Object(g.jsx)("div",{className:e.grow}),Object(g.jsx)("div",{className:e.button,children:Object(g.jsx)(d.a,{"aria-label":"Show cart items",color:"inherit",children:Object(g.jsx)(j.a,{badgeContent:2,color:"secondary",children:Object(g.jsx)(b.a,{})})})})]})})})},O=a(88),f=a(85),v=a(86),y=a(87),w=a(89),I=Object(h.a)((function(){return{root:{textAlign:"center",display:"flex",justifyContent:"space-evenly",paddingLeft:"20%",paddingRight:"20%",maxHeight:"60px",margin:"10px"},span:{fontSize:"20"}}})),k=function(){var e=Object(i.useState)("00"),t=Object(r.a)(e,2),a=t[0],n=t[1],c=Object(i.useState)("00"),s=Object(r.a)(c,2),o=s[0],d=s[1],j=Object(i.useState)("00"),b=Object(r.a)(j,2),p=b[0],h=b[1],m=Object(i.useRef)();Object(i.useEffect)((function(){return function(){var e=new Date("April  07  2021 00:00:00").getTime();m=setInterval((function(){var t=(new Date).getTime(),a=e-t,i=Math.floor(a/36e5),c=Math.floor(a%36e5/6e4),r=Math.floor(a%6e4/1e3);a>0&&(n(i),d(c),h(r))}),1e3)}(),function(){clearInterval(m.current)}}));var x=I();return Object(g.jsxs)("div",{className:x.root,children:[Object(g.jsxs)("section",{children:[Object(g.jsx)(l.a,{variant:"h5",children:a}),Object(g.jsx)(l.a,{children:Object(g.jsx)("small",{children:"Hours"})})]}),Object(g.jsx)("section",{children:Object(g.jsx)(l.a,{variant:"h5",children:":"})}),Object(g.jsxs)("section",{children:[Object(g.jsx)(l.a,{variant:"h5",children:o}),Object(g.jsx)(l.a,{children:Object(g.jsx)("small",{children:"Minutes"})})]}),Object(g.jsx)("section",{children:Object(g.jsx)(l.a,{variant:"h5",children:":"})}),Object(g.jsxs)("section",{children:[Object(g.jsx)(l.a,{variant:"h5",children:p}),Object(g.jsx)(l.a,{children:Object(g.jsx)("small",{children:"Seconds"})})]})]})},S=a(42),N=a.n(S),C=a(41),R=a.n(C),B=Object(h.a)((function(){return{root:{maxWidth:"100%"},media:{height:90,paddingTop:"90%"},cardActions:{display:"flex",justifyContent:"flex-end"},cardContent:{display:"flex",justifyContent:"space-between",alignItems:"center"},motion:{opacity:"0.8"},description:{border:"2px solid tomato",padding:"2px",paddingInline:"10px",borderRadius:"15px",display:"flex",flexWrap:"wrap"},priceBox:{display:"flex",alignItems:"center"},priceText:{display:"flex",justifyContent:"center",border:"1px solid gray",borderRadius:"5px",alignItems:"center",paddingInline:"8px"},mid_div:{display:"flex",justifyContent:"space-between",alignItems:"center"}}})),T=function(e){var t=e.product,a=e.setSelectedImage,i=B();return Object(g.jsxs)(f.a,{className:i.root,children:[Object(g.jsx)(w.a.div,{className:i.motion,whileHover:{opacity:1,scale:1.01},children:Object(g.jsx)(v.a,{className:i.media,image:t.image,title:t.name,onClick:function(){return a(t.image)}})}),Object(g.jsxs)(y.a,{children:[Object(g.jsxs)("div",{className:i.cardContent,children:[Object(g.jsx)(l.a,{varient:"h5",gutterBottom:!0,children:t.name}),Object(g.jsxs)("div",{className:i.priceBox,children:[Object(g.jsx)(d.a,{"aria-label":"Remove",children:Object(g.jsx)(R.a,{style:{color:"tomato"}})}),Object(g.jsx)(l.a,{varient:"h5",className:i.priceText,children:t.price}),Object(g.jsx)(d.a,{"aria-label":"Add",children:Object(g.jsx)(N.a,{style:{color:"tomato"}})})]})]}),Object(g.jsxs)("div",{className:i.mid_div,children:[Object(g.jsx)(l.a,{varient:"h2",style:{color:"tomato"},className:i.description,children:t.description}),Object(g.jsxs)(l.a,{varient:"h2",color:"textSecondary",children:[t.betsSoFar," people placed bets"]})]})]}),Object(g.jsx)(k,{})]})},H=Object(h.a)((function(e){return{toolbar:e.mixins.toolbar,content:{flexGrow:1,height:"100vh",backgroundColor:e.palette.background.default,padding:e.spacing(4),background:"linear-gradient(#f5af19,#f12711)"},root:{flexGrow:1}}})),L=[{id:1,name:"OrderID#0001",betsSoFar:"3",description:"Large",price:"5.99",image:"https://th.bing.com/th/id/OIP.fE2T6OhzjrvzL7uI2o2s7wHaLH?pid=ImgDet&rs=1"},{id:2,name:"OrderID#0002",betsSoFar:"8",description:"Medium",price:"10.99",image:"https://th.bing.com/th/id/OIP._TUV8y1Lh-uCkAx7EHbFjQHaLH?pid=ImgDet&rs=1"},{id:3,name:"OrderID#0003",betsSoFar:"5",description:"Small",price:"10.99",image:"https://i.pinimg.com/originals/0a/8e/12/0a8e12a8e64b341eafc73c9d46bc3d9c.jpg"}],D=function(e){var t=e.setSelectedImage,a=H();return Object(g.jsxs)("main",{className:a.content,children:[Object(g.jsx)("div",{className:a.toolbar}),Object(g.jsx)(O.a,{container:!0,justify:"center",spacing:4,children:L.map((function(e){return Object(g.jsx)(O.a,{item:!0,xs:12,sm:6,md:4,lg:3,children:Object(g.jsx)(T,{product:e,setSelectedImage:t})},e.id)}))})]})},F=a(43),z=a.n(F),A=Object(h.a)((function(){return{backdrop:{position:"fixed",top:0,left:0,width:"100%",height:"100%",background:"rgba(0,0,0,0.5)",display:"flex",justifyContent:"center"},card:{position:"center",marginTop:"100px",margin:"5px",height:"80vh",maxWidth:"480px",backgroundColor:"transparent",objectFit:"fill"},image:{boxshadow:"3px 5px 7px rgba(0,0,0,0.5)",border:"3px solid white",height:"100%",paddingTop:"0%",width:"auto"},close:{cursor:"pointer",float:"right",marginTop:"4px",marginRight:"17px",width:"20px"}}})),E=function(e){var t=e.selectedImage,a=e.setSelectedImage,i=A();return Object(g.jsx)(w.a.div,{className:i.backdrop,initial:{opacity:0},animate:{opacity:1},children:Object(g.jsxs)(f.a,{className:i.card,children:[Object(g.jsx)(w.a.div,{className:i.close,onClick:function(e){a(null)},initial:{opacity:0},animate:{opacity:1},transition:{delay:.5},children:Object(g.jsx)(z.a,{fontSize:"large"})}),Object(g.jsx)(v.a,{className:i.image,image:t,title:"Enlarged"})]})})},M=function(){var e=Object(i.useState)(null),t=Object(r.a)(e,2),a=t[0],n=t[1];return Object(g.jsxs)("div",{children:[Object(g.jsx)(u,{}),Object(g.jsx)(D,{setSelectedImage:n}),a&&Object(g.jsx)(E,{selectedImage:a,setSelectedImage:n})]})};c.a.render(Object(g.jsx)(M,{}),document.getElementById("root"))}},[[61,1,2]]]);
//# sourceMappingURL=main.ca8c91ad.chunk.js.map