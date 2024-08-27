import{_ as e,o as r,c as n,a as s}from"./app-dfd0b031.js";const t={},a=s(`<h2 id="数组常用方法" tabindex="-1"><a class="header-anchor" href="#数组常用方法" aria-hidden="true">#</a> 数组常用方法</h2><p><strong>1. join(原数组不受影响)</strong> 该方法可以将数组里的元素，通过指定的分隔符，以字符串的形式连接起来。 返回值：返回一个新的字符串</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>//将数组用 - 符号连接起来
let arr = [1,2,3,4,5];
let str = arr.join(&#39;-&#39;);
console.log(str);  //str = 1-2-3-4-5;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>2.split（原数组不受影响）</strong> 该方法时用指定的分隔符把字符串分割成数组 返回值：返回一个全新的数组</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>let str=abc-efg;
let arr=str.split(&#39;-&#39;);
console.log(arr);  //arr=[&#39;abc&#39;,&#39;efg&#39;]

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>3.push</strong> 向数组的最后一个位置添加一个或多个元素。 结构：arr.push(值)</p><p><strong>4.pop</strong></p><p>删除数组的最后一个元素 结构:arr.pop()</p><p><strong>5.unshift</strong> 向数组的最前面添加一个或多个元素 结构：arr.unshift(值)。</p><p><strong>6.shift</strong> 删除数组最前面的一个元素 结构：arr.shift()</p><p><strong>7.reverse翻转数组</strong> 反序排列数组 结构：arr.reverse()</p><p><strong>8.sort</strong> 可以对数组进行排序</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>let arr = [1,3,5,2,4,23,122,34];
//没有参数时按照首字符的先后排序
arr.sort()//arr=[1,122,2,23,3,34,4,5];
//有参数
arr.sort(function(a,b){
	return a-b;//从小到大排序
	return b-a;//从大到小排序
})

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>对数组的拼接与截取（原数组不受影响）</strong></p><p><strong>9. concat</strong> 把两个数组里的元素拼接成一个新的数组</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>let arr1 = [1,2,3];
let arr2 = [4,5,6];
let arr = arr1.concat(arr2);//arr = [1,2,3,4,5,6];
arr1.push(arr2);//arr1 = [1,2,3,[4,5,6]];

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>该方法和push的区别: push是直接把后一个元素原封不动的添加到第一个数组的后面;</strong></p><p><strong>10.slice截取出来</strong> 该方法可以从数组中截取指定的字段，返回出来 返回值：返回截取出来的字符段，放到新的数组中，不改变原数组</p><p>==<strong>结构1：</strong>== arr.slice(start,end);从start下标开始截取，一直到end结束，不包括end</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>let arr=[0,1,2,3,4,5,6,7];
let newArr=arr.slice(0,4);//newArr=[0,1,2,3]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>==<strong>结构2：</strong>== arr.slice(start);从start下标开始截取，一直到最后。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>let arr=[0,1,2,3,4,5,6,7]
let newArr=arr.slice(2);//newArr=[2,3,4,5,6,7]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>==<strong>结构3：</strong>== arr.slice();和原数组一样。</p><p><strong>11.splice</strong> ==<strong>结构1：</strong>== arr.splice(start,deleted),从start开始，删除deleted个 ==<strong>结构2：</strong>== arr.splice(start,deleted,swap),从start开始，删除deleted个，并从start添加sw</p><p><strong>12.indexOf</strong> 用来查找元素在数组中第一次出现的位置 ==<strong>结构：</strong>== arr.indexOf(ele,ind);从ind下标开始，ele第一次出现的位置，如果不存在，返回-1</p><p><strong>13.lasrtIndexOf</strong> 用来查找元素在数组中最后一次出现的位置 ==<strong>结构：</strong>== arr.lastIndexOf(ele,ind);从ind下标开始，ele最后一次出现的位置，如果不存在，返回-1</p>`,26),i=[a];function d(l,o){return r(),n("div",null,i)}const v=e(t,[["render",d],["__file","a9.html.vue"]]);export{v as default};
