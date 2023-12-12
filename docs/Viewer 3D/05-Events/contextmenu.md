## viewer.contextmenu

Triggered when the user summons the context menu (e.g. by right-clicking).

#### Callback Parameters

<table class="table">
  <tr>
    <td>id</td>
    <td>String</td>
    <td>Id of the object below the cursor. Undefined if no objects are below the cursors.</td>
  </tr>
  <tr>
    <td>intersects</td>
    <td>Object</td>
    <td>Position of the object below the cursor, and a direction vector perpendicular to the surface of the object. Undefined if no objects are below the cursors.</td>
  </tr>
</table>
