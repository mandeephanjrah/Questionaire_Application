(function(){
var app = angular.module("Questionaire");
app.controller('QuestionsController', QuestionsController);
QuestionsController.$inject=['QsnMetrics','$rootScope', '$location'];
function QuestionsController(QsnMetrics, $rootScope, $location){
     qns=this;
     qns.start=0;
     qns.QsnMetrics=QsnMetrics;
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
     qns.data;
     qns.selectedRole;
     qns.select=[];
  
    qns.data=$rootScope.questionLable;
    console.log(qns.data)
    qns.data.selected = null;
    console.log(qns.data);

     

function setActiveQuestion(index){
      qns.activeQuestion=qns.nextid;
      qns.index++;
      QsnMetrics.questions(qns.nextid).then(Repos, onError);
      function Repos(data) {
      qns.data = data;
      qns.data.selected = null;
      console.log(qns.data.selected)
    };

function onError(reason) {
      qns.error = "could not find user";
    };
}

function questionAnswered(value){
//getting length of questions
  var questionslength= QsnMetrics.questions.length;
  numquestionsAnswered = 0;
  qns.select.push(qns.index);
 //if question have been answered pushing weightage into array and taking total weightage of answered questions
 if(qns.data.selected !== null){
   qns.sum.push(qns.totalweight);
   console.log(qns.sum)
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
  if(qns.data.selected !== null){
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
   var nextid= value.next_qid;
  // console.log(nextid);
   qns.totalweight=total;
   qns.nextid=nextid;
   qns.data.selected=index;
    console.log(qns.data.selected)
 }
 function finaliseAnswers(){
    numquestionsAnswered= 0;
    qns.activeQuestion= 0;
    qns.finalise= false;
    QsnMetrics.changeState("qns", false);
    QsnMetrics.changeState("results", true);
    $location.path('/result')
  }

  function notsubmitanswers(){
   numquestionsAnswered= 0;
    qns.activeQuestion= 0;
    qns.finalise= false;
    QsnMetrics.changeState("qns", false);
    QsnMetrics.changeState("results", false);
     qns.index=0;
    qns.nextid=0;
     $rootScope.totalweight=0;
     qns.sum=[];
    qns.nexttotal=0;
     qns.data=0;
    $location.path('/')
  }
    
    } 

}());

