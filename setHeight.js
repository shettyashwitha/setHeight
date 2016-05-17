angular.module('setHeight',[]).directive('setHeight',['$window', '$timeout',function($window, $timeout){
  return {
    scope: {
      'watchon': '='
    },
    link: function(scope, element) {
      let maxHeight = 0;
      function setHeightOf(elem) {
        element.find(elem)
          .each(function() {
            maxHeight = Math.max(maxHeight, $(this).height());
          })
          .height(maxHeight);
      }
      $timeout(() => {
        if (typeof scope.watchon === 'string') {
          setHeightOf(scope.watchon);
        } else {
          scope.watchon.map((val) => {
            setHeightOf(val);
          })
        }
      });

    }
  };
}])
