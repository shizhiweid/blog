import{_ as l,o as a,c as o,b as n,w as c,v as m,F as w,g as v,n as u,r as f,f as I}from"./app-9cbdd870.js";const h={name:"PasswordInput",props:{value:{type:String,default:""},length:{type:Number,default:6}},data(){return{password:this.value}},methods:{handleInput(){this.$emit("input",this.password)}}},g={class:"password-input"},P={class:"password-input-box"},x=["maxlength"];function y(d,e,p,_,t,r){return a(),o("div",g,[n("div",P,[c(n("input",{onInput:e[0]||(e[0]=(...s)=>r.handleInput&&r.handleInput(...s)),class:"password-input-input","onUpdate:modelValue":e[1]||(e[1]=s=>t.password=s),maxlength:p.length,type:"text"},null,40,x),[[m,t.password]]),(a(!0),o(w,null,v(p.length,s=>(a(),o("div",{class:"password-input-item",key:s},[n("div",{class:u({"password-input-item--active":t.password.length>=s})},null,2),n("div",{class:u({"password-input-item--line":t.password.length+1===s})},null,2)]))),128))])])}const V=l(h,[["render",y],["__scopeId","data-v-e2629e4f"],["__file","CmpPasswordInput.vue"]]);const $={name:"PasswordInputDemo",components:{PasswordInput:V}},C={class:"max-width"};function b(d,e,p,_,t,r){const s=f("PasswordInput",!0);return a(),o("div",C,[I(s,{modelValue:d.password,"onUpdate:modelValue":e[0]||(e[0]=i=>d.password=i)},null,8,["modelValue"])])}const B=l($,[["render",b],["__scopeId","data-v-fa0c78ac"],["__file","PasswordInput.vue"]]);export{B as default};
