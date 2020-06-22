angular.module('App').constant('consts', {
  appName: 'Controle Financeiro',
  version: '1.0',
  owner: 'Igor Melleiro',
  year: '',
  site: '',
  apiUrl: 'http://localhost:3003/api',
}).run(['$rootScope', 'consts', function($rootScope, consts) {
  $rootScope.consts = consts
}])
