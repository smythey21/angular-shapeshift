angular-shapeshift
============================

A simple AngularJS directive for ShapeShift.js.

### How To Use

* Install the angular-shapeshift bower package

```bash
$ bower install angular-shapeshift
```

* Add angular-shapeshift as a dependency to your angular module:

```
angular.module("myAngularModule", ["angular-shapeshift"]);
```

* Define your images within your angular controller:

```
$scope.images = [ "img1", "img2", "img3" ];
```

* Add references to angular-shapeshift.min.js and angular-shapeshift.min.css:

```
<script src="public/lib/angular-shapeshift/dist/angular-shapeshift.min.js"></script>
<link href="public/lib/angular-shapeshift/dist/angular-shapeshift.min.css" rel="stylesheet" type="text/css" />
```

* Add a shapeshift element to your html. Just give it a list of image sources and (optionally) specify a column width:

```
<shapeshift images="images" columnWidth="150"/>
```

[See example] (https://jsfiddle.net/smythey21/de5tecp3/19/) on JSFiddle. ShapeShift can be found [here] (https://github.com/McPants/jquery.shapeshift).

### Gotchas

This directive will not work if placed within modal components, as the image positions need to be determined when angular parses the directive.

### Need More Shapeshift Options?

Its possible you'll want to change some of the default settings defined in the [shapeshift directive] (https://github.com/smythey21/angular-shapeshift/blob/master/app/directives/shapeshift.js). If so, just place this [shapeshift directive] (https://github.com/smythey21/angular-shapeshift/blob/master/app/directives/shapeshift.js) into your Angular app and customize as needed.

