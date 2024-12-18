import{j as m}from"./jsx-runtime-51f16834.js";import{J as l}from"./index-c88abb4c.js";import{S as r,o as S,a as c}from"./options-65a4b377.js";import"./index-f0613c7e.js";import"./_commonjsHelpers-de833af9.js";import"./index-7a40d937.js";import"./isSymbol-bb09bcdd.js";import"./v4-a960c1f4.js";import"./debounce-d5f60358.js";import"./Combination-ed49f4f8.js";const G={title:"Designer/Basic",component:r,...S},e={render:o=>m(r,{mode:c.DESIGNER,...o})},t={render:o=>m(r,{mode:c.DESIGNER,...o,options:{showReloadButton:!0,...o.options},events:{onReload:()=>{l.info("Reload clicked")},...o.events}})};var s,n,a;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: props => <SeatToolkit mode={STKMode.DESIGNER} {...props} />
}`,...(a=(n=e.parameters)==null?void 0:n.docs)==null?void 0:a.source}}};var p,i,d;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: props => <SeatToolkit mode={STKMode.DESIGNER} {...props} options={{
    showReloadButton: true,
    ...props.options
  }} events={{
    onReload: () => {
      toast.info("Reload clicked");
    },
    ...props.events
  }} />
}`,...(d=(i=t.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};const I=["Story","WithReloadButton"];export{e as Story,t as WithReloadButton,I as __namedExportsOrder,G as default};
//# sourceMappingURL=basic.stories-0a844891.js.map
