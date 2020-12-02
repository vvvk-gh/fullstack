# Vue Basics

## Importing

1. Add the below script to the html page

```html
<script src="https://unpkg.com/vue"></script>
<!--This imports all the vue components into your page. -->
```

2. Creating a Vue component

```javascript
//Created a new object
var app = new Vue({});
```

3. Targeting the html element

```html
<body>
  <div id="app"></div>

  <script>
    var app = new Vue({
      el: '#app', // el means target element (Root Element for Vue)
    });
  </script>
</body>
```
