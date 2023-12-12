## loadUrl

> Example:

```javascript--jquery
// Default - all objects
$('.viewer').viewer('loadUrl', 'https://api.catenda.com/v2/projects/978720ca.../viewer3d/data?token=8958f669f...');

// Single object
$('.viewer').viewer('loadUrl', 'https://api.catenda.com/v2/projects/978720ca.../viewer3d/data?token=8958f669f...', {
  objectId: 123251972852
});

// Multiple objects
$('.viewer').viewer('loadUrl', 'https://api.catenda.com/v2/projects/978720ca.../viewer3d/data?token=8958f669f...', {
  objectId: { $in : [ 123251972852, 123251836942 ] }
});
```

Load the contents of a viewer access token.

Note that this function can be called several times with different urls. This way you can for example use one viewer token per model and load the models one at a time.

It is also possible to provide a `query` object where you can specify a subset of object ids from the viewer token to load.

**Parameters**:

- url - String
- _optional_ query - Object
