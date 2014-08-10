# WMDataURIScheme.js [![Build Status](https://api.travis-ci.org/legokichi/WMDataURIScheme.js.png)](http://travis-ci.org/legokichi/WMDataURIScheme.js)

[![npm](https://nodei.co/npm/legokichi.wmdataurischeme.js.png?downloads=true&stars=true)](https://nodei.co/npm/legokichi.wmdataurischeme.js/)

Data URI scheme converter.

## Document

- [WMDataURIScheme.js wiki](https://github.com/legokichi/WMDataURIScheme.js/wiki/WMDataURIScheme)
- [Development](https://github.com/uupaa/WebModule/wiki/Development)
- [WebModule](https://github.com/uupaa/WebModule) ([Slide](http://uupaa.github.io/Slide/slide/WebModule/index.html))


## How to use

### Browser

```js
<script src="lib/WMDataURIScheme.js"></script>
<script>
WMDataURIScheme.StringToDataURI("💩", "type/plain", function(err, dataURI){
  console.log(dataURI);
});
</script>
```

### WebWorkers

```js
importScripts("lib/WMDataURIScheme.js");

WMDataURIScheme.StringToDataURI("💩", "type/plain", function(err, dataURI){
  console.log(dataURI);
});
```
