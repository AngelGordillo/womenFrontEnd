'use strict';
var config = require('./config.js');
const angular = require('angular');
var myApp = angular
.module('myApp', [])
.config(function($httpProvider) {
      //Enable cross domain calls
      $httpProvider.defaults.useXDomain = true;

      //Remove the header used to identify ajax call  that would prevent CORS from working
      delete $httpProvider.defaults.headers.common['X-Requested-With'];
  })
.controller("womenController", ["$scope",'$filter',"$http", function($scope,$filter, $http){

		var urlGet = "http://localhost:8080/women";
		$http({
			method: 'GET',
			url: urlGet,
			
		}).then(function successCallback(response) {
			$scope.datas = response.data;  
			//console.log($scope.datas);
		}, function errorCallback(response) {
			$scope.datas = [{name: "Error!! " + response.status}];
		});

		$scope.sendData = function () {
			
			var Indata = {'name': $scope.name, 'topic': $scope.topic,'picture_url': $scope.picturerl };
			$http.post(urlGet, Indata).then(function (data, status, headers, config) { 
				console.log(Indata);

			    alert("success"); 
			},function (data, status, headers, config) { 
			    alert("error"); 
			});

			}
		}


]);
