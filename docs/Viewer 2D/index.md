# Introduction

## Getting started

The Viewer 2D API allows to embed a 2D viewer in your web applications.

## Dependencies

Bimsync Viewer 2D requires [jQuery 1.x](http://jquery.com/) to run.

## Initialize

The Viewer 2D API can be automatically initialized by using the DOM data API or manually initialized in JavaScript.

**Note** In the example below, nothing will be displayed until you use the [showStorey](/)

**Note** If you are using the Viewer 3D API and want a predefined 2D/3D integration you can use our [Viewer Widget API](/).

## DOM Data API

> Add the Viewer2D framework

```html
<script src="https://api.catenda.com/js/v1/viewer2d"></script>
```

> Create a Viewer 2D element

```html
<div
  id="viewer-2d"
  data-viewer2d="svg"
  data-url="https://api.catenda.com/v2/projects/dabc6df.../viewer2d/geometry?token=410c0aa7..."
></div>
```

> Example

```html
<!DOCTYPE html>
<html style="height: 100%;">
  <head>
    <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
    <script src="https://api.catenda.com/js/v1/viewer2d"></script>
  </head>
  <body style="height: 100%;">
    <script type="text/javascript">
      $(function () {
        var $viewer2d = $("#viewer-2d");
        $viewer2d.bind("loaded", function (event) {
          var storeys = $viewer2d.viewer2d("getStoreys");
          $.each(storeys, function (i, storey) {
            console.log(storey.name, storey.id);
          });
          var storeyByElevation = $viewer2d.viewer2d(
            "getStoreyByElevation",
            3.2
          );
          $viewer2d.viewer2d("showStorey", storeyByElevation.id);
        });
      });
    </script>
    <div
      id="viewer-2d"
      data-viewer2d="svg"
      data-url="https://api.catenda.com/v2/projects/dabc6df.../viewer2d/geometry?token=410c0aa7..."
      style="height: 100%; width:100%;"
    ></div>
  </body>
</html>
```

1. Create a viewer access token by using the **POST v2/projects/:project/viewer2d/token** described in the [Bimsync REST API](/).

2. Add the Viewer 2D framework to you application.

3. Create a Viewer 2D element. The data attribute _data-viewer2d="svg"_ must be included. The data attribute _data-url_ must be the _url_ field from a viewer access token.

## JavaScript

1. Create a viewer access token by using the **POST v2/projects/:project/viewer2d/token** described in the [Bimsync REST API](/).

2. Create a DIV element which will contain the 2D-viewer.

> Create DIV element

```html
<div id="viewer-2d"></div>
```

3. Follow the pattern in the snippet below to initialize:

> Follow the pattern from script below to initialize

```html
<script src="https://api.catenda.com/js/v1/viewer2d"></script>
<script type="text/javascript">
  // Load the Viewer 2D API
  bimsync.loadViewer2d();

  // Set a callback to run when the Viewer API is loaded
  bimsync.setOnViewer2dLoadCallback(createViewer2d);

  // Callback that loads a viewer access token URL
  function createViewer2d() {
    $("#viewer-2d").viewer2d(
      "loadUrl",
      "https://api.catenda.com/v2/projects/dabc6df.../viewer2d/geometry?token=410c0aa7..."
    );
  }
</script>
```

> Example

```html
<!DOCTYPE html>
<html style="height: 100%;">
  <head>
    <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
    <script src="https://api.catenda.com/js/v1/viewer2d"></script>
  </head>
  <body style="height: 100%;">
    <script type="text/javascript">
      $(function () {
        var viewer2dUrl =
          "https://api.catenda.com/v2/projects/dabc6df.../viewer2d/geometry?token=410c0aa7...";
        var $viewer2d = $("#viewer-2d");

        bimsync.loadViewer2d();

        bimsync.setOnViewer2dLoadCallback(function () {
          $viewer2d.viewer2d("loadUrl", viewer2dUrl);
        });

        $viewer2d.bind("loaded", function (event) {
          var storeys = $viewer2d.viewer2d("getStoreys");
          $.each(storeys, function (i, storey) {
            console.log(storey.name, storey.id);
          });
          var storeyByElevation = $viewer2d.viewer2d(
            "getStoreyByElevation",
            3.2
          );
          $viewer2d.viewer2d("showStorey", storeyByElevation.id);
        });
      });
    </script>
    <div id="viewer-2d" style="height: 100%; width:100%;"></div>
  </body>
</html>
```

## Options

All options can be set using data attributes on the viewer element, or passed as an object when initializing with JavaScript.

> Options

```javascript--jquery
var options = {
    showViewpoint: Boolean       // Set the viewpoint to be hidden or visible, default is true
    selectColor: String          // Set the color of selected objects, default is '#A7F555'
};
```

> Setting options when using JavaScript initialization:

```javascript--jquery
$('#viewer-2d').viewer2d({
    showViewpoint: true,
    selectColor: 'RoyalBlue'
});
$('#viewer-2d').viewer2d('loadUrl', 'https://api.catenda.com/v2/projects/dabc6df.../viewer2d/geometry?token=410c0aa7...');
```

> Setting options when using data attribute initialization:

```html
<div
  id="viewer-2d"
  data-viewer2d="svg"
  data-enable-viewpoint="true"
  data-url="https://api.catenda.com/v2/projects/dabc6df.../viewer2d/geometry?token=410c0aa7..."
></div>
```
