# DataURIScheme.js [![Build Status](https://api.travis-ci.org/legokichi/DataURIScheme.js.png)](http://travis-ci.org/legokichi/DataURIScheme.js)

[![npm](https://nodei.co/npm/legokichi.dataurischeme.js.png?downloads=true&stars=true)](https://nodei.co/npm/legokichi.dataurischeme.js/)

Data URI scheme converter.

## Document

- [DataURIScheme.js wiki](https://github.com/legokichi/DataURIScheme.js/wiki/DataURIScheme)
- [Development](https://github.com/uupaa/WebModule/wiki/Development)
- [WebModule](https://github.com/uupaa/WebModule) ([Slide](http://uupaa.github.io/Slide/slide/WebModule/index.html))


## How to use

### Browser

```js
<script src="lib/DataURIScheme.js">
<script>
DataURIScheme.StringToDataURI("💩", "type/plain", function(err, dataURI){
  console.log(dataURI);
});
</script>
```

### WebWorkers

```js
importScripts("lib/DataURIScheme.js");

DataURIScheme.StringToDataURI("💩", "type/plain", function(err, dataURI){
  console.log(dataURI);
});
```
