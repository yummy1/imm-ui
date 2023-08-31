import{_ as s,o as a,c as n,d as p}from"./app.aa78a034.js";const m=JSON.parse('{"title":"快速开始","description":"","frontmatter":{},"headers":[{"level":2,"title":"用法","slug":"用法","link":"#用法","children":[]}],"relativePath":"guide/quickstart.md"}'),e={name:"guide/quickstart.md"},t=p(`<h1 id="快速开始" tabindex="-1">快速开始 <a class="header-anchor" href="#快速开始" aria-hidden="true">#</a></h1><p>本节将介绍如何在项目中使用 IMMUI</p><h2 id="用法" tabindex="-1">用法 <a class="header-anchor" href="#用法" aria-hidden="true">#</a></h2><p>main.ts中</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">import {createApp} from &#39;vue&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">import App from &#39;./app.vue&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">const app = createApp(App)</span></span>
<span class="line"><span style="color:#A6ACCD;">import immui from &quot;imm-ui&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">app.use(immui)</span></span>
<span class="line"><span style="color:#A6ACCD;">app.mount(&#39;#app&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>组件中</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">&lt;template&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;Button&gt;按钮&lt;/Button&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/template&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;script setup&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">import { Button } from &#39;imm-ui&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,7),l=[t];function o(c,i,r,A,C,d){return a(),n("div",null,l)}const _=s(e,[["render",o]]);export{m as __pageData,_ as default};
