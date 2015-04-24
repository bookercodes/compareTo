![](http://i.imgur.com/fEQnsP4.png)

CompareTo is a custom HTML5 attribute that compares two passwords with one another. If the passwords are not the same, a native error will be shown to the user:

![](http://i.imgur.com/TFQlHd0.png)

You can see the demo [here](https://alexbooker.github.io/compareTo/).

##Installation

1. Download the [minified script](https://raw.githubusercontent.com/alexbooker/compareTo/master/compareTo.min.js) and reference it from your document; or,
2. Reference the online [minified script](https://cdn.rawgit.com/alexbooker/compareTo/master/compareTo.min.js) from your document. See the [demo code](https://github.com/alexbooker/compareTo/blob/gh-pages/index.html) if you need to.

##Usage

```html
<form action="register" method="post">
  <input type="text" name="username" required>
  <input type="password" name="password" required>
  <input type="password" name="compare_password" compareTo="password" required>
</form>
```

##Custom validity error message

```html
<form action="register" method="post">
  <input type="text" name="username" required>
  <input type="password" name="password" required>
  <input type="password" name="compare_password" compareTo="password" required>
  <input type="email" name="email" required>
  <input 
    type="email" 
    name="compare_email" 
    compareTo="email" 
    compareToError="emails do not match" 
    required>
</form>
```

##Support

Common problems will manifest in the developer console: 

![](http://i.imgur.com/zJkLOJ1.png)

Still having trouble? Open an [issue](https://github.com/alexbooker/compareTo/issues) and someone will get back to you shortly :smile:.