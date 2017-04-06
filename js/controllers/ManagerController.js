(function(){
var app = angular.module("Questionaire");
app.controller('ManagerController', ManagerController);
ManagerController.$inject=['MgrQsnMetrics', 'MgrDataService','$rootScope'];
function ManagerController(MgrQsnMetrics, MgrDataService, $rootScope){
     qnsmgr=this;
     //qns.MyVar= myService.sharedObject;
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
      
    function setActiveQuestionmgr(index){
        qnsmgr.activeQuestionmgr=index;
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
            if(numquestionsAnsweredmgr >= questionslengthmgr){
            //loop through all the questions to check if all are answered
                for(var i=0; i<questionslengthmgr; i++){
                    if(MgrDataService.questions[i].selected ===null){
                        setActiveQuestionmgr(i);
                        return;
                     }
                }
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
    MgrDataService.questions[qnsmgr.activeQuestionmgr].selected=index;
 }

 function finaliseAnswersmgr(){
    numquestionsAnsweredmgr= 0;
    qnsmgr.activeQuestionmgr= 0;
    qnsmgr.finalisemgr= false;
    MgrQsnMetrics.changeStatemgr("qnst", false);
    MgrQsnMetrics.changeStatemgr("resultss", true);
}
}
}());
