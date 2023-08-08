import{_ as e,o as d,c as v,a as l,b as t,w as n,d as p,r as c,e as a,p as b,f as r}from"./app.a650e147.js";const V=JSON.parse('{"title":"Link 文字链接","description":"","frontmatter":{},"headers":[{"level":2,"title":"基础用法","slug":"基础用法","link":"#基础用法","children":[]},{"level":2,"title":"禁用状态","slug":"禁用状态","link":"#禁用状态","children":[]},{"level":2,"title":"下划线","slug":"下划线","link":"#下划线","children":[]},{"level":2,"title":"图标","slug":"图标","link":"#图标","children":[]},{"level":2,"title":"Link属性","slug":"link属性","link":"#link属性","children":[]}],"relativePath":"examples/link/index.md"}'),D={name:"examples/link/index.md"},o=f=>(b("data-v-4ff56b13"),f=f(),r(),f),F=o(()=>l("h1",{id:"link-文字链接",tabindex:"-1"},[a("Link 文字链接 "),l("a",{class:"header-anchor",href:"#link-文字链接","aria-hidden":"true"},"#")],-1)),y=o(()=>l("h2",{id:"基础用法",tabindex:"-1"},[a("基础用法 "),l("a",{class:"header-anchor",href:"#基础用法","aria-hidden":"true"},"#")],-1)),i={class:"example"},C=p(`<details data-v-4ff56b13><summary data-v-4ff56b13>展开查看</summary><div class="language-vue" data-v-4ff56b13><button title="Copy Code" class="copy" data-v-4ff56b13></button><span class="lang" data-v-4ff56b13>vue</span><pre class="shiki material-palenight" data-v-4ff56b13><code data-v-4ff56b13><span class="line" data-v-4ff56b13><span style="color:#89DDFF;" data-v-4ff56b13>&lt;</span><span style="color:#F07178;" data-v-4ff56b13>template</span><span style="color:#89DDFF;" data-v-4ff56b13>&gt;</span></span>
<span class="line" data-v-4ff56b13><span style="color:#A6ACCD;" data-v-4ff56b13>  </span><span style="color:#89DDFF;" data-v-4ff56b13>&lt;</span><span style="color:#F07178;" data-v-4ff56b13>div</span><span style="color:#89DDFF;" data-v-4ff56b13>&gt;</span></span>
<span class="line" data-v-4ff56b13><span style="color:#A6ACCD;" data-v-4ff56b13>    </span><span style="color:#89DDFF;" data-v-4ff56b13>&lt;</span><span style="color:#F07178;" data-v-4ff56b13>imm-link</span><span style="color:#89DDFF;" data-v-4ff56b13> </span><span style="color:#C792EA;" data-v-4ff56b13>type</span><span style="color:#89DDFF;" data-v-4ff56b13>=</span><span style="color:#89DDFF;" data-v-4ff56b13>&quot;</span><span style="color:#C3E88D;" data-v-4ff56b13>primary</span><span style="color:#89DDFF;" data-v-4ff56b13>&quot;</span><span style="color:#89DDFF;" data-v-4ff56b13>&gt;</span><span style="color:#A6ACCD;" data-v-4ff56b13>默认链接</span><span style="color:#89DDFF;" data-v-4ff56b13>&lt;/</span><span style="color:#F07178;" data-v-4ff56b13>imm-link</span><span style="color:#89DDFF;" data-v-4ff56b13>&gt;</span></span>
<span class="line" data-v-4ff56b13><span style="color:#A6ACCD;" data-v-4ff56b13>    </span><span style="color:#89DDFF;" data-v-4ff56b13>&lt;</span><span style="color:#F07178;" data-v-4ff56b13>imm-link</span><span style="color:#89DDFF;" data-v-4ff56b13> </span><span style="color:#C792EA;" data-v-4ff56b13>type</span><span style="color:#89DDFF;" data-v-4ff56b13>=</span><span style="color:#89DDFF;" data-v-4ff56b13>&quot;</span><span style="color:#C3E88D;" data-v-4ff56b13>primary</span><span style="color:#89DDFF;" data-v-4ff56b13>&quot;</span><span style="color:#89DDFF;" data-v-4ff56b13>&gt;</span><span style="color:#A6ACCD;" data-v-4ff56b13>主要链接</span><span style="color:#89DDFF;" data-v-4ff56b13>&lt;/</span><span style="color:#F07178;" data-v-4ff56b13>imm-link</span><span style="color:#89DDFF;" data-v-4ff56b13>&gt;</span></span>
<span class="line" data-v-4ff56b13><span style="color:#A6ACCD;" data-v-4ff56b13>    </span><span style="color:#89DDFF;" data-v-4ff56b13>&lt;</span><span style="color:#F07178;" data-v-4ff56b13>imm-link</span><span style="color:#89DDFF;" data-v-4ff56b13> </span><span style="color:#C792EA;" data-v-4ff56b13>type</span><span style="color:#89DDFF;" data-v-4ff56b13>=</span><span style="color:#89DDFF;" data-v-4ff56b13>&quot;</span><span style="color:#C3E88D;" data-v-4ff56b13>success</span><span style="color:#89DDFF;" data-v-4ff56b13>&quot;</span><span style="color:#89DDFF;" data-v-4ff56b13>&gt;</span><span style="color:#A6ACCD;" data-v-4ff56b13>成功链接</span><span style="color:#89DDFF;" data-v-4ff56b13>&lt;/</span><span style="color:#F07178;" data-v-4ff56b13>imm-link</span><span style="color:#89DDFF;" data-v-4ff56b13>&gt;</span></span>
<span class="line" data-v-4ff56b13><span style="color:#A6ACCD;" data-v-4ff56b13>    </span><span style="color:#89DDFF;" data-v-4ff56b13>&lt;</span><span style="color:#F07178;" data-v-4ff56b13>imm-link</span><span style="color:#89DDFF;" data-v-4ff56b13> </span><span style="color:#C792EA;" data-v-4ff56b13>type</span><span style="color:#89DDFF;" data-v-4ff56b13>=</span><span style="color:#89DDFF;" data-v-4ff56b13>&quot;</span><span style="color:#C3E88D;" data-v-4ff56b13>info</span><span style="color:#89DDFF;" data-v-4ff56b13>&quot;</span><span style="color:#89DDFF;" data-v-4ff56b13>&gt;</span><span style="color:#A6ACCD;" data-v-4ff56b13>信息链接</span><span style="color:#89DDFF;" data-v-4ff56b13>&lt;/</span><span style="color:#F07178;" data-v-4ff56b13>imm-link</span><span style="color:#89DDFF;" data-v-4ff56b13>&gt;</span></span>
<span class="line" data-v-4ff56b13><span style="color:#A6ACCD;" data-v-4ff56b13>    </span><span style="color:#89DDFF;" data-v-4ff56b13>&lt;</span><span style="color:#F07178;" data-v-4ff56b13>imm-link</span><span style="color:#89DDFF;" data-v-4ff56b13> </span><span style="color:#C792EA;" data-v-4ff56b13>type</span><span style="color:#89DDFF;" data-v-4ff56b13>=</span><span style="color:#89DDFF;" data-v-4ff56b13>&quot;</span><span style="color:#C3E88D;" data-v-4ff56b13>warning</span><span style="color:#89DDFF;" data-v-4ff56b13>&quot;</span><span style="color:#89DDFF;" data-v-4ff56b13>&gt;</span><span style="color:#A6ACCD;" data-v-4ff56b13>警告链接</span><span style="color:#89DDFF;" data-v-4ff56b13>&lt;/</span><span style="color:#F07178;" data-v-4ff56b13>imm-link</span><span style="color:#89DDFF;" data-v-4ff56b13>&gt;</span></span>
<span class="line" data-v-4ff56b13><span style="color:#A6ACCD;" data-v-4ff56b13>    </span><span style="color:#89DDFF;" data-v-4ff56b13>&lt;</span><span style="color:#F07178;" data-v-4ff56b13>imm-link</span><span style="color:#89DDFF;" data-v-4ff56b13> </span><span style="color:#C792EA;" data-v-4ff56b13>type</span><span style="color:#89DDFF;" data-v-4ff56b13>=</span><span style="color:#89DDFF;" data-v-4ff56b13>&quot;</span><span style="color:#C3E88D;" data-v-4ff56b13>danger</span><span style="color:#89DDFF;" data-v-4ff56b13>&quot;</span><span style="color:#89DDFF;" data-v-4ff56b13>&gt;</span><span style="color:#A6ACCD;" data-v-4ff56b13>危险链接</span><span style="color:#89DDFF;" data-v-4ff56b13>&lt;/</span><span style="color:#F07178;" data-v-4ff56b13>imm-link</span><span style="color:#89DDFF;" data-v-4ff56b13>&gt;</span></span>
<span class="line" data-v-4ff56b13><span style="color:#A6ACCD;" data-v-4ff56b13>  </span><span style="color:#89DDFF;" data-v-4ff56b13>&lt;/</span><span style="color:#F07178;" data-v-4ff56b13>div</span><span style="color:#89DDFF;" data-v-4ff56b13>&gt;</span></span>
<span class="line" data-v-4ff56b13><span style="color:#89DDFF;" data-v-4ff56b13>&lt;/</span><span style="color:#F07178;" data-v-4ff56b13>template</span><span style="color:#89DDFF;" data-v-4ff56b13>&gt;</span></span>
<span class="line" data-v-4ff56b13><span style="color:#89DDFF;" data-v-4ff56b13>&lt;</span><span style="color:#F07178;" data-v-4ff56b13>script</span><span style="color:#A6ACCD;" data-v-4ff56b13> </span><span style="color:#C792EA;" data-v-4ff56b13>lang</span><span style="color:#89DDFF;" data-v-4ff56b13>=</span><span style="color:#89DDFF;" data-v-4ff56b13>&quot;</span><span style="color:#C3E88D;" data-v-4ff56b13>ts</span><span style="color:#89DDFF;" data-v-4ff56b13>&quot;</span><span style="color:#A6ACCD;" data-v-4ff56b13> </span><span style="color:#C792EA;" data-v-4ff56b13>setup</span><span style="color:#89DDFF;" data-v-4ff56b13>&gt;</span></span>
<span class="line" data-v-4ff56b13><span style="color:#89DDFF;" data-v-4ff56b13>&lt;/</span><span style="color:#F07178;" data-v-4ff56b13>script</span><span style="color:#89DDFF;" data-v-4ff56b13>&gt;</span></span>
<span class="line" data-v-4ff56b13><span style="color:#89DDFF;" data-v-4ff56b13>&lt;</span><span style="color:#F07178;" data-v-4ff56b13>style</span><span style="color:#A6ACCD;" data-v-4ff56b13> </span><span style="color:#C792EA;" data-v-4ff56b13>lang</span><span style="color:#89DDFF;" data-v-4ff56b13>=</span><span style="color:#89DDFF;" data-v-4ff56b13>&quot;</span><span style="color:#C3E88D;" data-v-4ff56b13>scss</span><span style="color:#89DDFF;" data-v-4ff56b13>&quot;</span><span style="color:#A6ACCD;" data-v-4ff56b13> </span><span style="color:#C792EA;" data-v-4ff56b13>scoped</span><span style="color:#89DDFF;" data-v-4ff56b13>&gt;</span></span>
<span class="line" data-v-4ff56b13><span style="color:#89DDFF;" data-v-4ff56b13>&lt;/</span><span style="color:#F07178;" data-v-4ff56b13>style</span><span style="color:#89DDFF;" data-v-4ff56b13>&gt;</span></span>
<span class="line" data-v-4ff56b13></span></code></pre></div></details><h2 id="禁用状态" tabindex="-1" data-v-4ff56b13>禁用状态 <a class="header-anchor" href="#禁用状态" aria-hidden="true" data-v-4ff56b13>#</a></h2>`,2),A={class:"example"},m=p(`<details data-v-4ff56b13><summary data-v-4ff56b13>展开查看</summary><div class="language-vue" data-v-4ff56b13><button title="Copy Code" class="copy" data-v-4ff56b13></button><span class="lang" data-v-4ff56b13>vue</span><pre class="shiki material-palenight" data-v-4ff56b13><code data-v-4ff56b13><span class="line" data-v-4ff56b13><span style="color:#89DDFF;" data-v-4ff56b13>&lt;</span><span style="color:#F07178;" data-v-4ff56b13>template</span><span style="color:#89DDFF;" data-v-4ff56b13>&gt;</span></span>
<span class="line" data-v-4ff56b13><span style="color:#A6ACCD;" data-v-4ff56b13>  </span><span style="color:#89DDFF;" data-v-4ff56b13>&lt;</span><span style="color:#F07178;" data-v-4ff56b13>div</span><span style="color:#89DDFF;" data-v-4ff56b13>&gt;</span></span>
<span class="line" data-v-4ff56b13><span style="color:#A6ACCD;" data-v-4ff56b13>    </span><span style="color:#89DDFF;" data-v-4ff56b13>&lt;</span><span style="color:#F07178;" data-v-4ff56b13>imm-link</span><span style="color:#89DDFF;" data-v-4ff56b13> </span><span style="color:#C792EA;" data-v-4ff56b13>type</span><span style="color:#89DDFF;" data-v-4ff56b13>=</span><span style="color:#89DDFF;" data-v-4ff56b13>&quot;</span><span style="color:#C3E88D;" data-v-4ff56b13>primary</span><span style="color:#89DDFF;" data-v-4ff56b13>&quot;</span><span style="color:#89DDFF;" data-v-4ff56b13> </span><span style="color:#C792EA;" data-v-4ff56b13>disabled</span><span style="color:#89DDFF;" data-v-4ff56b13>&gt;</span><span style="color:#A6ACCD;" data-v-4ff56b13>默认链接</span><span style="color:#89DDFF;" data-v-4ff56b13>&lt;/</span><span style="color:#F07178;" data-v-4ff56b13>imm-link</span><span style="color:#89DDFF;" data-v-4ff56b13>&gt;</span></span>
<span class="line" data-v-4ff56b13><span style="color:#A6ACCD;" data-v-4ff56b13>    </span><span style="color:#89DDFF;" data-v-4ff56b13>&lt;</span><span style="color:#F07178;" data-v-4ff56b13>imm-link</span><span style="color:#89DDFF;" data-v-4ff56b13> </span><span style="color:#C792EA;" data-v-4ff56b13>type</span><span style="color:#89DDFF;" data-v-4ff56b13>=</span><span style="color:#89DDFF;" data-v-4ff56b13>&quot;</span><span style="color:#C3E88D;" data-v-4ff56b13>primary</span><span style="color:#89DDFF;" data-v-4ff56b13>&quot;</span><span style="color:#89DDFF;" data-v-4ff56b13> </span><span style="color:#C792EA;" data-v-4ff56b13>disabled</span><span style="color:#89DDFF;" data-v-4ff56b13>&gt;</span><span style="color:#A6ACCD;" data-v-4ff56b13>主要链接</span><span style="color:#89DDFF;" data-v-4ff56b13>&lt;/</span><span style="color:#F07178;" data-v-4ff56b13>imm-link</span><span style="color:#89DDFF;" data-v-4ff56b13>&gt;</span></span>
<span class="line" data-v-4ff56b13><span style="color:#A6ACCD;" data-v-4ff56b13>    </span><span style="color:#89DDFF;" data-v-4ff56b13>&lt;</span><span style="color:#F07178;" data-v-4ff56b13>imm-link</span><span style="color:#89DDFF;" data-v-4ff56b13> </span><span style="color:#C792EA;" data-v-4ff56b13>type</span><span style="color:#89DDFF;" data-v-4ff56b13>=</span><span style="color:#89DDFF;" data-v-4ff56b13>&quot;</span><span style="color:#C3E88D;" data-v-4ff56b13>success</span><span style="color:#89DDFF;" data-v-4ff56b13>&quot;</span><span style="color:#89DDFF;" data-v-4ff56b13> </span><span style="color:#C792EA;" data-v-4ff56b13>disabled</span><span style="color:#89DDFF;" data-v-4ff56b13>&gt;</span><span style="color:#A6ACCD;" data-v-4ff56b13>成功链接</span><span style="color:#89DDFF;" data-v-4ff56b13>&lt;/</span><span style="color:#F07178;" data-v-4ff56b13>imm-link</span><span style="color:#89DDFF;" data-v-4ff56b13>&gt;</span></span>
<span class="line" data-v-4ff56b13><span style="color:#A6ACCD;" data-v-4ff56b13>    </span><span style="color:#89DDFF;" data-v-4ff56b13>&lt;</span><span style="color:#F07178;" data-v-4ff56b13>imm-link</span><span style="color:#89DDFF;" data-v-4ff56b13> </span><span style="color:#C792EA;" data-v-4ff56b13>type</span><span style="color:#89DDFF;" data-v-4ff56b13>=</span><span style="color:#89DDFF;" data-v-4ff56b13>&quot;</span><span style="color:#C3E88D;" data-v-4ff56b13>info</span><span style="color:#89DDFF;" data-v-4ff56b13>&quot;</span><span style="color:#89DDFF;" data-v-4ff56b13> </span><span style="color:#C792EA;" data-v-4ff56b13>disabled</span><span style="color:#89DDFF;" data-v-4ff56b13>&gt;</span><span style="color:#A6ACCD;" data-v-4ff56b13>信息链接</span><span style="color:#89DDFF;" data-v-4ff56b13>&lt;/</span><span style="color:#F07178;" data-v-4ff56b13>imm-link</span><span style="color:#89DDFF;" data-v-4ff56b13>&gt;</span></span>
<span class="line" data-v-4ff56b13><span style="color:#A6ACCD;" data-v-4ff56b13>    </span><span style="color:#89DDFF;" data-v-4ff56b13>&lt;</span><span style="color:#F07178;" data-v-4ff56b13>imm-link</span><span style="color:#89DDFF;" data-v-4ff56b13> </span><span style="color:#C792EA;" data-v-4ff56b13>type</span><span style="color:#89DDFF;" data-v-4ff56b13>=</span><span style="color:#89DDFF;" data-v-4ff56b13>&quot;</span><span style="color:#C3E88D;" data-v-4ff56b13>warning</span><span style="color:#89DDFF;" data-v-4ff56b13>&quot;</span><span style="color:#89DDFF;" data-v-4ff56b13> </span><span style="color:#C792EA;" data-v-4ff56b13>disabled</span><span style="color:#89DDFF;" data-v-4ff56b13>&gt;</span><span style="color:#A6ACCD;" data-v-4ff56b13>警告链接</span><span style="color:#89DDFF;" data-v-4ff56b13>&lt;/</span><span style="color:#F07178;" data-v-4ff56b13>imm-link</span><span style="color:#89DDFF;" data-v-4ff56b13>&gt;</span></span>
<span class="line" data-v-4ff56b13><span style="color:#A6ACCD;" data-v-4ff56b13>    </span><span style="color:#89DDFF;" data-v-4ff56b13>&lt;</span><span style="color:#F07178;" data-v-4ff56b13>imm-link</span><span style="color:#89DDFF;" data-v-4ff56b13> </span><span style="color:#C792EA;" data-v-4ff56b13>type</span><span style="color:#89DDFF;" data-v-4ff56b13>=</span><span style="color:#89DDFF;" data-v-4ff56b13>&quot;</span><span style="color:#C3E88D;" data-v-4ff56b13>danger</span><span style="color:#89DDFF;" data-v-4ff56b13>&quot;</span><span style="color:#89DDFF;" data-v-4ff56b13> </span><span style="color:#C792EA;" data-v-4ff56b13>disabled</span><span style="color:#89DDFF;" data-v-4ff56b13>&gt;</span><span style="color:#A6ACCD;" data-v-4ff56b13>危险链接</span><span style="color:#89DDFF;" data-v-4ff56b13>&lt;/</span><span style="color:#F07178;" data-v-4ff56b13>imm-link</span><span style="color:#89DDFF;" data-v-4ff56b13>&gt;</span></span>
<span class="line" data-v-4ff56b13><span style="color:#A6ACCD;" data-v-4ff56b13>  </span><span style="color:#89DDFF;" data-v-4ff56b13>&lt;/</span><span style="color:#F07178;" data-v-4ff56b13>div</span><span style="color:#89DDFF;" data-v-4ff56b13>&gt;</span></span>
<span class="line" data-v-4ff56b13><span style="color:#89DDFF;" data-v-4ff56b13>&lt;/</span><span style="color:#F07178;" data-v-4ff56b13>template</span><span style="color:#89DDFF;" data-v-4ff56b13>&gt;</span></span>
<span class="line" data-v-4ff56b13><span style="color:#89DDFF;" data-v-4ff56b13>&lt;</span><span style="color:#F07178;" data-v-4ff56b13>script</span><span style="color:#A6ACCD;" data-v-4ff56b13> </span><span style="color:#C792EA;" data-v-4ff56b13>lang</span><span style="color:#89DDFF;" data-v-4ff56b13>=</span><span style="color:#89DDFF;" data-v-4ff56b13>&quot;</span><span style="color:#C3E88D;" data-v-4ff56b13>ts</span><span style="color:#89DDFF;" data-v-4ff56b13>&quot;</span><span style="color:#A6ACCD;" data-v-4ff56b13> </span><span style="color:#C792EA;" data-v-4ff56b13>setup</span><span style="color:#89DDFF;" data-v-4ff56b13>&gt;</span></span>
<span class="line" data-v-4ff56b13><span style="color:#89DDFF;" data-v-4ff56b13>&lt;/</span><span style="color:#F07178;" data-v-4ff56b13>script</span><span style="color:#89DDFF;" data-v-4ff56b13>&gt;</span></span>
<span class="line" data-v-4ff56b13><span style="color:#89DDFF;" data-v-4ff56b13>&lt;</span><span style="color:#F07178;" data-v-4ff56b13>style</span><span style="color:#A6ACCD;" data-v-4ff56b13> </span><span style="color:#C792EA;" data-v-4ff56b13>lang</span><span style="color:#89DDFF;" data-v-4ff56b13>=</span><span style="color:#89DDFF;" data-v-4ff56b13>&quot;</span><span style="color:#C3E88D;" data-v-4ff56b13>scss</span><span style="color:#89DDFF;" data-v-4ff56b13>&quot;</span><span style="color:#A6ACCD;" data-v-4ff56b13> </span><span style="color:#C792EA;" data-v-4ff56b13>scoped</span><span style="color:#89DDFF;" data-v-4ff56b13>&gt;</span></span>
<span class="line" data-v-4ff56b13><span style="color:#89DDFF;" data-v-4ff56b13>&lt;/</span><span style="color:#F07178;" data-v-4ff56b13>style</span><span style="color:#89DDFF;" data-v-4ff56b13>&gt;</span></span>
<span class="line" data-v-4ff56b13></span></code></pre></div></details><h2 id="下划线" tabindex="-1" data-v-4ff56b13>下划线 <a class="header-anchor" href="#下划线" aria-hidden="true" data-v-4ff56b13>#</a></h2>`,2),u={class:"example"},_=p(`<details data-v-4ff56b13><summary data-v-4ff56b13>展开查看</summary><div class="language-vue" data-v-4ff56b13><button title="Copy Code" class="copy" data-v-4ff56b13></button><span class="lang" data-v-4ff56b13>vue</span><pre class="shiki material-palenight" data-v-4ff56b13><code data-v-4ff56b13><span class="line" data-v-4ff56b13><span style="color:#89DDFF;" data-v-4ff56b13>&lt;</span><span style="color:#F07178;" data-v-4ff56b13>template</span><span style="color:#89DDFF;" data-v-4ff56b13>&gt;</span></span>
<span class="line" data-v-4ff56b13><span style="color:#A6ACCD;" data-v-4ff56b13>  </span><span style="color:#89DDFF;" data-v-4ff56b13>&lt;</span><span style="color:#F07178;" data-v-4ff56b13>div</span><span style="color:#89DDFF;" data-v-4ff56b13>&gt;</span></span>
<span class="line" data-v-4ff56b13><span style="color:#A6ACCD;" data-v-4ff56b13>    </span><span style="color:#89DDFF;" data-v-4ff56b13>&lt;</span><span style="color:#F07178;" data-v-4ff56b13>imm-link</span><span style="color:#89DDFF;" data-v-4ff56b13> </span><span style="color:#C792EA;" data-v-4ff56b13>type</span><span style="color:#89DDFF;" data-v-4ff56b13>=</span><span style="color:#89DDFF;" data-v-4ff56b13>&quot;</span><span style="color:#C3E88D;" data-v-4ff56b13>primary</span><span style="color:#89DDFF;" data-v-4ff56b13>&quot;</span><span style="color:#89DDFF;" data-v-4ff56b13>&gt;</span><span style="color:#A6ACCD;" data-v-4ff56b13>无下划线链接</span><span style="color:#89DDFF;" data-v-4ff56b13>&lt;/</span><span style="color:#F07178;" data-v-4ff56b13>imm-link</span><span style="color:#89DDFF;" data-v-4ff56b13>&gt;</span></span>
<span class="line" data-v-4ff56b13><span style="color:#A6ACCD;" data-v-4ff56b13>    </span><span style="color:#89DDFF;" data-v-4ff56b13>&lt;</span><span style="color:#F07178;" data-v-4ff56b13>imm-link</span><span style="color:#89DDFF;" data-v-4ff56b13> </span><span style="color:#C792EA;" data-v-4ff56b13>type</span><span style="color:#89DDFF;" data-v-4ff56b13>=</span><span style="color:#89DDFF;" data-v-4ff56b13>&quot;</span><span style="color:#C3E88D;" data-v-4ff56b13>primary</span><span style="color:#89DDFF;" data-v-4ff56b13>&quot;</span><span style="color:#89DDFF;" data-v-4ff56b13> </span><span style="color:#C792EA;" data-v-4ff56b13>underline</span><span style="color:#89DDFF;" data-v-4ff56b13>&gt;</span><span style="color:#A6ACCD;" data-v-4ff56b13>有下划线链接</span><span style="color:#89DDFF;" data-v-4ff56b13>&lt;/</span><span style="color:#F07178;" data-v-4ff56b13>imm-link</span><span style="color:#89DDFF;" data-v-4ff56b13>&gt;</span></span>
<span class="line" data-v-4ff56b13><span style="color:#A6ACCD;" data-v-4ff56b13>  </span><span style="color:#89DDFF;" data-v-4ff56b13>&lt;/</span><span style="color:#F07178;" data-v-4ff56b13>div</span><span style="color:#89DDFF;" data-v-4ff56b13>&gt;</span></span>
<span class="line" data-v-4ff56b13><span style="color:#89DDFF;" data-v-4ff56b13>&lt;/</span><span style="color:#F07178;" data-v-4ff56b13>template</span><span style="color:#89DDFF;" data-v-4ff56b13>&gt;</span></span>
<span class="line" data-v-4ff56b13><span style="color:#89DDFF;" data-v-4ff56b13>&lt;</span><span style="color:#F07178;" data-v-4ff56b13>script</span><span style="color:#A6ACCD;" data-v-4ff56b13> </span><span style="color:#C792EA;" data-v-4ff56b13>lang</span><span style="color:#89DDFF;" data-v-4ff56b13>=</span><span style="color:#89DDFF;" data-v-4ff56b13>&quot;</span><span style="color:#C3E88D;" data-v-4ff56b13>ts</span><span style="color:#89DDFF;" data-v-4ff56b13>&quot;</span><span style="color:#A6ACCD;" data-v-4ff56b13> </span><span style="color:#C792EA;" data-v-4ff56b13>setup</span><span style="color:#89DDFF;" data-v-4ff56b13>&gt;</span></span>
<span class="line" data-v-4ff56b13><span style="color:#89DDFF;" data-v-4ff56b13>&lt;/</span><span style="color:#F07178;" data-v-4ff56b13>script</span><span style="color:#89DDFF;" data-v-4ff56b13>&gt;</span></span>
<span class="line" data-v-4ff56b13></span></code></pre></div></details><h2 id="图标" tabindex="-1" data-v-4ff56b13>图标 <a class="header-anchor" href="#图标" aria-hidden="true" data-v-4ff56b13>#</a></h2>`,2),g={class:"example"},h=p(`<details data-v-4ff56b13><summary data-v-4ff56b13>展开查看</summary><div class="language-vue" data-v-4ff56b13><button title="Copy Code" class="copy" data-v-4ff56b13></button><span class="lang" data-v-4ff56b13>vue</span><pre class="shiki material-palenight" data-v-4ff56b13><code data-v-4ff56b13><span class="line" data-v-4ff56b13><span style="color:#89DDFF;" data-v-4ff56b13>&lt;</span><span style="color:#F07178;" data-v-4ff56b13>template</span><span style="color:#89DDFF;" data-v-4ff56b13>&gt;</span></span>
<span class="line" data-v-4ff56b13><span style="color:#A6ACCD;" data-v-4ff56b13>  </span><span style="color:#89DDFF;" data-v-4ff56b13>&lt;</span><span style="color:#F07178;" data-v-4ff56b13>div</span><span style="color:#89DDFF;" data-v-4ff56b13>&gt;</span></span>
<span class="line" data-v-4ff56b13><span style="color:#A6ACCD;" data-v-4ff56b13>    </span><span style="color:#89DDFF;" data-v-4ff56b13>&lt;</span><span style="color:#F07178;" data-v-4ff56b13>imm-link</span><span style="color:#89DDFF;" data-v-4ff56b13> </span><span style="color:#C792EA;" data-v-4ff56b13>type</span><span style="color:#89DDFF;" data-v-4ff56b13>=</span><span style="color:#89DDFF;" data-v-4ff56b13>&quot;</span><span style="color:#C3E88D;" data-v-4ff56b13>primary</span><span style="color:#89DDFF;" data-v-4ff56b13>&quot;</span><span style="color:#89DDFF;" data-v-4ff56b13> </span><span style="color:#C792EA;" data-v-4ff56b13>icon</span><span style="color:#89DDFF;" data-v-4ff56b13>=</span><span style="color:#89DDFF;" data-v-4ff56b13>&quot;</span><span style="color:#C3E88D;" data-v-4ff56b13>Edit</span><span style="color:#89DDFF;" data-v-4ff56b13>&quot;</span><span style="color:#89DDFF;" data-v-4ff56b13>&gt;</span><span style="color:#A6ACCD;" data-v-4ff56b13>编辑</span><span style="color:#89DDFF;" data-v-4ff56b13>&lt;/</span><span style="color:#F07178;" data-v-4ff56b13>imm-link</span><span style="color:#89DDFF;" data-v-4ff56b13>&gt;</span></span>
<span class="line" data-v-4ff56b13><span style="color:#A6ACCD;" data-v-4ff56b13>    </span><span style="color:#89DDFF;" data-v-4ff56b13>&lt;</span><span style="color:#F07178;" data-v-4ff56b13>imm-link</span><span style="color:#89DDFF;" data-v-4ff56b13> </span><span style="color:#C792EA;" data-v-4ff56b13>type</span><span style="color:#89DDFF;" data-v-4ff56b13>=</span><span style="color:#89DDFF;" data-v-4ff56b13>&quot;</span><span style="color:#C3E88D;" data-v-4ff56b13>primary</span><span style="color:#89DDFF;" data-v-4ff56b13>&quot;</span><span style="color:#89DDFF;" data-v-4ff56b13> </span><span style="color:#C792EA;" data-v-4ff56b13>icon</span><span style="color:#89DDFF;" data-v-4ff56b13>=</span><span style="color:#89DDFF;" data-v-4ff56b13>&quot;</span><span style="color:#C3E88D;" data-v-4ff56b13>Remove</span><span style="color:#89DDFF;" data-v-4ff56b13>&quot;</span><span style="color:#89DDFF;" data-v-4ff56b13> </span><span style="color:#C792EA;" data-v-4ff56b13>iconPosition</span><span style="color:#89DDFF;" data-v-4ff56b13>=</span><span style="color:#89DDFF;" data-v-4ff56b13>&quot;</span><span style="color:#C3E88D;" data-v-4ff56b13>right</span><span style="color:#89DDFF;" data-v-4ff56b13>&quot;</span><span style="color:#89DDFF;" data-v-4ff56b13>&gt;</span><span style="color:#A6ACCD;" data-v-4ff56b13>删除</span><span style="color:#89DDFF;" data-v-4ff56b13>&lt;/</span><span style="color:#F07178;" data-v-4ff56b13>imm-link</span><span style="color:#89DDFF;" data-v-4ff56b13>&gt;</span></span>
<span class="line" data-v-4ff56b13><span style="color:#A6ACCD;" data-v-4ff56b13>  </span><span style="color:#89DDFF;" data-v-4ff56b13>&lt;/</span><span style="color:#F07178;" data-v-4ff56b13>div</span><span style="color:#89DDFF;" data-v-4ff56b13>&gt;</span></span>
<span class="line" data-v-4ff56b13><span style="color:#89DDFF;" data-v-4ff56b13>&lt;/</span><span style="color:#F07178;" data-v-4ff56b13>template</span><span style="color:#89DDFF;" data-v-4ff56b13>&gt;</span></span>
<span class="line" data-v-4ff56b13><span style="color:#89DDFF;" data-v-4ff56b13>&lt;</span><span style="color:#F07178;" data-v-4ff56b13>script</span><span style="color:#A6ACCD;" data-v-4ff56b13> </span><span style="color:#C792EA;" data-v-4ff56b13>lang</span><span style="color:#89DDFF;" data-v-4ff56b13>=</span><span style="color:#89DDFF;" data-v-4ff56b13>&quot;</span><span style="color:#C3E88D;" data-v-4ff56b13>ts</span><span style="color:#89DDFF;" data-v-4ff56b13>&quot;</span><span style="color:#A6ACCD;" data-v-4ff56b13> </span><span style="color:#C792EA;" data-v-4ff56b13>setup</span><span style="color:#89DDFF;" data-v-4ff56b13>&gt;</span></span>
<span class="line" data-v-4ff56b13><span style="color:#89DDFF;" data-v-4ff56b13>&lt;/</span><span style="color:#F07178;" data-v-4ff56b13>script</span><span style="color:#89DDFF;" data-v-4ff56b13>&gt;</span></span>
<span class="line" data-v-4ff56b13></span></code></pre></div></details><h2 id="link属性" tabindex="-1" data-v-4ff56b13>Link属性 <a class="header-anchor" href="#link属性" aria-hidden="true" data-v-4ff56b13>#</a></h2><table data-v-4ff56b13><thead data-v-4ff56b13><tr data-v-4ff56b13><th data-v-4ff56b13>属性</th><th data-v-4ff56b13>说明</th><th data-v-4ff56b13>类型</th><th data-v-4ff56b13>可选值</th><th data-v-4ff56b13>默认值</th></tr></thead><tbody data-v-4ff56b13><tr data-v-4ff56b13><td data-v-4ff56b13>type</td><td data-v-4ff56b13>类型</td><td data-v-4ff56b13>string</td><td data-v-4ff56b13>primary / success / warning / danger / info / default</td><td data-v-4ff56b13>default</td></tr><tr data-v-4ff56b13><td data-v-4ff56b13>disabled</td><td data-v-4ff56b13>是否禁用</td><td data-v-4ff56b13>boolean</td><td data-v-4ff56b13>—</td><td data-v-4ff56b13>false</td></tr><tr data-v-4ff56b13><td data-v-4ff56b13>underline</td><td data-v-4ff56b13>是否显示下划线</td><td data-v-4ff56b13>boolean</td><td data-v-4ff56b13>—</td><td data-v-4ff56b13>false</td></tr><tr data-v-4ff56b13><td data-v-4ff56b13>icon</td><td data-v-4ff56b13>图标组件</td><td data-v-4ff56b13>string</td><td data-v-4ff56b13>—</td><td data-v-4ff56b13>-</td></tr><tr data-v-4ff56b13><td data-v-4ff56b13>icon-position</td><td data-v-4ff56b13>图标位置</td><td data-v-4ff56b13>string</td><td data-v-4ff56b13>left / right</td><td data-v-4ff56b13>left</td></tr></tbody></table>`,3);function E(f,k,q,T,x,S){const s=c("imm-link");return d(),v("div",null,[F,y,l("div",i,[l("div",null,[t(s,{type:"primary"},{default:n(()=>[a("默认链接")]),_:1}),t(s,{type:"primary"},{default:n(()=>[a("主要链接")]),_:1}),t(s,{type:"success"},{default:n(()=>[a("成功链接")]),_:1}),t(s,{type:"info"},{default:n(()=>[a("信息链接")]),_:1}),t(s,{type:"warning"},{default:n(()=>[a("警告链接")]),_:1}),t(s,{type:"danger"},{default:n(()=>[a("危险链接")]),_:1})])]),C,l("div",A,[l("div",null,[t(s,{type:"primary",disabled:""},{default:n(()=>[a("默认链接")]),_:1}),t(s,{type:"primary",disabled:""},{default:n(()=>[a("主要链接")]),_:1}),t(s,{type:"success",disabled:""},{default:n(()=>[a("成功链接")]),_:1}),t(s,{type:"info",disabled:""},{default:n(()=>[a("信息链接")]),_:1}),t(s,{type:"warning",disabled:""},{default:n(()=>[a("警告链接")]),_:1}),t(s,{type:"danger",disabled:""},{default:n(()=>[a("危险链接")]),_:1})])]),m,l("div",u,[l("div",null,[t(s,{type:"primary"},{default:n(()=>[a("无下划线链接")]),_:1}),t(s,{type:"primary",underline:""},{default:n(()=>[a("有下划线链接")]),_:1})])]),_,l("div",g,[l("div",null,[t(s,{type:"primary",icon:"Edit"},{default:n(()=>[a("编辑")]),_:1}),t(s,{type:"primary",icon:"Remove",iconPosition:"right"},{default:n(()=>[a("删除")]),_:1})])]),h])}const P=e(D,[["render",E],["__scopeId","data-v-4ff56b13"]]);export{V as __pageData,P as default};
