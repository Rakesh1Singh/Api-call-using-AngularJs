angular.module('listApp', [])
    .controller('ListController', ['$http', function($http) {
        var vm = this;
        vm.news = [];
        $http.get("http://starlord.hackerearth.com/hackernews")
        .then(function(response) {
           vm.news = response.data;
         //  console.log(data);
        },function(error){
        	console.log('there is an error');
        });
    }]) 