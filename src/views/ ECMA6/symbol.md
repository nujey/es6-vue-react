## 如果 Symbol 的参数是一个对象，就会调用该对象的toString方法，将其转为字符串，然后才生成一个 Symbol 值。

## Symbol函数前不能使用new命令，否则会报错。这是因为生成的 Symbol 是一个原始类型的值，不是对象
## 也就是说，由于 Symbol 值不是对象，所以不能添加属性。基本上，它是一种类似于字符串的数据类型。

## ES6 引入了一种新的原始数据类型Symbol，表示独一无二的值

## JavaScript [语言的第七种数据类型](http://es6.ruanyifeng.com/#docs/symbol)

  * 前六种是：undefined、null、布尔值（Boolean）、字符串（String）、数值（Number）、对象（Object）。 最后是新加的symbol

  * Symbol 作为属性名，该属性不会出现在for...in、for...of循环中，也不会被Object.keys()、Object.getOwnPropertyNames()、JSON.stringify()返回
