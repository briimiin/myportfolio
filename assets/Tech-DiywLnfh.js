import{j as s,C as r,r as o,O as n,P as i,u as l,F as c,D as x,m as d}from"./vendor-BvXaljVx.js";import{C as m}from"./Loader-Bc9Qg1vl.js";import{S as h,t as f}from"./SectionWrapper-VeyAI7NW.js";import{s as a}from"./styles-BMfF9tGN.js";import{t as p}from"./index-CgBAD0Z0.js";const j=e=>{const[t]=l([e.imgUrl]);return s.jsxs(c,{speed:1.75,rotationIntensity:1,floatIntensity:2,children:[s.jsx("ambientLight",{intensity:.25}),s.jsx("directionalLight",{position:[0,0,.05]}),s.jsxs("mesh",{castShadow:!0,receiveShadow:!0,scale:2.75,children:[s.jsx("icosahedronGeometry",{args:[1,1]}),s.jsx("meshStandardMaterial",{color:"#fff8eb",polygonOffset:!0,polygonOffsetFactor:-5,flatShading:!0}),s.jsx(x,{position:[0,0,1],rotation:[2*Math.PI,0,6.25],scale:1,map:t,flatShading:!0})]})]})},u=({icon:e})=>s.jsxs(r,{frameloop:"demand",dpr:[1,2],gl:{preserveDrawingBuffer:!0},children:[s.jsxs(o.Suspense,{fallback:s.jsx(m,{}),children:[s.jsx(n,{enableZoom:!1}),s.jsx(j,{imgUrl:e})]}),s.jsx(i,{all:!0})]}),g=()=>s.jsx(s.Fragment,{children:s.jsxs("div",{className:"flex flex-row flex-wrap ",children:[s.jsxs(d.div,{variants:f(),children:[s.jsx("p",{className:`${a.sectionSubText} `,children:"tech"}),s.jsx("h2",{className:`${a.sectionHeadText}`,children:"Technologies."})]}),s.jsx("div",{className:"mt-20 flex flex-wrap gap-5",children:p.map(e=>s.jsx("div",{className:"w-20 h-20",children:s.jsx(u,{icon:e.icon})},e.name))})]})}),C=h(g,"");export{C as default};
