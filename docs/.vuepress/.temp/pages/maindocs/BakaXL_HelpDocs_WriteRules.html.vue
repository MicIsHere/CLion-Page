<template><div><h1 id="bakaxl-帮助文档编写规范" tabindex="-1"><a class="header-anchor" href="#bakaxl-帮助文档编写规范" aria-hidden="true">#</a> BakaXL 帮助文档编写规范</h1>
<blockquote>
<p>本篇主要讲解如何编写 BakaXL 帮助文档。</p>
</blockquote>
<h3 id="bakaxl-版本" tabindex="-1"><a class="header-anchor" href="#bakaxl-版本" aria-hidden="true">#</a> BakaXL 版本</h3>
<p>如果您想获取 BakaXL 的正式版或您收不到 (不确认) BakaXL 测试版的推送通知您可以前往 <a href="http://jk-insider.bakaxl.com:8888/" target="_blank" rel="noopener noreferrer">BakaXL Jenkins<ExternalLinkIcon/></a> 的构建页面获取最新版 BakaXL。</p>
<p>其中 <code v-pre>BakaXL Insider Parrot</code> 是鹦鹉通道，也是最新推送的 3.0 版本，而 <code v-pre>BakaXL Sloth</code> 是正式版通道，稳定版的推送通道，选择构建号最新的版本进行下载即可。</p>
<p>在未来 <code v-pre>BakaXL Insider Bunny</code> 会启用，该通道适用于 BakaXL 4.0 预览版本，在 4.0 测试版上线通知前，我们的帮助文档仅限于 3.0 版本，当然我们会预留 4.0 的文档路径。</p>
<blockquote>
<p>BakaXL LTS 2.x 版本已宣布停用并且不给予更新支持，因此帮助文档应当去引导用户使用 3.0 版本，我们也不提供 2.x 的解决方案。</p>
</blockquote>
<h3 id="文本格式" tabindex="-1"><a class="header-anchor" href="#文本格式" aria-hidden="true">#</a> 文本格式</h3>
<ul>
<li>中英文、中英文符号、数字空格：</li>
</ul>
<p>在英文单词/数字与文字之间保留空格作为间距，在代码块之间也使用空格作为间距。</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>正确示范：BakaXL 是新一代 Minecraft: Java Editon 启动器，具有众多功能，现已支持 Windows 7 以上系统。
错误示范：BakaXL是新一代Minecraft:Java Editon启动器，具有众多功能，现已支持Windows7以上系统。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>专有名词大小写：</li>
</ul>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>正确示范：BakaXL、Minecraft
错误示范：bakaxl、minecraft
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>统一使用 <code v-pre>/</code> 作为或的替代符号与路径符号；</li>
<li>在进行部分内容的英译中时请参考 <code v-pre>标准译名</code> 而不是使用机器翻译；</li>
<li>括号优先使用 <code v-pre>半角符号</code> (在英文输入法下打出的符号)；</li>
<li>规范使用不同标题大小；
<ul>
<li>在所有文档中请使用 <code v-pre># 标题</code> 作为该文档的主标题，该标题不得有第二个，使用 <code v-pre>## 标题</code> 作为问题标题，使用标题请务必按照层级使用，不得跨级，否则会导致侧边栏不渲染目录！</li>
</ul>
</li>
<li>禁止随意使用 HTML 来渲染文档！ Markdown 支持通过 HTML 在获得一些特殊的效果，但是除非必要请勿使用 HTML 作为语法。</li>
</ul>
<div class="custom-container tip"><p class="custom-container-title">排版提示</p>
<p>在进行编写时，请务必参考该项目：<a href="https://github.com/sparanoid/chinese-copywriting-guidelines/blob/master/README.zh-Hans.md" target="_blank" rel="noopener noreferrer">中文文案排版指北 - GitHub<ExternalLinkIcon/></a></p>
</div>
<h3 id="改善观感" tabindex="-1"><a class="header-anchor" href="#改善观感" aria-hidden="true">#</a> 改善观感</h3>
<ol>
<li>不要大量的使用<strong>加粗字体</strong>；</li>
<li>不玩梗；</li>
<li>不使用不文明用语；</li>
<li>使用标题时，请用标题；不使用粗体字代替标题；</li>
<li>标题等级分明，不随意使用跨等级标题；</li>
<li>在用词方面注意语法以及语意，避免产生歧义，不应出现地域性词语与方言。</li>
</ol>
<p>以上<code v-pre>行为</code>均会<em>导致文</em>档<strong>十分瞎眼或观感极差</strong>，所以<strong>绝对</strong>不要这样干  &lt;这就是例子</p>
<h3 id="使用分割线" tabindex="-1"><a class="header-anchor" href="#使用分割线" aria-hidden="true">#</a> 使用分割线</h3>
<p>尽量避免使用分割线，分割线会给文档内容带来割裂感，在你需要的时候才应该这么做。</p>
<blockquote>
<p>在一般的 Markdown 文档编写中不需要用到分割线，更不要随意使用分割线，所有标题会自带分割线。</p>
</blockquote>
<h3 id="截图-被相对调用的资源" tabindex="-1"><a class="header-anchor" href="#截图-被相对调用的资源" aria-hidden="true">#</a> 截图 / 被相对调用的资源</h3>
<ul>
<li>BakaXL 截图请使用<strong>默认窗口大小</strong>，不要随意改变窗口大小；</li>
<li>上传截图前确保图片能够找准重点而不是将重点藏在小角落；</li>
<li>为缩减仓库体积，图片推荐上传至 <a href="https://pic.onmicrosoft.cn" target="_blank" rel="noopener noreferrer">pic.onmicrosoft.cn<ExternalLinkIcon/></a> 或其他你觉得可信的图床；</li>
<li>请及时在仓库 <code v-pre>Docs-assets</code>(https://github.com/BakaXL-Support/Docs-assets) 保留一份存档以防未来图床跑路或其它情况；</li>
<li>相对路径的引用方式请务必使用 <code v-pre>./</code> 而不是 <code v-pre>/</code>。使用 <code v-pre>/</code> 会导致构建时崩溃；</li>
<li>被调用资源名称请使用小驼峰命名法。</li>
</ul>
<blockquote>
<p>小驼峰命名法：名称首个开头单词全小写，后面的单词首字母大写。</p>
</blockquote>
<h3 id="外链" tabindex="-1"><a class="header-anchor" href="#外链" aria-hidden="true">#</a> 外链</h3>
<ul>
<li>外链必须是可信来源，如果是资料引用请使用已获得官方证实的资料；</li>
<li>如果外链有大量广告 / 误导内容请在文档中使用截图指明。</li>
</ul>
<h3 id="新建文档" tabindex="-1"><a class="header-anchor" href="#新建文档" aria-hidden="true">#</a> 新建文档</h3>
<ul>
<li>新建立的文档命名务必符合大驼峰命名法。</li>
</ul>
<blockquote>
<p>大驼峰命名法: 所有单词首字母大写。</p>
</blockquote>
<div class="custom-container warning"><p class="custom-container-title">注意</p>
<p>如果你不知道如何命名，请在群内询问 / 参考其它文件命名方法。</p>
</div>
<div class="custom-container tip"><p class="custom-container-title">规则之外的情况</p>
<p><code v-pre>maindocs.md</code> 文件属于例外，其中 <code v-pre>assets/img</code> 便是 <code v-pre>maindocs.md</code> 的资源文件存放文件夹。</p>
</div>
<h3 id="提交方法" tabindex="-1"><a class="header-anchor" href="#提交方法" aria-hidden="true">#</a> 提交方法</h3>
<p>请先 Fork 本仓库，而后在您的仓库内进行更改，更改完成后 Pull request 至 <code v-pre>main</code> 分支 (如果修改了构建代码请选择 <code v-pre>dev</code> 分支)，这是所有人的更新规范，包括创建者也是使用这种方法更新文档资料，这样能够避免很多冲突。</p>
<ul>
<li>如果在 Pull request 后显示出现了冲突 (conflict) 但是您不会解决的话请联系我们，我们会为您处理冲突问题。</li>
</ul>
<p>您可以查看我们的 <a href="https://github.com/BakaXL-Support/BakaXL-QA-docs/wiki" target="_blank" rel="noopener noreferrer">Wiki<ExternalLinkIcon/></a> 来获得一些其它帮助。</p>
</div></template>
