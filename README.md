# unix-wc-l

Fast `wc -l <filename>` promise for node.js.

(from [Emil Vikström SO answer](https://stackoverflow.com/a/41439945) to
[Node.js:  Count the number of lines in a
file](https://stackoverflow.com/q/12453057))

```
var wcL = require('unix-wc-l')

wcL('test.txt').then((nlines) => {
  console.log(`test.txt has ${nlines} lines`)
})
```
