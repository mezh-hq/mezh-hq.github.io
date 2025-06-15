import{j as p}from"./jsx-runtime-51f16834.js";import{J as m}from"./index-c88abb4c.js";import{S as n,o as S,a as l}from"./options-592be268.js";import"./index-f0613c7e.js";import"./_commonjsHelpers-de833af9.js";import"./index-f7c6f77e.js";import"./isSymbol-bb09bcdd.js";import"./v4-a960c1f4.js";import"./debounce-d5f60358.js";import"./index-467c475c.js";const y={title:"Designer/Persisted",component:n,...S},e={render:t=>{const o=sessionStorage.getItem("stk-data"),i=o?JSON.parse(o):void 0;return p(n,{...t,mode:l.DESIGNER,data:i,options:{exportButtonText:"Save to Session Storage",showAirplaneControl:!0},events:{onExport:d=>{sessionStorage.setItem("stk-data",JSON.stringify(d)),m.info("Changes saved to session storage. They will be available on page reload")},...t.events}})}};var s,a,r;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: props => {
    const saved = sessionStorage.getItem("stk-data");
    const data = saved ? JSON.parse(saved) : undefined;
    return <SeatToolkit {...props} mode={STKMode.DESIGNER} data={data} options={{
      exportButtonText: "Save to Session Storage",
      showAirplaneControl: true
    }} events={{
      onExport: data => {
        sessionStorage.setItem("stk-data", JSON.stringify(data));
        toast.info("Changes saved to session storage. They will be available on page reload");
      },
      ...props.events
    }} />;
  }
}`,...(r=(a=e.parameters)==null?void 0:a.docs)==null?void 0:r.source}}};const I=["Story"];export{e as Story,I as __namedExportsOrder,y as default};
//# sourceMappingURL=persisted.stories-4d788075.js.map
