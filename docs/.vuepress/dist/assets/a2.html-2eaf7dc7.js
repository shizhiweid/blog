import{_ as n,o as s,c as a,a as t}from"./app-e1cc9599.js";const e={},i=t(`<h2 id="二、实现方式" tabindex="-1"><a class="header-anchor" href="#二、实现方式" aria-hidden="true">#</a> 二、实现方式</h2><p>通过<code>css</code>实现隐藏元素方法有如下：</p><ul><li>display:none</li><li>visibility:hidden</li><li>opacity:0</li><li>设置height、width模型属性为0</li><li>position:absolute</li><li>clip-path</li></ul><h3 id="display-none" tabindex="-1"><a class="header-anchor" href="#display-none" aria-hidden="true">#</a> display:none</h3><p>设置元素的<code>display</code>为<code>none</code>是最常用的隐藏元素的方法</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.hide</span> <span class="token punctuation">{</span>
    <span class="token property">display</span><span class="token punctuation">:</span>none<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>将元素设置为<code>display:none</code>后，元素在页面上将彻底消失</p><p>元素本身占有的空间就会被其他元素占有，也就是说它会导致浏览器的重排和重绘</p><p>消失后，自身绑定的事件不会触发，也不会有过渡效果</p><p>特点：元素不可见，不占据空间，无法响应点击事件</p><h3 id="visibility-hidden" tabindex="-1"><a class="header-anchor" href="#visibility-hidden" aria-hidden="true">#</a> visibility:hidden</h3><p>设置元素的<code>visibility</code>为<code>hidden</code>也是一种常用的隐藏元素的方法</p><p>从页面上仅仅是隐藏该元素，DOM结果均会存在，只是当时在一个不可见的状态，不会触发重排，但是会触发重绘</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.hidden</span><span class="token punctuation">{</span>
    <span class="token property">visibility</span><span class="token punctuation">:</span>hidden
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>给人的效果是隐藏了，所以他自身的事件不会触发</p><p>特点：元素不可见，占据页面空间，无法响应点击事件</p><h3 id="opacity-0" tabindex="-1"><a class="header-anchor" href="#opacity-0" aria-hidden="true">#</a> opacity:0</h3><p><code>opacity</code>属性表示元素的透明度，将元素的透明度设置为0后，在我们用户眼中，元素也是隐藏的</p><p>不会引发重排，一般情况下也会引发重绘</p><blockquote><p>如果利用 animation 动画，对 opacity 做变化（animation会默认触发GPU加速），则只会触发 GPU 层面的 composite，不会触发重绘</p></blockquote><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.transparent</span> <span class="token punctuation">{</span>
    <span class="token property">opacity</span><span class="token punctuation">:</span>0<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>由于其仍然是存在于页面上的，所以他自身的的事件仍然是可以触发的，但被他遮挡的元素是不能触发其事件的</p><p>需要注意的是：其子元素不能设置opacity来达到显示的效果</p><p>特点：改变元素透明度，元素不可见，占据页面空间，可以响应点击事件</p><h3 id="设置height、width属性为0" tabindex="-1"><a class="header-anchor" href="#设置height、width属性为0" aria-hidden="true">#</a> 设置height、width属性为0</h3><p>将元素的<code>margin</code>，<code>border</code>，<code>padding</code>，<code>height</code>和<code>width</code>等影响元素盒模型的属性设置成0，如果元素内有子元素或内容，还应该设置其<code>overflow:hidden</code>来隐藏其子元素</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.hiddenBox</span> <span class="token punctuation">{</span>
    <span class="token property">margin</span><span class="token punctuation">:</span>0<span class="token punctuation">;</span>     
    <span class="token property">border</span><span class="token punctuation">:</span>0<span class="token punctuation">;</span>
    <span class="token property">padding</span><span class="token punctuation">:</span>0<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span>0<span class="token punctuation">;</span>
    <span class="token property">width</span><span class="token punctuation">:</span>0<span class="token punctuation">;</span>
    <span class="token property">overflow</span><span class="token punctuation">:</span>hidden<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>特点：元素不可见，不占据页面空间，无法响应点击事件</p><h3 id="position-absolute" tabindex="-1"><a class="header-anchor" href="#position-absolute" aria-hidden="true">#</a> position:absolute</h3><p>将元素移出可视区域</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.hide</span> <span class="token punctuation">{</span>
   <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
   <span class="token property">top</span><span class="token punctuation">:</span> -9999px<span class="token punctuation">;</span>
   <span class="token property">left</span><span class="token punctuation">:</span> -9999px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>特点：元素不可见，不影响页面布局</p><h3 id="lip-path" tabindex="-1"><a class="header-anchor" href="#lip-path" aria-hidden="true">#</a> lip-path</h3><p>通过裁剪的形式</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.hide</span> <span class="token punctuation">{</span>
  <span class="token property">clip-path</span><span class="token punctuation">:</span> <span class="token function">polygon</span><span class="token punctuation">(</span>0px 0px<span class="token punctuation">,</span>0px 0px<span class="token punctuation">,</span>0px 0px<span class="token punctuation">,</span>0px 0px<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>特点：元素不可见，占据页面空间，无法响应点击事件</p><h2 id="二、区别" tabindex="-1"><a class="header-anchor" href="#二、区别" aria-hidden="true">#</a> 二、区别</h2><p>关于<code>display: none</code>、<code>visibility: hidden</code>、<code>opacity: 0</code>的区别，如下表所示：</p><table><thead><tr><th style="text-align:left;"></th><th style="text-align:left;">display: none</th><th style="text-align:left;">visibility: hidden</th><th>opacity: 0</th></tr></thead><tbody><tr><td style="text-align:left;">页面中</td><td style="text-align:left;">不存在</td><td style="text-align:left;">存在</td><td>存在</td></tr><tr><td style="text-align:left;">重排</td><td style="text-align:left;">会</td><td style="text-align:left;">不会</td><td>不会</td></tr><tr><td style="text-align:left;">重绘</td><td style="text-align:left;">会</td><td style="text-align:left;">会</td><td>不一定</td></tr><tr><td style="text-align:left;">自身绑定事件</td><td style="text-align:left;">不触发</td><td style="text-align:left;">不触发</td><td>可触发</td></tr><tr><td style="text-align:left;">transition</td><td style="text-align:left;">不支持</td><td style="text-align:left;">支持</td><td>支持</td></tr><tr><td style="text-align:left;">子元素可复原</td><td style="text-align:left;">不能</td><td style="text-align:left;">能</td><td>不能</td></tr><tr><td style="text-align:left;">被遮挡的元素可触发事件</td><td style="text-align:left;">能</td><td style="text-align:left;">能</td><td>不能</td></tr></tbody></table>`,39),p=[i];function l(d,c){return s(),a("div",null,p)}const r=n(e,[["render",l],["__file","a2.html.vue"]]);export{r as default};
