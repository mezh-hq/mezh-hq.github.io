import{j as c}from"./index-60dc20a8.js";import{S as t}from"./index-3da87e6e.js";import"./isSymbol-28c6ff55.js";import"./_commonjsHelpers-de833af9.js";import"./v4-a960c1f4.js";import"./debounce-409ac012.js";import"./index-4ca9f043.js";const y={title:"Designer Mode",component:t,parameters:{layout:"fullscreen"},argTypes:{}},e={render:()=>c(t,{mode:"designer"})},r={render:()=>{const s=sessionStorage.getItem("stk-data"),p=s?JSON.parse(s):void 0;return c(t,{mode:"designer",data:p})}};var a,o,d;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: () => <SeatToolkit mode={"designer"} />
}`,...(d=(o=e.parameters)==null?void 0:o.docs)==null?void 0:d.source}}};var n,i,m;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: () => {
    const saved = sessionStorage.getItem("stk-data");
    const data = saved ? JSON.parse(saved) : undefined;
    return <SeatToolkit mode={"designer"} data={data} />;
  }
}`,...(m=(i=r.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const T=["Default","Hydrated"];export{e as Default,r as Hydrated,T as __namedExportsOrder,y as default};
//# sourceMappingURL=designer.stories-bc144507.js.map
