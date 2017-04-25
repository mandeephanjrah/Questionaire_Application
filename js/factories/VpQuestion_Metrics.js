(function(){
var app = angular.module("Questionaire");
 app.factory('QsnMetrics', QsnMetrics);
QsnMetrics.$inject= ['$rootScope', '$http'];
 function QsnMetrics($rootScope, $http){
    var qnsobj= {
    StartActive:false,
    resultActive:false,
    correctanswers: [],
    changeState:changeState,
    numcorrect: 0,
    totalweight:0,
    nextweight:0,
    notsubmit:false,
    selectedrole:0,
   questions: questions,
 };
    return qnsobj;

   function changeState(metric, state){
    if(metric==="qns"){
        qnsobj.StartActive=state;
        qnsobj.nextweight=$rootScope.totalweight;
         }
    else if(metric==="results"){
         qnsobj.resultActive=state;
         qnsobj.totalweight=$rootScope.totalweight;
    }
    else if(metric==="qnsnt"){
         qnsobj.StartActive=state;
         qnsobj.nextweight=$rootScope.totalweight;
    }
    else if(metric==="resultsss"){
        qnsobj.resultActive=state;
        qnsobj.totalweight=$rootScope.totalweight;
    }
    else{
        return false;
    }
 }
function questions(next_qid) {
      return $http.get("http://172.16.29.64:3000/questions/getQuestionByID/" +next_qid)      
        .then(function(response) {
          return response.data;
         
        });
    };
 }
}());