angular.module('ng-threshold', []).directive('threshold', function($timeout) {
  var loadSuccess = false;
  return {
    link: function(scope, element, attrs) {
      element.bind('error', function() {
        scope.$apply(function() {
          element.attr('src', element.attr('data-src-fallback'));
        });
      });
      element.bind('load', function() {
        loadSuccess = true;
      });
      
      var timeout = -1;
      try {
        var timeout = parseInt(element.attr('data-src-maxtime'), 10);
      } catch (ex) {
      }
      if (timeout != -1) {
        if (!loadSuccess) {
          $timeout(function() {
            element.attr('src', element.attr('data-src-fallback'));
          }, timeout);
        }
      }
    }
  };
});