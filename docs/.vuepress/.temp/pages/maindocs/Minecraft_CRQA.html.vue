<template><div><h1 id="常见游戏崩溃问题" tabindex="-1"><a class="header-anchor" href="#常见游戏崩溃问题" aria-hidden="true">#</a> 常见游戏崩溃问题</h1>
<ul>
<li>本文适用的游戏：Minecraft；</li>
<li>本文适用系统版本：Windows 7 及以上；</li>
<li>使用计算机阅读效果更佳。</li>
</ul>
<div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>使用左侧的侧边栏目录来快速寻找您的问题。</p>
<p><img src="@source/maindocs/assets/Minecraft_CRQA/catalogue.png" alt="目录"></p>
</div>
<h2 id="java-配置错误" tabindex="-1"><a class="header-anchor" href="#java-配置错误" aria-hidden="true">#</a> Java 配置错误</h2>
<div class="custom-container warning"><p class="custom-container-title">警告</p>
<p>如果您游玩 1.17 及之后的 Minecraft (自 1.18-pre2 开始) ，请务必使用 Java 17 运行游戏。</p>
</div>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>当然您也不必过于惊慌，如果您打开了 <code v-pre>自动选择合适的 Java 版本</code> 功能， BakaXL 会为您自动选择合适的 Java 并且在缺少适合的运行环境时为您自动安装。</p>
<p>您也可以手动选择 Java 版本，但是这一般适用于高级用户，当您手动选择 Java 版本时请铭记上方警告。</p>
</div>
<h3 id="使用-forge-时" tabindex="-1"><a class="header-anchor" href="#使用-forge-时" aria-hidden="true">#</a> 使用 Forge 时</h3>
<p>由于 <code v-pre>Forge</code> 的兼容性问题，<strong>请务必使用与该版本对应的 Java 来运行你的 Minecraft</strong> ，若仍然崩溃，请检查您使用的 Java 版本是否是 <code v-pre>Java 8u321</code> 或以上。（我们推荐使用：<a href="https://cdn.azul.com/zulu/bin/zulu8.58.0.13-ca-jre8.0.312-win_x64.msi" target="_blank" rel="noopener noreferrer"><strong>Java 8u312</strong><ExternalLinkIcon/></a> 来运行 1.16.5 及以下版本的 Minecraft)</p>
<h3 id="原版-fabric" tabindex="-1"><a class="header-anchor" href="#原版-fabric" aria-hidden="true">#</a> 原版 &amp; Fabric</h3>
<p>虽然 Minecraft 原版 以及 Fabric 支持高版本的 Java，但是我们仍然推荐您使用 Java 8。</p>
<div class="custom-container warning"><p class="custom-container-title">警告</p>
<p>请避免使用 Java 8u321，你可以替换为 Java 8u312 或者最新版本的 Java 8。</p>
</div>
<h2 id="mod-冲突" tabindex="-1"><a class="header-anchor" href="#mod-冲突" aria-hidden="true">#</a> Mod 冲突</h2>
<p>请按照自己的选择来禁用冲突的 Mod，若您不知道哪些 Mod 冲突，请前往 <a href="https://jq.qq.com/?_wv=1027&amp;k=TwvkLgkB" target="_blank" rel="noopener noreferrer"><strong>BakaXL 官方群聊</strong><ExternalLinkIcon/></a>寻求帮助，或按照教程自查。</p>
<p><img src="@source/maindocs/assets/Minecraft_CRQA/gameModSetting.png" alt="BakaXL Mod 管理界面"></p>
<h2 id="显卡驱动过旧-未安装" tabindex="-1"><a class="header-anchor" href="#显卡驱动过旧-未安装" aria-hidden="true">#</a> 显卡驱动过旧 / 未安装</h2>
<p>在这之前，您需要了解您电脑所使用显卡的厂商。</p>
<div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>笔记本用户通常可以直接跳过此节。</p>
</div>
<ol>
<li>
<p>按下 <code v-pre>Win</code> + <code v-pre>R</code> 调出 <code v-pre>运行</code> 窗口；</p>
</li>
<li>
<p>在运行窗口中输入 <code v-pre>dxdiag</code> ，并点击 <code v-pre>确定</code> ；</p>
</li>
<li>
<p>在弹出的窗口中点击 <code v-pre>显示</code> ，在 <code v-pre>制造商</code> 一列将会显示您的显卡制造商。</p>
</li>
</ol>
<p><img src="@source/maindocs/assets/Minecraft_CRQA/directXtools.png" alt="dx诊断工具"></p>
<h3 id="笔记本用户" tabindex="-1"><a class="header-anchor" href="#笔记本用户" aria-hidden="true">#</a> 笔记本用户</h3>
<p>请前往您的笔记本制造商的官方网站获取对应的驱动程序软件。</p>
<h3 id="intel-核芯显卡" tabindex="-1"><a class="header-anchor" href="#intel-核芯显卡" aria-hidden="true">#</a> Intel 核芯显卡</h3>
<p>请下载 <a href="https://dsadata.intel.com/installer" target="_blank" rel="noopener noreferrer"><strong>英特尔™驱动程序和支持助理</strong><ExternalLinkIcon/></a> 来更新显卡驱动。</p>
<h3 id="amd-显卡-处理器" tabindex="-1"><a class="header-anchor" href="#amd-显卡-处理器" aria-hidden="true">#</a> AMD 显卡 / 处理器</h3>
<p>前往 <a href="https://www.amd.com/zh-hans/support" target="_blank" rel="noopener noreferrer"><strong>AMD 驱动程序与支持</strong><ExternalLinkIcon/></a> 页面根据您的显卡 / 处理器型号下载最新的驱动程序 。</p>
<p><img src="@source/maindocs/assets/Minecraft_CRQA/amdDriver.png" alt="AMD 驱动下载页面"></p>
<h3 id="nvidia-显卡" tabindex="-1"><a class="header-anchor" href="#nvidia-显卡" aria-hidden="true">#</a> NVIDIA 显卡</h3>
<p>请前往 <a href="https://www.nvidia.cn/geforce/drivers/" target="_blank" rel="noopener noreferrer"><strong>NVIDIA 驱动程序</strong><ExternalLinkIcon/></a> 页面根据显卡型号和需要下载最新的显卡驱动。</p>
<p><img src="@source/maindocs/assets/Minecraft_CRQA/nvidiaDriver.png" alt="NVIDIA 驱动下载页面"></p>
<h2 id="分配内存过大-过小" tabindex="-1"><a class="header-anchor" href="#分配内存过大-过小" aria-hidden="true">#</a> 分配内存过大 (过小)</h2>
<ol>
<li>前往 <code v-pre>本体设置</code> 并选择 <code v-pre>Java 虚拟机与内存</code>；</li>
<li>点击 <code v-pre>内存设置</code>；</li>
<li>确保 <code v-pre>自动设置内存</code> 为 <code v-pre>开</code>。</li>
</ol>
<div class="custom-container warning"><p class="custom-container-title">警告</p>
<p>当您选择手动分配内存时，请确保分配的内存没有超过您目前可用的最大内存。</p>
</div>
<p><img src="@source/maindocs/assets/Minecraft_CRQA/systemMemory.png" alt="系统内存"></p>
<div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>Mod 越多（或材质包分辨率更大，能见度更远）时你需要分配更多的内存，但是不要超出你的可用内存。</p>
</div>
<h2 id="无法解决问题-其他" tabindex="-1"><a class="header-anchor" href="#无法解决问题-其他" aria-hidden="true">#</a> 无法解决问题 / 其他</h2>
<p>请寻求 BakaXL 官方群聊中的开发者 / 群员的帮助，或在其它例如 MCBBS 等交流论坛询问以及利用搜索引擎查询解决方案。</p>
<p><RouterLink to="/maindocs/How_To_Asking_Question.html">如何正确地请求别人的帮助？</RouterLink></p>
</div></template>
