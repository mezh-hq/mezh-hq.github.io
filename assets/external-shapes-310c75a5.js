import{j as e,a as o,F as i}from"./jsx-runtime-51f16834.js";import{M as s}from"./index-b93fe0f1.js";import{u as r}from"./index-26f82b5d.js";import"./index-f0613c7e.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-bf10f87d.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./index-11d98b33.js";import"./Combination-ed49f4f8.js";import"./index-1975b18f.js";import"./isSymbol-bb09bcdd.js";import"./index-356e4a49.js";function a(n){const t=Object.assign({pre:"pre",code:"code",hr:"hr"},r(),n.components);return o(i,{children:[e(s,{title:"External Shapes"}),`
`,e("h1",{children:"External Shapes"}),`
`,e("h4",{children:"You can control the shapes available to you within the toolkit by passing in an array of shapes in options as follows:"}),`
`,e(t.pre,{children:e(t.code,{className:"language-tsx",children:`import { SeatToolkit } from "@mezh-hq/react-seat-toolkit";
import { FireExtinguisher } from "lucide-react";

return <SeatToolkit 
  mode="designer"
  options={{
    shapes: {
        icons: [
            FireExtinguisher
        ],
        overrideDefaultIconset: false
    }
  }}
/>
`})}),`
`,e("h4",{children:"Here, we are passing in an array of shapes with a single shape, FireExtinguisher, which will be added to the default shapes available in the toolkit."}),`
`,e("h4",{children:"If you need to completely override the default shapes available in the toolkit, you can set the overrideDefaultIconset property to true. This will remove all default shapes and keep only the shapes you pass "}),`
`,e("br",{}),`
`,e(t.hr,{}),`
`,e("br",{}),`
`,o("h5",{children:[" NOTE: The shapes you pass in should be React components that render an SVG and must contain a ",e(t.code,{children:"displayName"})," property. If the ",e(t.code,{children:"displayName"})," property is not present, the toolkit will not be able to render the shape. "]})]})}function k(n={}){const{wrapper:t}=Object.assign({},r(),n.components);return t?e(t,Object.assign({},n,{children:e(a,n)})):a(n)}export{k as default};
//# sourceMappingURL=external-shapes-310c75a5.js.map
