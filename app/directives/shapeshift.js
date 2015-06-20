'use strict';

angular.module('angular-shapeshift').directive('shapeshift', [ '$compile', '$timeout',
    function($compile, $timeout) {
        return {
            template: function(elem, attrs){
                return '<div class="shapeshift">' +
                            '<div ng-repeat="image in images">' +
                                '<img ng-src="{{image}}">' +
                            '</div>' +
                        '</div>';
            },
            restrict: "E",
            scope: {
                images: '=',
                columnWidth: '@columnwidth'
            },
            link: function (scope, element, attrs) {
                // Compile the html, because we have some angular syntax in there
                $compile($('.shapeshift'))(scope);

                // Run shapeshift within $timeout to ensure we are in the next digest cycle.
                // Otherwise ng-repeat will not be completely rendered.
                $timeout(function() {
                    var shapeshiftContainer = $('.shapeshift').shapeshift({
                        enableDrag: true,
                        enableCrossDrop: true,
                        minColumns: 2,
                        animated: true,
                        animateOnInit: false,
                        animationSpeed: 225,
                        animationThreshold: 100,
                        colWidth: parseInt(scope.columnWidth),
                        align: "center",
                        dragClone: false,
                        deleteClone: true,
                        maxHeight: null,
                        minHeight: 400
                    });
                })
            }
        };
    }
]);
