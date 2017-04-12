(function(){
var app = angular.module("Questionaire");
 app.factory('QsnMetrics', QsnMetrics);

QsnMetrics.$inject= ['DataService','$rootScope'];
 function QsnMetrics(DataService, $rootScope){
    var qnsobj= {
    StartActive:false,
    resultActive:false,
    correctanswers: [],
    changeState:changeState,
   // markAnswers: markAnswers,
    numcorrect: 0,
    totalweight:0,
    nextweight:0,
    notsubmit:false
    };
    return qnsobj;

function changeState(metric, state){
        if(metric==="qns"){
    qnsobj.StartActive=state;
    qnsobj.nextweight=$rootScope.totalweight;
      qnsobj.notsubmit="true";
        }
       else if(metric==="results"){
      qnsobj.resultActive=state;
       qnsobj.totalweight=$rootScope.totalweight;
        }
        else{
            return false;
        }
    }
   /* function markAnswers(){
        qnsobj.correctanswers= DataService.correctanswers;
        for(var i=0; i<DataService.questions.length; i++){
         if(DataService.questions[i].selected === DataService.correctanswers[i]){
             DataService.questions[i].correct= true;
              qnsobj.numcorrect++;
         }
         else{
             DataService.questions[i].correct= false;
         }
        }
    }*/
 }

}());