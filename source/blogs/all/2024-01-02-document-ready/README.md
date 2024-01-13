# Document Ready Equivalent without jQuery

When using jQuery, `$(document).ready()` is very commonly used. It delegates the initialization function to jQuery and waits until the DOM of page initialization is complete to call it automatically.

![document.ready](document-ready.png)

You can call `$(document).ready()` repeatedly, and jQuery will call the passed-in initialization functions in order.

In GitSite, the page does not introduce jQuery, so a function similar to `$(document).ready()` is needed to complete the initialization. GitSite defines a `documentReady()` function to achieve similar functionality:

```javascript
// equivalent of $(document).ready(fn):
function documentReady(fn) {
    if (document.readyState === 'complete' || document.readyState === 'interactive') {
        setTimeout(fn, 0);
    } else {
        document.addEventListener('DOMContentLoaded', fn);
    }
}
```

The above code by determining `document.readyState` to confirm whether the page initialization is complete, if the page is ready, then directly call `setTimeout()` asynchronous execution of the incoming function, otherwise, listen to the DOM `ContentLoaded` event.

The implementation of the `documentReady()` function is very simple because GitSite is built on HTML5, which only supports modern browsers, not the ancient IE.

In contrast, jQuery's `$(document).ready()` is more complex because it needs to be compatible with more browsers.
