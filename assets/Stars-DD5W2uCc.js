import{j as s,C as o,r as e,P as i,k as u,l,n as c,o as x}from"./vendor-BvXaljVx.js";const p=a=>{const t=e.useRef(),[n]=e.useState(()=>u(new Float32Array(5e3),{radius:1.2}));return l((d,r)=>{t.current.rotation.x-=r/10,t.current.rotation.y-=r/15}),s.jsx("group",{rotation:[0,0,Math.PI/4],children:s.jsx(c,{ref:t,positions:n,stride:3,frustumCulled:!0,...a,children:s.jsx(x,{transparent:!0,color:"#f272c8",size:.002,sizeAttenuation:!0,depthWrite:!1})})})},j=()=>s.jsx("div",{className:"w-full h-auto absolute inset-0 z-[-1]",children:s.jsxs(o,{camera:{position:[0,0,1]},children:[s.jsx(e.Suspense,{fallback:null,children:s.jsx(p,{})}),s.jsx(i,{all:!0})]})});export{j as default};