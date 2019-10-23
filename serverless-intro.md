title: serverless浅谈介绍
speaker: vadxq
plugins:
    - echarts

<slide class="bg-black-blue aligncenter" image="https://www.canva.cn/learn/wp-content/uploads/sites/17/2019/10/bridge-4456255_1280.jpg .dark">

# serverless浅谈介绍 {.text-landing.text-shadow}

By vadxq {.text-intro.animated.fadeInUp.delay-500}

[:fa-github: Github](https://github.com/vadxq/nodeppt-set){.button.ghost}

<slide class="bg-black-blue aligncenter" image="http://up.92sucai.com/image/20190115/1547534174306217.jpg .dark.anim">

# 目录
### 背景现状 {.text-shadow}
### Serverless(无服务器)架构是什么 {.text-shadow}
### Serverless的两种形式 {.text-shadow}
### Serverless的优缺点 {.text-shadow}
### Serverless与前端
### Serverless最佳实践


<slide class="bg-black-blue aligncenter" image="http://up.92sucai.com/image/20190115/1547534174306217.jpg .dark.anim">

# 背景现状 {.text-landing.text-shadow}
----
#### 自6月GMTC以来，国内腾讯和阿里云都铆足了劲在上面发力，提出了各自的解决方案，Serverless 越来越受重视 
#### 腾讯推出了 Serverless 2.0
#### 阿里云推出的预留模式

<slide class="bg-black-blue aligncenter" image="http://up.92sucai.com/image/20190115/1547534174306217.jpg .dark.anim">

# Serverless(无服务器)架构是什么 {.text-shadow}

----

:::shadowbox {.text-intro}
 
最早由iron.io公司于2012年提出,目前尚无权威定义 {.text-intro}

无服务器架构是基于互联网的系统，其中应用开发不使用常规的服务进程。相反，它们仅依赖于第三方服务，客户端逻辑与托管远程服务之间的调用过程的组合。 – Wiki {.text-intro}

---
    1. 服务端的主机和进程完全由供应商管理
    2. 可以根据负载进行自动伸缩
    3. 按照精确的使用情况来计费，就像水和电一样。（效用计算）
    4. 供应商对 Serverless 服务的能力评估方式不再是单纯的提供多少CPU，多少硬盘空间这种的资源性指标了，而可能是可以承受多少峰值的并发数，实时性等类似的非功能性指标。
    5. 由于服务端完全托管给给供应商，使用者无法介入，那么供应商应该提供很高的可用性保障

:::

<slide class="bg-black-blue aligncenter" image="http://up.92sucai.com/image/20190115/1547534174306217.jpg .dark.anim">

# Serverless的两种形式 {.text-shadow}
----


MBaaS（Mobile Backend as a Service），简称 BaaS {.text-intro}

FaaS（Function as a Service） {.text-intro}

<slide class="bg-black-blue aligncenter" image="http://up.92sucai.com/image/20190115/1547534174306217.jpg .dark.anim">


<slide class="bg-black-blue aligncenter" image="http://up.92sucai.com/image/20190115/1547534174306217.jpg .dark.anim">
<slide class="bg-black-blue aligncenter" image="http://up.92sucai.com/image/20190115/1547534174306217.jpg .dark.anim">
<slide class="bg-black-blue aligncenter" image="http://up.92sucai.com/image/20190115/1547534174306217.jpg .dark.anim">
<slide class="bg-black-blue aligncenter" image="http://up.92sucai.com/image/20190115/1547534174306217.jpg .dark.anim">
<slide class="bg-black-blue aligncenter" image="http://up.92sucai.com/image/20190115/1547534174306217.jpg .dark.anim">
<slide class="bg-black-blue aligncenter" image="http://up.92sucai.com/image/20190115/1547534174306217.jpg .dark.anim">
<slide class="bg-black-blue aligncenter" image="http://up.92sucai.com/image/20190115/1547534174306217.jpg .dark.anim">
<slide class="bg-black-blue aligncenter" image="http://up.92sucai.com/image/20190115/1547534174306217.jpg .dark.anim">
<slide class="bg-black-blue aligncenter" image="http://up.92sucai.com/image/20190115/1547534174306217.jpg .dark.anim">
<slide class="bg-black-blue aligncenter" image="http://up.92sucai.com/image/20190115/1547534174306217.jpg .dark.anim">


这个概念最早由iron.io公司于2012年提出,目前尚无权威定义

- 腾讯推出了 Serverless 2.0
- 阿里云推出的预留模式
{.text-intro}
!![](https://webslides.tv/static/images/iphone.png .size-50.alignright)

前端研发升级