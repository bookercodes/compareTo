#CompareTo

CompareTo is a custom [`<input>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Input) element attribute that compares two passwords.

```html
<form action="register" method="post">
  <input type="text" name="username" required>
  <input type="password" name="password" required>
  <input type="password" name="compare_password" compareTo="password" required>
</form>
```

![](https://i.imgur.com/sZyT8ET.png)

## Installation

When it comes to installing compareTo, you have a few options:

1. Download `compareTo.js` and reference it from your html.
2. Copy and paste the relevant content from `compareTo.js` into your own script.
3. Reference the file here on GitHub.

##Development

At the moment, compareTo is **very** simplistic. Moving forward I would like to drop the jQuery dependency and handle more complicated scenarios. At the moment I am just gauging interest.