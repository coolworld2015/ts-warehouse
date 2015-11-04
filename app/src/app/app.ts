/// <reference path='angular.d.ts' />

namespace CoolWorld {
    
    angular
        .module('app', []);
		
	angular
		.module('app')
        .controller('ClientsCtrl', ClientsCtrl);
	
	function ClientsCtrl() {
		var vm = this;
		
        angular.extend(vm, {
            init: init
        });

        init();

        function init() {
            vm.title = 'CoolWorld';
		}		
	}		
	
}
