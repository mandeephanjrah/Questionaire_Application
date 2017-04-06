(function(){
var app = angular.module("Questionaire");
 app.factory('MgrQsnMetrics', MgrQsnMetrics);

MgrQsnMetrics.$inject= ['MgrDataService', '$rootScope'];
 function MgrQsnMetrics(MgrDataService,$rootScope ){
    var qnsobj= {
    StartActiveMgr:false,
    resultActiveMgr:false,
    correctanswers: [],
    changeStatemgr:changeStatemgr,
    numcorrect: 0,
    totalweightmgr:0,
    nextweightmgr:0
    };
    return qnsobj;
 function changeStatemgr(metrics, states){
        if(metrics==="qnst"){
            qnsobj.StartActiveMgr=states;
            qnsobj.nextweightmgr=$rootScope.totalweightmgr;
        }
       else if(metrics==="resultss"){
            qnsobj.resultActiveMgr=states;
            qnsobj.totalweightmgr=$rootScope.totalweightmgr;
        }
       else{
            return false;
        }
    }
 }
}());