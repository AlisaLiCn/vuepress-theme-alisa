---
title: 【翻译】JavaScript面向对象编程的介绍
date: 2018-12-07 19:03:49
category: Translation
tags: JavaScript
---

>- 原文链接：[An introduction to Object-Oriented Programming in JavaScript](https://medium.freecodecamp.org/an-introduction-to-object-oriented-programming-in-javascript-8900124e316a)
>- 原文作者：Rainer Hahnekamp
>- 译者：[Alisa](https://github.com/AlisaLiCn)

## JavaScript面向对象编程的介绍

本文适用于在面向对象编程（OOP）方面没有任何先验知识的JavaScript学者。我仅专注于与JavaScript相关的面向对象编程而不是一般意义上的面向对象编程。我跳过多态，因为它更适合静态类型的语言。

## 为什么你需要知道这些
你是否选择JavaScript作为你的第一门编程语言？你是否想要成为一个在跨越数十万行或更多代码的巨型企业系统上工作的，一个炙手可热的开发者？

除非你尝试去完全拥抱面向对象编程，否则你将会真正地迷失。

## 不同的心态
在足球比赛中，你可以采取防守的方式来比赛，你可以从侧面打高球或者你可以像没有明天一样进攻。所有这些策略都有相同的目标：赢得比赛。

编程也是如此。 总会有不同的方法来解决问题并设计解决方案。

面向对象编程（OOP）是现代应用程序开发的范例。 它受Java，C＃或JavaScript等主要编程语言的支持。

## 面向对象的范式
从面向对象编程的角度来看，应用程序是一组彼此通信的“对象”。我们将这些对象基于现实世界中的事物，例如库存中的产品或员工记录。对象包含数据并根据其数据执行某些逻辑。因此，面向对象编程的代码非常容易理解。而决定怎么将你的应用程序分解为这些小对象是不那么容易的。

如果你像我一样第一次听说它时，觉得不理解它到底意味着什么 - 它听起来很抽象。这样的感觉是完全没有问题的。更重要的是，你已经听说过这个概念，记住它，并且尝试在你的代码中应用面向对象编程。随着时间的推移，你就会获得这方面的经验并且使你的代码更好地向这个概念靠拢。

经验教训：实际的对象的面向对象编程允许任何人阅读你的代码并了解正在发生什么。

## 对象作为核心
![](https://cdn-images-1.medium.com/max/800/1*FtCjz9CkJorrEKZjWq9cqw.png)

一个简单的例子将帮助你了解JavaScript如何实现面向对象编程的基本原则。考虑一个购物用例，当你将产品放入购物篮，然后计算你要支付的总价钱。如果你使用JavaScript知识并且在编码时没有使用面向对象编程的用例，代码将会像下面这样：

```javascript

const bread = {name: 'Bread', price: 1};
const water = {name: 'Water', price: 0.25};

const basket = [];
basket.push(bread);
basket.push(bread);
basket.push(water);
basket.push(water);
basket.push(water);

const total = basket
  .map(product => product.price)
  .reduce((a, b) => a + b, 0);

console.log('one has to pay in total: ' + total);

```

面向对象编程视角使我们更容易去编写更好的代码，因为我们思考对象时会像在现实世界中遇到它们一样。由于我们的用例包含一篮子产品，我们已经有两种对象 - 篮子对象和产品对象。

购物用例的面向对象编程版本可以这样写：

```

const bread = new Product('bread', 1);
const water = new Product('water', .25)
const basket = new Basket();
basket.addProduct(2, bread);
basket.addProduct(3, water);
basket.printShoppingInfo();

```

正如你在第一行看到的，我们使用关键字new，后跟一个类名（class 下面会解释），来创建一个新对象。它会返回存储到变量bread中的一个对象。我们对变量water重复这个操作，并采取类似的方式来创建变量basket。当你把这些产品添加到购物篮后，最终会打印出你需要支付的总金额。

两个代码片段之间的区别是显而易见的。面向对象编程版本读起来几乎就像真正的英语句子一样，你可以轻松地分辨出正在发生的事情。

经验教训：实际的对象模型由数据和函数组成。

## class作为模板
 ![](https://cdn-images-1.medium.com/max/800/1*nqiAJrj7zRpy2Q7xDkuzPQ.png)

在面向对象编程的过程中，我们使用类作为创建对象的模板。对象是“类的实例”，“实例化”是基于类创建对象。在类中定义的代码，除非它在活动对象中，否则无法执行。

你可以查看类似汽车蓝图的类。它们定义了汽车的特性：如扭矩和马力，内部方法：如空气 - 燃料比和公共方法：如点火。 然而，只有在工厂实例化汽车时，你才能转动钥匙并驾驶汽车。

在我们的用例中，我们用Product类来实例化两个对象：bread 和 water。当然，这些对象需要你在类中提供的代码。就像这样：

```

function Product(_name, _price) {
  const name = _name;
  const price = _price;
this.getName = function() {
    return name;
  };
this.getPrice = function() {
    return price;
  };
}
function Basket() {
  const products = [];
this.addProduct = function(amount, product) {
    products.push(...Array(amount).fill(product));
  };
this.calcTotal = function() {
    return products
      .map(product => product.getPrice())
      .reduce((a, b) => a + b, 0);
  };
this.printShoppingInfo = function() {
    console.log('one has to pay in total: ' + this.calcTotal());
  };
}

```

在JavaScript中，类看起来像一个方法，但在使用时是不同的。方法的名称就是是类的名称，并且是大写的。因为它不返回任何东西，所以我们不会像常规方式那样调用方法，例如 `const basket = Product('bread', 1);`。 相反，我们使用关键字new，例如：`const basket = new Product('bread', 1);`。

方法内部的代码是构造函数，每次实例化对象时都会执行这些代码。Product有参数_name和_price。每个新对象中都存储了这些值。

此外，我们可以在对象中定义函数。我们通过添加this关键字来定义这些函数，这样就会使它们可以被外部访问（参见封装）。 注意，这些方法具有属性的完全访问权限。

在创建新对象时，Basket类不需要任何参数。实例化一个新的Basket对象仅是生成了一个空的产品列表，之后程序会去填充这个列表。

经验教训：类是用于在运行时生成对象的模板。

## 封装

![](https://cdn-images-1.medium.com/max/800/1*X5oSvP0jiX85DWzJfGBPwg.png)

你可能会遇到声明类的另一种形式：

```

function Product(name, price) {
  this.name = name;
  this.price = price;
}

```
我们注意到它将属性赋值给变量this。乍一看，它似乎是一个更好的版本，因为它不再需要getter（getName和getPrice）方法，因此更短。

不幸的是，你现在完全可以从外部访问这些属性。所以每个人都可以访问并修改它：
```

const bread = new Product('bread', 1);
bread.price = -10;

```

这并不是你想要的结果，因为这使得应用程序更难以维护。如果添加校验代码，例如，防止prices小于0，会发生什么呢？任何直接访问price属性的代码都会绕过校验。这可能会引入难以追踪的错误。另一方面，使用对象的getter方法的代码可以保证通过对象的price校验。

对象应该对其数据具有独有控制权。换句话说，对象“封装”它们的数据并防止其他对象直接访问数据。 访问数据的唯一方法是通过写入对象的方法进行间接访问。

数据和处理（又名逻辑）永远是在一起的。 当涉及到在大型应用中处理具有特定定义的数据时尤其如此。

如果做得好，面向对象编程通过设计实现模块化，这是软件开发中的圣杯。它可以防止可怕的意大利面条代码，其中一切都是紧密耦合的，你不知道当你改变一小段代码时会发生什么。

在我们的例子中，Product类的对象不允许你在初始化之后更改price或者name，Product的实例是只读的。

## 继承

![](https://cdn-images-1.medium.com/max/800/1*veYiDAB_r31nmttBlATKdA.png)

继承允许你通过扩展现有类的属性和方法来创建新的类。新类“继承”父类的所有功能，从而避免从头开始创建新代码。此外，对父类所做的任何更改都将自动同步给子类。这使得更新更容易。

假设我们有一个名为Book的新类，它有一个名字，一个价格和一个作者。使用继承，你可以说Book与Product相同但具有额外的author属性。我们说Product是Book的超类，Book是Product的子类：
```

function Book(_name, _price, _author) {
  Product.call(this, _name, _price);
  const author = _author;

  this.getAuthor = function() {
    return author;
  }
}

```

注意使额外的Product.call和this一起作为第一个参数。 请注意：尽管book提供了getter方法，但它仍无法直接访问属性name和price。Book必须从Product类调用数据。

现在你可以向basket中添加一个book对象而不会出现任何问题：

```

const faust = new Book('faust', 12.5, 'Goethe');
basket.addProduct(1, faust);

```
Basket期望一个Product类型的对象。由于book通过Book继承自Product，因此它也是一个Product。

经验教训：子类可以在添加属性和方法时从超类继承属性和方法。

## JavaScript和面向对象编程
你会发现创建JavaScript应用程序有三种不同的编程范例。分别是基于原型的编程，面向对象的编程和面向功能的编程。

原因在于JavaScript的历史。 最初，它是基于原型的。JavaScript不是用作大型应用程序的语言。

与其创始人的计划相反，开发人员越来越多地将JavaScript用于更大的应用程序。面向对象编程是在最初的基于原型的技术之上嫁接的。

基于原型的方法如下所示。 它被视为构建类的“经典和默认方式”。 不幸的是它不支持封装。

尽管JavaScript对面向对象编程的支持与Java等其他语言不同，但它仍在不断发展。ES6的发布添加了我们可以使用的专用于类的关键字。在内部，它的作用与prototype属性相同，但减小了代码的大小。但是，ES6中的类仍缺乏私有属性，这就是为什么我坚持“旧方式”。

为了完整起见，我们将使用ES6中类以及原型（经典和默认）方法编写Product，Basket和Book。请注意，这些版本不提供封装：

```

// ES6 version

class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}

class Book extends Product {
  constructor(name, price, author) {
    super(name, price);
    this.author = author;
  }
}

class Basket {
  constructor() {
    this.products = [];
  }

  addProduct(amount, product) {
    this.products.push(…Array(amount).fill(product));
  }

  calcTotal() {
    return this.products
      .map(product => product.price)
      .reduce((a, b) => a + b, 0);
  }

  printShoppingInfo() {
    console.log('one has to pay in total: ' + this.calcTotal());
  }
}

const bread = new Product('bread', 1);
const water = new Product('water', 0.25);
const faust = new Book('faust', 12.5, 'Goethe');

const basket = new Basket();
basket.addProduct(2, bread);
basket.addProduct(3, water);
basket.addProduct(1, faust);
basket.printShoppingInfo();

//Prototype version

function Product(name, price) {
  this.name = name;
  this.price = price;
}

function Book(name, price, author) {
  Product.call(this, name, price);
  this.author = author;
}
Book.prototype = Object.create(Product.prototype);
Book.prototype.constructor = Book;

function Basket() {
  this.products = [];
}
Basket.prototype.addProduct = function(amount, product) {
  this.products.push(...Array(amount).fill(product));
};
Basket.prototype.calcTotal = function() {
  return this.products
    .map(product => product.price)
    .reduce((a, b) => a + b, 0);
};
Basket.prototype.printShoppingInfo = function() {
  console.log('one has to pay in total: ' + this.calcTotal());
};

```
经验教训：面向对象编程在后期的发展中被添加到JavaScript中。

## 总结
作为一名学习JavaScript的新程序员，要做到完全领会面向对象编程需要一些时间。在早期阶段更重要的是要理解面向对象编程所依据的原则及它所能带来的好处：
- 真实的对象是任何基于面向对象编程的应用程序的核心。
- 封装可保护数据免受不可控的访问。
- 对象具有操作其数据和对象的方法。
- 类是实例化对象的模板。
- 继承是避免冗余的强大工具。
- 面向对象编程比其他编程方式更冗长但更易读。
- 由于面向对象编程在JavaScript的发展中出现得较晚，你可能会遇到使用原型或函数编程技术的旧代码。

## 阅读更多
- https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object-oriented_JS
- http://voidcanvas.com/es6-private-variables/
- https://medium.com/@rajaraodv/is-class-in-es6-the-new-bad-part-6c4e6fe1ee65
- https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Inheritance
- https://en.wikipedia.org/wiki/Object-oriented_programming













