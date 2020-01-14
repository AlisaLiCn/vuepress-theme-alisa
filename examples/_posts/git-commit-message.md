---
title: Git Commit Message
date: '2020-01-06 22:11:00'
author: Alisa
location: Beijing
tags: Programming
---


>- 原文链接：[var vs let vs const in javascript](https://medium.freecodecamp.org/var-vs-let-vs-const-in-javascript-2954ae48c037)
>- 原文作者：Tyler McGinnis
>- 译者：[Alisa](http://www.alisali.cn)


在这篇文章中，你将学习两种在JavaScript（ES6）中创建变量的新方法，let和const。 在此过程中，我们将研究var，let和const之间的差异，以及函数与块级作用域，变量提升和不变性等主题。

如果你更喜欢观看视频的方式，可以看这个：

[var vs let vs const: Variable declarations in ES6 | ES2015](https://www.youtube.com/watch?v=6vBYfLCE9-Q)

ES2015（或ES6）引入了两种创建变量的新方法，let和const。但在我们真正深入研究var，let和const之间的差异之前，首先需要了解一些先决条件。 它们是变量声明与初始化，作用域（特别是函数作用域）和提升。

## 变量声明与初始化
变量声明引入了新的标识符。
```
var declaration
```
上面我们创建了一个名为declaration的新的标识符。在JavaScript中，变量在创建时使用`undefined`值初始化。这意味着如果我们尝试打印`declaration`变量，我们将得到undefineed。

```
var declaration

console.log(declaration)
```
所以如果我们打印declaration变量，得到undefined.

与变量声明相反，变量初始化是指首次为变量赋值。

```
var declaration

console.log(declaration) // undefined

declaration = 'This is an initialization'

```

所以这里我们通过将变量赋值为一个字符串来初始化它。

这引出了我们的第二个概念，作用域。

## 作用域
作用域定义了在你的程序中可以访问变量和函数的位置。在JavaScript中，有两种作用域 - 全局作用域和函数作用域。根据官方规范，
> 如果变量语句出现在函数声明中，那么这个变量在该函数中作为函数局部作用域被定义。

这就意味着如果你使用`var`创建了一个变量，
那么该变量的作用域为它被创建时所在的函数，并且只能在该函数或任何嵌套函数内部访问。

```
function getDate () {
  var date = new Date()
  return date
}
getDate()
console.log(date) // ❌ Reference Error

```
现在让我们看一个更高级的例子。假设我们有一个数组`prices`，并且我们需要一个函数，接受该数组以及一个`discount`作为参数，并返回一个新的折扣后的价格数组。最终目标可能如下所示：
```
discountPrices([100, 200, 300], .5)
```

并且实现可能像这样：
```
function discountPrices (prices, discount) {
  var discounted = []
  for (var i = 0; i < prices.length; i++) {
    var discountedPrice = prices[i] * (1 - discount)
    var finalPrice = Math.round(discountedPrice * 100) / 100
    discounted.push(finalPrice)
  }
  return discounted
}
```

看起来很简单，但这与作用域有什么关系？看一下`for`循环。在其内部声明的变量是否可以在其外部访问？事实证明，他们可以。

```
function discountPrices (prices, discount) {
  var discounted = []
  for (var i = 0; i < prices.length; i++) {
    var discountedPrice = prices[i] * (1 - discount)
    var finalPrice = Math.round(discountedPrice * 100) / 100
    discounted.push(finalPrice)
  }
  console.log(i) // 3
  console.log(discountedPrice) // 150
  console.log(finalPrice) // 150
  return discounted
}
```

如果JavaScript是你知道的唯一的编程语言，你可能不会想到这一点。但是，如果你从另一种编程语言（特别是一种块级作用域的编程语言）开始使用JavaScript，那么你可能会对这里发生的事情感到担忧。

它并没有真正破碎，它只是有点奇怪。在`for`循环之外，没有理由仍然可以访问`i`，`discountedPrice`和`finalPrice`。它对我们没有任何好处，甚至可能在某些情况下对我们造成伤害。但是，由于用`var`声明的变量是函数作用域内的，所以你可以这样做。

现在我们讨论了变量声明，初始化和作用域，
那么在我们深入了解`let`和`const`之前我们需要清除的最后一件事就是变量提升。

### 变量提升
记得早些时候我们说过“在JavaScript中，变量在创建时用`undefined`值来初始化。”事实证明，这就是变量提升的全部内容。JavaScript解释器将在所谓的“创建”阶段为变量声明分配默认值`undefined`。

> 有关创建阶段，变量提升和范围的更深入的指南，请参阅[The Ultimate Guide to Hoisting, Scopes, and Closures in JavaScript](https://tylermcginnis.com/ultimate-guide-to-execution-contexts-hoisting-scopes-and-closures-in-javascript/)

我们来看看前面的例子并且研究一下变量提升是怎么影响它的。
