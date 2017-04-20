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
 }
}());