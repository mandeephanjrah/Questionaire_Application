(function(){
var app = angular.module("Questionaire");
app.controller('ManagerController', ManagerController);
ManagerController.$inject=['MgrQsnMetrics', 'MgrDataService','$rootScope'];
function ManagerController(MgrQsnMetrics, MgrDataService, $rootScope){
     qnsmgr=this;
     qnsmgr.MgrQsnMetrics=MgrQsnMetrics;
     qnsmgr.MgrDataService=MgrDataService;
     qnsmgr.questionAnsweredmgr= questionAnsweredmgr;
     qnsmgr.setActiveQuestionmgr= setActiveQuestionmgr;
     qnsmgr.selectAnswermgr= selectAnswermgr;
     qnsmgr.finaliseAnswersmgr= finaliseAnswersmgr;
     qnsmgr.activeQuestionmgr= 0;
     qnsmgr.errormgr= false;
     qnsmgr.finalisemgr = false;
     var numquestionsAnsweredmgr= 0;
     qnsmgr.summgr=[];
     qnsmgr.totalweightmgr;
     $rootScope.totalweightmgr;
     qnsmgr.nexttotalmgr;
     qnsmgr.nextid;
     qnsmgr.index=0;
     qnsmgr.notsubmitanswers=notsubmitanswers;
      
function setActiveQuestionmgr(index){
     qnsmgr.activeQuestionmgr=qnsmgr.nextid;
     qnsmgr.index++;
}
function questionAnsweredmgr(value){
    //getting length of questions
     var questionslengthmgr= MgrDataService.questions.length;
     numquestionsAnsweredmgr = 0;
if(MgrDataService.questions[qnsmgr.activeQuestionmgr].selected !== null){
    qnsmgr.summgr.push(qnsmgr.totalweightmgr);
    var nexttotalmgr=0;
    for ( var i = 0, _len = qnsmgr.summgr.length; i < _len; i++ ) {
        nexttotalmgr+= parseInt(qnsmgr.summgr[i]);
     }
        qnsmgr.nexttotalmgr=nexttotalmgr;
        $rootScope.totalweightmgr=nexttotalmgr;
        console.log($rootScope.totalweightmgr);
}

for(var x = 0; x < questionslengthmgr; x++){
    //if active question have been answered
     if(MgrDataService.questions[qnsmgr.activeQuestionmgr].selected !== null){
        numquestionsAnsweredmgr++;
         if(qnsmgr.nextid=== null){
            qnsmgr.errormgr= false;
            qnsmgr.finalisemgr= true;  
            return; 
            }
         }
    }
    qnsmgr.setActiveQuestionmgr();
 }

  //getting index of selected answer
  function selectAnswermgr(value,index){
    var totalmgr=value.weight;
    qnsmgr.totalweightmgr=totalmgr;
    var nextid= value.nextid;
   console.log(nextid);
   qnsmgr.nextid=nextid;
    MgrDataService.questions[qnsmgr.activeQuestionmgr].selected=index;
 }

 function finaliseAnswersmgr(){
    numquestionsAnsweredmgr= 0;
    qnsmgr.activeQuestionmgr= 0;
    qnsmgr.finalisemgr= false;
    MgrQsnMetrics.changeStatemgr("qnst", false);
    MgrQsnMetrics.changeStatemgr("resultss", true);
}

function notsubmitanswers(){
    window.location.reload();
}
}
}());
