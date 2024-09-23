import{_ as n,o as s,c as a,a as e}from"./app-e1cc9599.js";const t={},p=e(`<div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code>
首先  直接这样设置
  <span class="token property">border</span><span class="token punctuation">:</span> 0.5px solid red<span class="token punctuation">;</span>
0.5px的边框，肯定是不对的，边框大小会向上取整。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol><li>通过 transform:scale(.5)</li></ol><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.line</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
  <span class="token property">border-top</span><span class="token punctuation">:</span> 1px solid black<span class="token punctuation">;</span>
  <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">scaleY</span><span class="token punctuation">(</span>0.5<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">transform-origin</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>::after 定位伪类实现</li></ol><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">div::after</span> <span class="token punctuation">{</span>
  <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
  <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
  <span class="token property">border</span><span class="token punctuation">:</span> 1px solid black<span class="token punctuation">;</span>
  <span class="token property">transform-origin</span><span class="token punctuation">:</span> 0 0<span class="token punctuation">;</span>
  <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">scale</span><span class="token punctuation">(</span>0.5<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),c=[p];function o(i,l){return s(),a("div",null,c)}const r=n(t,[["render",o],["__file","0.5px的边框实现.html.vue"]]);export{r as default};
