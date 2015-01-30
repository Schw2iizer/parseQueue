var app = angular.module('parseQ');

app.controller("mainController", function($scope, parseService){

	$scope.postData = function(){
	parseService.postQuestion($scope.questions).then(function(){
		$scope.getParseData()
		})
	}

	$scope.getParseData = function(){
		parseService.getData().then(function(data){
			$scope.list = data.data.results;
		});
	}

	$scope.changeStatus = function(){
		parseService.updateData()
	}

	$scope.changeColor = function(item){
		
	}



})

