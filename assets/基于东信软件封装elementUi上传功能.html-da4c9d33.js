import{_ as n,o as s,c as a,a as t}from"./app-81286321.js";const p={},e=t(`<h3 id="基于东信软件封装elementui上传功能" tabindex="-1"><a class="header-anchor" href="#基于东信软件封装elementui上传功能" aria-hidden="true">#</a> <strong>基于东信软件封装elementUi上传功能</strong></h3><p><strong>upload上传：</strong></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token operator">&lt;</span>template<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;upload-bottom&quot;</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>el<span class="token operator">-</span>upload
      <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;upload-demo&quot;</span>
      action<span class="token operator">=</span><span class="token string">&quot;#&quot;</span>
      ref<span class="token operator">=</span><span class="token string">&quot;upload&quot;</span>
      <span class="token literal-property property">drag</span>
      <span class="token operator">:</span>limit<span class="token operator">=</span><span class="token string">&quot;1&quot;</span>
      <span class="token operator">:</span>http<span class="token operator">-</span>request<span class="token operator">=</span><span class="token string">&quot;httpRequest&quot;</span>
      <span class="token operator">:</span>before<span class="token operator">-</span>upload<span class="token operator">=</span><span class="token string">&quot;uploadPreviewBottom&quot;</span>
      <span class="token operator">:</span>before<span class="token operator">-</span>remove<span class="token operator">=</span><span class="token string">&quot;beforeRemoveBottom&quot;</span>
      <span class="token operator">:</span>file<span class="token operator">-</span>list<span class="token operator">=</span><span class="token string">&quot;placeholder&quot;</span>
    <span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>el<span class="token operator">-</span>button size<span class="token operator">=</span><span class="token string">&quot;small&quot;</span> type<span class="token operator">=</span><span class="token string">&quot;primary&quot;</span><span class="token operator">&gt;</span>点击上传<span class="token operator">&lt;</span><span class="token operator">/</span>el<span class="token operator">-</span>button<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>div slot<span class="token operator">=</span><span class="token string">&quot;tip&quot;</span> <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;el-upload__tip&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>el<span class="token operator">-</span>upload<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span>script<span class="token operator">&gt;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> filesUpload <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@/api/management-centre/index.js&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;index&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;courseWareUrl&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token comment">// 附件列表</span>
      <span class="token literal-property property">placeholder</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token comment">//中间附件存储</span>
      <span class="token literal-property property">fileLists</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">watch</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">courseWareUrl</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">deep</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token literal-property property">immediate</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token function">handler</span><span class="token punctuation">(</span><span class="token parameter">val</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>placeholder <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>val<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">this</span><span class="token punctuation">.</span>placeholder<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
            <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;附件&quot;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">url</span><span class="token operator">:</span> val<span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">created</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// 附件上传</span>
    <span class="token function">getfilesUpload</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">let</span> formData <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FormData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>fileLists<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        formData<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">&quot;files&quot;</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>fileLists<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      formData<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">&quot;type&quot;</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token function">filesUpload</span><span class="token punctuation">(</span>formData<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> attachmentUrl <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        res<span class="token punctuation">.</span>data<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
          <span class="token keyword">let</span> lastIndex <span class="token operator">=</span> item<span class="token punctuation">.</span>tempUrl<span class="token punctuation">.</span><span class="token function">lastIndexOf</span><span class="token punctuation">(</span><span class="token string">&quot;_&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 查找最后一个斜杠的位置</span>
          <span class="token keyword">let</span> name <span class="token operator">=</span> item<span class="token punctuation">.</span>tempUrl<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span>lastIndex <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
          attachmentUrl<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$emit</span><span class="token punctuation">(</span><span class="token string">&quot;attachment&quot;</span><span class="token punctuation">,</span> attachmentUrl<span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>index<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">// 文件上传</span>
    <span class="token function">httpRequest</span><span class="token punctuation">(</span><span class="token parameter">files</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>files<span class="token punctuation">,</span> <span class="token string">&quot;0===0&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token comment">//   file类型文件组</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>fileLists<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>files<span class="token punctuation">.</span>file<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getfilesUpload</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token doc-comment comment">/**
     * 文件上传前的钩子
     */</span>
    <span class="token function">uploadPreviewBottom</span><span class="token punctuation">(</span><span class="token parameter">file</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">//   if (file.type != &quot;&quot; || file.type != null || file.type != undefined) {</span>
      <span class="token comment">//     //截取文件的后缀，判断文件类型</span>
      <span class="token comment">//     // const FileExt = file.name.replace(/.+\\./, &quot;&quot;).toLowerCase();</span>
      <span class="token comment">//     const isLt50M = file.size / 1024 / 1024 &gt; 50; //这里做文件大小限制</span>
      <span class="token comment">//     //如果大于50M</span>
      <span class="token comment">//     if (isLt50M) {</span>
      <span class="token comment">//       this.$message({</span>
      <span class="token comment">//         message: &quot;单个文件体积不能超过 50MB!&quot;,</span>
      <span class="token comment">//         type: &quot;warning&quot;,</span>
      <span class="token comment">//       });</span>
      <span class="token comment">//       return false;</span>
      <span class="token comment">//     }</span>
      <span class="token comment">//   }</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token doc-comment comment">/**
     * 文件删除前的钩子
     */</span>
    <span class="token function">beforeRemoveBottom</span><span class="token punctuation">(</span><span class="token parameter">files<span class="token punctuation">,</span> fileList</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>fileLists<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item<span class="token punctuation">,</span> index</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>item<span class="token punctuation">.</span>uid <span class="token operator">===</span> files<span class="token punctuation">.</span>file<span class="token punctuation">.</span>uid<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">this</span><span class="token punctuation">.</span>fileLists<span class="token punctuation">.</span><span class="token function">splice</span><span class="token punctuation">(</span>index<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token comment">//   var isLt5M = file.size / 1024 / 1024 &lt; 50;</span>
      <span class="token comment">//   // var extension = this.fileType.includes(FileExt);</span>
      <span class="token comment">//   if (!isLt5M) {</span>
      <span class="token comment">//     var i = fileList.indexOf(file);</span>
      <span class="token comment">//     fileList.splice(i, 1); // 自动删除不符合要求的文件，不让它出现在预览列表中</span>
      <span class="token comment">//     return false; // 只有return false 才会真的限制</span>
      <span class="token comment">//   }</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span>style scoped lang<span class="token operator">=</span><span class="token string">&quot;scss&quot;</span><span class="token operator">&gt;</span>
<span class="token operator">:</span><span class="token operator">:</span>v<span class="token operator">-</span>deep <span class="token punctuation">.</span>el<span class="token operator">-</span>upload<span class="token operator">-</span>dragger <span class="token punctuation">{</span>
  <span class="token literal-property property">width</span><span class="token operator">:</span> 90px<span class="token punctuation">;</span>
  <span class="token literal-property property">height</span><span class="token operator">:</span> 30px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>style<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),o=[e];function c(l,i){return s(),a("div",null,o)}const r=n(p,[["render",c],["__file","基于东信软件封装elementUi上传功能.html.vue"]]);export{r as default};
