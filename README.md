## ImmDom Main Site

### Generating the Site

We use Showdown.

```
npm install showdown -g
showdown makehtml -i pre-index.md -o pre-index.html
rm index.html
cat front.html pre-index.html back.html >> index.html
```

and then add CSS from
https://markdowncss.github.io/

```
open index.html
```