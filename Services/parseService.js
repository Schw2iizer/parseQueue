var app = angular.module('parseQ');

app.service("parseService", function($http, $q){

	this.postQuestion = function(yourQuestion){
		return $http({
			method: "POST",
			url: "https://api.parse.com/1/classes/questions",
			data: {
				question: yourQuestion,
				status: "red"
			}
		})
	}


	this.getData = function(){
		var deferred = $q.defer();
		$http({
			method: "GET",
			url: "https://api.parse.com/1/classes/questions"
		}).then(function(response){
			deferred.resolve(response)
			console.log(response);
		})

		return deferred.promise;
	}
		

	this.updateData = function(){
		var deferred = $q.defer();
		$http({
			method: "PUT",
			url: "https://api.parse.com/1/classes/questions/data"
		})
	}




});