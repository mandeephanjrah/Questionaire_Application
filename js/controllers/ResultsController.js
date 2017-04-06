(function(){
 var app= angular.module("Questionaire");
 app.controller('ResultsController', ResultsController);
ResultsController.$inject=['QsnMetrics','$rootScope'];
function ResultsController(QsnMetrics,$rootScope){
        result= this;
        result.QsnMetrics= QsnMetrics;
}
}());