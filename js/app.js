(function(){
var app=angular.module("Questionaire", ["ngRoute"]);
  app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
     templateUrl : "Start.html",
      controller: "StartController"
    })
    .when("/vpQuestions", {
      templateUrl: "vpQuestions.html",
      controller: "VPQuestionsController"
    })
    .when("/result", {
      templateUrl: "result.html",
      controller: "ResultsController"
      
    })
    .otherwise({
      rediectTo:"/"
    });
  });
}());

