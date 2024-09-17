import{_ as t,r as d,o as u,c as o,b as e,d as i,f as s,a as l}from"./app-1f8ba552.js";const a={},r=l(`<h2 id="代码统一规范" tabindex="-1"><a class="header-anchor" href="#代码统一规范" aria-hidden="true">#</a> 代码统一规范</h2><ol><li><h3 id="eslint约束" tabindex="-1"><a class="header-anchor" href="#eslint约束" aria-hidden="true">#</a> ESLint约束</h3><blockquote><p>检测JS/TS代码</p></blockquote></li></ol><h4 id="_1-安装" tabindex="-1"><a class="header-anchor" href="#_1-安装" aria-hidden="true">#</a> 1.安装</h4><ol><li>下载ESLint插件</li><li>安装依赖</li></ol><pre><code>\`npm i -D eslint安装eslint作为开发时的依赖\`
</code></pre><h4 id="_2-配置" tabindex="-1"><a class="header-anchor" href="#_2-配置" aria-hidden="true">#</a> 2.配置</h4><ol><li>配置初始化</li></ol><pre><code>\`npx eslint --init \`

npx是一个 npm 包执行器,通过 \`npx\`，你可以直接运行安装在项目中的 npm 包，而不需要全局安装这些包。它的作用类似于全局安装包后使用命令行执行该包的命令，但是不需要事先全局安装。
</code></pre><ol><li><p>根目录自动生成的<code>.eslintrc.cjs</code> 配置内容如下：</p><ol><li><div class="language-SQL line-numbers-mode" data-ext="SQL"><pre class="language-SQL"><code>module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: [
    &quot;eslint:recommended&quot;,
    &quot;plugin:vue/vue3-essential&quot;,
    &quot;plugin:@typescript-eslint/recommended&quot;,
  ],
  overrides: [],
  parser: &quot;vue-eslint-parser&quot;,   //在默认配置基础上需要修改解析器为 vue-eslint-parser ，不然在检测执行中出现 error Parsing error: &#39;&gt;&#39; expected 的解析错误
  parserOptions: {
    ecmaVersion: &quot;latest&quot;,
    sourceType: &quot;module&quot;,
    parser:&quot;@typescript-eslint/parser&quot;
  },
  plugins: [&quot;vue&quot;, &quot;@typescript-eslint&quot;],
  rules: {
    &quot;vue/multi-word-component-names&quot;: &quot;off&quot;, // 禁用vue文件强制多个单词命名
    &quot;@typescript-eslint/no-explicit-any&quot;: [&quot;off&quot;], //允许使用any
    &quot;@typescript-eslint/no-this-alias&quot;: [
      &quot;error&quot;,
      {
        allowedNames: [&quot;that&quot;], // this可用的局部变量名称
      },
    ],
    &quot;@typescript-eslint/ban-ts-comment&quot;: &quot;off&quot;, //允许使用@ts-ignore
    &quot;@typescript-eslint/no-non-null-assertion&quot;: &quot;off&quot;, //允许使用非空断言
    &quot;no-console&quot;: [
      //提交时不允许有console.log
      &quot;warn&quot;,
      {
        allow: [&quot;warn&quot;, &quot;error&quot;],
      },
    ],
    &quot;no-debugger&quot;: &quot;warn&quot;, //提交时不允许有debugger
  },
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol></li><li><p>新建并配置忽略eslint文件.eslintignore</p><ol><li><div class="language-SQL line-numbers-mode" data-ext="SQL"><pre class="language-SQL"><code>dist
node_modules
public
.husky
.vscode
.idea
*.sh
*.md

src/assets

.eslintrc.cjs
.prettierrc.cjs
.stylelintrc.cjs
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol></li><li><p>添加eslint检测指令</p></li></ol><pre><code>在package文件里面scripts里配置eslint检测指令
</code></pre><div class="language-SQL line-numbers-mode" data-ext="SQL"><pre class="language-SQL"><code>&quot;lint:eslint&quot;: &quot;eslint \\&quot;src/**/*.{vue,ts,js}\\&quot; --fix&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>​ 运行时直接执行npm run lint</p><ol><li><p>eslint保存自动检测</p><ol><li><p>Editor: Code Actions On Save</p></li><li><p><img src="https://fastly.jsdelivr.net/gh/shizhiweid/blogimg@main/imgs/202403181645682.png" alt="img"></p></li></ol></li><li><h3 id="prettier代码格式化工具" tabindex="-1"><a class="header-anchor" href="#prettier代码格式化工具" aria-hidden="true">#</a> prettier代码格式化工具</h3><ol><li>安装插件Prettier - Code formatter</li><li>安装依赖</li></ol></li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>npm i -D prettier
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol><li><p>新建并配置.prettierrc.cjs文件</p><ol><li><div class="language-SQL line-numbers-mode" data-ext="SQL"><pre class="language-SQL"><code>//官方配置
module.exports = {
  // (x)=&gt;{},单个参数箭头函数是否显示小括号。(always:始终显示;avoid:省略括号。默认:always)
  arrowParens: &quot;always&quot;,
  // 开始标签的右尖括号是否跟随在最后一行属性末尾，默认false
  bracketSameLine: false,
  // 对象字面量的括号之间打印空格 (true - Example: { foo: bar } ; false - Example: {foo:bar})
  bracketSpacing: true,
  // 是否格式化一些文件中被嵌入的代码片段的风格(auto|off;默认auto)
  embeddedLanguageFormatting: &quot;auto&quot;,
  // 指定 HTML 文件的空格敏感度 (css|strict|ignore;默认css)
  htmlWhitespaceSensitivity: &quot;css&quot;,
  // 当文件已经被 Prettier 格式化之后，是否会在文件顶部插入一个特殊的 @format 标记，默认false
  insertPragma: false,
  // 在 JSX 中使用单引号替代双引号，默认false
  jsxSingleQuote: false,
  // 每行最多字符数量，超出换行(默认80)
  printWidth: 120,
  // 超出打印宽度 (always | never | preserve )
  proseWrap: &quot;preserve&quot;,
  // 对象属性是否使用引号(as-needed | consistent | preserve;默认as-needed:对象的属性需要加引号才添加;)
  quoteProps: &quot;as-needed&quot;,
  // 是否只格式化在文件顶部包含特定注释(@prettier| @format)的文件，默认false
  requirePragma: false,
  // 结尾添加分号
  semi: true,
  // 使用单引号 (true:单引号;false:双引号)
  singleQuote: false,
  // 缩进空格数，默认2个空格
  tabWidth: 2,
  // 元素末尾是否加逗号，默认es5: ES5中的 objects, arrays 等会添加逗号，TypeScript 中的 type 后不加逗号
  trailingComma: &quot;es5&quot;,
  // 指定缩进方式，空格或tab，默认false，即使用空格
  useTabs: false,
  // vue 文件中是否缩进 &lt;style&gt; 和 &lt;script&gt; 标签，默认 false
  vueIndentScriptAndStyle: false,
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol></li><li><p>新建并配置.prettierignore忽略文件</p><ol><li><div class="language-SQL line-numbers-mode" data-ext="SQL"><pre class="language-SQL"><code>dist
node_modules
public
.husky
.vscode
.idea
*.sh
*.md

src/assets
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol></li><li><p>配置启动命令</p></li></ol><p><code>&quot;lint:prettier&quot;: &quot;prettier --write \\&quot;**/*.{js,ts,json,css,less,scss,vue,html,md}\\&quot;&quot;</code></p><ol><li><p>配置prettier自动保存</p><ol><li><div class="language-SQL line-numbers-mode" data-ext="SQL"><pre class="language-SQL"><code>{
  &quot;editor.formatOnSave&quot;: true, // 保存格式化文件
  &quot;editor.defaultFormatter&quot;: &quot;esbenp.prettier-vscode&quot; // 指定 prettier 为所有文件默认格式化器
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol></li><li><h3 id="stylelint-css" tabindex="-1"><a class="header-anchor" href="#stylelint-css" aria-hidden="true">#</a> stylelint css</h3><blockquote><p>CSS代码检测规范</p></blockquote><ol><li>安装插件Stylelint</li><li>安装依赖</li></ol><div class="language-SQL line-numbers-mode" data-ext="SQL"><pre class="language-SQL"><code>npm install -D stylelint stylelint-config-standard stylelint-config-recommended-scss stylelint-config-recommended-vue postcss postcss-html postcss-scss stylelint-config-recess-order stylelint-config-html
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol><li>新建并配置.stylelintrc.cjs文件</li></ol><div class="language-SQL line-numbers-mode" data-ext="SQL"><pre class="language-SQL"><code>module.exports = {
  // 继承推荐规范配置
  extends: [
    &quot;stylelint-config-standard&quot;,
    &quot;stylelint-config-recommended-scss&quot;,
    &quot;stylelint-config-recommended-vue/scss&quot;,
    &quot;stylelint-config-html/vue&quot;,
    &quot;stylelint-config-recess-order&quot;,
  ],
  // 指定不同文件对应的解析器
  overrides: [
    {
      files: [&quot;**/*.{vue,html}&quot;],
      customSyntax: &quot;postcss-html&quot;,
    },
    {
      files: [&quot;**/*.{css,scss}&quot;],
      customSyntax: &quot;postcss-scss&quot;,
    },
  ],
  // 自定义规则
  rules: {
    // 允许 global 、export 、v-deep等伪类
    &quot;selector-pseudo-class-no-unknown&quot;: [
      true,
      {
        ignorePseudoClasses: [&quot;global&quot;, &quot;export&quot;, &quot;v-deep&quot;, &quot;deep&quot;],
      },
    ],
  },
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol><li><p>配置检测时的命令(可以检测css中的错误)</p><ol><li><div class="language-SQL line-numbers-mode" data-ext="SQL"><pre class="language-SQL"><code>&quot;lint:stylelint&quot;: &quot;stylelint  \\&quot;**/*.{css,scss,vue,html}\\&quot; --fix&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ol></li><li><p>设置保存自动检测（自动修改css代码为符合书写规范的顺序）</p><ol><li><div class="language-SQL line-numbers-mode" data-ext="SQL"><pre class="language-SQL"><code>{
  &quot;editor.codeActionsOnSave&quot;: {
    &quot;source.fixAll.stylelint&quot;: true // 开启 Stylelint 保存自动检测
  },
  // Stylelint 校验文件
  &quot;stylelint.validate&quot;: [&quot;css&quot;, &quot;scss&quot;, &quot;vue&quot;, &quot;html&quot;]
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol></li></ol></li></ol><h2 id="git提交规范" tabindex="-1"><a class="header-anchor" href="#git提交规范" aria-hidden="true">#</a> git提交规范</h2><ol><li><h3 id="husky" tabindex="-1"><a class="header-anchor" href="#husky" aria-hidden="true">#</a> Husky</h3></li></ol><p>安装并配置</p><div class="language-SQL line-numbers-mode" data-ext="SQL"><pre class="language-SQL"><code>npx husky-init &amp;&amp; npm install
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>安装后会自动生成.husky文件夹</p><blockquote><p>核心内容是配置 Husky 的 pre-commit 和 commit-msg 两个钩子:</p><p>pre-commit：Husky + Lint-staged 整合实现 Git 提交前代码规范检测/格式化 (前提：ESlint + Prettier + Stylelint 代码统一规范)；</p><p>commit-msg: Husky + Commitlint + Commitizen + cz-git 整合实现生成规范化且高度自定义的 Git commit message。</p></blockquote><ol><li><h3 id="lint-staged" tabindex="-1"><a class="header-anchor" href="#lint-staged" aria-hidden="true">#</a> lint-staged</h3><blockquote><p>是一个在 git add 到暂存区的文件运行 linters (ESLint/Prettier/StyleLint) 的工具，避免在 git commit 提交时在整个项目执行。</p></blockquote><div class="language-SQL line-numbers-mode" data-ext="SQL"><pre class="language-SQL"><code>npm install -D lint-staged
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ol><p>package.json 中添加不同文件在 git 提交执行的 lint 检测配置</p><div class="language-SQL line-numbers-mode" data-ext="SQL"><pre class="language-SQL"><code>&quot;lint-staged&quot;: {
    &quot;*.{js,ts}&quot;: [
      &quot;eslint --fix&quot;,
      &quot;prettier --write&quot;
    ],
    &quot;*.{cjs,json}&quot;: [
      &quot;prettier --write&quot;
    ],
    &quot;*.{vue,html}&quot;: [
      &quot;eslint --fix&quot;,
      &quot;prettier --write&quot;,
      &quot;stylelint --fix&quot;
    ],
    &quot;*.{scss,css}&quot;: [
      &quot;stylelint --fix&quot;,
      &quot;prettier --write&quot;
    ],
    &quot;*.md&quot;: [
      &quot;prettier --write&quot;
    ]
  }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>package.json 的 scripts 添加 lint-staged 指令</p><div class="language-SQL line-numbers-mode" data-ext="SQL"><pre class="language-SQL"><code> &quot;lint:lint-staged&quot;: &quot;lint-staged&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>修改提交前钩子命令</p><p>根目录 .husky 目录下 pre-commit 文件中的 npm test 修改为<code>npm run lint:lint-staged</code></p><p>这样在git add . git commit -m &quot;&quot; 后就会对暂存区的文件进行检测</p>`,31),c=l(`<li><h3 id="commitlint" tabindex="-1"><a class="header-anchor" href="#commitlint" aria-hidden="true">#</a> Commitlint</h3><blockquote><p>Commitlint 检查您的提交消息是否符合 Conventional commit format</p></blockquote><ol><li>安装</li></ol><p><code>npm install -D @commitlint/cli @commitlint/config-conventional</code></p><ol><li><p>创建并配置commitlint.config.cjs</p><ol><li><div class="language-SQL line-numbers-mode" data-ext="SQL"><pre class="language-SQL"><code>module.exports = {
  // 继承的规则
  extends: [&quot;@commitlint/config-conventional&quot;],
  // @see: https://commitlint.js.org/#/reference-rules
  rules: {
    &quot;subject-case&quot;: [0], // subject大小写不做校验

    // 类型枚举，git提交type必须是以下类型
    &quot;type-enum&quot;: [
      2,
      &quot;always&quot;,
      [
    &#39;feat&#39;, // 新增功能
        &#39;fix&#39;, // 修复缺陷
        &#39;docs&#39;, // 文档变更
        &#39;style&#39;, // 代码格式（不影响功能，例如空格、分号等格式修正）
        &#39;refactor&#39;, // 代码重构（不包括 bug 修复、功能新增）
        &#39;perf&#39;, // 性能优化
        &#39;test&#39;, // 添加疏漏测试或已有测试改动
        &#39;build&#39;, // 构建流程、外部依赖变更（如升级 npm 包、修改 webpack 配置等）
        &#39;ci&#39;, // 修改 CI 配置、脚本
        &#39;revert&#39;, // 回滚 commit
        &#39;chore&#39;, // 对构建过程或辅助工具和库的更改（不影响源文件、测试用例）
      ],
    ],
  },
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol></li><li><p>执行下面命令生成 <code>commint-msg</code> 钩子用于 git 提交信息校验，命令来自：</p></li></ol><p><code>npx husky add .husky/commit-msg &quot;npx --no -- commitlint --edit $1&quot;</code></p></li>`,1),v=e("h3",{id:"commitizen-cz-git",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#commitizen-cz-git","aria-hidden":"true"},"#"),i(" Commitizen&cz-git")],-1),m=e("strong",null,"commitizen",-1),b=e("code",null,"git commit",-1),q={href:"https://github.com/commitizen/cz-cli",target:"_blank",rel:"noopener noreferrer"},p=e("strong",null,"cz-git",-1),g={href:"https://cz-git.qbb.sh/zh/",target:"_blank",rel:"noopener noreferrer"},h=l(`<ol><li>安装 <ol><li><code>npm install -D commitizen cz-git</code></li></ol></li><li>cz-git 配置</li></ol><p><strong>修改</strong> <strong><code>package.json</code></strong> <strong>指定使用的适配器</strong></p><div class="language-JSON line-numbers-mode" data-ext="JSON"><pre class="language-JSON"><code> &quot;config&quot;: {&quot;commitizen&quot;: {&quot;path&quot;: &quot;node_modules/cz-git&quot;}}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,3),f=e("strong",null,"cz-git 与",-1),S={href:"https://github.com/conventional-changelog/commitlint",target:"_blank",rel:"noopener noreferrer"},x=e("strong",null,"进行联动给予校验信息",-1),y={href:"https://github.com/conventional-changelog/commitlint#config",target:"_blank",rel:"noopener noreferrer"},_=l(`<div class="language-SQL line-numbers-mode" data-ext="SQL"><pre class="language-SQL"><code>prompt: {
    messages: {
      type: &quot;选择你要提交的类型 :&quot;,
      scope: &quot;选择一个提交范围（可选）:&quot;,
      customScope: &quot;请输入自定义的提交范围 :&quot;,
      subject: &quot;填写简短精炼的变更描述 :\\n&quot;,
      body: &#39;填写更加详细的变更描述（可选）。使用 &quot;|&quot; 换行 :\\n&#39;,
      breaking: &#39;列举非兼容性重大的变更（可选）。使用 &quot;|&quot; 换行 :\\n&#39;,
      footerPrefixesSelect: &quot;选择关联issue前缀（可选）:&quot;,
      customFooterPrefix: &quot;输入自定义issue前缀 :&quot;,
      footer: &quot;列举关联issue (可选) 例如: #31, #I3244 :\\n&quot;,
      generatingByAI: &quot;正在通过 AI 生成你的提交简短描述...&quot;,
      generatedSelectByAI: &quot;选择一个 AI 生成的简短描述:&quot;,
      confirmCommit: &quot;是否提交或修改commit ?&quot;,
    },
    types: [
      { value: &quot;feat&quot;, name: &quot;特性:     ✨  新增功能&quot;, emoji: &quot;:sparkles:&quot; },
      { value: &quot;fix&quot;, name: &quot;修复:     🐛  修复缺陷&quot;, emoji: &quot;:bug:&quot; },
      { value: &quot;docs&quot;, name: &quot;文档:     📝  文档变更&quot;, emoji: &quot;:memo:&quot; },
      { value: &quot;style&quot;, name: &quot;格式:     💄  代码格式（不影响功能，例如空格、分号等格式修正）&quot;, emoji: &quot;:lipstick:&quot; },
      { value: &quot;refactor&quot;, name: &quot;重构:     ♻️  代码重构（不包括 bug 修复、功能新增）&quot;, emoji: &quot;:recycle:&quot; },
      { value: &quot;perf&quot;, name: &quot;性能:     ⚡️  性能优化&quot;, emoji: &quot;:zap:&quot; },
      { value: &quot;test&quot;, name: &quot;测试:     ✅  添加疏漏测试或已有测试改动&quot;, emoji: &quot;:white_check_mark:&quot; },
      {
        value: &quot;build&quot;,
        name: &quot;构建:     📦️  构建流程、外部依赖变更（如升级 npm 包、修改 vite 配置等）&quot;,
        emoji: &quot;:package:&quot;,
      },
      { value: &quot;ci&quot;, name: &quot;集成:     🎡  修改 CI 配置、脚本&quot;, emoji: &quot;:ferris_wheel:&quot; },
      { value: &quot;revert&quot;, name: &quot;回退:     ⏪️  回滚 commit&quot;, emoji: &quot;:rewind:&quot; },
      {
        value: &quot;chore&quot;,
        name: &quot;其他:     🔨  对构建过程或辅助工具和库的更改（不影响源文件、测试用例）&quot;,
        emoji: &quot;:hammer:&quot;,
      },
    ],
    useEmoji: true,
    emojiAlign: &quot;center&quot;,
    useAI: false,
    aiNumber: 1,
    themeColorCode: &quot;&quot;,
    scopes: [],
    allowCustomScopes: true,
    allowEmptyScopes: true,
    customScopesAlign: &quot;bottom&quot;,
    customScopesAlias: &quot;custom&quot;,
    emptyScopesAlias: &quot;empty&quot;,
    upperCaseSubject: false,
    markBreakingChangeMode: false,
    allowBreakingChanges: [&quot;feat&quot;, &quot;fix&quot;],
    breaklineNumber: 100,
    breaklineChar: &quot;|&quot;,
    skipQuestions: [],
    issuePrefixes: [{ value: &quot;closed&quot;, name: &quot;closed:   ISSUES has been processed&quot; }],
    customIssuePrefixAlign: &quot;top&quot;,
    emptyIssuePrefixAlias: &quot;skip&quot;,
    customIssuePrefixAlias: &quot;custom&quot;,
    allowCustomIssuePrefix: true,
    allowEmptyIssuePrefix: true,
    confirmColorize: true,
    maxHeaderLength: Infinity,
    maxSubjectLength: Infinity,
    minSubjectLength: 0,
    scopeOverrides: undefined,
    defaultBody: &quot;&quot;,
    defaultIssues: &quot;&quot;,
    defaultScope: &quot;&quot;,
    defaultSubject: &quot;&quot;,
  },
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol><li><strong>添加提交指令</strong></li></ol>`,2),L=l('<p><code>package.json</code> 添加 <code>commit</code> 指令</p><div class="language-SQL line-numbers-mode" data-ext="SQL"><pre class="language-SQL"><code>&quot;commit&quot;: &quot;git-cz&quot;\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol><li>运行时命令 然后就会在控制台上出现交互的信息，选择地配置你的commit记录 <ol><li><code>npm`` run commit</code></li></ol></li></ol><h2 id="相关文档" tabindex="-1"><a class="header-anchor" href="#相关文档" aria-hidden="true">#</a> 相关文档</h2>',4),k={href:"https://blog.csdn.net/u013737132/article/details/130190788",target:"_blank",rel:"noopener noreferrer"},Q={href:"https://blog.csdn.net/u013737132/article/details/130190788?ydreferer=aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3UwMTM3MzcxMzIvYXJ0aWNsZS9kZXRhaWxzLzEzMDE5MTM2Mz95ZHJlZmVyZXI9YUhSMGNITTZMeTlzYVc1ckxtcDFaV3BwYmk1amJpOCUzRA%3D%3D",target:"_blank",rel:"noopener noreferrer"};function z(j,w){const n=d("ExternalLinkIcon");return u(),o("div",null,[r,e("ol",null,[c,e("li",null,[v,e("blockquote",null,[e("ul",null,[e("li",null,[m,i(": 基于Node.js的 "),b,i(" 命令行工具，辅助生成标准化规范化的 commit message。–"),e("a",q,[i("官方文档"),s(n)])]),e("li",null,[p,i(": 一款工程性更强，轻量级，高度自定义，标准输出格式的 commitizen 适配器。–"),e("a",g,[i("官方文档"),s(n)]),i(" 让 AI 来辅助生成你 git commit 的描述信息")])])]),h,e("p",null,[f,i(),e("strong",null,[e("a",S,[i("commitlint"),s(n)])]),i(),x,i("，所以可以编写于 "),e("a",y,[i("commitlint"),s(n)]),i(" 配置文件之中")]),_])]),L,e("ol",null,[e("li",null,[e("a",k,[i("https://blog.csdn.net/u013737132/article/details/130190788"),s(n)])]),e("li",null,[e("a",Q,[i("https://blog.csdn.net/u013737132/article/details/130190788?ydreferer=aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3UwMTM3MzcxMzIvYXJ0aWNsZS9kZXRhaWxzLzEzMDE5MTM2Mz95ZHJlZmVyZXI9YUhSMGNITTZMeTlzYVc1ckxtcDFaV3BwYmk1amJpOCUzRA%3D%3D"),s(n)])])])])}const C=t(a,[["render",z],["__file","代码统一规范以及git提交规范.html.vue"]]);export{C as default};
