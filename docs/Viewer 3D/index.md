# Introduction

## Dependencies

The Viewer 3D API requires [jQuery 1.x](http://jquery.com/) to run.

## Initialize

The viewer can either be automatically initialized by using the DOM data API or manually initialized in JavaScript.

### DOM Data API

> Add viewer framework

```html
<script src="https://api.catenda.com/js/v1/viewer3d"></script>
```

> Create a viewer instance

```html
<div
  data-viewer="webgl"
  data-url="https://api.catenda.com/v2/projects/978720ca.../viewer3d/data?token=8958f669f..."
></div>
```

1. Create a viewer access token by using the **POST v2/projects/:project/viewer3d/token** resources in the [Bimsync REST API](/developers/reference/api/v2#create-viewer3d-token).

2. Add the viewer framework to you application:

3. Create a viewer instance. The data attribute _data-viewer_ must have the value _webgl_. The data attribute _data-url_ must be the _url_ field from a viewer access token.

To enable the [Viewer UI plugin](/developers/reference/viewer-ui/1.0), add the data attribute, _data-ui_, to the viewer element. See the [Viewer UI plugin documentation](/developers/reference/viewer-ui/1.0) for more info.

### JavaScript

> Create DIV element

```html
<div id="viewer-container"></div>
```

> Follow the pattern from below to initialize

```html
<script src="https://api.catenda.com/js/v1/viewer3d"></script>
<script>
  // Load the Viewer 3D API.
  bimsync.load();

  // Set a callback to run when the Viewer API is loaded
  bimsync.setOnLoadCallback(createViewer);

  // Callback that loads a viewer access token URL
  function createViewer() {
    $("#viewer-container").viewer(
      "loadUrl",
      "https://api.catenda.com/v2/projects/978720ca.../viewer3d/data?token=8958f669f..."
    );
  }
</script>
```

1. Create a viewer access token by using the **POST v2/projects/:project/viewer3d/token** resources in the [Bimsync REST API](/developers/reference/api/v2#create-viewer3d-token).

2. Create a DIV element which will contain the viewer.

To enable the [Viewer UI plugin](/developers/reference/viewer-ui/1.0), a parameter could be passed to the bimsync.load() method. See the [Viewer UI plugin documentation](/developers/reference/viewer-ui/1.0) for more info.

# Options

```javascript--jquery
var options = {
    defaultColor: String or Number,                   // Any valid CSS color, default: '#101010'
    selectedColor: String or Number,                  // Any valid CSS color, default: '#a7f555'
    translucentOpacity: Number,                       // Default: 0.05
    fieldOfView: Number,                              // Number in degrees, default: 60
    enableTouch: Boolean,                             // Default: false
    navigationOrbitSphereColor: String or Number,     // Any valid CSS color, default: '#b1d059'
    enableClippingPlaneWidget: Boolean,               // Default: false
    activeClippingPlaneBorderColor: String or Number, // Any valid CSS color, default: '#a7f555',
    textRenderMode: 'canvas' or 'dom'                 // Default: 'canvas'
}
```

> Setting options when using JavaScript initialization:

```javascript--jquery
$('#viewer-container').viewer({
    defaultColor: 'red',
    selectedColor: 'blue',
    translucentOpacity: 0.05,
    enableTouch: true,
    enableClippingPlaneWidget: true,
    textRenderMode: 'dom'
});
$('#viewer-container').viewer('loadUrl', 'https://api.catenda.com/v2/projects/978720ca.../viewer3d/data?token=8958f669f...');
```

> Setting options when using data attribute initialization:

```html
<div
  data-viewer="webgl"
  data-default-color="#22ff22"
  data-enable-touch="true"
  data-translucent-opacity="0.1"
  data-url="https://api.catenda.com/v2/projects/978720ca.../viewer3d/data?token=8958f669f..."
></div>
```
