<template><div><h1 id="有关版本隔离" tabindex="-1"><a class="header-anchor" href="#有关版本隔离" aria-hidden="true">#</a> 有关版本隔离</h1>
<h2 id="何为版本隔离" tabindex="-1"><a class="header-anchor" href="#何为版本隔离" aria-hidden="true">#</a> 何为版本隔离</h2>
<p>顾名思义，版本隔离即为将版本隔离为独立的个体。</p>
<ul>
<li>版本隔离实际操作为指定游戏目录，是游戏本身所具有的功能，开启后不会对游戏产生影响。</li>
<li>开启版本隔离后会把除 <em><code v-pre>assets</code><em>和</em><code v-pre>libraries</code></em> 等文件夹之外的内容放到指定的目录。</li>
<li>不开启版本隔离时游戏本体存储在 <em><code v-pre>.minecraft</code></em> 目录中。</li>
<li>开启版本隔离后游戏本体存储在 <em><code v-pre>.minecraft/version/</code><em>目录中。
（其中包括</em><code v-pre>.minecraft</code></em> 目录下 <em><code v-pre>saves</code></em>（游戏存档），<em><code v-pre>mods</code></em>（模组），<em><code v-pre>resources</code></em>（资源包），<em><code v-pre>shaderpacks</code></em>（光影包）等文件夹）。</li>
</ul>
<p>因此，开启版本隔离后，你可以<strong>启动多个含加载器的版本，且其模组，资源包，光影，存档，数据包等不影响其他版本</strong>。</p>
<p>当希望存在多个含加载器的不同版本时，通常较简单的做法是<strong>打开版本隔离</strong>。</p>
<h2 id="版本隔离的弊端" tabindex="-1"><a class="header-anchor" href="#版本隔离的弊端" aria-hidden="true">#</a> 版本隔离的弊端</h2>
<p>开启版本隔离后，同时安装同一版本多个 Mod 加载器的玩家会发现资源包，光影，存档互相隔离似乎是不方便的。</p>
<h3 id="解决办法" tabindex="-1"><a class="header-anchor" href="#解决办法" aria-hidden="true">#</a> 解决办法</h3>
<p>这边推荐三种方法：</p>
<ol>
<li>使用 BakaXL 提供的<strong>添加 Minecraft 实例目录</strong>功能。</li>
<li>将文件夹中对应内容复制到需要的版本中（这种方法简便但经常操作略显繁琐，适合不经常改动上述内容的玩家）；</li>
<li>使用软链接实现多个版本内容互通（仅需一次操作，一劳永逸，适合经常修改上述内容的玩家，下文将详细讲述）。</li>
</ol>
<h4 id="方法一" tabindex="-1"><a class="header-anchor" href="#方法一" aria-hidden="true">#</a> 方法一</h4>
<blockquote>
<p>本方法适用于 BakaXL 预览体验版本用户。</p>
<p>前往 <code v-pre>本体设置</code> &gt; <code v-pre>BakaXL 预览体验计划</code>，选择 <code v-pre>鹦鹉通道</code>，点击 <code v-pre>变更</code> 即可更新到 BakaXL 预览体验版本。</p>
</blockquote>
<p>前往 <code v-pre>本体设置</code> &gt; <code v-pre>游戏目录</code> &gt; <code v-pre>添加 Minecraft 实例目录</code>，点击 <code v-pre>添加目录</code>，随后选择一个目录。</p>
<h4 id="方法三" tabindex="-1"><a class="header-anchor" href="#方法三" aria-hidden="true">#</a> 方法三</h4>
<blockquote>
<p>本方法适用于 Windows Vista 及以后版本的 Windows 操作系统。</p>
</blockquote>
<p>假设有两个版本分别为 A 与 B ，希望将其存档互通，</p>
<ol>
<li>找到两个版本的存档文件夹，目录分别为 <em><code v-pre>~/.minecraft/versions/A/saves</code></em> 与  <em><code v-pre>~/.minecraft/versions/B/saves</code></em>；</li>
<li>将B存档文件夹中内容（如果存在的话）全部移至A存档文件夹，并删除B存档文件夹；</li>
<li>打开命令提示符（CMD）输入：<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>mklink /J <span class="token string">"~/.minecraft/versions/B/saves"</span> <span class="token string">"~/.minecraft/versions/A/saves"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>这将建立一个由 A 存档目录指向 B 存档目录的软链接；</li>
<li>输出<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>为 ~/.minecraft/versions/B/saves <span class="token operator">&lt;&lt;</span><span class="token operator">==</span><span class="token operator">=</span><span class="token operator">>></span> ~/.minecraft/versions/A/saves 创建的联接
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>即成功创建软链接。</li>
</ol>
<p>此时无论打开 A 还是 B 版本，都可看见互通的存档。</p>
<p>材质、光影、Mod 文件夹的同步同上。</p>
</div></template>
