---
title: 17. vue-nextTick
order: 18
comment: false
collapsible: false
date: 2024-02-25
categories: 
  - programme
  - WebFrontEnd
tags: 
  - 
columns: 
  - 

---

##  NextTick

官方对其的定义

> 在下次 DOM 更新循环结束之后执行延迟回调。在修改数据之后立即使用这个方法，获取更新后的 DOM

因为`Vue` 在更新 `DOM` 时是异步执行的。当数据发生变化，`Vue`将开启一个异步更新队列，视图需要等队列中所有数据变化完成之后，再统一进行更新

例子：

```javascript
<div id="app"> {{ message }} </div>

构建一个vue实例
const vm = new Vue({
  el: '#app',
  data: {
    message: '原始值'
  }
})

修改message
this.message = '修改后的值1'
this.message = '修改后的值2'
this.message = '修改后的值3'

这时候想获取页面最新的DOM节点，却发现获取到的是旧值
console.log(vm.$el.textContent) // 原始值
```

