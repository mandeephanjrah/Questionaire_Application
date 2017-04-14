(function(){
var app = angular.module("Questionaire");
app.controller('QuestionsController', QuestionsController);
QuestionsController.$inject=['QsnMetrics','DataService','$rootScope'];
function QuestionsController(QsnMetrics, DataService, $rootScope, $state){
     qns=this;
     qns.QsnMetrics=QsnMetrics;
     qns.DataService=DataService;
     qns.questionAnswered= questionAnswered;
     qns.setActiveQuestion= setActiveQuestion;
     qns.selectAnswer= selectAnswer;
     qns.finaliseAnswers= finaliseAnswers;
     qns.activeQuestion= 0;
     qns.error= false;
     qns.finalise = false;
     var numquestionsAnswered= 0;
     qns.sum=[];
     qns.totalweight;
     $rootScope.totalweight;
     qns.nexttotal;
     qns.nextid;
     qns.index=0;
     qns.notsubmitanswers=notsubmitanswers;
      
function setActiveQuestion(index){
      qns.activeQuestion=qns.nextid;
      qns.index++;
}

function questionAnswered(value){
//getting length of questions
  var questionslength= DataService.questions.length;
  numquestionsAnswered = 0;
 //if question have been answered pushing weightage into array and taking total weightage of answered questions
 if(DataService.questions[qns.activeQuestion].selected !== null){
   qns.sum.push(qns.totalweight);
   var nexttotal=0;
   for ( var i = 0, _len = qns.sum.length; i < _len; i++ ) {
       nexttotal+= parseInt(qns.sum[i]);
    }
    qns.nexttotal=nexttotal;
    $rootScope.totalweight=nexttotal;
    console.log($rootScope.totalweight);
 }

 for(var x = 0; x < questionslength; x++){
 //if active question have been answered
  if(DataService.questions[qns.activeQuestion].selected !== null){
   numquestionsAnswered++;
    if(qns.nextid=== null){
    qns.error= false;
    qns.finalise= true;  
    return; 
   }
  }
 }
qns.setActiveQuestion();
}

//getting index of selected answer
 function selectAnswer(value,index){
    //getting weight of answer
   var total=value.weight;
   var nextid= value.nextid;
   console.log(nextid);
   qns.totalweight=total;
   qns.nextid=nextid;
   DataService.questions[qns.activeQuestion].selected=index;
 }
 function finaliseAnswers(){
    numquestionsAnswered= 0;
    qns.activeQuestion= 0;
    qns.finalise= false;
    QsnMetrics.changeState("qns", false);
    QsnMetrics.changeState("results", true);
  }

  function notsubmitanswers(){
     numquestionsAnswered= 0;
    qns.activeQuestion= 0;
    qns.finalise= false;
    QsnMetrics.changeState("qnsnt", false);
    QsnMetrics.changeState("resultsss", false);
     qns.index=0;
    qns.nextid=0;
     $rootScope.totalweight=0;
     qns.sum=[];
    qns.nexttotal=0;
    window.location.reload();
  }
 }
}());

