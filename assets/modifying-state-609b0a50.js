import{j as e,a as n,F as r}from"./jsx-runtime-51f16834.js";import{M as i}from"./index-ea8eacef.js";import{u as s}from"./index-26f82b5d.js";import"./index-f0613c7e.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-875a6dae.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./index-11d98b33.js";import"./index-467c475c.js";import"./index-1975b18f.js";import"./isSymbol-bb09bcdd.js";import"./index-356e4a49.js";function a(o){const t=Object.assign({code:"code",pre:"pre"},s(),o.components);return n(r,{children:[e(i,{title:"Modifying State"}),`
`,e("h1",{children:"Modifying State"}),`
`,n("h4",{children:["React Seat Toolkit uses Redux to manage its state. You can modify its state using the underlying ",e(t.code,{children:"store"})," itself or a couple of abstracted ",e(t.code,{children:"actions"})," which are available to you."]}),`
`,e("h4",{children:"Here is an example of how you can deselect a seat manually and retrieve the updated state:"}),`
`,e(t.pre,{children:e(t.code,{className:"language-tsx",children:`import { actions } from "@mezh-hq/react-seat-toolkit";

actions.deselectElement("<seat-id>");

const state = actions.getState();

console.log(state); // Updated workspace state of type STKData
`})}),`
`,n("h4",{children:["Here is an example of how you can import and use the ",e(t.code,{children:"store"})," to retrieve the current Redux state:"]}),`
`,e(t.pre,{children:e(t.code,{className:"language-tsx",children:`import { store } from "@mezh-hq/react-seat-toolkit";

const state = store.getState();

console.log(state); // Current redux state (Not of type STKData)
`})}),`
`,e("h4",{children:"For a full list of supported actions please have a look at its type definitions"})]})}function j(o={}){const{wrapper:t}=Object.assign({},s(),o.components);return t?e(t,Object.assign({},o,{children:e(a,o)})):a(o)}export{j as default};
//# sourceMappingURL=modifying-state-609b0a50.js.map
