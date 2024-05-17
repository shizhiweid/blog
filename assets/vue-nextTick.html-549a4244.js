import{_ as s,o as n,c as a,a as e}from"./app-81286321.js";const t={},p=e(`<h2 id="nexttick" tabindex="-1"><a class="header-anchor" href="#nexttick" aria-hidden="true">#</a> NextTick</h2><p>官方对其的定义</p><blockquote><p>在下次 DOM 更新循环结束之后执行延迟回调。在修改数据之后立即使用这个方法，获取更新后的 DOM</p></blockquote><p>因为<code>Vue</code> 在更新 <code>DOM</code> 时是异步执行的。当数据发生变化，<code>Vue</code>将开启一个异步更新队列，视图需要等队列中所有数据变化完成之后，再统一进行更新</p><p>例子：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token operator">&lt;</span>div id<span class="token operator">=</span><span class="token string">&quot;app&quot;</span><span class="token operator">&gt;</span> <span class="token punctuation">{</span><span class="token punctuation">{</span> message <span class="token punctuation">}</span><span class="token punctuation">}</span> <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>

构建一个vue实例
<span class="token keyword">const</span> vm <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">el</span><span class="token operator">:</span> <span class="token string">&#39;#app&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">&#39;原始值&#39;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

修改message
<span class="token keyword">this</span><span class="token punctuation">.</span>message <span class="token operator">=</span> <span class="token string">&#39;修改后的值1&#39;</span>
<span class="token keyword">this</span><span class="token punctuation">.</span>message <span class="token operator">=</span> <span class="token string">&#39;修改后的值2&#39;</span>
<span class="token keyword">this</span><span class="token punctuation">.</span>message <span class="token operator">=</span> <span class="token string">&#39;修改后的值3&#39;</span>

这时候想获取页面最新的<span class="token constant">DOM</span>节点，却发现获取到的是旧值
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>vm<span class="token punctuation">.</span>$el<span class="token punctuation">.</span>textContent<span class="token punctuation">)</span> <span class="token comment">// 原始值</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),o=[p];function c(l,i){return n(),a("div",null,o)}const u=s(t,[["render",c],["__file","vue-nextTick.html.vue"]]);export{u as default};
