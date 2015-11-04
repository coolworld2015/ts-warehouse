/// <reference path='../lib/angular.d.ts' />

 	angular
		.module('app')
		.directive('coolTimer', coolTimer);

	coolTimer.$inject = ['$filter', '$interval'];

	function coolTimer($filter, $interval) {
  		return {
 
			link: function(scope, element, attrs) {
				start();
				scope.$on('timer-start', start);
					function update() {
						var now = new Date();
						now = $filter('date')(now,'dd/MM/yyyy H:mm:ss ');
						element.text(now);
					}

				function start() {
					//scope.obj.intervalID = $interval(update,1000); 
					var intervalID = $interval(update,1000); 
				}
			}
		}
	};
	
	angular
		.module('app')
		.directive('enter', enter);
	
	function enter() {
		return {
			restrict: 'A',
			scope: {
				test: '=',
				funcTest: '&denis',
				label: '@'
			},
			controller: function($scope){
				$scope.test = function(val){
					alert(val);
				};
			},

			template: '<span>"{{test.text}}"</span>',
			
			link: function (scope, element, attrs, ngModel) {
			
			ngModel.$render = function() {
			element.html(ngModel.$viewValue || 'xxx');
				};
		
				element.on('click', function () {
					alert('scope.test.text');
					//alert(attrs.denis);
					//alert(attrs.label);
					//scope.funcTest();
				});
					
				element.on('keyup', function () {
					//if (event.keyCode === 13) {
						scope[attrs.ed](attrs.value);
						attrs.$set('value', 'Wintermute');
					//}
				});
			}
		};
	};