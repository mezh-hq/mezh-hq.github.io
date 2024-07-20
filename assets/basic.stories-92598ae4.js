import{j as n}from"./jsx-runtime-51f16834.js";import{J as E}from"./index-c88abb4c.js";import{S as s,o as f,a}from"./options-88169773.js";import"./index-f0613c7e.js";import"./_commonjsHelpers-de833af9.js";import"./index-39e6e92d.js";import"./isSymbol-bb09bcdd.js";import"./v4-a960c1f4.js";import"./debounce-d5f60358.js";import"./index-f05804b8.js";const w={title:"Designer/Basic",component:s,...f},e={render:o=>n(s,{mode:a.DESIGNER,...o})},r={render:o=>n(s,{mode:a.DESIGNER,...o,options:{showFooter:!1,...o.options}})},t={render:o=>n(s,{mode:a.DESIGNER,...o,options:{showReloadButton:!0,...o.options},events:{onReload:()=>{E.info("Reload clicked")},...o.events}})};var p,i,d;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: props => <SeatToolkit mode={STKMode.DESIGNER} {...props} />
}`,...(d=(i=e.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};var m,c,l;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: props => <SeatToolkit mode={STKMode.DESIGNER} {...props} options={{
    showFooter: false,
    ...props.options
  }} />
}`,...(l=(c=r.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var S,u,R;t.parameters={...t.parameters,docs:{...(S=t.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: props => <SeatToolkit mode={STKMode.DESIGNER} {...props} options={{
    showReloadButton: true,
    ...props.options
  }} events={{
    onReload: () => {
      toast.info("Reload clicked");
    },
    ...props.events
  }} />
}`,...(R=(u=t.parameters)==null?void 0:u.docs)==null?void 0:R.source}}};const F=["Story","WithoutFooter","WithReloadButton"];export{e as Story,t as WithReloadButton,r as WithoutFooter,F as __namedExportsOrder,w as default};
//# sourceMappingURL=basic.stories-92598ae4.js.map
