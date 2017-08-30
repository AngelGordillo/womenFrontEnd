'use strict';
var config = require('./config.js');
const angular = require('angular');
var myApp = angular
.module('myApp', [])
// .config(function($httpProvider) {
//       //Enable cross domain calls
//       $httpProvider.defaults.useXDomain = true;

//       //Remove the header used to identify ajax call  that would prevent CORS from working
//       Activate $httpProvider.defaults.headers.common['X-Requested-With'];
//   })
.controller("womenController", ["$scope",'$filter',"$http",'$window' ,function($scope,$filter, $http, $window){
	$scope.datas = [];
	

	$http({
		method: 'GET',
		url: config.urlGetFalse,

	}).then(function successCallback(response) {
		$scope.datas = response.data;  
	}, function errorCallback(response) {
		$scope.datas = [{name: "Error!! " + response.status}];
	});

	$scope.changeURL = function(){
		if ($scope.public === false) {

			$http({
				method: 'GET',
				url: config.urlGetFalse,
				
			}).then(function successCallback(response) {
				$scope.datas = response.data;  
			}, function errorCallback(response) {
				$scope.datas = [{name: "Error!! " + response.status}];
			});
		}else{
			$http({
				method: 'GET',
				url: config.urlGetTrue,
				
			}).then(function successCallback(response) {
				$scope.datas = response.data;  
			}, function errorCallback(response) {
				$scope.datas = [{name: "Error!! " + response.status}];
			});
		}
	}



	$scope.sendData = function () {

		var Indata = {'name': $scope.name, 'email': $scope.email,'picture_url': $scope.pictureUrl, 'topic': $scope.topic, 'linkedin': $scope.linkedin };
		$http.post(config.urlPost, Indata).then(function (data, status, headers, config) { 
			//$scope.idUser = $scope.datas.data.id;
			console.log(Indata);
			console.log("success"); 
			//$window.location.reload();
		},function (data, status, headers, config) { 
			console.log(Indata);
			console.log("error"); 
		});

	}
	$scope.deleteWomen = function($event){
		var urlDeleteWoman;		
		urlDeleteWoman = "https://tranquil-lowlands-85919.herokuapp.com/womenDelete/" + ($event.target).value;

		console.log(urlDeleteWoman);
		$http.get(urlDeleteWoman).then(function (data, status, headers, config) { 	
		$window.location.reload();	
			console.log("success"); 
		},function (data, status, headers, config) { 

			console.log(urlDeleteWoman);
			console.log("error"); 
		});
	}
		$scope.validateWomenTrue = function(){
			var str = $window.location.href;
			var parts = str.split('?');
		var idUser =  parts[1];
		var urlValidateWoman;		
		urlValidateWoman = "https://tranquil-lowlands-85919.herokuapp.com/womenValidate/" + idUser + "?public=true";

		console.log(idUser);
		$http.get(urlValidateWoman).then(function (data, status, headers, config) { 	
		$window.location.reload();	
			console.log("success"); 
		},function (data, status, headers, config) { 

			console.log(urlActivateWoman);
			console.log("error"); 
		});
	}
			$scope.validateWomenFalse = function($event){
		var urlDeleteWoman;		
		urlDeleteWoman = "https://tranquil-lowlands-85919.herokuapp.com/womenDelete/" + idUser;

		console.log(urlDeleteWoman);
		$http.get(urlDeleteWoman).then(function (data, status, headers, config) { 	
		$window.location.reload();	
			console.log("success"); 
		},function (data, status, headers, config) { 

			console.log(urlDeleteWoman);
			console.log("error"); 
		});
	}
		$scope.sendDataUser = function($event){
		var Indata = {'username' : $scope.username, 'password': $scope.password};
		$http.post(config.urlUser, Indata).then(function (data, status, headers, config) { 	
		var url = "http://" + $window.location.host + "/woman.html";
		console.log($window.location.host)
		$window.location.href = url	
			console.log("success"); 
		},function (data, status, headers, config) { 

			
			console.log("error"); 
		});
	}

}


]);