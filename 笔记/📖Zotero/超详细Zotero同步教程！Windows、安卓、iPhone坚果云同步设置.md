---
up:
  - "[[🔖索引-Zotero]]"
tags:
  - Software/ByName/Zotero/教程/同步/坚果云
PrevNote: "[[2025与 Zotero 相见恨晚，推荐！]]"
NextNote: "[[Zotero7.0详细版入门教程！]]"
notechain:
  level: 
number headings: first-level 3, max 6, 1.1
---

<img src="https://imgs-1302581161.cos.ap-guangzhou.myqcloud.com/ob/20250605025658913.webp" style="zoom: 50%;" />

## 本文目录

<img src="https://imgs-1302581161.cos.ap-guangzhou.myqcloud.com/ob/20250605025658914.webp" alt="|448x316" style="zoom: 43%;" />


## Zotero 数据同步介绍

<img src="https://imgs-1302581161.cos.ap-guangzhou.myqcloud.com/ob/20250605025658915.webp" alt="|525x462" style="zoom: 43%;" />

<br/>

两种同步方法：强烈推荐坚果云WebDAV同步

- Zotero：官方同步
- WebDAV：第三方的同步服务

<br/>

价格对比：  
![](https://imgs-1302581161.cos.ap-guangzhou.myqcloud.com/ob/20250605025658916.webp)

（不需要的可以跳到下面坚果云同步介绍）

## Zotero 官方同步

设置：  
<img src="https://imgs-1302581161.cos.ap-guangzhou.myqcloud.com/ob/20250605025658917.webp" alt="|525x515" style="zoom: 43%;" />

<br/>

购买 Zotero 官方付费同步：注意需要 VISA 卡进行购买  
![](https://imgs-1302581161.cos.ap-guangzhou.myqcloud.com/ob/20250605025658918.webp)

<br/>



## 坚果云WebDAV同步

坚果云的普通用户每月最多可上传1GB文件，下载3GB文件，一般也够用了。  
![](https://imgs-1302581161.cos.ap-guangzhou.myqcloud.com/ob/20250605025658919.webp)

<br/>



Mac界面：  
<img src="https://imgs-1302581161.cos.ap-guangzhou.myqcloud.com/ob/20250605025658920.webp" alt="|525x615" style="zoom:45%;" />

<br/>



划重点

- **URL/网址**
    照着填，坚果云服务器地址 https://dav.jianguoyun.com/dav
    
- **用户名**
    坚果云账号
    
- **密码**
    在坚果云官网设置的应用密码（不是坚果云账号登录密码！）

<br/>



Windows界面：  
<img src="https://imgs-1302581161.cos.ap-guangzhou.myqcloud.com/ob/20250605025658921.webp" alt="|525x539" style="zoom: 43%;" />

<br/>



### 1 生成WebDAV应用密码的具体步骤

![](https://imgs-1302581161.cos.ap-guangzhou.myqcloud.com/ob/20250605025658922.webp)

![](https://imgs-1302581161.cos.ap-guangzhou.myqcloud.com/ob/20250605025658923.webp)

<img src="https://imgs-1302581161.cos.ap-guangzhou.myqcloud.com/ob/20250605025658924.webp" alt="|525x189" style="zoom: 50%;" />

输入名称，点击"生成密码"：

![](https://imgs-1302581161.cos.ap-guangzhou.myqcloud.com/ob/20250605025658925.webp)

<br/>



注意记录和保存密码，填写到下图的密码一栏里，点击"验证服务器"，出现"文件夹同步设定成功"的弹窗说明连接成功：  
<img src="https://imgs-1302581161.cos.ap-guangzhou.myqcloud.com/ob/20250605025658920.webp" alt="|525x615" style="zoom: 43%;" />

<br/>



回到Zotero首页，点击右上角的🔄图标可以同步更新，如果是第一次设置，会提示在坚果云里自动创建一个名为"zotero"的文件夹，用于存放同步更新的文件：  
![](https://imgs-1302581161.cos.ap-guangzhou.myqcloud.com/ob/20250605025658927.webp)

<br/>



坚果云：  
<img src="https://imgs-1302581161.cos.ap-guangzhou.myqcloud.com/ob/20250605025658928.webp" alt="|525x341" style="zoom:60%;" />

在iPhone/iPad/Android上的数据还没同步，需要手动设置。

<br/>



### 2 iPhone Zotero 设置 WebDAV 同步

![](https://imgs-1302581161.cos.ap-guangzhou.myqcloud.com/ob/20250605025658929.webp)

这个同步服务在移动端默认是不会下载全部文档数据的，它会下载目录结构、文档名称，当我们需要查看某个文档时，点击打开文档时它才会进行下载，目的是节约手机上的空间。

<br/>



### 3 安卓 Zotero 设置 WebDAV 同步

官网上Zotero软件支持Windows、MacOS、iOS、Linux下载，安卓手机只能通过谷歌商店下载，可惜内测名额已经没有了。

但是！！！写这篇文章的时候发现了Github上的安卓版安装包（开发版本），支持WebDAV！安卓手机Zotero软件里可以同步查看编辑和注释pdf了！其他excel、docx、ppt、xmind文件也能下载，超方便~（超开心）  

<br/>



<img src="https://imgs-1302581161.cos.ap-guangzhou.myqcloud.com/ob/20250605025658930.webp" alt="|525x656" style="zoom: 33%;" />

<br/>



<img src="https://imgs-1302581161.cos.ap-guangzhou.myqcloud.com/ob/20250605025658931.webp" style="zoom: 67%;" />

<br/>



#### 3.1 安卓版 Zotero 安装包

- Github网址：https://github.com/northword/zotero-android-nightly-build
- 没法翻墙的小伙伴，可以关注本公众号"祁玉笔记"，发送关键字"**zotero**"获取安装包

<br/>



<img src="https://imgs-1302581161.cos.ap-guangzhou.myqcloud.com/ob/20250605025658932.webp" alt="|525x567" style="zoom:50%;" />

<br/>



#### 3.2 WebDAV同步设置

点击左上角"Collections"->点击"Libraries"->右上角设置图标->点击"Account"  
![](https://imgs-1302581161.cos.ap-guangzhou.myqcloud.com/ob/20250605025658933.webp)

<br/>



和前面说的Windows WebDAV同步填的一样，填好点击"Verify Server"，显示"Verified✅"说明连接成功了：  
<img src="https://imgs-1302581161.cos.ap-guangzhou.myqcloud.com/ob/20250605025658934.webp" alt="|315x650" style="zoom: 67%;" />

不过基本上也就电脑和平板使用，手机用得很少，像我手机上的Obsidian都很少打开，不信你问问自己的良心~

<br/>



#### 3.3 网页版 Zotero

安卓手机还可以登录网页版查看部分内容，比如网页条目可以打开网址、可以查看笔记。

至于PDF或者文档类的，我自己测试的结果是，如果是默认文库"我的文库"好像就不能打开/下载，但如果是群组文库就可以在线打开PDF和下载文件，没太仔细研究了，欢迎指正~

默认文库界面：无法在线查看PDF和下载文件  

<img src="https://imgs-1302581161.cos.ap-guangzhou.myqcloud.com/ob/20250605025658935.webp" alt="|448x506" style="zoom: 50%;" />

<br/>



群组文库界面：可以在线查看PDF和下载文件

<img src="https://imgs-1302581161.cos.ap-guangzhou.myqcloud.com/ob/20250605025658936.webp" alt="|525x590" style="zoom:50%;" />

不过群组文库只能使用Zotero官方同步附件，不能用坚果云同步附件，所以为了省钱还是用默认的"我的文库"~

<br/>



### 4 iPad Zotero

界面  
<img src="https://imgs-1302581161.cos.ap-guangzhou.myqcloud.com/ob/20250605025658937.webp" style="zoom: 50%;" />

<br/>



适合经常外出的人群，阅读和画线体验较好：  
<img src="https://imgs-1302581161.cos.ap-guangzhou.myqcloud.com/ob/20250605025658938.webp" style="zoom:50%;" />

<br/>



ipad平板我还没安装Zotero，WebDAV设置应该也一样填就行，安卓平板我没有就不说了~

各位客官点个赞👍或者关注下再走呗~   
需要手机安卓版zotero安装包的关注公众号"祁玉笔记"，后台发送关键字"**zotero**"~

<br/>



# 参考网址

- 【Zotero入门教程合集】网页地址：  
    https://www.youtube.com/watch?v=xo2ev2lsFDc&list=PLw3YmQF-9sPNMtYSo64g1EENDjougcbDN&index=26
    
- 博主：https://www.youtube.com/@lichangtai
  

注：本文截图主要来自Youtube @lichangtai 的Zotero入门完整教程，如有侵权，请联系删除。

<center><font color=#81B300>End</font></center>
