'use strict';
var config = require('./config.js');
const angular = require('angular');
var myApp = angular
.module('myApp', [])
// .config(function($httpProvider) {
//       //Enable cross domain calls
//       $httpProvider.defaults.useXDomain = true;

//       //Remove the header used to identify ajax call  that would prevent CORS from working
//       delete $httpProvider.defaults.headers.common['X-Requested-With'];
//   })
.controller("womenController", ["$scope",'$filter',"$http",'$window' ,function($scope,$filter, $http, $window){
		 $scope.datas = [];
		var urlPost = "https://tranquil-lowlands-85919.herokuapp.com/women";
		var urlGetFalse = "https://tranquil-lowlands-85919.herokuapp.com/women?public=false";
		var urlGetTrue = "https://tranquil-lowlands-85919.herokuapp.com/women?public=true";
		var urlUser = "http://localhost:8080/users";
			$http({
			method: 'GET',
			url: urlGetFalse,
			
		}).then(function successCallback(response) {
			$scope.datas = response.data;  
			}, function errorCallback(response) {
			$scope.datas = [{name: "Error!! " + response.status}];
		});

$scope.changeURL = function(){
	if ($scope.public === false) {

			$http({
				method: 'GET',
				url: urlGetFalse,
				
			}).then(function successCallback(response) {
				$scope.datas = response.data;  
					}, function errorCallback(response) {
				$scope.datas = [{name: "Error!! " + response.status}];
			});
	}else{
		$http({
				method: 'GET',
				url: urlGetTrue,
				
			}).then(function successCallback(response) {
				$scope.datas = response.data;  
					}, function errorCallback(response) {
				$scope.datas = [{name: "Error!! " + response.status}];
			});
	}
}



		$scope.sendData = function () {
			
			var Indata = {'name': $scope.name, 'email': $scope.email,'picture_url': $scope.pictureUrl, 'topic': $scope.topic, 'linkedin': $scope.linkedin };
			$http.post(urlPost, Indata).then(function (data, status, headers, config) { 
				console.log(Indata);

			    alert("success"); 
			},function (data, status, headers, config) { 
				console.log(Indata);
			    alert("error"); 
			});

			}

		}


]);
