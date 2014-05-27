angular.module('ng-threshold', []).directive('threshold', function($timeout) {
  var loadSuccess = {};
  return {
    link: function(scope, element, attrs) {
      element.bind('error', function() {
        scope.$apply(function() {
          element.attr('src', element.attr('data-src-fallback'));
        });
      });
      element.bind('load', function() {
        loadSuccess[element.attr('src')] = true;
      });
      
      var timeout = -1;
      try {
        var timeout = parseInt(element.attr('data-src-maxtime'), 10);
      } catch (ex) {
      }
      if (timeout != -1) {
        if (!loadSuccess[element.attr('src')]) {
          $timeout(function() {
            if (!loadSuccess[element.attr('src')]) {
              element.attr('src', element.attr('data-src-fallback'));
            }
          }, timeout);
        }
      }
    }
  };
});