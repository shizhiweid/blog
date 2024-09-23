import{_ as n,o as s,c as a,a as t}from"./app-3ec0f047.js";const p={},e=t(`<h3 id="文字绕圆旋转动画" tabindex="-1"><a class="header-anchor" href="#文字绕圆旋转动画" aria-hidden="true">#</a> <strong>文字绕圆旋转动画</strong></h3><p><img src="https://fastly.jsdelivr.net/gh/shizhiweid/blogimg@main/imgs/202403152043358.png" alt=""></p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
        <span class="token selector">.container</span> <span class="token punctuation">{</span>
            <span class="token property">width</span><span class="token punctuation">:</span> 600px<span class="token punctuation">;</span>
            <span class="token property">height</span><span class="token punctuation">:</span> 600px<span class="token punctuation">;</span>
            <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
            <span class="token property">justify-content</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
            <span class="token property">align-items</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
            <span class="token property">border</span><span class="token punctuation">:</span> 1px solid #ccc<span class="token punctuation">;</span>
            <span class="token property">margin</span><span class="token punctuation">:</span> 10vh auto<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token selector">.line</span> <span class="token punctuation">{</span>
            <span class="token property">width</span><span class="token punctuation">:</span> 400px<span class="token punctuation">;</span>
            <span class="token property">height</span><span class="token punctuation">:</span> 400px<span class="token punctuation">;</span>
            <span class="token property">border</span><span class="token punctuation">:</span> 1px solid #666<span class="token punctuation">;</span>
            <span class="token property">border-radius</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
            <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
            <span class="token comment">/* 匀速 循环 */</span>
            <span class="token property">animation</span><span class="token punctuation">:</span> myRotate 20s linear infinite<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token selector">.slideCircle</span> <span class="token punctuation">{</span>
            <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
            <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
            <span class="token property">border-radius</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
            <span class="token property">background</span><span class="token punctuation">:</span> pink<span class="token punctuation">;</span>
            <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
            <span class="token comment">/* 三角函数计算约等于 */</span>
            <span class="token property">top</span><span class="token punctuation">:</span> 8px<span class="token punctuation">;</span>
            <span class="token property">left</span><span class="token punctuation">:</span> 8px<span class="token punctuation">;</span>
            <span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
            <span class="token property">line-height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
            <span class="token property">animation</span><span class="token punctuation">:</span> myRotate1 20s linear infinite<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>


        <span class="token comment">/* 正向旋转*/</span>
        <span class="token atrule"><span class="token rule">@keyframes</span> myRotate</span> <span class="token punctuation">{</span>
            <span class="token selector">0%</span> <span class="token punctuation">{</span>
                <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">rotate</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>

            <span class="token selector">100%</span> <span class="token punctuation">{</span>
                <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">rotate</span><span class="token punctuation">(</span>360deg<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>

        <span class="token comment">/* 反向旋转，视觉文字不变 */</span>
        <span class="token atrule"><span class="token rule">@keyframes</span> myRotate1</span> <span class="token punctuation">{</span>
            <span class="token selector">0%</span> <span class="token punctuation">{</span>
                <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">rotate</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>

            <span class="token selector">100%</span> <span class="token punctuation">{</span>
                <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">rotate</span><span class="token punctuation">(</span>-360deg<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>container<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token comment">&lt;!-- 轨迹 --&gt;</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>line<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
            <span class="token comment">&lt;!-- 滑动点 --&gt;</span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>slideCircle<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
                动画
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),c=[e];function l(i,o){return s(),a("div",null,c)}const r=n(p,[["render",l],["__file","文字绕圆旋转动画.html.vue"]]);export{r as default};
