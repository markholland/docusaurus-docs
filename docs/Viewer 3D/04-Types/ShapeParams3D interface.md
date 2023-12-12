## ShapeParams3D interface

### CircleShapeParams

| Name     | Type       | Description                                   |
| -------- | ---------- | --------------------------------------------- |
| id       | string     | _Optional_. Id                                |
| type     | 'circle'   | Type of shape                                 |
| position | Vector3    | The center of the circle                      |
| radius   | number     | The radius of the circle                      |
| color    | string     | _Optional_. The color of the shape            |
| onClick  | () => void | _Optional_. Event fired when shape is clicked |

### SphereShapeParams

| Name     | Type       | Description                                   |
| -------- | ---------- | --------------------------------------------- |
| id       | string     | _Optional_. Id                                |
| type     | 'sphere'   | Type of shape                                 |
| position | Vector3    | The center of the sphere                      |
| radius   | number     | The radius of the sphere                      |
| color    | string     | _Optional_. The color of the shape            |
| onClick  | () => void | _Optional_. Event fired when shape is clicked |

### BoxShapeParams

| Name     | Type       | Description                                   |
| -------- | ---------- | --------------------------------------------- |
| id       | string     | _Optional_. Id                                |
| type     | 'box'      | Type of shape                                 |
| position | Vector3    | The center position of the box                |
| extents  | Vector3    | The width, height and depth of the box        |
| color    | string     | _Optional_. The color of the shape            |
| onClick  | () => void | _Optional_. Event fired when shape is clicked |
