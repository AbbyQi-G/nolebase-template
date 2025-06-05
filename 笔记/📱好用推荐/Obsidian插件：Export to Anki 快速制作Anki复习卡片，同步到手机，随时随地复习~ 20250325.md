---
up: 
tags:
  - Software/ByName/Ob/plugin/ExportToAnki/教程
related:
  - "[[Obsidian to Anki (plugin)]]"
  - "[[问答题Anki卡片]]"
  - "[[填空题Cloze卡片]]"
NextNote: 
PrevNote:
---
**↑** 点击蓝字关注我，赋予我 **Passion** 写文！

![](https://cdn.jsdelivr.net/gh/AbbyQi-G/Obsidian_tuchuang/github/20250301220757421.webp)

边**听歌**边看笔记减压式学习~
音乐

## 本文目录
![|450x287](https://cdn.jsdelivr.net/gh/AbbyQi-G/Obsidian_tuchuang/github/20250325174646560.webp)

# 笔记

## Anki软件设置
### 安装插件
安装Anki Connect插件：
![|384x344](https://cdn.jsdelivr.net/gh/AbbyQi-G/Obsidian_tuchuang/github/20250324205305390.webp)

![](https://cdn.jsdelivr.net/gh/AbbyQi-G/Obsidian_tuchuang/github/20250324205610191.webp)

![|384x215](https://cdn.jsdelivr.net/gh/AbbyQi-G/Obsidian_tuchuang/github/20250324205706382.webp)

重新打开Anki：
![|383x244](https://cdn.jsdelivr.net/gh/AbbyQi-G/Obsidian_tuchuang/github/20250324212223876.webp)

### 插件设置添加代码
增加以下代码：
```bash
,
        "app://obsidian.md"
```

![|447x388](https://cdn.jsdelivr.net/gh/AbbyQi-G/Obsidian_tuchuang/github/20250324212659906.webp)

### 添加字段
重启Anki，添加两个字段：
![|383x287](https://cdn.jsdelivr.net/gh/AbbyQi-G/Obsidian_tuchuang/github/20250324214340764.webp)

#### 问答题模板新增字段
![](https://cdn.jsdelivr.net/gh/AbbyQi-G/Obsidian_tuchuang/github/20250324214827977.webp)

新增两个字段 `Obsidian Link` 和 `Obsidian Context`:
![|383x315](https://cdn.jsdelivr.net/gh/AbbyQi-G/Obsidian_tuchuang/github/20250324215004489.webp)

![|383x315](https://cdn.jsdelivr.net/gh/AbbyQi-G/Obsidian_tuchuang/github/20250324215248458.webp)

#### 填空题模板新增字段
![|383x267](https://cdn.jsdelivr.net/gh/AbbyQi-G/Obsidian_tuchuang/github/20250324215443636.webp)

同样新增两个字段 `Obsidian Link` 和 `Obsidian Context`:
![|447x351](https://cdn.jsdelivr.net/gh/AbbyQi-G/Obsidian_tuchuang/github/20250324215614796.webp)

![|449x353](https://cdn.jsdelivr.net/gh/AbbyQi-G/Obsidian_tuchuang/github/20250324215742726.webp)

![|449x370](https://cdn.jsdelivr.net/gh/AbbyQi-G/Obsidian_tuchuang/github/20250324215811283.webp)

### 添加代码
#### 问答题卡片添加代码
![|449x353](https://cdn.jsdelivr.net/gh/AbbyQi-G/Obsidian_tuchuang/github/20250324231357359.webp)

增加以下代码：
```bash
<br><br><br>

<div style='font-size: 12px;'>{{Obsidian Link}} {{Obsidian Context}}</div>
```

![|449x299](https://cdn.jsdelivr.net/gh/AbbyQi-G/Obsidian_tuchuang/github/20250324231310822.webp)

#### 填空题卡片添加代码
![|449x353](https://cdn.jsdelivr.net/gh/AbbyQi-G/Obsidian_tuchuang/github/20250324231606340.webp)

![|449x299](https://cdn.jsdelivr.net/gh/AbbyQi-G/Obsidian_tuchuang/github/20250324231812482.webp)

![|449x353](https://cdn.jsdelivr.net/gh/AbbyQi-G/Obsidian_tuchuang/github/20250324231855321.webp)

### 重命名笔记模板
obsidian插件会根据Cloze这个名字映射填空题卡片，所以需要加上Cloze这个词
![|532x383](https://cdn.jsdelivr.net/gh/AbbyQi-G/Obsidian_tuchuang/github/20250325143037198.webp)

成功重命名后：
![|456x358](https://cdn.jsdelivr.net/gh/AbbyQi-G/Obsidian_tuchuang/github/20250325143320820.webp)


### 创建牌组
![|447x335](https://cdn.jsdelivr.net/gh/AbbyQi-G/Obsidian_tuchuang/github/20250324232120789.webp)

![|447x335](https://cdn.jsdelivr.net/gh/AbbyQi-G/Obsidian_tuchuang/github/20250324232313907.webp)

![|449x337](https://cdn.jsdelivr.net/gh/AbbyQi-G/Obsidian_tuchuang/github/20250324232349934.webp)

## Obsidian设置
### 安装 Export to Anki 插件
第一次安装插件需要开启"社区插件市场"
![|449x286](https://cdn.jsdelivr.net/gh/AbbyQi-G/Obsidian_tuchuang/github/20250324232608601.webp)

![|447x330](https://cdn.jsdelivr.net/gh/AbbyQi-G/Obsidian_tuchuang/github/20250324233520120.webp)

![|447x312](https://cdn.jsdelivr.net/gh/AbbyQi-G/Obsidian_tuchuang/github/20250324233540110.webp)

![|449x266](https://cdn.jsdelivr.net/gh/AbbyQi-G/Obsidian_tuchuang/github/20250324233730222.webp)

![|449x303](https://cdn.jsdelivr.net/gh/AbbyQi-G/Obsidian_tuchuang/github/20250324233738671.webp)

![|383x499](https://cdn.jsdelivr.net/gh/AbbyQi-G/Obsidian_tuchuang/github/20250324234047481.webp)

- 复制粘贴Custom Regexp
	- 填空题 Cloze: `((?:[^\n][\n]?)+) #clozecard ?\n*((?:\n(?:^.{1,3}$|^.{4}(?<!<!--).*))+)`
	- 问答题: `((?:[^\n][\n]?)+) #flashcard ?\n*((?:\n(?:^.{1,3}$|^.{4}(?<!<!--).*))+)`
- 下拉框选择 Obsidian Link 和 Obsidian Context

注意检查==Note Type名称==是否正确，否则后面生成填空题 Cloze卡片会有问题：
(如果在Anki软件重命名笔记名称Note Type和调整字段，这里没显示，需要重新安装和设置"Export to Anki"插件，麻烦了一点)
![|454x511](https://cdn.jsdelivr.net/gh/AbbyQi-G/Obsidian_tuchuang/github/20250325144725311.webp)

设置==Folder settings==，即obsidian生成的卡片放到哪个牌组，如果没设置，默认放到"Default"这个牌组：
![|419x415](https://cdn.jsdelivr.net/gh/AbbyQi-G/Obsidian_tuchuang/github/20250325003411277.webp)

![|456x370](https://cdn.jsdelivr.net/gh/AbbyQi-G/Obsidian_tuchuang/github/20250325144123252.webp)


Defaults设置中打开以下开关：
![|419x391](https://cdn.jsdelivr.net/gh/AbbyQi-G/Obsidian_tuchuang/github/20250325003721818.webp)

### 生成卡片
#### 添加问答题类型卡片
主要介绍：
![](https://cdn.jsdelivr.net/gh/AbbyQi-G/Obsidian_tuchuang/github/20250325114111162.webp)

具体步骤：
![](https://cdn.jsdelivr.net/gh/AbbyQi-G/Obsidian_tuchuang/github/20250325120507497.webp)

> [!NOTE] 注意
> - 第一次生成Anki卡片会扫描整个vault，比较慢需要等待。后面第二次或以后生成Anki卡片就很快了。
> - 每一次点击Anki按钮，==只有修改过的才会重新扫描==。所以如果调整了Note Type或字段之类的，点击Anki按钮没改过来，需要在Obsidian随便改一下卡片内容，才能重新扫描卡片，Anki中的卡片内容才会更新。

![|456x428](https://cdn.jsdelivr.net/gh/AbbyQi-G/Obsidian_tuchuang/github/20250325131104470.webp)

![|532x489](https://cdn.jsdelivr.net/gh/AbbyQi-G/Obsidian_tuchuang/github/20250325120826537.webp)

### 学习卡片
![|389x308](https://cdn.jsdelivr.net/gh/AbbyQi-G/Obsidian_tuchuang/github/20250325120933562.webp)

![|389x308](https://cdn.jsdelivr.net/gh/AbbyQi-G/Obsidian_tuchuang/github/20250325121000517.webp)

![|530x372](https://cdn.jsdelivr.net/gh/AbbyQi-G/Obsidian_tuchuang/github/20250325121350013.webp)

![](https://cdn.jsdelivr.net/gh/AbbyQi-G/Obsidian_tuchuang/github/20250325122406626.webp)

### 修改卡片
以后要是想重新修改卡片：
![|530x429](https://cdn.jsdelivr.net/gh/AbbyQi-G/Obsidian_tuchuang/github/20250325123049680.webp)

跳转到obsidian内部链接：
![](https://cdn.jsdelivr.net/gh/AbbyQi-G/Obsidian_tuchuang/github/20250325123951642.webp)

### 删除卡片
![|454x367](https://cdn.jsdelivr.net/gh/AbbyQi-G/Obsidian_tuchuang/github/20250325124143226.webp)

![|621x449](https://cdn.jsdelivr.net/gh/AbbyQi-G/Obsidian_tuchuang/github/20250325115222427.webp)
（之前新建的两张卡片）

#### 添加填空题 Cloze类型卡片
主要介绍：
![](https://cdn.jsdelivr.net/gh/AbbyQi-G/Obsidian_tuchuang/github/20250325151416961.webp)

三种格式：
- 基本填空题卡片
- 自定义挖空
- 带提示词的挖空

##### 基本填空题卡片
具体步骤：
![](https://cdn.jsdelivr.net/gh/AbbyQi-G/Obsidian_tuchuang/github/20250325151729575.webp)

==效果==
卡片正面：
![|450x231](https://cdn.jsdelivr.net/gh/AbbyQi-G/Obsidian_tuchuang/github/20250325152049541.webp)

卡片反面：
![|327x155](https://cdn.jsdelivr.net/gh/AbbyQi-G/Obsidian_tuchuang/github/20250325152312917.webp)

3张填空题cloze卡片：
![|323x545](https://cdn.jsdelivr.net/gh/AbbyQi-G/Obsidian_tuchuang/github/20250325152810113.webp)

##### 自定义挖空
自定义一张卡片同时挖几个空：
![|528x296](https://cdn.jsdelivr.net/gh/AbbyQi-G/Obsidian_tuchuang/github/20250325153816108.webp)
(文字太长了或图片太大，标签会转到第二行)

效果：
![|384x215](https://cdn.jsdelivr.net/gh/AbbyQi-G/Obsidian_tuchuang/github/20250325154058743.webp)

![|381x213](https://cdn.jsdelivr.net/gh/AbbyQi-G/Obsidian_tuchuang/github/20250325154156430.webp)

自定义挖空生成的两张卡片：
![|327x405](https://cdn.jsdelivr.net/gh/AbbyQi-G/Obsidian_tuchuang/github/20250325154432297.webp)

##### 带提示词的挖空
有时候填空题不知道问的是哪个方面，需要加点提示词
![|450x367](https://cdn.jsdelivr.net/gh/AbbyQi-G/Obsidian_tuchuang/github/20250325161035856.webp)



效果
卡片1：
![|384x387](https://cdn.jsdelivr.net/gh/AbbyQi-G/Obsidian_tuchuang/github/20250325161801386.webp)

卡片2：
![|450x216](https://cdn.jsdelivr.net/gh/AbbyQi-G/Obsidian_tuchuang/github/20250325161204765.webp)

![|448x214](https://cdn.jsdelivr.net/gh/AbbyQi-G/Obsidian_tuchuang/github/20250325161326687.webp)


##### 3种方式对比
3种填空题 Cloze卡片：
![|450x341](https://cdn.jsdelivr.net/gh/AbbyQi-G/Obsidian_tuchuang/github/20250325160224753.webp)


## 安卓手机端
Anki软件的问答题卡片：
![|241x538](https://cdn.jsdelivr.net/gh/AbbyQi-G/Obsidian_tuchuang/github/20250325130723298.webp)

Anki软件跳转到Obsidian软件：
![|389x413](https://cdn.jsdelivr.net/gh/AbbyQi-G/Obsidian_tuchuang/github/20250325131440633.webp)

想学习复习，随时随地都可以了，方便！万事俱备，只差一个爱学习的你了，抓你去学习~ 正文完结🎉

---
###### 胡说八道环节
金秀贤直接把偶像剧滤镜打得碎得不能再碎了，话说老看无脑短剧偶像剧，人会降智吗？持续关注事件中loading……

公众号名片

**End**


# 参考网址
[Yvonne Jiu: Obsidian to Anki插件教學](https://www.youtube.com/watch?v=S0fDdArNtRo)

