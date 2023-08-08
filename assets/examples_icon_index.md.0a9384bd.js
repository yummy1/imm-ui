import{g as D,o as l,c as o,a,F as f,h as r,b as c,t as F,d as p,r as y,p as i,f as C,e,_ as A}from"./app.a650e147.js";const s=t=>(i("data-v-00cf5d20"),t=t(),C(),t),u=s(()=>a("h1",{id:"icon-图标",tabindex:"-1"},[e("Icon 图标 "),a("a",{class:"header-anchor",href:"#icon-图标","aria-hidden":"true"},"#")],-1)),g=s(()=>a("p",null,"提供了一套常用的图标集合。",-1)),h=s(()=>a("h2",{id:"基础用法",tabindex:"-1"},[e("基础用法 "),a("a",{class:"header-anchor",href:"#基础用法","aria-hidden":"true"},"#")],-1)),m={class:"icon-table example"},E=p(`<details data-v-00cf5d20><summary data-v-00cf5d20>展开查看</summary><div class="language-vue" data-v-00cf5d20><button title="Copy Code" class="copy" data-v-00cf5d20></button><span class="lang" data-v-00cf5d20>vue</span><pre class="shiki material-palenight" data-v-00cf5d20><code data-v-00cf5d20><span class="line" data-v-00cf5d20><span style="color:#89DDFF;" data-v-00cf5d20>&lt;</span><span style="color:#F07178;" data-v-00cf5d20>template</span><span style="color:#89DDFF;" data-v-00cf5d20>&gt;</span></span>
<span class="line" data-v-00cf5d20><span style="color:#89DDFF;" data-v-00cf5d20>&lt;</span><span style="color:#F07178;" data-v-00cf5d20>div</span><span style="color:#89DDFF;" data-v-00cf5d20> </span><span style="color:#C792EA;" data-v-00cf5d20>class</span><span style="color:#89DDFF;" data-v-00cf5d20>=</span><span style="color:#89DDFF;" data-v-00cf5d20>&quot;</span><span style="color:#C3E88D;" data-v-00cf5d20>icon-table</span><span style="color:#89DDFF;" data-v-00cf5d20>&quot;</span><span style="color:#89DDFF;" data-v-00cf5d20>&gt;</span></span>
<span class="line" data-v-00cf5d20><span style="color:#A6ACCD;" data-v-00cf5d20>    </span><span style="color:#89DDFF;" data-v-00cf5d20>&lt;</span><span style="color:#F07178;" data-v-00cf5d20>div</span><span style="color:#89DDFF;" data-v-00cf5d20> </span><span style="color:#C792EA;" data-v-00cf5d20>class</span><span style="color:#89DDFF;" data-v-00cf5d20>=</span><span style="color:#89DDFF;" data-v-00cf5d20>&quot;</span><span style="color:#C3E88D;" data-v-00cf5d20>icon-cell</span><span style="color:#89DDFF;" data-v-00cf5d20>&quot;</span><span style="color:#89DDFF;" data-v-00cf5d20> </span><span style="color:#C792EA;" data-v-00cf5d20>v-for</span><span style="color:#89DDFF;" data-v-00cf5d20>=</span><span style="color:#89DDFF;" data-v-00cf5d20>&quot;</span><span style="color:#C3E88D;" data-v-00cf5d20>name in icons</span><span style="color:#89DDFF;" data-v-00cf5d20>&quot;</span><span style="color:#89DDFF;" data-v-00cf5d20> </span><span style="color:#C792EA;" data-v-00cf5d20>:key</span><span style="color:#89DDFF;" data-v-00cf5d20>=</span><span style="color:#89DDFF;" data-v-00cf5d20>&quot;</span><span style="color:#C3E88D;" data-v-00cf5d20>name</span><span style="color:#89DDFF;" data-v-00cf5d20>&quot;</span><span style="color:#89DDFF;" data-v-00cf5d20>&gt;</span></span>
<span class="line" data-v-00cf5d20><span style="color:#A6ACCD;" data-v-00cf5d20>        </span><span style="color:#89DDFF;" data-v-00cf5d20>&lt;</span><span style="color:#F07178;" data-v-00cf5d20>imm-icon</span><span style="color:#89DDFF;" data-v-00cf5d20> </span><span style="color:#C792EA;" data-v-00cf5d20>:name</span><span style="color:#89DDFF;" data-v-00cf5d20>=</span><span style="color:#89DDFF;" data-v-00cf5d20>&quot;</span><span style="color:#C3E88D;" data-v-00cf5d20>name</span><span style="color:#89DDFF;" data-v-00cf5d20>&quot;</span><span style="color:#89DDFF;" data-v-00cf5d20> </span><span style="color:#C792EA;" data-v-00cf5d20>color</span><span style="color:#89DDFF;" data-v-00cf5d20>=</span><span style="color:#89DDFF;" data-v-00cf5d20>&quot;</span><span style="color:#C3E88D;" data-v-00cf5d20>#f00</span><span style="color:#89DDFF;" data-v-00cf5d20>&quot;</span><span style="color:#89DDFF;" data-v-00cf5d20> </span><span style="color:#C792EA;" data-v-00cf5d20>size</span><span style="color:#89DDFF;" data-v-00cf5d20>=</span><span style="color:#89DDFF;" data-v-00cf5d20>&quot;</span><span style="color:#C3E88D;" data-v-00cf5d20>24px</span><span style="color:#89DDFF;" data-v-00cf5d20>&quot;</span><span style="color:#89DDFF;" data-v-00cf5d20>&gt;&lt;/</span><span style="color:#F07178;" data-v-00cf5d20>imm-icon</span><span style="color:#89DDFF;" data-v-00cf5d20>&gt;</span></span>
<span class="line" data-v-00cf5d20><span style="color:#A6ACCD;" data-v-00cf5d20>        </span><span style="color:#89DDFF;" data-v-00cf5d20>&lt;</span><span style="color:#F07178;" data-v-00cf5d20>span</span><span style="color:#89DDFF;" data-v-00cf5d20>&gt;</span><span style="color:#A6ACCD;" data-v-00cf5d20>{{name}}</span><span style="color:#89DDFF;" data-v-00cf5d20>&lt;/</span><span style="color:#F07178;" data-v-00cf5d20>span</span><span style="color:#89DDFF;" data-v-00cf5d20>&gt;</span></span>
<span class="line" data-v-00cf5d20><span style="color:#A6ACCD;" data-v-00cf5d20>    </span><span style="color:#89DDFF;" data-v-00cf5d20>&lt;/</span><span style="color:#F07178;" data-v-00cf5d20>div</span><span style="color:#89DDFF;" data-v-00cf5d20>&gt;</span></span>
<span class="line" data-v-00cf5d20><span style="color:#89DDFF;" data-v-00cf5d20>&lt;/</span><span style="color:#F07178;" data-v-00cf5d20>div</span><span style="color:#89DDFF;" data-v-00cf5d20>&gt;</span></span>
<span class="line" data-v-00cf5d20><span style="color:#89DDFF;" data-v-00cf5d20>&lt;/</span><span style="color:#F07178;" data-v-00cf5d20>template</span><span style="color:#89DDFF;" data-v-00cf5d20>&gt;</span></span>
<span class="line" data-v-00cf5d20><span style="color:#89DDFF;" data-v-00cf5d20>&lt;</span><span style="color:#F07178;" data-v-00cf5d20>script</span><span style="color:#A6ACCD;" data-v-00cf5d20> </span><span style="color:#C792EA;" data-v-00cf5d20>lang</span><span style="color:#89DDFF;" data-v-00cf5d20>=</span><span style="color:#89DDFF;" data-v-00cf5d20>&quot;</span><span style="color:#C3E88D;" data-v-00cf5d20>ts</span><span style="color:#89DDFF;" data-v-00cf5d20>&quot;</span><span style="color:#A6ACCD;" data-v-00cf5d20> </span><span style="color:#C792EA;" data-v-00cf5d20>setup</span><span style="color:#89DDFF;" data-v-00cf5d20>&gt;</span></span>
<span class="line" data-v-00cf5d20><span style="color:#C792EA;" data-v-00cf5d20>const</span><span style="color:#A6ACCD;" data-v-00cf5d20> icons </span><span style="color:#89DDFF;" data-v-00cf5d20>=</span><span style="color:#A6ACCD;" data-v-00cf5d20> [</span><span style="color:#89DDFF;" data-v-00cf5d20>&#39;</span><span style="color:#C3E88D;" data-v-00cf5d20>Edit</span><span style="color:#89DDFF;" data-v-00cf5d20>&#39;</span><span style="color:#89DDFF;" data-v-00cf5d20>,</span><span style="color:#A6ACCD;" data-v-00cf5d20> </span><span style="color:#89DDFF;" data-v-00cf5d20>&#39;</span><span style="color:#C3E88D;" data-v-00cf5d20>Love</span><span style="color:#89DDFF;" data-v-00cf5d20>&#39;</span><span style="color:#89DDFF;" data-v-00cf5d20>,</span><span style="color:#A6ACCD;" data-v-00cf5d20> </span><span style="color:#89DDFF;" data-v-00cf5d20>&#39;</span><span style="color:#C3E88D;" data-v-00cf5d20>User</span><span style="color:#89DDFF;" data-v-00cf5d20>&#39;</span><span style="color:#89DDFF;" data-v-00cf5d20>,</span><span style="color:#A6ACCD;" data-v-00cf5d20> </span><span style="color:#89DDFF;" data-v-00cf5d20>&#39;</span><span style="color:#C3E88D;" data-v-00cf5d20>Home</span><span style="color:#89DDFF;" data-v-00cf5d20>&#39;</span><span style="color:#89DDFF;" data-v-00cf5d20>,</span><span style="color:#A6ACCD;" data-v-00cf5d20> </span><span style="color:#89DDFF;" data-v-00cf5d20>&#39;</span><span style="color:#C3E88D;" data-v-00cf5d20>Setting</span><span style="color:#89DDFF;" data-v-00cf5d20>&#39;</span><span style="color:#89DDFF;" data-v-00cf5d20>,</span><span style="color:#A6ACCD;" data-v-00cf5d20> </span><span style="color:#89DDFF;" data-v-00cf5d20>&#39;</span><span style="color:#C3E88D;" data-v-00cf5d20>Delete</span><span style="color:#89DDFF;" data-v-00cf5d20>&#39;</span><span style="color:#89DDFF;" data-v-00cf5d20>,</span><span style="color:#A6ACCD;" data-v-00cf5d20> </span><span style="color:#89DDFF;" data-v-00cf5d20>&#39;</span><span style="color:#C3E88D;" data-v-00cf5d20>Refresh</span><span style="color:#89DDFF;" data-v-00cf5d20>&#39;</span><span style="color:#89DDFF;" data-v-00cf5d20>,</span><span style="color:#A6ACCD;" data-v-00cf5d20> </span><span style="color:#89DDFF;" data-v-00cf5d20>&#39;</span><span style="color:#C3E88D;" data-v-00cf5d20>Search</span><span style="color:#89DDFF;" data-v-00cf5d20>&#39;</span><span style="color:#89DDFF;" data-v-00cf5d20>,</span><span style="color:#A6ACCD;" data-v-00cf5d20> </span><span style="color:#89DDFF;" data-v-00cf5d20>&#39;</span><span style="color:#C3E88D;" data-v-00cf5d20>Remove</span><span style="color:#89DDFF;" data-v-00cf5d20>&#39;</span><span style="color:#89DDFF;" data-v-00cf5d20>,</span><span style="color:#A6ACCD;" data-v-00cf5d20> </span><span style="color:#89DDFF;" data-v-00cf5d20>&#39;</span><span style="color:#C3E88D;" data-v-00cf5d20>View</span><span style="color:#89DDFF;" data-v-00cf5d20>&#39;</span><span style="color:#89DDFF;" data-v-00cf5d20>,</span><span style="color:#A6ACCD;" data-v-00cf5d20> </span><span style="color:#89DDFF;" data-v-00cf5d20>&#39;</span><span style="color:#C3E88D;" data-v-00cf5d20>CirclePlus</span><span style="color:#89DDFF;" data-v-00cf5d20>&#39;</span><span style="color:#89DDFF;" data-v-00cf5d20>,</span><span style="color:#A6ACCD;" data-v-00cf5d20> </span><span style="color:#89DDFF;" data-v-00cf5d20>&#39;</span><span style="color:#C3E88D;" data-v-00cf5d20>CircleCheck</span><span style="color:#89DDFF;" data-v-00cf5d20>&#39;</span><span style="color:#89DDFF;" data-v-00cf5d20>,</span><span style="color:#A6ACCD;" data-v-00cf5d20> </span><span style="color:#89DDFF;" data-v-00cf5d20>&#39;</span><span style="color:#C3E88D;" data-v-00cf5d20>CircleClose</span><span style="color:#89DDFF;" data-v-00cf5d20>&#39;</span><span style="color:#A6ACCD;" data-v-00cf5d20>]</span></span>
<span class="line" data-v-00cf5d20><span style="color:#89DDFF;" data-v-00cf5d20>&lt;/</span><span style="color:#F07178;" data-v-00cf5d20>script</span><span style="color:#89DDFF;" data-v-00cf5d20>&gt;</span></span>
<span class="line" data-v-00cf5d20></span></code></pre></div></details><h2 id="显示badge" tabindex="-1" data-v-00cf5d20>显示badge <a class="header-anchor" href="#显示badge" aria-hidden="true" data-v-00cf5d20>#</a></h2>`,2),_={class:"icon-table example"},q={class:"icon-cell"},b=s(()=>a("span",null,"User",-1)),x={class:"icon-cell"},S=s(()=>a("span",null,"Setting",-1)),k=p(`<details data-v-00cf5d20><summary data-v-00cf5d20>展开查看</summary><div class="language-vue" data-v-00cf5d20><button title="Copy Code" class="copy" data-v-00cf5d20></button><span class="lang" data-v-00cf5d20>vue</span><pre class="shiki material-palenight" data-v-00cf5d20><code data-v-00cf5d20><span class="line" data-v-00cf5d20><span style="color:#89DDFF;" data-v-00cf5d20>&lt;</span><span style="color:#F07178;" data-v-00cf5d20>template</span><span style="color:#89DDFF;" data-v-00cf5d20>&gt;</span></span>
<span class="line" data-v-00cf5d20><span style="color:#89DDFF;" data-v-00cf5d20>&lt;</span><span style="color:#F07178;" data-v-00cf5d20>div</span><span style="color:#89DDFF;" data-v-00cf5d20> </span><span style="color:#C792EA;" data-v-00cf5d20>class</span><span style="color:#89DDFF;" data-v-00cf5d20>=</span><span style="color:#89DDFF;" data-v-00cf5d20>&quot;</span><span style="color:#C3E88D;" data-v-00cf5d20>icon-table</span><span style="color:#89DDFF;" data-v-00cf5d20>&quot;</span><span style="color:#89DDFF;" data-v-00cf5d20>&gt;</span></span>
<span class="line" data-v-00cf5d20><span style="color:#A6ACCD;" data-v-00cf5d20>    </span><span style="color:#89DDFF;" data-v-00cf5d20>&lt;</span><span style="color:#F07178;" data-v-00cf5d20>div</span><span style="color:#89DDFF;" data-v-00cf5d20> </span><span style="color:#C792EA;" data-v-00cf5d20>class</span><span style="color:#89DDFF;" data-v-00cf5d20>=</span><span style="color:#89DDFF;" data-v-00cf5d20>&quot;</span><span style="color:#C3E88D;" data-v-00cf5d20>icon-cell</span><span style="color:#89DDFF;" data-v-00cf5d20>&quot;</span><span style="color:#89DDFF;" data-v-00cf5d20>&gt;</span></span>
<span class="line" data-v-00cf5d20><span style="color:#A6ACCD;" data-v-00cf5d20>        </span><span style="color:#89DDFF;" data-v-00cf5d20>&lt;</span><span style="color:#F07178;" data-v-00cf5d20>imm-icon</span><span style="color:#89DDFF;" data-v-00cf5d20> </span><span style="color:#C792EA;" data-v-00cf5d20>name</span><span style="color:#89DDFF;" data-v-00cf5d20>=</span><span style="color:#89DDFF;" data-v-00cf5d20>&quot;</span><span style="color:#C3E88D;" data-v-00cf5d20>User</span><span style="color:#89DDFF;" data-v-00cf5d20>&quot;</span><span style="color:#89DDFF;" data-v-00cf5d20> </span><span style="color:#C792EA;" data-v-00cf5d20>color</span><span style="color:#89DDFF;" data-v-00cf5d20>=</span><span style="color:#89DDFF;" data-v-00cf5d20>&quot;</span><span style="color:#C3E88D;" data-v-00cf5d20>#f00</span><span style="color:#89DDFF;" data-v-00cf5d20>&quot;</span><span style="color:#89DDFF;" data-v-00cf5d20> </span><span style="color:#C792EA;" data-v-00cf5d20>size</span><span style="color:#89DDFF;" data-v-00cf5d20>=</span><span style="color:#89DDFF;" data-v-00cf5d20>&quot;</span><span style="color:#C3E88D;" data-v-00cf5d20>24px</span><span style="color:#89DDFF;" data-v-00cf5d20>&quot;</span><span style="color:#89DDFF;" data-v-00cf5d20> </span><span style="color:#C792EA;" data-v-00cf5d20>dot</span><span style="color:#89DDFF;" data-v-00cf5d20>&gt;&lt;/</span><span style="color:#F07178;" data-v-00cf5d20>imm-icon</span><span style="color:#89DDFF;" data-v-00cf5d20>&gt;</span></span>
<span class="line" data-v-00cf5d20><span style="color:#A6ACCD;" data-v-00cf5d20>        </span><span style="color:#89DDFF;" data-v-00cf5d20>&lt;</span><span style="color:#F07178;" data-v-00cf5d20>span</span><span style="color:#89DDFF;" data-v-00cf5d20>&gt;</span><span style="color:#A6ACCD;" data-v-00cf5d20>User</span><span style="color:#89DDFF;" data-v-00cf5d20>&lt;/</span><span style="color:#F07178;" data-v-00cf5d20>span</span><span style="color:#89DDFF;" data-v-00cf5d20>&gt;</span></span>
<span class="line" data-v-00cf5d20><span style="color:#A6ACCD;" data-v-00cf5d20>    </span><span style="color:#89DDFF;" data-v-00cf5d20>&lt;/</span><span style="color:#F07178;" data-v-00cf5d20>div</span><span style="color:#89DDFF;" data-v-00cf5d20>&gt;</span></span>
<span class="line" data-v-00cf5d20><span style="color:#A6ACCD;" data-v-00cf5d20>    </span><span style="color:#89DDFF;" data-v-00cf5d20>&lt;</span><span style="color:#F07178;" data-v-00cf5d20>div</span><span style="color:#89DDFF;" data-v-00cf5d20> </span><span style="color:#C792EA;" data-v-00cf5d20>class</span><span style="color:#89DDFF;" data-v-00cf5d20>=</span><span style="color:#89DDFF;" data-v-00cf5d20>&quot;</span><span style="color:#C3E88D;" data-v-00cf5d20>icon-cell</span><span style="color:#89DDFF;" data-v-00cf5d20>&quot;</span><span style="color:#89DDFF;" data-v-00cf5d20>&gt;</span></span>
<span class="line" data-v-00cf5d20><span style="color:#A6ACCD;" data-v-00cf5d20>        </span><span style="color:#89DDFF;" data-v-00cf5d20>&lt;</span><span style="color:#F07178;" data-v-00cf5d20>imm-icon</span><span style="color:#89DDFF;" data-v-00cf5d20> </span><span style="color:#C792EA;" data-v-00cf5d20>name</span><span style="color:#89DDFF;" data-v-00cf5d20>=</span><span style="color:#89DDFF;" data-v-00cf5d20>&quot;</span><span style="color:#C3E88D;" data-v-00cf5d20>Setting</span><span style="color:#89DDFF;" data-v-00cf5d20>&quot;</span><span style="color:#89DDFF;" data-v-00cf5d20> </span><span style="color:#C792EA;" data-v-00cf5d20>color</span><span style="color:#89DDFF;" data-v-00cf5d20>=</span><span style="color:#89DDFF;" data-v-00cf5d20>&quot;</span><span style="color:#C3E88D;" data-v-00cf5d20>#f00</span><span style="color:#89DDFF;" data-v-00cf5d20>&quot;</span><span style="color:#89DDFF;" data-v-00cf5d20> </span><span style="color:#C792EA;" data-v-00cf5d20>size</span><span style="color:#89DDFF;" data-v-00cf5d20>=</span><span style="color:#89DDFF;" data-v-00cf5d20>&quot;</span><span style="color:#C3E88D;" data-v-00cf5d20>24px</span><span style="color:#89DDFF;" data-v-00cf5d20>&quot;</span><span style="color:#89DDFF;" data-v-00cf5d20> </span><span style="color:#C792EA;" data-v-00cf5d20>dot</span><span style="color:#89DDFF;" data-v-00cf5d20> </span><span style="color:#C792EA;" data-v-00cf5d20>badge</span><span style="color:#89DDFF;" data-v-00cf5d20>=</span><span style="color:#89DDFF;" data-v-00cf5d20>&quot;</span><span style="color:#C3E88D;" data-v-00cf5d20>10</span><span style="color:#89DDFF;" data-v-00cf5d20>&quot;</span><span style="color:#89DDFF;" data-v-00cf5d20>&gt;&lt;/</span><span style="color:#F07178;" data-v-00cf5d20>imm-icon</span><span style="color:#89DDFF;" data-v-00cf5d20>&gt;</span></span>
<span class="line" data-v-00cf5d20><span style="color:#A6ACCD;" data-v-00cf5d20>        </span><span style="color:#89DDFF;" data-v-00cf5d20>&lt;</span><span style="color:#F07178;" data-v-00cf5d20>span</span><span style="color:#89DDFF;" data-v-00cf5d20>&gt;</span><span style="color:#A6ACCD;" data-v-00cf5d20>Setting</span><span style="color:#89DDFF;" data-v-00cf5d20>&lt;/</span><span style="color:#F07178;" data-v-00cf5d20>span</span><span style="color:#89DDFF;" data-v-00cf5d20>&gt;</span></span>
<span class="line" data-v-00cf5d20><span style="color:#A6ACCD;" data-v-00cf5d20>    </span><span style="color:#89DDFF;" data-v-00cf5d20>&lt;/</span><span style="color:#F07178;" data-v-00cf5d20>div</span><span style="color:#89DDFF;" data-v-00cf5d20>&gt;</span></span>
<span class="line" data-v-00cf5d20><span style="color:#89DDFF;" data-v-00cf5d20>&lt;/</span><span style="color:#F07178;" data-v-00cf5d20>div</span><span style="color:#89DDFF;" data-v-00cf5d20>&gt;</span></span>
<span class="line" data-v-00cf5d20><span style="color:#89DDFF;" data-v-00cf5d20>&lt;/</span><span style="color:#F07178;" data-v-00cf5d20>template</span><span style="color:#89DDFF;" data-v-00cf5d20>&gt;</span></span>
<span class="line" data-v-00cf5d20><span style="color:#89DDFF;" data-v-00cf5d20>&lt;</span><span style="color:#F07178;" data-v-00cf5d20>script</span><span style="color:#A6ACCD;" data-v-00cf5d20> </span><span style="color:#C792EA;" data-v-00cf5d20>lang</span><span style="color:#89DDFF;" data-v-00cf5d20>=</span><span style="color:#89DDFF;" data-v-00cf5d20>&quot;</span><span style="color:#C3E88D;" data-v-00cf5d20>ts</span><span style="color:#89DDFF;" data-v-00cf5d20>&quot;</span><span style="color:#A6ACCD;" data-v-00cf5d20> </span><span style="color:#C792EA;" data-v-00cf5d20>setup</span><span style="color:#89DDFF;" data-v-00cf5d20>&gt;</span></span>
<span class="line" data-v-00cf5d20><span style="color:#89DDFF;" data-v-00cf5d20>&lt;/</span><span style="color:#F07178;" data-v-00cf5d20>script</span><span style="color:#89DDFF;" data-v-00cf5d20>&gt;</span></span>
<span class="line" data-v-00cf5d20></span></code></pre></div></details><h2 id="icon属性" tabindex="-1" data-v-00cf5d20>Icon属性 <a class="header-anchor" href="#icon属性" aria-hidden="true" data-v-00cf5d20>#</a></h2><table data-v-00cf5d20><thead data-v-00cf5d20><tr data-v-00cf5d20><th data-v-00cf5d20>属性</th><th data-v-00cf5d20>说明</th><th data-v-00cf5d20>类型</th><th data-v-00cf5d20>可选值</th><th data-v-00cf5d20>默认值</th></tr></thead><tbody data-v-00cf5d20><tr data-v-00cf5d20><td data-v-00cf5d20>name</td><td data-v-00cf5d20>图标名称</td><td data-v-00cf5d20>string</td><td data-v-00cf5d20>—</td><td data-v-00cf5d20>default</td></tr><tr data-v-00cf5d20><td data-v-00cf5d20>size</td><td data-v-00cf5d20>SVG 图标的大小，size x size</td><td data-v-00cf5d20>string / number</td><td data-v-00cf5d20>—</td><td data-v-00cf5d20>-</td></tr><tr data-v-00cf5d20><td data-v-00cf5d20>color</td><td data-v-00cf5d20>svg 的 fill 颜色</td><td data-v-00cf5d20>string</td><td data-v-00cf5d20>—</td><td data-v-00cf5d20>-</td></tr><tr data-v-00cf5d20><td data-v-00cf5d20>dot</td><td data-v-00cf5d20>是否显示badge</td><td data-v-00cf5d20>boolean</td><td data-v-00cf5d20>—</td><td data-v-00cf5d20>false</td></tr><tr data-v-00cf5d20><td data-v-00cf5d20>badge</td><td data-v-00cf5d20>badge 数</td><td data-v-00cf5d20>string</td><td data-v-00cf5d20>—</td><td data-v-00cf5d20>-</td></tr></tbody></table>`,3),L=JSON.parse('{"title":"Icon 图标","description":"","frontmatter":{},"headers":[{"level":2,"title":"基础用法","slug":"基础用法","link":"#基础用法","children":[]},{"level":2,"title":"显示badge","slug":"显示badge","link":"#显示badge","children":[]},{"level":2,"title":"Icon属性","slug":"icon属性","link":"#icon属性","children":[]}],"relativePath":"examples/icon/index.md"}'),z={name:"examples/icon/index.md"},I=D({...z,setup(t){const v=["Edit","Love","User","Home","Setting","Delete","Refresh","Search","Remove","View","CirclePlus","CircleCheck","CircleClose","Loading"];return(V,U)=>{const d=y("imm-icon");return l(),o("div",null,[u,g,h,a("div",m,[(l(),o(f,null,r(v,n=>a("div",{class:"icon-cell",key:n},[c(d,{name:n,color:"#f00",size:"24px"},null,8,["name"]),a("span",null,F(n),1)])),64))]),E,a("div",_,[a("div",q,[c(d,{name:"User",color:"#f00",size:"24px",dot:""}),b]),a("div",x,[c(d,{name:"Setting",color:"#f00",size:"24px",dot:"",badge:"10"}),S])]),k])}}});const R=A(I,[["__scopeId","data-v-00cf5d20"]]);export{L as __pageData,R as default};
