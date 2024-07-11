import{j as t,a as n,F as s}from"./jsx-runtime-51f16834.js";import{M as a}from"./index-bb187931.js";import{u as r}from"./index-26f82b5d.js";import"./index-f0613c7e.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-8dcb0071.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./index-11d98b33.js";import"./index-f05804b8.js";import"./index-1975b18f.js";import"./isSymbol-bb09bcdd.js";import"./index-356e4a49.js";function i(e){const o=Object.assign({code:"code",pre:"pre"},r(),e.components);return n(s,{children:[t(a,{title:"Customization"}),`
`,t("h1",{children:"Customization"}),`
`,n("h4",{children:["React Seat Toolkit is highly customizable. You can change almost every aspect of it through its ",t(o.code,{children:"styles"})," prop"]}),`
`,t("h4",{children:"Here is an example of how you can override its default styles:"}),`
`,t(o.pre,{children:t(o.code,{className:"language-tsx",children:`import { SeatToolkit } from "@mezh-hq/react-seat-toolkit";

return <SeatToolkit 
  mode="designer"
  styles={{
    root: {
      className: "bg-gray-100",
      style: {
        padding: "20px",
        borderRadius: "10px",
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)"
      }
    }
  }}
/>
`})}),`
`,t("h4",{children:"For a full list of supported styles please have a look at its type definitions"})]})}function M(e={}){const{wrapper:o}=Object.assign({},r(),e.components);return o?t(o,Object.assign({},e,{children:t(i,e)})):i(e)}export{M as default};
//# sourceMappingURL=customization-4c03224e.js.map
