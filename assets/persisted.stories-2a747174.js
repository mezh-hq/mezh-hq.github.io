import{j as p}from"./jsx-runtime-51f16834.js";import{J as m}from"./index-c88abb4c.js";import{S as n,o as S,a as g}from"./options-c6cf7f30.js";import"./index-f0613c7e.js";import"./_commonjsHelpers-de833af9.js";import"./index-44713fdc.js";import"./isSymbol-bb09bcdd.js";import"./v4-a960c1f4.js";import"./debounce-d5f60358.js";import"./index-f05804b8.js";const I={title:"Designer/Persisted",component:n,...S},e={render:t=>{const o=sessionStorage.getItem("stk-data"),i=o?JSON.parse(o):void 0;return p(n,{...t,mode:g.DESIGNER,data:i,options:{exportButtonText:"Save to Session Storage"},events:{onExport:d=>{sessionStorage.setItem("stk-data",JSON.stringify(d)),m.info("Changes saved to session storage. They will be available on page reload")},...t.events}})}};var s,a,r;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: props => {
    const saved = sessionStorage.getItem("stk-data");
    const data = saved ? JSON.parse(saved) : undefined;
    return <SeatToolkit {...props} mode={STKMode.DESIGNER} data={data} options={{
      exportButtonText: "Save to Session Storage"
    }} events={{
      onExport: data => {
        sessionStorage.setItem("stk-data", JSON.stringify(data));
        toast.info("Changes saved to session storage. They will be available on page reload");
      },
      ...props.events
    }} />;
  }
}`,...(r=(a=e.parameters)==null?void 0:a.docs)==null?void 0:r.source}}};const J=["Story"];export{e as Story,J as __namedExportsOrder,I as default};
//# sourceMappingURL=persisted.stories-2a747174.js.map
