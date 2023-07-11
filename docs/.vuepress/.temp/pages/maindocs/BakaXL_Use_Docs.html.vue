<template><div><h1 id="bakaxl-使用手册" tabindex="-1"><a class="header-anchor" href="#bakaxl-使用手册" aria-hidden="true">#</a> BakaXL 使用手册</h1>
<p><RouterLink to="/maindocs/maindocs.html">&gt;&gt;&gt; BakaXL 帮助文档</RouterLink></p>
<h2 id="开始之前" tabindex="-1"><a class="header-anchor" href="#开始之前" aria-hidden="true">#</a> 开始之前</h2>
<p>要运行 BakaXL 3.0 及以上版本，您必须使用 Windows 7 及以上操作系统（由于某些功能需要 Windows 10 或以上才能正常运行，我们推荐您升级至 Windows 10）并安装 .NET Framework 4.8。</p>
<p>如果您正在使用 Windows XP 或 Windows Vista 以及更低的 Windows 版本，我们推荐您尽快升级至 Windows 10。</p>
<p><a href="https://www.microsoft.com/zh-cn/software-download/windows10" target="_blank" rel="noopener noreferrer">&gt;&gt; 下载 Windows 10<ExternalLinkIcon/></a></p>
<p>若您使用的是来源不明或者硬盘厂商/笔记本厂商自带的 Windows 系统有可能没有安装 .NET Framkework 4.8，当然不排除您自装的系统没有自带 .NET ，您可以尝试安装一下 .NET Framework 4.8</p>
<p><a href="https://dotnet.microsoft.com/zh-cn/download/dotnet-framework/thank-you/net48-offline-installer" target="_blank" rel="noopener noreferrer">&gt;&gt; 下载 .NET Framework 4.8<ExternalLinkIcon/></a></p>
<blockquote>
<p>.NET Framework 4.8 是微软发布的一套程序框架，安装它也能避免您遇到一些程序无法启动的问题，并且也不会对您的计算机造成损伤或延缓运行速度，因为它本应就存在您的系统中</p>
</blockquote>
<blockquote>
<p>当然，您也可以使用 LTS 版本（2.2.8.6），使用时出现的问题依旧会上报但由于开发人员缺失原因将不会得到解决。</p>
</blockquote>
<p><span id="download"></span></p>
<h2 id="下载" tabindex="-1"><a class="header-anchor" href="#下载" aria-hidden="true">#</a> 下载</h2>
<p>您可以随时在 BakaXL 官网下载最新版本的 BakaXL：</p>
<p><a href="https://www.bakaxl.com" target="_blank" rel="noopener noreferrer">&gt;&gt; BakaXL 官网<ExternalLinkIcon/></a></p>
<blockquote>
<p>『由于服务器需要费用，我们希望您可以对 BakaXL 进行<a href="https://afdian.net/@TT702" target="_blank" rel="noopener noreferrer">捐助<ExternalLinkIcon/></a>，请在捐助时留下您的 BakaXL Account 邮箱。BakaXL 开发者将会给您的账号添加赞助者标识以及 Insider 预览体验计划成员标识，并且您将可以进入 Insiders 局内人内部交流群。』</p>
</blockquote>
<h3 id="注意" tabindex="-1"><a class="header-anchor" href="#注意" aria-hidden="true">#</a> 注意</h3>
<p>我们<strong>不推荐</strong>在桌面或分区根目录启动 BakaXL。您可以将游戏和启动器保存在其他专用的目录（例如D盘的 Minecraft 文件夹），然后右键 BakaXL，选择「发送到」，然后单击「桌面快捷方式」，即可很方便地从桌面打开BakaXL了！</p>
<h2 id="游戏档案" tabindex="-1"><a class="header-anchor" href="#游戏档案" aria-hidden="true">#</a> 游戏档案</h2>
<p>在 BakaXL 中您可以选择离线登录、Mojang 帐号登录、Microsoft 账户登录、第三方登录（Authlib-Injector）四种方法进行登录。</p>
<p>您可以前往:</p>
<p><code v-pre>本体设置</code> &gt;<code v-pre>账户与档案</code> &gt;<code v-pre>新增一个档案</code> 来创建新的档案。</p>
<p><img src="https://raw.baka.lihaoyu.cn/images/maindocs/1.gif" alt="设置游戏档案"></p>
<h2 id="安装后事项" tabindex="-1"><a class="header-anchor" href="#安装后事项" aria-hidden="true">#</a> 安装后事项</h2>
<p>我们推荐您安装 BakaXL 之后调整为「Parrot 鹦鹉通道」更新通道，您可以在此通道内体验最新版本的 BakaXL ，包括很多功能性更新，但可能会有未完成和未清理的功能。</p>
<p>找到<code v-pre>本体设置</code> &gt; <code v-pre>BakaXL 预览体验计划</code> &gt;<code v-pre>切换为 Parrot 鹦鹉通道</code> &gt;<code v-pre>点击变更</code></p>
<p><img src="https://raw.baka.lihaoyu.cn/images/maindocs/2.gif" alt="设置鹦鹉通道"></p>
<p>这样您就可以随时更新到 BakaXL 的最新版本啦！</p>
<p>如果因某些原因，BakaXL 无法自动更新或无限更新失败，您也可以随时在 <a href="http://jk-insider.bakaxl.com:8888/job/BakaXL%20Insider%20Parrot/" target="_blank" rel="noopener noreferrer">Jenkins<ExternalLinkIcon/></a> 下载最后一次构建的结果。</p>
<h2 id="更新" tabindex="-1"><a class="header-anchor" href="#更新" aria-hidden="true">#</a> 更新</h2>
<p>当您连接至互联网时，BakaXL 会自动检查可用更新。在有可用更新的情况下，您必须更新才能继续使用 BakaXL。</p>
<p>您仍然可以通过断开您与互联网的连接等方式来绕开更新。（不推荐）</p>
<blockquote>
<p>BakaXL 若出现无限更新的 Bug 情况您可以前往 <a href="http://jk-insider.bakaxl.com:8888/job/BakaXL%20Insider%20Parrot/" target="_blank" rel="noopener noreferrer">Jenkins<ExternalLinkIcon/></a> 下载最后一次构建的结果来手动更新 BakaXL。</p>
</blockquote>
<h2 id="java-环境配置" tabindex="-1"><a class="header-anchor" href="#java-环境配置" aria-hidden="true">#</a> Java 环境配置</h2>
<p>我们建议您直接打开设置内的「让 BakaXL 自动选择 Java 版本」，这样可免去手动设置。以下是手动教程。</p>
<h3 id="已安装-java" tabindex="-1"><a class="header-anchor" href="#已安装-java" aria-hidden="true">#</a> 已安装 Java</h3>
<p>如果您之前有安装过 Java，您可以在<code v-pre>本体设置</code> &gt;<code v-pre>Java 虚拟机与内存</code> <code v-pre>&gt;Java 高级设置</code>中以以下三种方式来指定 Java 路径：</p>
<p><img src="https://raw.baka.lihaoyu.cn/images/maindocs/3.gif" alt="设置自动选择 Java 版本"></p>
<ol>
<li>
<p>自动寻找 Java 位置；</p>
</li>
<li>
<p>手动指定 Java 位置；</p>
</li>
<li>
<p>更细致的自动寻找 Java 位置。</p>
</li>
</ol>
<h3 id="未安装-java" tabindex="-1"><a class="header-anchor" href="#未安装-java" aria-hidden="true">#</a> 未安装 Java</h3>
<p>如果您从未安装过 Java，您可以直接启动游戏，BakaXL 会为您自动下载并安装 Java。</p>
<p>如果您需要手动安装特定的 Java 版本，您可以打开<code v-pre>本体设置</code> &gt;<code v-pre>Java 虚拟机与内存</code> 中找到 <code v-pre>获取 Java 8</code> 等按钮来获取对应版本的 Java 运行时。</p>
<h3 id="_1-16-及之前的-minecraft" tabindex="-1"><a class="header-anchor" href="#_1-16-及之前的-minecraft" aria-hidden="true">#</a> 1.16 及之前的 Minecraft</h3>
<p>如果您的游戏版本是 1.16 及以前的版本，那么我们推荐使用 Java 8 来运行游戏。</p>
<p>您可以在 <code v-pre>本体设置</code> &gt; <code v-pre>Java 虚拟机与内存</code> &gt; <code v-pre>获取 Java 8</code> 来获取 Java 8。</p>
<h3 id="_1-17-及之后的-minecraft" tabindex="-1"><a class="header-anchor" href="#_1-17-及之后的-minecraft" aria-hidden="true">#</a> 1.17 及之后的 Minecraft</h3>
<p>运行 Minecraft 1.17 或更高版本的 Minecraft 需要使用 Java 17。</p>
<p>您可以在 <code v-pre>本体设置</code> &gt; <code v-pre> Java 虚拟机与内存</code> &gt; <code v-pre>获取 Java 17</code> 获取。单击该按钮后下载任务会自动开始，BakaXL 将会自动下载 Java 17 至官方启动器目录，但这不需要您安装官方启动器。</p>
<h3 id="安装完成之后" tabindex="-1"><a class="header-anchor" href="#安装完成之后" aria-hidden="true">#</a> 安装完成之后</h3>
<p>一般来说，BakaXL 会自动选择 Minecraft 核心需要的 Java 环境，但在某种情况下这可能不起作用。这时您需要前往对应核心的 <code v-pre>高级核心设置</code> &gt;<code v-pre> Java 虚拟机与内存</code> 来手动选择 Java 运行时。</p>
<h2 id="安装新的-minecraft-核心" tabindex="-1"><a class="header-anchor" href="#安装新的-minecraft-核心" aria-hidden="true">#</a> 安装新的 Minecraft 核心</h2>
<p>您可以从 BakaXL 内轻松地安装 Minecraft 核心。</p>
<p>注意：您可能需要先确保下载源设置最优。前往 <code v-pre>本体设置</code> &gt; <code v-pre>下载</code> &gt; <code v-pre>中国大陆下载源加速</code> 设置为 <code v-pre>开</code>，而后镜像服务器选择 <code v-pre>MCBBS 源</code>  ，线程数请根据电脑配置酌情选择，一般默认的 128 个线程已可保证足够的下载速度。</p>
<h3 id="从-bakaxl-主界面安装" tabindex="-1"><a class="header-anchor" href="#从-bakaxl-主界面安装" aria-hidden="true">#</a> 从 BakaXL 主界面安装</h3>
<p>单击主界面形似 「C+」 的按钮，选择游戏版本，添加 Mod 加载器 (可选) 、OptiFine (可选)，开始安装。</p>
<p><img src="https://raw.baka.lihaoyu.cn/images/maindocs/4.gif" alt="安装新 Minecraft 核心"></p>
<h3 id="从-bakaxl-笨蛋广场安装" tabindex="-1"><a class="header-anchor" href="#从-bakaxl-笨蛋广场安装" aria-hidden="true">#</a> 从 BakaXL 笨蛋广场安装</h3>
<p>单击笨蛋广场主界面的「Minecraft 本体下载」按钮，选择游戏版本，添加 Mod 加载器 (可选)、OptiFine (可选)，开始安装。</p>
<p><img src="https://raw.baka.lihaoyu.cn/images/maindocs/5.gif" alt="从笨蛋广场安装新 Minecraft 核心"></p>
<h2 id="安装-mod" tabindex="-1"><a class="header-anchor" href="#安装-mod" aria-hidden="true">#</a> 安装 Mod</h2>
<p>BakaXL 支持通过笨蛋广场来安装众多 Mod。</p>
<p>您可以前往笨蛋广场，点击右上角的搜索框并输入关键字来进行 Mod 的查找，亦或是在 BakaXL 主界面点击切换核心按钮，转到核心详细设置，点击 <code v-pre>模组 (Mods)</code> ，点击 <code v-pre>打开模组文件夹</code> ，然后将您已经拥有的 Mods 文件添加进去。</p>
<div class="custom-container warning"><p class="custom-container-title">注意</p>
<p>安装 Mod 需要安装对应的 Minecraft 版本、对应的 Mod 加载器以及前置，否则 Mod 将无法启动或报错。</p>
</div>
<h3 id="下载-mod" tabindex="-1"><a class="header-anchor" href="#下载-mod" aria-hidden="true">#</a> 下载 Mod</h3>
<p>单击进入 Mod 介绍界面，点击 <code v-pre>下载</code> ，然后使用过滤器进行 Mod 版本的筛选。</p>
<p>点击需要的 Mod 版本（非右方箭头）时选择对应的 Minecraft 核心 进行安装 Mod ，BakaXL 会自动下载并放入 Mod 文件夹内，当点击右方箭头时，您可以自定义 Mod 下载后所保存的位置。</p>
<p><img src="https://raw.baka.lihaoyu.cn/images/maindocs/6.gif" alt="添加 Mod"></p>
<h2 id="添加整合包" tabindex="-1"><a class="header-anchor" href="#添加整合包" aria-hidden="true">#</a> 添加整合包</h2>
<h3 id="从笨蛋广场安装-推荐" tabindex="-1"><a class="header-anchor" href="#从笨蛋广场安装-推荐" aria-hidden="true">#</a> 从笨蛋广场安装（推荐）</h3>
<p>打开笨蛋广场，在右上角的搜索框内输入关键字，选择您要游玩的整合包并点击 “获取” 按钮，选择版本后点击右侧的 “下载” 按钮，然后耐心等待即可，整合包会自动被安装到 BakaXL 所在目录的 <code v-pre>.minecraft</code> 目录下。</p>
<h3 id="已拥有整合包文件" tabindex="-1"><a class="header-anchor" href="#已拥有整合包文件" aria-hidden="true">#</a> 已拥有整合包文件</h3>
<p>BakaXL 支持安装 MCBBS / Modrinth / CurseForge / 格式的 Minecraft 整合包与大部分直接包含启动器的传统 Minecraft 整合包。</p>
<p>您可以向右拖拽 <code v-pre>启动游戏</code> 滑块 &gt;<code v-pre>添加新的 Minecraft 核心 或 整合包</code> &gt; <code v-pre>导入整合包</code> 来添加游戏核心</p>
<p><img src="https://raw.baka.lihaoyu.cn/images/maindocs/7.gif" alt="添加 Minecraft 核心"></p>
<div class="custom-container warning"><p class="custom-container-title">注意</p>
<p>最新版 BakaXL 仅支持最新的 MCBBS 整合包规范安装（协议版本 v2.0）。
BakaXL 将不再支持 2021 年 8 月 18 日之前通过 HMCL 等其它启动器导出的旧版 MCBBS 格式整合包。</p>
</div>
<h2 id="开始游戏" tabindex="-1"><a class="header-anchor" href="#开始游戏" aria-hidden="true">#</a> 开始游戏</h2>
<p>当您已经安装好了 Minecraft 核心，您可以在主界面向右拖动 <code v-pre>启动游戏</code> 按钮来选择游戏核心：</p>
<p><img src="https://raw.baka.lihaoyu.cn/images/maindocs/8.gif" alt="选择 Minecraft 核心"></p>
<p>在这之后，点击「启动游戏」按钮，选择一个档案 (若您只有一个档案则不用选择)，在这之后游戏将会自动启动。</p>
<h2 id="使用-bakaskin-文件来个性化您的-bakaxl-主题包" tabindex="-1"><a class="header-anchor" href="#使用-bakaskin-文件来个性化您的-bakaxl-主题包" aria-hidden="true">#</a> 使用 .BakaSkin 文件来个性化您的 BakaXL (主题包)</h2>
<p>转到<code v-pre>本体设置</code>  &gt;<code v-pre>个性化</code>，翻到底部点击 <code v-pre>打开主题文件夹</code>  按钮，将在外部获取到的 .BakaSkin 文件复制进文件夹内，之后再回到 BakaXL 内即可查看主题列表。</p>
<p>您也可以在 BakaXL 笨蛋广场内浏览心仪的主题并下载，抑或是将你的个性化设置打包为主题并投递到笨蛋广场。</p>
<p>您可以前往 <a href="https://open.baka.zone/" target="_blank" rel="noopener noreferrer">BakaXL 运营管理平台<ExternalLinkIcon/></a> 来上传您的作品</p>
<h2 id="bakaxl-network" tabindex="-1"><a class="header-anchor" href="#bakaxl-network" aria-hidden="true">#</a> BakaXL Network</h2>
<p>BakaXL 内置有 BakaXL Network 功能，该功能能够可以实现一些社交操作</p>
<h3 id="登录-注册账户" tabindex="-1"><a class="header-anchor" href="#登录-注册账户" aria-hidden="true">#</a> 登录/注册账户</h3>
<p>前往<code v-pre>本体设置</code> &gt; <code v-pre>账户与档案</code> &gt; <code v-pre>登录至现有的 BakaXL 账户</code> 或 <code v-pre>注册一个新的账户</code>。</p>
<h3 id="修改账户头像或资料" tabindex="-1"><a class="header-anchor" href="#修改账户头像或资料" aria-hidden="true">#</a> 修改账户头像或资料</h3>
<p>前往 <code v-pre>领域</code> &gt; <code v-pre>用户设置</code>。</p>
<h3 id="bakaverse-领域" tabindex="-1"><a class="header-anchor" href="#bakaverse-领域" aria-hidden="true">#</a> Bakaverse (领域)</h3>
<p>点击主页左下角的用户头像或 “开始” 菜单中的 “领域 / 联机大厅” 磁贴即可进入 Bakaverse。</p>
<h3 id="添加好友" tabindex="-1"><a class="header-anchor" href="#添加好友" aria-hidden="true">#</a> 添加好友</h3>
<p>点击左侧的 <code v-pre>添加好友</code> 菜单栏，在右侧的输入框中输入好友的 BakaXL Account 账户名称以及数字标签即可发送好友申请。</p>
<p>若您收到了申请，他们也将会显示在输入框的上方。您可以选择同意或拒绝。</p>
<p>在好友申请被通过以后，您将可以在好友列表里找到他们。</p>
<h3 id="大厅-多人联机" tabindex="-1"><a class="header-anchor" href="#大厅-多人联机" aria-hidden="true">#</a> 大厅 (多人联机)</h3>
<div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>目前 BakaXL 大厅已暂时下线维护（皮肤妙享功能正常），详情请查阅 <a href="https://www.bilibili.com/read/cv19553724" target="_blank" rel="noopener noreferrer">BakaXL / PCL2 / HMCL 对联机功能下一步发展的联合公告<ExternalLinkIcon/></a> 。
敬请期待 Octo 章鱼网络 的推出，届时将支持 HMCL、PCL与 BakaXL 三启动器互联。
此板块仅作留档。</p>
</div>
<p>选择 <code v-pre>大厅</code> 菜单栏，您可以 创建 / 加入一个大厅。</p>
<ol>
<li>首先确认和您的好友的 Minecraft 都已启动，然后由创建者（存档拥有者）进入「单人游戏」，打开所要进行联机的存档；</li>
<li>按下 <code v-pre>Esc</code> 然后在暂停菜单中选择「对局域网开放」；</li>
</ol>
<blockquote>
<p>若需要使用服务端可自行配置，并跳过以上两步</p>
</blockquote>
<ol start="3">
<li>回到 BakaXL 大厅中选择您的 Minecraft 实例；</li>
<li>点击 <code v-pre>创建大厅</code> ，然后将大厅 ID 通过通讯软件发送给其它玩家；</li>
<li>其他玩家使用大厅的 8 位数字 ID 加入。</li>
</ol>
<p>加入方和创建方请务必打开<code v-pre>在无法直接连接时使用中继连接</code> 选项以确保能够正常联机游玩，关于使用 BakaXL Relay 的隐私协议您可以参考：</p>
<p><a href="https://www.bakaxl.com/Privacy/Policy/" target="_blank" rel="noopener noreferrer">&gt;&gt;&gt; BakaXL 隐私政策<ExternalLinkIcon/></a></p>
<p>加入大厅之后，前往「多人游戏」，该大厅将会自动显示在列表里。</p>
<p>若您无法加入游玩，BakaXL 将会在大厅的玩家列表内显示您的状态，而 BakaXL 本次的运行日志也是未来诊断问题所在的手段。</p>
<p>您也可以通过我们的帮助文档获取关于联机功能的一些帮助：</p>
<p><RouterLink to="/maindocs/maindocs.md/#%E8%81%94%E6%9C%BA%E9%97%AE%E9%A2%98%E4%B8%80%E8%A7%88">&gt;&gt;&gt; 关于 BakaXL 联机功能问题的疑难解答</RouterLink></p>
<h4 id="通过-bakaxl-对其他启动器启动的-minecraft-实例进行游戏" tabindex="-1"><a class="header-anchor" href="#通过-bakaxl-对其他启动器启动的-minecraft-实例进行游戏" aria-hidden="true">#</a> 通过 BakaXL 对其他启动器启动的 Minecraft 实例进行游戏</h4>
<ol>
<li>在其他启动器启动的 Minecraft 中进入单人世界；</li>
<li>进入游戏后按下 <code v-pre>Esc</code> 按键，选择 <code v-pre>对局域网开放</code>；</li>
<li>在 BakaXL 大厅中选择您在对应启动器中打开的游戏实例；</li>
<li>创建大厅，将大厅 ID 通过通讯软件发送给您的好友；</li>
<li>让您的好友登录 BakaXL 账户，加入大厅即可在您 Minecraft 的多人游戏中看到好友的大厅。</li>
</ol>
<div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>加入方无需通过 BakaXL 启动 Minecraft 也可以加入游戏，但是我们依旧希望您使用 BakaXL 启动 / 管理您的游戏核心。</p>
</div>
<h4 id="通过-bakaxl-对服务端组建虚拟局域网" tabindex="-1"><a class="header-anchor" href="#通过-bakaxl-对服务端组建虚拟局域网" aria-hidden="true">#</a> 通过 BakaXL 对服务端组建虚拟局域网</h4>
<ol>
<li>启动服务器；</li>
<li>打开 BakaXL 大厅，在实例中选择您的服务器实例；</li>
<li>创建大厅，将大厅 ID 通过通讯软件发生给您的好友；</li>
<li>您的好友加入大厅后即可在他运行的游戏中看到您的大厅，双击加入即可。</li>
</ol>
<div class="custom-container warning"><p class="custom-container-title">注意</p>
<p>如果服务器使用了验证手段，如正版验证，那么作为加入者也需要使用相应验证服务器的 Minecraft 用户档案。服务器启动了正版验证那么加入的玩家也应当启用正版验证，否则会导致连接超时。</p>
</div>
<h3 id="皮肤妙享-离线皮肤共享" tabindex="-1"><a class="header-anchor" href="#皮肤妙享-离线皮肤共享" aria-hidden="true">#</a> 皮肤妙享（离线皮肤共享）</h3>
<p>该功能同时在大厅和第三方服务器中生效</p>
<p>这意味着只要多人游戏的玩家使用 BakaXL 作为启动器并开启本功能时，就可互相看到对方的皮肤而无需其他 mod 或插件。</p>
<p>只需要在 <code v-pre>「本体设置」</code> - <code v-pre>「账户与档案」</code> 点击你的离线档案，设置皮肤</p>
<blockquote>
<p>正版档案需要前往 <code v-pre>「本体设置」</code> - <code v-pre>「账户与档案」</code> 点击正版档案，打开 <code v-pre>「加入 BakaXL 皮肤妙享网络」</code></p>
</blockquote>
<p>之后前往<code v-pre>「领域/联机大厅」</code>-<code v-pre>「用户设置」</code>，确保<code v-pre>「BakaXL Network SkinShare 皮肤妙享」</code>为开启状态</p>
<blockquote>
<p>如果您阅读了此使用手册和<RouterLink to="/maindocs/maindocs.html">帮助文档</RouterLink>后仍未解决您的问题，可以在 <a href="https://jq.qq.com/?_wv=1027&amp;k=U1ZY0qbg" target="_blank" rel="noopener noreferrer">BakaXL Outsider QQ 群480455628<ExternalLinkIcon/></a>来寻求帮助。</p>
</blockquote>
</div></template>
