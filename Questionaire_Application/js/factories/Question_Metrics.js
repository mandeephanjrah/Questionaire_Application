(function(){
var app = angular.module("Questionaire");
 app.factory('QsnMetrics', QsnMetrics);
 function QsnMetrics(){
    var qnsobj= {
StartActive:false,
resultActive:false,
changeState:changeState
    };
    return qnsobj;
    function changeState(metric, state){
        if(metric==="qns"){
qnsobj.StartActive=state;
        }
       else if(metric==="results"){
qnsobj.resultActive=state;
        }
        else{
            return false;
        }
    }
 }


}());