import{_ as e,o as n,c as i,a as s}from"./app-3d925723.js";const l={},a=s(`<h2 id="nginx中的proxy-pass有uri问题" tabindex="-1"><a class="header-anchor" href="#nginx中的proxy-pass有uri问题" aria-hidden="true">#</a> nginx中的proxy_pass有uri问题</h2><p>nginx中proxy_pass中如果带有uri那么location中的匹配的将会被替换掉，如果不带uri那么·proxy_pass将会替换掉location所匹配的前面的东西</p><p>例子：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code> proxy_pass没带路径
 
 
 server {
        listen 8080;
        server_name localhost;

        location /get {
            proxy_pass http://localhost:3000;
        }
        #或者
        location /get/ {
            proxy_pass http://localhost:3000;
        }
        
        #结果都是 将http://localhost:8080/get/test转发去http://localhost:3000/get/test
    }


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>  proxy_pass带uri（/及后面的都成为uri）
  
  server {
        listen 8080;
        server_name localhost;

        location /get {
            # 结果是 将http://localhost:8080/get/test转发去http://localhost:3000//test，出错~
            proxy_pass http://localhost:3000/;
        }
        #或者
        location /get/ {
            # 结果是 将http://localhost:8080/get/test转发去http://localhost:3000/test
            proxy_pass http://localhost:3000/;
        }
    }

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),d=[a];function t(r,v){return n(),i("div",null,d)}const o=e(l,[["render",t],["__file","a11.html.vue"]]);export{o as default};
