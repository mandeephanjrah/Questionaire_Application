(function(){
var app=angular.module("Questionaire", ["ngRoute"]);
  app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
     templateUrl : "start.html",
      controller: "StartController"
    })
    .when("/questions", {
      templateUrl: "questions.html",
      controller: "QuestionsController"
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

