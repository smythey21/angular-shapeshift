simple-shapeshift-angular-directive
============================

A simple AngularJS directive for ShapeShift.js. Just place the [shapeshift directive] (https://github.com/smythey21/simple-shapeshift-angular-directive/blob/master/app/directives/shapeshift.js) into your Angular app and give it a list of image sources:

```
$scope.imgSources = [ "img1", "img2", "img3" ];
```

```
<shapeshift images="imgSources"/>
```

[See example] (https://jsfiddle.net/smythey21/de5tecp3/17/) on JSFiddle. ShapeShift can be found [here] (https://github.com/McPants/jquery.shapeshift).

Make sure to install bower dependencies before running:

```bash
$ bower install
```



