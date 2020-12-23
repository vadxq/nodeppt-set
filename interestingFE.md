title: 前端与圣诞碰撞的浪漫
speaker: vadxq
plugins:
    - echarts

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
###### 浮雕效果与刻雕效果-将某个像素与周边的差值较大的检测出来，然后替换成为255，一般我们将这个常量C设置成为128【255的一半】

![](https://qnimg.vadxq.com/ppt/2020/static/%E6%B5%AE%E9%9B%95%E5%85%AC%E5%BC%8F%E5%9B%BE%E7%89%87.gif) (C常量，Xa后一个像素的RGB，Xb前一个像素的RGB)

其中color代表的是最后的色值，Xa和Xb代表的是当前像素前后两点的RGB（中的某一个值），C代表的是一个常量

原理就是将某个像素与周边的差值较大的检测出来，然后替换成为255，一般我们将这个常量C设置成为128【255的一半】

###### 刻雕效果-公式变动
![](https://qnimg.vadxq.com/ppt/2020/static/%E5%88%BB%E9%9B%95%E6%95%88%E6%9E%9C.gif)

<slide class="aligncenter bg-black-blue" >

# 回到主题：圣诞节时该如何用代码浪漫一下呢？

---

展现一下我们前端的canvas的一个小小创意

<slide class="bg-black-blue aligncenter" >

###### 使用canvas绘制圣诞树，让TA感到惊喜与崇拜 <a href="https://ppt.vadxq.com/demo/interestingFE/christmasTree.html" target="__blank">点击ppt外预览</a> {.animated.fadeInUp.delay-600}

<iframe src="https://ppt.vadxq.com/demo/interestingFE/christmasTree.html" width="100%" height="620px">
</iframe>

<slide :class="size-80 " >


<slide :class="size-80 " >

<slide :class="size-80 " >




<slide :class="size-80 " >

http://www.romancortes.com/blog/how-i-did-the-1kb-christmas-tree/
