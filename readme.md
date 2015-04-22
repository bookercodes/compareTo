#CompareTo

compareTo is a custom html5 data attribute that compares two password fields with one another. 

```html
<form action="register" method="post">
  <input type="text" name="username" required>
  <input type="password" name="password" required>
  <input type="password" name="compare_password" compareTo="password" required>
</form>
```

If the passwords do not match, a native error will be shown to the user:

![](https://i.imgur.com/O2S8q1e.png)

You can see a live demo [here] (https://alexbooker.github.io/compareTo/).

## Installation

When it comes to installing compareTo, you have a few options:

1. Download [`compareTo.js`](https://raw.githubusercontent.com/alexbooker/compareTo/master/compareTo.js) and reference it from your html.
2. Copy [`compareTo.js`](https://raw.githubusercontent.com/alexbooker/compareTo/master/compareTo.js) into your own script.
3. Reference the GitHub CDN: https://cdn.rawgit.com/alexbooker/compareTo/master/compareTo.js


##Development

At the moment, compareTo is **very** simple. Moving forward, I would like to drop dependency on jQuery. I would also like to handle more complicated scenarios. At the moment, I am merely gauging intrest. If you want to get involved, please feel free to claim an [issue](https://github.com/alexbooker/compareTo/issues)!