# How to Execute JavaScript when Using innerHTML

When we use AJAX to dynamically load parts of a page, we often use `innerHTML` to update the page:

```javascript
document.getElementById('child').innerHTML = `<p>Hello, this is a dynamic page.</p>`;
```

However, when using `innerHTML`, if the loaded HTML fragment contains `<script>` tags, the browser will not execute the JavaScript:

```javascript
document.getElementById('child').innerHTML = `
<p>Hello, this is a dynamic page.</p>
<script>
    alert('Hello!');
</script>
`;
```

What should we do if we are sure that the loaded HTML fragment is trustworthy and we also want to execute the inner JavaScript code?

The browser actually parses the innerHTML and generates the complete DOM structure, including the `<script>` node, it just doesn't execute it. Therefore, we can trigger the browser to execute it by scanning the `<script>` nodes, copying them over and replacing the old `<script>` nodes.

The following code is copied from Stackoverflow [^stackoverflow]：

[^stackoverflow]: Stackoverflow: [Executing script elements inserted with .innerHTML](https://stackoverflow.com/a/47614491)

```javascript
const dom = document.getElementById('child');
dom.innerHTML = `
<p>Hello, this is a dynamic page.</p>
<script>
    alert('Hello!');
</script>
`;
// loop over all <script> nodes:
Array.from(dom.querySelectorAll('script'))
    .forEach(oldScriptEl => {
        // create a new <script> node:
        const newScriptEl = document.createElement('script');
        // copy attributes:
        Array.from(oldScriptEl.attributes).forEach(attr => {
            newScriptEl.setAttribute(attr.name, attr.value);
        });
        // copy text:
        const scriptText = document.createTextNode(oldScriptEl.innerHTML);
        // replace the original <script> node at the original location:
        newScriptEl.appendChild(scriptText);
        oldScriptEl.parentNode.replaceChild(newScriptEl, oldScriptEl);
    });
```

Finally, we get an executable JavaScript version of `innerHTML` by `setInnerHTML()` function:

```javascript
function setInnerHTML(dom, html) {
    dom.innerHTML = html;
    Array.from(dom.querySelectorAll('script'))
        .forEach(oldScriptEl => {
            const newScriptEl = document.createElement('script');
            Array.from(oldScriptEl.attributes).forEach(attr => {
                newScriptEl.setAttribute(attr.name, attr.value);
            });
            const scriptText = document.createTextNode(oldScriptEl.innerHTML);
            newScriptEl.appendChild(scriptText);
            oldScriptEl.parentNode.replaceChild(newScriptEl, oldScriptEl);
        });
}
```
