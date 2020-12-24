title: 前端与圣诞碰撞的浪漫
speaker: vadxq

<slide class="bg-black-blue aligncenter" image="https://qnimg.vadxq.com/ppt/2019/bridge-4456255_1280.webp .dark">

# 前端与圣诞碰撞的浪漫 {.text-landing.text-shadow}

---

###### StackOverflow联合创始人杰夫·阿特伍德曾经说过，任何一个能用 JavaScript 编写的应用系统，最终都必将使用 JavaScript 实现

---

By vadxq {.text-intro.animated.fadeInUp.delay-500}

[:fa-github: Github](https://github.com/vadxq/nodeppt-set){.button.ghost}

<slide class="bg-black-blue">

# 背景现状 {.text-landing}

:::column

### **:fa-heart: 展示欢喜**

如何用代码表述自己的喜欢与爱意

---
### **:fa-gift: 生日礼物**

生日的时候送什么比较好，她到底喜欢什么

---
### **:fa-home: 家庭地位**

如何提高自己的家庭地位，延长打游戏的时间

---
### **:fa-keyboard-o: 跪键盘**

如何减少跪键盘的概率，省下键盘钱买皮肤

---
### **:fa-handshake-o: 挽救**

当出现争吵的时候，如何弥补挽救这份感情

---
### **:fa-money: 省钱**

如何用最少的钱满足她买买买的购买欲

---
### **:fa-ellipsis-h: 等等**

---
### **:fa-hand-o-right: 期待吗**

:::

<slide class="bg-black-blue aligncenter" >

#### Canvas & 图像方向

---

* ###### Canvas基础知识 {.animated.fadeInUp}
* ###### Canvas与图片效果处理 {.animated.fadeInUp.delay-400}
  * 反色（负片） {.animated.fadeInUp.delay-500}
  * 去色 {.animated.fadeInUp.delay-600}
  * 单色 Position {.animated.fadeInUp.delay-700}
  * 中国版画 {.animated.fadeInUp.delay-800}
  * 高斯模糊 {.animated.fadeInUp.delay-900}
  * 浮雕刻雕 {.animated.fadeInUp.delay-1100}
* ###### 3D图像 {.animated.fadeInUp.delay-1400}
  * three.js {.animated.fadeInUp.delay-1800}
  * WebGL {.animated.fadeInUp.delay-2200}

<slide :class="size-80 " >

###### 反色(负片)-将图片中的每一个元素进行如下`a=255-b`运算就可以得到最终的结果
  
```javascript
const imageData = cxt.getImageData(0, 0, canvas.width, canvas.height);
const imageData_length = imageData.data.length / 4;
for (var i = 0; i < imageData_length; i++) {
    imageData.data[i * 4] = 255 - imageData.data[i * 4];
    imageData.data[i * 4 + 1] = 255 - imageData.data[i * 4 + 1];
    imageData.data[i * 4 + 2] = 255 - imageData.data[i * 4 + 2];
}
```

###### 去色效果-算法的原理是采用人眼对RGB不同颜色的敏感程度不同，然后通过得出的加权平均数来运算出最后的结果。公式`Gray = (Red * 0.3 + Green * 0.59 + Blue * 0.11)`
  
```javascript
const red = imageData.data[i * 4];
const green = imageData.data[i * 4 + 1];
const blue = imageData.data[i * 4 + 2];
const gray = 0.3 * red + 0.59 * green + 0.11 * blue;
imageData.data[i * 4] = gray;
imageData.data[i * 4 + 1] = gray;
imageData.data[i * 4 + 2] = gray;
```

<slide :class="size-80 " >

###### 单色效果-将当前像素的其他色值去除

```javascript
// 假设需要红色，那把蓝色和绿色去除
imageData.data[i * 4 + 1] = 0;
imageData.data[i * 4 + 2] = 0;
```

###### 中国版画效果-通过判断当前元素的色值是否高于这个给定值，高于我们就显示为黑色，小于我们就显示为白色这样的一种方法来实现的，一般设定126

```javascript
const red = imageData.data[i * 4];
const green = imageData.data[i * 4 + 1];
const blue = imageData.data[i * 4 + 2];
const gray = 0.3 * red + 0.59 * green + 0.11 * blue;
let new_black;
if (gray > 126) {
    new_black = 255;
} else {
    new_black = 0;
}
imageData.data[i * 4] = new_black;
imageData.data[i * 4 + 1] = new_black;
imageData.data[i * 4 + 2] = new_black;
```

<slide :class="size-80 " >

###### 高斯模糊-两维的卷积模糊操作,通过让图片的每个像素与四周的像素按照某种权重进行分布求值。公式：二维高斯分布函数

![](https://qnimg.vadxq.com/ppt/2020/static/%E4%BA%8C%E7%BB%B4%E9%AB%98%E6%96%AF%E5%88%86%E5%B8%83%E5%87%BD%E6%95%B0.gif)

<a target="__blank" href="https://ppt.vadxq.com/demo/interestingFE/canvasPhoto/gaussBlur.js">参考代码</a>

###### 浮雕效果与刻雕效果-将某个像素与周边的差值较大的检测出来，然后替换成为255，一般我们将这个常量C设置成为128【255的一半】

![](https://qnimg.vadxq.com/ppt/2020/static/%E6%B5%AE%E9%9B%95%E5%85%AC%E5%BC%8F%E5%9B%BE%E7%89%87.gif) (C常量，Xa后一个像素的RGB，Xb前一个像素的RGB)

其中color代表的是最后的色值，Xa和Xb代表的是当前像素前后两点的RGB（中的某一个值），C代表的是一个常量。原理就是将某个像素与周边的差值较大的检测出来，然后替换成为255，一般我们将这个常量C设置成为128【255的一半】

<a target="__blank" href="https://ppt.vadxq.com/demo/interestingFE/canvasPhoto/reliefprocess.js">参考代码</a>

###### 刻雕效果-公式变动
![](https://qnimg.vadxq.com/ppt/2020/static/%E5%88%BB%E9%9B%95%E6%95%88%E6%9E%9C.gif)

<slide class="aligncenter bg-black-blue" >

# 回到主题：圣诞节时该如何用代码浪漫一下呢？

---

展现一下我们前端的canvas的一个小小创意

<slide class="bg-black-blue aligncenter" >

###### 使用canvas绘制圣诞树和爱心，让TA感到惊喜与崇拜 <a href="https://ppt.vadxq.com/demo/interestingFE/christmasTree.html" target="__blank">点击ppt外预览</a> {.animated.fadeInUp.delay-600}

<iframe src="https://ppt.vadxq.com/demo/interestingFE/christmasTree.html" width="100%" height="620px">
</iframe>

<slide class="bg-black-blue aligncenter" >

## Nodejs方向

---

* #### Nodejs与计算机基础知识 {.animated.fadeInUp}
* #### 小型既成项目后台 {.animated.fadeInUp.delay-400}
* #### 前端自动化与智能化 {.animated.fadeInUp.delay-800}
* #### BFF {.animated.fadeInUp.delay-1600}
* #### Serverless第一等公民 {.animated.fadeInUp.delay-2s}

<slide class="bg-black-blue aligncenter" >

### 提高家庭地位的创意来了！

---

爬取一言每日一句情话发送至TA短信里 <a target="__blank" href="https://developer.hitokoto.cn/sentence/">一言开发者中心</a>

爬取每日天气发送至TA短信里 <a href="http://data.cma.cn/" target="__blank">国家气象科学数据中心</a>

...

<slide class="bg-black-blue aligncenter" >

## 前端 & 人工智能

---

* #### NLP玩法 {.animated.fadeInUp}
* #### 语音合成玩法 {.animated.fadeInUp.delay-400}
* #### 人脸处理 {.animated.fadeInUp.delay-800}

<slide class="bg-black-blue aligncenter" >

## 人工智能相关js库

---

* #### TensorFlow.js {.animated.fadeInUp}
  * 基于 TensorFlow.js Node 的 tvnet 算法，可以提取视频中的稠密光流。
* #### DeepLearning.js {.animated.fadeInUp.delay-400}
* #### Kera.js {.animated.fadeInUp.delay-800}

<slide class="bg-black-blue aligncenter" >

## 高性能计算

---

* #### asm.js {.animated.fadeInUp}
* #### WebAssembly {.animated.fadeInUp.delay-400}
* #### GPU {.animated.fadeInUp.delay-800}
* #### Opencv {.animated.fadeInUp.delay-800}

<slide class="bg-black-blue aligncenter" >

## 呐！如何减少跪键盘的几率呢？

<slide class="bg-black-blue aligncenter" >

## 当然是更了解TA，了解TA想要什么，喜欢什么，如TA意

<slide class="bg-black-blue aligncenter" >

#### 机器人自动回复TA的消息 <a target="__blank" href="https://github.com/vadxq/pushQQlove">参考项目</a>

#### 语音合成-打游戏的时候回复 <a target="__blank" href="https://ai.baidu.com/tech/speech/tts">百度语音合成</a>

#### 人脸处理-美化照片 <a target="__blank" href="https://open.youtu.qq.com/#/open">腾讯优图</a>

<slide class="bg-black-blue aligncenter" >

## 前端 & 硬件 IOT

---

* #### 嵌入式操作系统，包括VxWorks、FreeRTOS、LiteOS等 {.animated.fadeInUp}
* #### 极客硬件平台，包括树莓派、Arduino等 {.animated.fadeInUp.delay-400}
* #### JavaScript IoT应用开发平台，包括Ruff、Tessel、JerryScript、Johnny-Five等 {.animated.fadeInUp.delay-800}

<slide class="bg-black-blue aligncenter" >

## 俘获美人心的技巧来了--魔镜

<slide class="bg-black-blue aligncenter" >

#### 爱美之心-魔镜效果图 <a target="__blank" href="https://www.zhihu.com/question/37804443/answer/285836686">参考来源</a> <a target="__blank" href="https://ruff.io/">Ruff.io</a>
![](https://qnimg.vadxq.com/ppt/2020/static/%E9%AD%94%E9%95%9C.jpg)

<slide class="bg-black-blue aligncenter" >

## 如果这个还不能挽救，那就使出我们的终极杀手锏

<slide class="bg-black-blue aligncenter" >

## 买买买！！--比价

---

- ##### 通过数据分析喜好！<a href="https://cart.taobao.com/cart.htm" target="__blank">数据参考</a>
- ##### 通过node定时查询记录价格 <a target="__blank" href="https://www.free-api.com/doc/156">商品比价</a>
- ##### 用最少的钱买对TA心的礼物

<slide class="bg-black-blue aligncenter" image="https://qnimg.vadxq.com/ppt/2019/photo-1421930535025-d2af27c14065.jfif .anim">
:::{.aligncenter}

# 圣诞快乐 {.text-landing}
Merry Christmas {.text-landing}
# 谢谢 {.text-landing}

Thank you {.text-landing}
:::

---

Shanghai 2020.12.25 {.text-intro.animated.fadeInUp.delay-500}

vadxq {.text-intro.animated.fadeInUp.delay-500}

:::footer

[回味：https\://ppt.vadxq.com](https://ppt.vadxq.com){.alignleft}

[:fa-github: @vadxq](https://github.com/vadxq){.alignright}
[:fa-twitter: @vadxq](https://github.com/vadxq){.alignright}

:::

<!-- :::header
Header (logo) :.alignright:{.alignright} -->
:::

<slide class="bg-black-blue aligncenter" >

###### 抽取下一位幸运分享的幸运听众 {.animated.fadeInUp.delay-600}

<iframe src="https://www.random-online.com/" width="100%" height="620px">
</iframe>
