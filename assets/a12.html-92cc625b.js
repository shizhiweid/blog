import{_ as n,o as s,c as a,a as e}from"./app-b0a28604.js";const t={},p=e(`<h2 id="file类型本地图片如何在img标签中显示-js如何获取文件的base64" tabindex="-1"><a class="header-anchor" href="#file类型本地图片如何在img标签中显示-js如何获取文件的base64" aria-hidden="true">#</a> File类型本地图片如何在img标签中显示，js如何获取文件的base64</h2><p><strong>1.方式一：</strong></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> windowURL <span class="token operator">=</span> window<span class="token punctuation">.</span><span class="token constant">URL</span> <span class="token operator">||</span> window<span class="token punctuation">.</span>webkitURL<span class="token punctuation">;</span>
    <span class="token keyword">const</span> src <span class="token operator">=</span> windowURL<span class="token punctuation">.</span><span class="token function">createObjectURL</span><span class="token punctuation">(</span>_file<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 返回一个url，就可以直接放在img的src中渲染了。</span>
    <span class="token comment">// 但是该url对象会一直存在在document对象中，只有当document卸载时（关闭窗口）才会释放这个内存。</span>
    <span class="token comment">//所以，最好在你不需要的时候，主动释放。释放方式如下：</span>
    windowURL<span class="token punctuation">.</span><span class="token function">revokeObjectURL</span><span class="token punctuation">(</span>src<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>2.方式二(也是获取文件base64的方法)：</strong></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> reader <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FileReader</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    reader<span class="token punctuation">.</span><span class="token function">readAsDataURL</span><span class="token punctuation">(</span>file<span class="token punctuation">)</span><span class="token punctuation">;</span>
    reader<span class="token punctuation">.</span><span class="token function-variable function">onload</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> src <span class="token operator">=</span> reader<span class="token punctuation">.</span>result<span class="token punctuation">;</span>
      <span class="token comment">// 这里的reader.result就是文件的base64了。如果是图片的话，就可以直接放到src中展示了</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>方式一（createObjectURL）和方式二（readAsDataURL）的区别</strong> 主要区别</p><ul><li><p>主要区别：通过URL.createObjectURL(blob)可以获取当前文件的一个内存URL</p></li><li><p>通过FileReader.readAsDataURL(file)可以获取一段data:base64的字符串</p></li></ul><p>执行时机：</p><ul><li>createObjectURL是同步执行（立即的）</li><li>FileReader.readAsDataURL是异步执行（过一段时间）</li></ul><p>内存使用：</p><ul><li>createObjectURL返回一段带hash的url，并且一直存储在内存中，直到document触发了被卸载或者执行revokeObjectURL来释放。</li><li>FileReader.readAsDataURL则返回包含很多字符的base64，并会比blob url消耗更多内存，但是在不用的时候会自动从内存中清除（通过垃圾回收机制）</li></ul><p>兼容性方面两个属性都兼容ie10以上的浏览器。</p>`,12),c=[p];function o(l,i){return s(),a("div",null,c)}const u=n(t,[["render",o],["__file","a12.html.vue"]]);export{u as default};
