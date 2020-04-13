---
title: 用ffmpeg合并转换下载的腾讯视频
date: 2020-01-19 22:00:00
category: Programming
tags: video
---

# 问题描述
作为腾讯视频‘尊贵’的VIP（所以没去看盗版庆余年），想要保存一些比较喜欢的剧集，留待之后观看或作为剪辑素材使用，但目前在腾讯下载的视频是被分割成的数个ts视频片段。  
所以研究了一下如何在`Mac`上合并这些ts文件，并最终转换为mp4文件。

# 所用工具
- [ffmpeg](https://www.ffmpeg.org/)
- [Node.js](https://nodejs.org/en/)

# 操作步骤
## 1. 安装ffmpeg
Mac上使用`homebrew`(或者到[官网](https://www.ffmpeg.org/)下载)安装`ffmpeg`  
```
brew install ffmpeg
```
输入上述命令后，按照之后的提示操作即可。安装完成后进入下一步。

## 2. 准备待合并的视频
在Mac上找到腾讯视频下载后的存放位置：
```
/Users/你的用户名/Library/Containers/com.tencent.tenvideo/Data/Library/Application Support/Download/video/
```
如图所示：除了`ad`文件夹，每个以`.hls`结尾的文件夹都包含了一个视频（如一集电视剧），被分割后的所有文件。其中包括一个`.m3u8`文件及若干分段文件夹，每个分段文件夹又包含30个小的`.ts`视频片段文件。

![](https://wx4.sinaimg.cn/large/6dc8b1b5ly1gb27xm6bq4j212w0k7na4.jpg)

我们要做的是将所有的`.ts`文件移动到与`.m3u8`文件同级的目录下，因为`.m3u8`文件指定了整个视频的文件名和顺序，但却是相对路径，直接用会找不到文件。

这里我用`Node.js`写了循坏来移动或拷贝所有`.ts`文件，使用其他语言实现也可。
```
const fs = require('fs')
const path = require('path')

try {
  // 获取分段文件夹列表
  const dirList = fs.readdirSync(__dirname)

  dirList.forEach(dirName => {

    // 分段文件夹路径
    const dirPath = path.join(__dirname, dirName)

    // 获取文件信息，判断是否为文件夹且排除tpt文件夹
    const stats = fs.statSync(dirPath)
    if (stats.isDirectory() && dirName !== 'tpt') {

      // 获取ts文件列表
      const videoList = fs.readdirSync(dirPath)
      videoList.forEach(videoName => {

        // ts文件路径
        const videoPath = path.join(dirPath, videoName)
        
        // 移动文件到与.m3u8同级的目录
        fs.renameSync(videoPath, path.join(__dirname, videoName))

        // 或者拷贝也可以
        // fs.copyFileSync(videoPath, path.join(__dirname, videoName))
      })
    }
  })
} catch (e) {
  console.log(e)
}

```
保存上述代码到`app.js`并将它放到要处理的视频目录下，与`.m3u8`文件同级。

接下来，在命令行中进入到`app.js`所在的路径，执行：
```
node app
```
回车后，所有的ts文件就可以完成快速移动了，这样比较大的视频，就算有很多的分段文件夹，也可以很非常快速地搞定，不用手动操作了。

## 3. ts文件合并及格式转换
终于到最后一步了，还是在刚刚的路径下，即`.m3u8`文件所在路径，在命令行终端中输入以下命令：
```
ffmpeg -i .m3u8 -c copy new.mp4
```
回车后终于得到了无损完整的视频`new.mp4`(可以自行更改命名)✌️

## 关于ffmpeg
ffmpeg是一款功能很强大的工具，可以处理音视频，例如格式转换、合成拆分、还能从视频中截图，等等。深入学习的话，感觉能get到很多新技能。  
这里用到的ffmpeg命令行参数：  

- -i: input file url 指定输入文件，这里的.m3u8中就指定了输入文件的清单。可以用编辑器打开查看。
- -c: [:stream_specifier] codec (input/output,per-stream) 应该是指定编码格式相关的  

这里的`-c copy`就是直接拷贝原视频的编码格式，最后输出`new.mp4`文件。

# 总结
`ffmpeg`的安装貌似有点费时。  

开始时看到有些文章里是先用

```ffmpeg -f concat -i files.txt -c copy all.ts```

命令将所有ts文件合并(files.txt指定要合并的ts文件列表)，再使用

```ffmpeg -i all.ts -acodec copy -vcodec copy all.mp4```

将ts文件转换为mp4文件，但最后转换出来的视频放到Premiere中进行处理的时候发现有音画不同步问题，在视频播放器中播放是正常的。

虽然命令中视频和音频的编码格式都是`copy`，但可能音频编码在转换时与视频不同步吧，具体原因需要再研究下。现在一条命令可以完成，暂时也没有这个问题。

当然，如果只用一些较短的视频片段的话，直接找到对应镜头的ts文件导入pr也是可以的，最后导出时也能导成mp4文件。

# 参考资料
- [ffmpeg官网](https://www.ffmpeg.org/) 学习更多相关用法
