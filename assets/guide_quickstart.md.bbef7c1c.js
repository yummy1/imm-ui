import{_ as t,o as e,c as a,Q as o}from"./chunks/framework.9c7a9130.js";const h=JSON.parse('{"title":"快速开始","description":"","frontmatter":{},"headers":[],"relativePath":"guide/quickstart.md","filePath":"guide/quickstart.md"}'),r={name:"guide/quickstart.md"},p=o(`<h1 id="快速开始" tabindex="-1">快速开始 <a class="header-anchor" href="#快速开始" aria-label="Permalink to &quot;快速开始&quot;">​</a></h1><p>本节将介绍如何在项目中使用 IMMUI</p><h2 id="用法" tabindex="-1">用法 <a class="header-anchor" href="#用法" aria-label="Permalink to &quot;用法&quot;">​</a></h2><p>main.ts中</p><pre><code>import {createApp} from &#39;vue&#39;
import App from &#39;./app.vue&#39;
const app = createApp(App)
import immui from &quot;imm-ui&quot;
app.use(immui)
app.mount(&#39;#app&#39;)
</code></pre><p>组件中</p><pre><code>&lt;template&gt;
  &lt;Button&gt;按钮&lt;/Button&gt;
&lt;/template&gt;

&lt;script setup&gt;

import { Button } from &#39;imm-ui&#39;

&lt;/script&gt;
</code></pre>`,7),n=[p];function i(c,s,m,u,_,d){return e(),a("div",null,n)}const f=t(r,[["render",i]]);export{h as __pageData,f as default};
