'use strict';
app.directive('imgPreload', ['$rootScope', function($rootScope) {
    return {
      restrict: 'A',
      scope: {
        ngSrc: '@'
      },
      link: function(scope, element, attrs) {
          var idele='crp'+attrs.id;
          var htmEl ='<img id="'+idele+'" src="img/loading.gif" class="spinner-img" >';
          var ngEl = angular.element(htmEl);
            element.on('load', function() {
                element.removeClass('hidden');
                var nEl = document.getElementById(idele);
                angular.element(nEl).remove();
            }).on('error', function() {
                 $rootScope.bannerLoading = false;
            });
            scope.$watch('ngSrc', function(newVal) {
                element.addClass('hidden');
                element.parent().append(ngEl);
            });
      }
    };
}]);

