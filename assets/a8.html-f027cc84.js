import{_ as e,o as s,c as t,a as n}from"./app-81286321.js";const l={},i=n(`<p><strong>1.chartAt</strong> 返回字符串中指定位置的字符 ==<strong>结构：</strong>== str.chartAt(ind);返回下标为ind的字符</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>let str=&#39;abcde&#39;
let s=str.chartAt(3);//s=&#39;d&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>2.concat</strong> 用于连接两个或多个字符串。 ==<strong>结构：</strong>== str1.concat(str2,str3);把str2,str3依次拼接到str1中</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>let str1 = &quot;a&quot;;
let str2 = &quot;b&quot;;
let str3=&quot;c&quot;
let s = str1.concat(str2,str3); //s=&#39;abc&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>3.indexOf</strong> 用来查找字符在字符串中第一次出现的位置 ==<strong>结构：</strong>== str.indexOf(ele，ind);从ind（如果省略，从0开始）下标开始，ele第一次出现的位置，如果不存在，返回-1</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>let str = &quot;Hello&quot;;
let s = str.indexOf(&quot;e&quot;);
console.log(s); //1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>4.includes</strong> 用于判断字符串是否包含指定的子字符串。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>let str = &quot;Hello&quot;;
let s = str.includes(&quot;e&quot;);
console.log(s); //true
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>5.repeat</strong> 用于字符串复制指定次数。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>let str = &quot;Hello&quot;;
let s = str.repeat(2);
console.log(s); //HelloHello
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>6.replace</strong> 用于在字符串中用一些字符替换另一些字符，或替换一个与正则表达式匹配的子串。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>let str = &quot;Hello&quot;;
let s = str.replace(&quot;l&quot;, &quot;o&quot;);
console.log(s); //Heolo
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>7.replaceAll</strong> 用于在字符串中用一些字符替换另一些字符，或替换一个与正则表达式匹配的子串，该函数会替换所有匹配到的子字符串。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>let str = &quot;Hello&quot;;
let s = str.replaceAll(&quot;l&quot;, &quot;o&quot;);
console.log(s); //Heooo
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>8.slice</strong> 提取字符串的某个部分，并以新的字符串返回被提取的部分。 ==<strong>结构：</strong>== string.slice(start,end); 从start下标开始截取，一直到end结束，不包括end</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>let str = &quot;Hello&quot;;
let s = str.slice(1, 2);
console.log(s); //e
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>9.split</strong> 用于把一个字符串分割成字符串数组。 ==<strong>结构：</strong>== string.split(separator,limit); separator 可选。字符串或正则表达式，从该参数指定的地方分割 string Object。 limit 可选。该参数可指定返回的数组的最大长度。如果设置了该参数，返回的子串不会多于这个参数指定的数组。如果没有设置该参数，整个字符串都会被分割，不考虑它的长度。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>let str = &quot;Hello&quot;;
let s = str.split(&quot;e&quot;);
console.log(str); //Hello
console.log(s); //[ &#39;H&#39;, &#39;llo&#39; ]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>10.substring</strong> 用于提取字符串中介于两个指定下标之间的字符。 ==<strong>结构：</strong>== string.substring(from, to); from 必需。一个非负的整数，规定要提取的子串的第一个字符在 string Object 中的位置。 to 可选。一个非负的整数，比要提取的子串的最后一个字符在 string Object 中的位置多 1。 如果省略该参数，那么返回的子串会一直到字符串的结尾。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>let str = &quot;Hello&quot;;
let s = str.substring(1, 3);
console.log(str); //Hello
console.log(s); //el

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>11.toLowerCase()和toUpperCase()方法</strong> toLowerCase() 方法用于把字符串转换为小写。 toUpperCase() 方法用于把字符串转换为大写。</p><p><strong>12.trim</strong> trim() 方法用于删除字符串的头尾空白符，空白符包括：空格、制表符 tab、换行符等其他空白符等。</p>`,22),r=[i];function d(a,o){return s(),t("div",null,r)}const u=e(l,[["render",d],["__file","a8.html.vue"]]);export{u as default};
