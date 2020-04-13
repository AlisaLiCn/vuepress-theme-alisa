---
title: 【翻译】一份可以放在web文档head标签中的内容清单
date: 2018-11-08 20:00:00
tags: Translation
---


一份可以放在web文档head标签中的内容清单

>- 原文链接：[https://gethead.info](https://gethead.info)

## 内容列表

- [必要信息](#必要信息)
- [网页元素](#网页元素)
- [Meta元信息](#Meta元信息)
- [链接](#链接)
- [图标](#图标)
- [社交](#社交)
  - [Facebook Open Graph](#facebook-open-graph)
  - [Twitter Card](#twitter-card)
  - [Twitter Privacy](#twitter-privacy)
  - [Google+ / Schema.org](#google--schemaorg)
  - [Pinterest](#pinterest)
  - [Facebook Instant Articles](#facebook-instant-articles)
  - [OEmbed](#OEmbed)
- [浏览器/平台](#浏览器--平台)
  - [Apple iOS](#apple-ios)
  - [Google Android](#google-android)
  - [Google Chrome](#google-chrome)
  - [Microsoft Internet Explorer](#microsoft-internet-explorer)
- [中国的浏览器](#中国的浏览器)
  - [360浏览器](#360浏览器)
  - [QQ移动浏览器](#qq移动浏览器)
  - [UC移动浏览器](#uc移动浏览器)
- [应用链接](#应用链接)
- [其他资源](#其他资源)
- [相关项目](#相关项目)
- [其他格式](#其他格式)
- [翻译](#翻译)
- [贡献](#贡献)
  - [贡献者](#贡献者)
- [作者](#作者)
- [许可](#许可)

## 必要信息

以下是所有web文档的必要元素

```html
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
<!--
为了确保文档的正确渲染，以上两个meta标记必须首先出现在<head>标签中，
其他的head元素应该在这两个标记之后出现。                
-->
<title>Page Title</title>
```

**[⬆ 返回顶部](#内容列表)**

## 网页元素

在`<head>`标签中，可以包含的有效的元素有：`meta`,`link`, `title`, `style`, `script`, `noscript` 和 `base`.
这些元素为文档应该如何被web技术（如：浏览器、搜索引擎、机器人等）识别、渲染提供了信息，

```html
<!--
为web文档设置字符编码方式，以便所有以utf-8编码的字符（比如emoji表情符号）都能正确地呈现出来。
-->
<meta charset="utf-8">

<!-- 设置文档的标题 -->
<title>Page Title</title>

<!-- 为所有的通过相对路径引用的资源设置默认的地址或目标设置 -->
<base href="https://example.com/page.html">
<base target="_blank">

<!-- 链接外部CSS文件 -->
<link rel="stylesheet" href="styles.css">

<!-- 用于在此标签内添加文档内嵌样式 -->
<style>
/* ... */
</style>

<!-- JavaScript标签和 noscript标签 -->
<script src="script.js"></script>
<script>
// javascript 语句在此标签内执行
</script>
<noscript>
<!-- 在这里添加不支持JS时的替代内容 -->
</noscript>
```

**[⬆ back to top](#内容列表)**

## Meta元信息

```html
<!--
  为了确保文档的正确渲染，以上两个meta标记必须首先出现在<head>标签中，
  其他的head元素应该在这两个标记之后出现。

  译者注：
  viewport: 它提供有关视口初始大小的提示，仅供移动设备使用
  width=device-width：表示文档宽度是设备屏幕的宽度
  initial-scale=1.0：一个0.0 到10.0之间的正数，表示文档初始的缩放比例
  shrink-to-fit: 阻止缩放的ios写法
  
-->
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

<!--
  定义控制资源加载的位置
  应尽早在<head>标签中使用，因为这个标签仅作用于在它之后声明的资源。

  译者注：http-equiv这个枚举属性定义了能改变服务器和用户引擎行为的编译.
  content-security-policy:内容安全策略,它允许页面作者定义当前页的内容策略。内容策略主要指定允许的服务器源和脚本端点，这有助于防止跨站点脚本攻击。
-->
<meta http-equiv="Content-Security-Policy" content="default-src 'self'">

<!-- 定义web应用的名称 (仅在网站被用作应用程序时使用) -->
<meta name="application-name" content="Application Name">

<!-- 为Chrome,Firefox OS 和 Opera 设置主题颜色 -->
<meta name="theme-color" content="#4285f4">

<!-- 文档的简短描述 (限制在150字符以内) -->
<!-- 这有可能被用作搜索引擎搜索结果的一部分 -->
<meta name="description" content="A description of the page">

<!-- 控制搜索引擎抓取和索引的行为 -->
<meta name="robots" content="index,follow"><!-- 所有搜索引擎 -->
<meta name="googlebot" content="index,follow"><!-- Google写法 -->

<!-- 告诉Google不要显示附加链接搜索框 -->
<meta name="google" content="nositelinkssearchbox">

<!-- 告诉谷歌不要为此文档提供翻译 -->
<meta name="google" content="notranslate">

<!--验证网站所有权 -->
<meta name="google-site-verification" content="verification_token"><!-- Google Search Console(谷歌站长工具) -->
<meta name="yandex-verification" content="verification_token"><!-- Yandex Webmasters（俄罗斯搜索引擎Yandex网站站长中心） -->
<meta name="msvalidate.01" content="verification_token"><!-- Bing Webmaster Center 微软必应网站站长中心 -->
<meta name="alexaVerifyID" content="verification_token"><!-- Alexa Console 亚马逊Alexa站长统计-->
<meta name="p:domain_verify" content="code_from_pinterest"><!-- Pinterest Console-->
<meta name="norton-safeweb-site-verification" content="norton_code"><!-- Norton Safe Web 诺顿安全网 -->

<!-- 识别构建文档的软件(如： WordPress, Dreamweaver) -->
<meta name="generator" content="program">

<!-- 文档主题的简短描述 -->
<meta name="subject" content="your document's subject">

<!-- Gives a general age rating based on the document's content -->
<meta name="rating" content="General">

<!-- 允许控制引用信息如何传输 -->
<meta name="referrer" content="no-referrer">

<!-- 禁止自动检测和格式化可能出现的电话号码 -->
<meta name="format-detection" content="telephone=no">

<!-- 通过设置值为“off”完全退出DNS的预获取 -->
<meta http-equiv="x-dns-prefetch-control" content="off">

<!-- 在客户端web浏览器存储cookie以便进行标识 -->
<meta http-equiv="set-cookie" content="name=value; expires=date; path=url">

<!-- 指定在特定框架中要显示的文档 -->
<meta http-equiv="Window-Target" content="_value">

<!-- 地理标签 -->
<meta name="ICBM" content="latitude, longitude">
<meta name="geo.position" content="latitude;longitude">
<meta name="geo.region" content="country[-state]"><!-- 国家代码 (ISO 3166-1): 强制性的, 州代码 (ISO 3166-2): 可选的; 例如： content="US" / content="US-NY" -->
<meta name="geo.placename" content="city/town"><!-- 例如： content="New York City" -->
```

- 📖 [Google可识别的Meta](https://support.google.com/webmasters/answer/79812?hl=en)
- 📖 [WHATWG Wiki: Meta扩展](https://wiki.whatwg.org/wiki/MetaExtensions)
- 📖 [ICBM - 维基百科](https://en.wikipedia.org/wiki/ICBM_address#Modern_use)
- 📖 [Geotagging - 维基百科](https://en.wikipedia.org/wiki/Geotagging#HTML_pages)

**[⬆ 返回顶部](#内容列表)**


## 链接

```html
<!-- 指向外联样式表 -->
<link rel="stylesheet" href="https://example.com/styles.css">

<!-- 有助于防止出现重复内容的问题 -->
<link rel="canonical" href="https://example.com/article/?page=2">

<!-- 将当前文档链接到AMP HTML版本 -->
<link rel="amphtml" href="https://example.com/path/to/amp-version.html">

<!-- 链接到一个为web应用指定了安装凭证的JSON文件 -->
<link rel="manifest" href="manifest.json">

<!-- 链接到文档作者的信息 -->
<link rel="author" href="humans.txt">

<!-- 指向一个用于链接内容的权利声明 -->
<link rel="license" href="copyright.html">

<!-- 提供对文档中可能使用其他语言的位置的引用 -->
<link rel="alternate" href="https://es.example.com/" hreflang="es">

<!-- 提供关于作者或其他人的信息 -->
<link rel="me" href="https://google.com/profiles/thenextweb" type="text/html">
<link rel="me" href="mailto:name@example.com">
<link rel="me" href="sms:+15035550125">

<!-- 链接到描述有历史意义的记录、文档或其他有资料的文档 -->
<link rel="archives" href="https://example.com/archives/">

<!-- 链接到层次结构中的顶级资源 -->
<link rel="index" href="https://example.com/article/">

<!-- 提供一个对自身对引用 - 当文档可能包含多种引用时非常有用 -->
<link rel="self" type="application/atom+xml" href="https://example.com/atom.xml">

<!-- 在一个系列的文档中，分别指向第一个、最后一个、上一个、和下一个文档 -->
<link rel="first" href="https://example.com/article/">
<link rel="last" href="https://example.com/article/?page=42">
<link rel="prev" href="https://example.com/article/?page=1">
<link rel="next" href="https://example.com/article/?page=3">

<!-- 在通过第三方服务维护博客时使用 -->
<link rel="EditURI" href="https://example.com/xmlrpc.php?rsd" type="application/rsd+xml" title="RSD">

<!-- 当另一个WordPress博客链接到你的WordPress博客或帖子时，形成自动评论 -->
<link rel="pingback" href="https://example.com/xmlrpc.php">

<!-- 当你在页面上链接到一个 url 时通知它 -->
<link rel="webmention" href="https://example.com/webmention">

<!-- 允许使用Micropub客户端发布到你自己到域名 -->
<link rel="micropub" href="https://example.com/micropub">

<!-- 开启搜索 -->
<link rel="search" href="/open-search.xml" type="application/opensearchdescription+xml" title="Search Title">

<!-- 投稿 -->
<link rel="alternate" href="https://feeds.feedburner.com/example" type="application/rss+xml" title="RSS">
<link rel="alternate" href="https://example.com/feed.atom" type="application/atom+xml" title="Atom 0.3">

<!-- 欲huoqu、欲jiazai、欲浏览 -->
<!-- 更多信息: https://css-tricks.com/prefetching-preloading-prebrowsing/ -->
<link rel="dns-prefetch" href="//example.com/">
<link rel="preconnect" href="https://www.example.com/">
<link rel="prefetch" href="https://www.example.com/">
<link rel="prerender" href="https://example.com/">
<link rel="preload" href="image.png" as="image">
```

- 📖 [链接关系](https://www.iana.org/assignments/link-relations/link-relations.xhtml)

**[⬆ 返回顶部](#内容列表)**

## 图标

```html
<!-- 针对IE 10 及以下版本 -->
<!-- Place favicon.ico in the root directory - no tag necessary -->

<!-- 我们需要的最高分辨率的图标 -->
<link rel="icon" sizes="192x192" href="/path/to/icon.png">

<!-- Apple Touch图标 (同样是192x192px的png图标 icon.png) -->
<link rel="apple-touch-icon" href="/path/to/apple-touch-icon.png">

<!-- Safari固定选项卡图标 -->
<link rel="mask-icon" href="/path/to/icon.svg" color="blue">
```

- 📖 [关于网站图标(和触摸图标)的全部信息](https://bitsofco.de/all-about-favicons-and-touch-icons/)
- 📖 [创建固定选项卡图标](https://developer.apple.com/library/content/documentation/AppleApplications/Reference/SafariWebContent/pinnedTabs/pinnedTabs.html)
- 📖 [网站图标参考手册](https://github.com/audreyr/favicon-cheat-sheet)
- 📖 [图标 & 浏览器颜色](https://developers.google.com/web/fundamentals/design-and-ux/browser-customization/)

**[⬆ 返回顶部](#内容列表)**


## 社交

### Facebook Open Graph

```html
<meta property="fb:app_id" content="123456789">
<meta property="og:url" content="https://example.com/page.html">
<meta property="og:type" content="website">
<meta property="og:title" content="Content Title">
<meta property="og:image" content="https://example.com/image.jpg">
<meta property="og:description" content="Description Here">
<meta property="og:site_name" content="Site Name">
<meta property="og:locale" content="en_US">
<meta property="article:author" content="">
```

- 📖 [Facebook Open Graph Markup](https://developers.facebook.com/docs/sharing/webmasters#markup)
- 📖 [Open Graph protocol](http://ogp.me/)
- 🛠