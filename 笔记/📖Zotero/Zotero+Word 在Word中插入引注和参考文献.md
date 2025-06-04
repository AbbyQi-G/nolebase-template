---
up:
  - "[[🔖索引-Zotero]]"
tags:
  - Software/ByName/Zotero/教程/联动/Word
NextNote: 
PrevNote: "[[Zotero7.0详细版入门教程！]]"
notechain:
  level: 
number headings: first-level 2, max 6, 1.1
---

![](https://cdn.jsdelivr.net/gh/AbbyQi-G/Obsidian_tuchuang/github/20250301220757421.webp)


## 本文目录
![|436x463](https://cdn.jsdelivr.net/gh/AbbyQi-G/Obsidian_tuchuang/github/20250309002313502.webp)

有粉丝想了解Zotero+Word，觉得这个选题还可以，所以有了本文~


# 笔记

## 1 Word 选项卡
通常情况下，只要成功安装了Zotero，==Word==菜单栏就会出现Zotero选项卡：
![](https://cdn.jsdelivr.net/gh/AbbyQi-G/Obsidian_tuchuang/github/20250308011400826.webp)

如果没找到，可以在==Zotero==中打开设置->引用，点击"重新安装加载项Microsoft Word"：
![|432x377](https://cdn.jsdelivr.net/gh/AbbyQi-G/Obsidian_tuchuang/github/20250308011856012.webp)



## 2 文档设置 （Document Preferences）
这里可以设置引注和参考文献的==样式==、==语言==、开启/关闭自动==更新==。
开启/关闭自动更新：如果你关闭了自动更新，就需要==手动刷新==引用。

例如选下图的 "作者 日期"样式： 
![](https://cdn.jsdelivr.net/gh/AbbyQi-G/Obsidian_tuchuang/github/20250308204326302.webp)

它是以作者为主，如果超过3个，就会用“等”来表示。如果你切换参考文献样式，可能会出现省略作者的情况。

手动设置省略作者：
![](https://cdn.jsdelivr.net/gh/AbbyQi-G/Obsidian_tuchuang/github/20250308205628975.webp)

![](https://cdn.jsdelivr.net/gh/AbbyQi-G/Obsidian_tuchuang/github/20250308205834095.webp)


点击"管理样式"会跳转到Zotero中：
![](https://cdn.jsdelivr.net/gh/AbbyQi-G/Obsidian_tuchuang/github/20250308214945527.webp)

![](https://cdn.jsdelivr.net/gh/AbbyQi-G/Obsidian_tuchuang/github/20250308215156581.webp)

点击"获取更多样式"：
![](https://cdn.jsdelivr.net/gh/AbbyQi-G/Obsidian_tuchuang/github/20250308220013153.webp)

"Note"注释，一般用于小注为主的形式，numeric顺序编码，上标 `[1]` 这种样式。

选择样式预览，点击即可增加：
![](https://cdn.jsdelivr.net/gh/AbbyQi-G/Obsidian_tuchuang/github/20250308221239162.webp)

新增的样式：
![](https://cdn.jsdelivr.net/gh/AbbyQi-G/Obsidian_tuchuang/github/20250308222957979.webp)


还可以从==Zotero中文社区==或者==Github==下载样式，再点击上图的"从文件添加样式"，从而增加样式。

样式下载：
- Zotero中文社区： [Zotero 中文社区](https://zotero-chinese.com/styles/)
- Github CSL：[GitHub - citation-style-language/styles](https://github.com/citation-style-language/styles)

![](https://cdn.jsdelivr.net/gh/AbbyQi-G/Obsidian_tuchuang/github/20250308223259714.webp)

![](https://cdn.jsdelivr.net/gh/AbbyQi-G/Obsidian_tuchuang/github/20250308223738649.webp)

![](https://cdn.jsdelivr.net/gh/AbbyQi-G/Obsidian_tuchuang/github/20250308224108405.webp)



## 3 插入/编辑引用 （Add/Edit Citation）
![](https://cdn.jsdelivr.net/gh/AbbyQi-G/Obsidian_tuchuang/github/20250308160315526.webp)

Add/Edit Citation：在当前==光标==位置==插入==或者==编辑==引注，不包含文末的参考文献。

只是插入引用，不会在文末自动生成参考文献列表。如果需要生成参考文献，记得点击"Add/Edit Bibliography"。

第一次点击"Add/Edit Citation"会先让你设置==参考文献样式==，选择合适样式，例如选数字编码的引注，点击"OK"：
![](https://cdn.jsdelivr.net/gh/AbbyQi-G/Obsidian_tuchuang/github/20250308161813933.webp)


可以通过多种方式==搜索==参考文献对应==条目==，从而插入引注，包括：
- 输入标题/作者/年份
- 选择"所选条目"/"打开文件"


### 3.1 添加方式
按==ESC==键可以取消插入引注。

#### 3.1.1 输入标题
![](https://cdn.jsdelivr.net/gh/AbbyQi-G/Obsidian_tuchuang/github/20250308163218522.webp)

![](https://cdn.jsdelivr.net/gh/AbbyQi-G/Obsidian_tuchuang/github/20250308163629438.webp)

- 如果只引用==一篇==，可以直接再次回车，结束插入引注。
- 如果是==多篇==引用的话，可以继续输入和选择其他条目。

插入数字编码的引注样式：
![|467x112](https://cdn.jsdelivr.net/gh/AbbyQi-G/Obsidian_tuchuang/github/20250308164231976.webp)

#### 3.1.2 输入作者
![|438x186](https://cdn.jsdelivr.net/gh/AbbyQi-G/Obsidian_tuchuang/github/20250308165131736.webp)

#### 3.1.3 输入年份
![|466x198](https://cdn.jsdelivr.net/gh/AbbyQi-G/Obsidian_tuchuang/github/20250308165626623.webp)


#### 3.1.4 所选条目/打开文件

![](https://cdn.jsdelivr.net/gh/AbbyQi-G/Obsidian_tuchuang/github/20250308170930822.webp)

上图示例中，输入标题和输入作者后插入的标注是==同一篇==，所以序号都是1。

如果想要==更改==已经插入的引注，选中引注，点击"Add/Edit Citation", 把原有的条目删了，改成新的就行：
![](https://cdn.jsdelivr.net/gh/AbbyQi-G/Obsidian_tuchuang/github/20250308175115021.webp)


### 3.2 多篇引用

![](https://cdn.jsdelivr.net/gh/AbbyQi-G/Obsidian_tuchuang/github/20250308171626670.webp)

调整引用顺序：鼠标拖动条目
![](https://cdn.jsdelivr.net/gh/AbbyQi-G/Obsidian_tuchuang/github/20250308171703654.webp)

插入多篇引用效果：
![](https://cdn.jsdelivr.net/gh/AbbyQi-G/Obsidian_tuchuang/github/20250308172136675.webp)


### 3.3 经典视图
点击左侧的"==Z=="字母，可以切换成经典视图：
![](https://cdn.jsdelivr.net/gh/AbbyQi-G/Obsidian_tuchuang/github/20250308175428902.webp)

点击后，会显示对应的引注条目，默认是按照==首字母顺序==进行条目排序的：

![](https://cdn.jsdelivr.net/gh/AbbyQi-G/Obsidian_tuchuang/github/20250308180118084.webp)

多篇引用需要点击"多重来源"：
![](https://cdn.jsdelivr.net/gh/AbbyQi-G/Obsidian_tuchuang/github/20250308180818269.webp)

![](https://cdn.jsdelivr.net/gh/AbbyQi-G/Obsidian_tuchuang/github/20250308180655491.webp)

![](https://cdn.jsdelivr.net/gh/AbbyQi-G/Obsidian_tuchuang/github/20250308181210157.webp)

如果你更喜欢经典视图，可以在Zotero中设置"==使用经典版添加引注对话框=="：

![](https://cdn.jsdelivr.net/gh/AbbyQi-G/Obsidian_tuchuang/github/20250308181910849.webp)

再次点击插入引注就会变成经典视图了。

如果没变的话，可以点击"重新安装加载项Microsoft Word"。

### 3.4 前缀后缀
前缀和后缀通常是指引用内容前后的==附加说明或注释==，以便更好地理解引文的上文或来源，一般不需要。

![](https://cdn.jsdelivr.net/gh/AbbyQi-G/Obsidian_tuchuang/github/20250308183224577.webp)


![](https://cdn.jsdelivr.net/gh/AbbyQi-G/Obsidian_tuchuang/github/20250308183043296.webp)


## 4 插入/编辑参考文献 （Add/Edit Bibliography）
![](https://cdn.jsdelivr.net/gh/AbbyQi-G/Obsidian_tuchuang/github/20250308191045041.webp)

这里要特别注意：引注和参考文献一定要在==不同的位置==插入。

千万不要在同一个位置插入了引注，又点击插入参考文献，否则会==报错==：

![](https://cdn.jsdelivr.net/gh/AbbyQi-G/Obsidian_tuchuang/github/20250308184902315.webp)

点击取消，回到原来的位置。

正确的插入参考文献方法：
![](https://cdn.jsdelivr.net/gh/AbbyQi-G/Obsidian_tuchuang/github/20250308185538711.webp)

![](https://cdn.jsdelivr.net/gh/AbbyQi-G/Obsidian_tuchuang/github/20250308185741998.webp)


对于英文文献中的"等"字，进行替换（建议还是通过==CSL样式==控制，下载合适样式）：
![](https://cdn.jsdelivr.net/gh/AbbyQi-G/Obsidian_tuchuang/github/20250308185917494.webp)

将"等"字替换为英文的"et al“，注意中间要保留一个空格，然后选择"替换/全部替换"：
![](https://cdn.jsdelivr.net/gh/AbbyQi-G/Obsidian_tuchuang/github/20250308190512810.webp)

![](https://cdn.jsdelivr.net/gh/AbbyQi-G/Obsidian_tuchuang/github/20250308190852653.webp)


参考文献的作者、标题、刊名、年卷期、起始页码等信息都是由==CSL==控制的。
CSL：Citation Style Language ==引文样式语言==

不过有一点需要注意，CSL并不参与==排版==，参考文献列表的排版实际上是由Word的段落样式控制的，包括首行缩进、悬挂缩进、编号、文字位置、字体、字号、加粗、行间距等设置。

所以如果你需要修改参考文献的这些排版：
![](https://cdn.jsdelivr.net/gh/AbbyQi-G/Obsidian_tuchuang/github/20250308193638940.webp)

例如改成首行缩进：
![](https://cdn.jsdelivr.net/gh/AbbyQi-G/Obsidian_tuchuang/github/20250308193900321.webp)

![](https://cdn.jsdelivr.net/gh/AbbyQi-G/Obsidian_tuchuang/github/20250308194011056.webp)

效果：
![](https://cdn.jsdelivr.net/gh/AbbyQi-G/Obsidian_tuchuang/github/20250308194137575.webp)

这时你点击Refresh刷新，格式依然会保持不变。

但如果你是通过直接选中右键进行修改样式，点击Refresh格式就没了。


## 5 插入笔记 （Insert Note）
会出现一个==黄色==的框，可以按ESC键取消：
![](https://cdn.jsdelivr.net/gh/AbbyQi-G/Obsidian_tuchuang/github/20250308200051681.webp)

![](https://cdn.jsdelivr.net/gh/AbbyQi-G/Obsidian_tuchuang/github/20250308200259259.webp)


## 6 刷新（Refresh）

![](https://cdn.jsdelivr.net/gh/AbbyQi-G/Obsidian_tuchuang/github/20250308225436791.webp)

更新插入的引用和文末的参考文献。
如果内容没有自动更新或者你之前关闭了自动更新，可以点击进行更新。

## 7 断开链接引用（Unlink Citations）
![](https://cdn.jsdelivr.net/gh/AbbyQi-G/Obsidian_tuchuang/github/20250308230747733.webp)

断开链接并删除所有引用。

当我们点击参考文献时，会发现它们带有黑色阴影，这是因为存在==域代码==：
![](https://cdn.jsdelivr.net/gh/AbbyQi-G/Obsidian_tuchuang/github/20250308225954623.webp)

按下键盘上的==Alt+F9==键，会显示==原始代码==：
![](https://cdn.jsdelivr.net/gh/AbbyQi-G/Obsidian_tuchuang/github/20250308230625106.webp)


在投稿之前，我们需要将这些域代码转换为==普通文本==。操作方法是点击"Unlink Citations"，系统会弹出一个提示，询问你==是否要移除==这些字段代码：

![](https://cdn.jsdelivr.net/gh/AbbyQi-G/Obsidian_tuchuang/github/20250308232357567.webp)

> [!warning] 注意
> - 一旦移除，文档中的引用和参考文献表将==无法更新==，这个操作是==不可逆==的。所以在最终==定稿==之前，最好不要进行这个操作。
>   
> - 为了安全起见，在操作前一定要先**备份**文档，同时也方便后续修改。

如果是最终定稿了，点确认，这样参考文献就变成了==普通文本==。



本文终于结束啦~ 我不是拿Zotero来写论文科研那方面的，如果有不对的地方，多多包涵，欢迎交流~ 

<center><font color=#81B300>End</font></center>
