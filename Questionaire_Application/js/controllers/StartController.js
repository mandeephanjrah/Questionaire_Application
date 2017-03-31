(function() {
var app = angular.module("Questionaire");
 app.controller('StartController', StartController);
StartController.$inject= ['QsnMetrics','DataService'];
function StartController(QsnMetrics, DataService){
     strt=this;
     strt.QsnMetrics=QsnMetrics;
    strt.StartQuestionaire=StartQuestionaire;
    function StartQuestionaire(){
     QsnMetrics.changeState("qns",true);
     }
 };

}());