(function(){
 var app= angular.module("Questionaire");
 app.controller('MgrResultController', MgrResultController);
 MgrResultController.$inject=['$rootScope', 'MgrQsnMetrics'];
 function MgrResultController($rootScope, MgrQsnMetrics){
        result= this;
        result.MgrQsnMetrics= MgrQsnMetrics;
}
}());