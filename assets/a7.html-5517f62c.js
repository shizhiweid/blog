import{_ as n,o as a,c as e,a as t}from"./app-b0a28604.js";const c={},s=t('<h1 id="typescript中any和unknown的区别" tabindex="-1"><a class="header-anchor" href="#typescript中any和unknown的区别" aria-hidden="true">#</a> Typescript中any和unknown的区别</h1><p>当我们不太确定一个变量的类型时，着我们可能会想到any和unknown，那any和unknown到底有什么区别哪？</p><ol><li><p>首先我们都知道，在javascript中定义变量是不需要提前定义类型的，而用any定义类型，那么就相当于该变量关闭了Ts类型检测和原js一样了，可以给任意类型变量赋值为any类型的值，比如: <img src="https://img-blog.csdnimg.cn/278b2d956ee946c3b5d409bdf047d09d.png" alt="在这里插入图片描述"></p></li><li><p>定义为unknown类型的变量不能直接给其他变量赋值，需要做一定的判断： 第一种： <img src="https://img-blog.csdnimg.cn/e481a1e848384ad392315719b1e262d7.png" alt="在这里插入图片描述"> 第二种：<img src="https://img-blog.csdnimg.cn/48330fc2c0e44452a778df3c282e6069.png" alt="在这里插入图片描述"></p></li></ol>',3),i=[s];function o(r,d){return a(),e("div",null,i)}const l=n(c,[["render",o],["__file","a7.html.vue"]]);export{l as default};