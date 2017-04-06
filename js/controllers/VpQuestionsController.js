(function(){
var app = angular.module("Questionaire");
app.controller('QuestionsController', QuestionsController);
QuestionsController.$inject=['QsnMetrics','DataService','$rootScope'];
function QuestionsController(QsnMetrics, DataService, $rootScope){
     qns=this;
     //qns.MyVar= myService.sharedObject;
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
      
function setActiveQuestion(index){
            // no argument passed, data = undefined.
         /*   if(index === undefined){
                var breakOut = false;
    //getting length of questions minus 1 because activeQuestion index starts from 0
  var questionslength = DataService.questions.length-1;
  //while loop will loop until breakout sets to true
    while(!breakOut){
    //for next button if activeQuestion < total length of questions then increment activeQuestion otherwise set to 0
    qns.activeQuestion= qns.activeQuestion < questionslength?++qns.activeQuestion:0;
   //when active question is last question
    if(qns.activeQuestion===0){
     qns.error=true;
    }
    // it will take to next unanswered question
    if(qns.DataService.questions[qns.activeQuestion].selected===null){
        breakOut= true;
    }
}
    }*/
    //get index and make question at that particular index as active
   //else{
       qns.activeQuestion=index;
    }
//}

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
    if(numquestionsAnswered >= questionslength){
     //loop through all the questions to check if all are answered
      for(var i=0; i<questionslength; i++){
        if(DataService.questions[i].selected ===null){
          setActiveQuestion(i);
          return;
        }
      }
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
   qns.totalweight=total;
   DataService.questions[qns.activeQuestion].selected=index;
 }
 function finaliseAnswers(){
    numquestionsAnswered= 0;
    qns.activeQuestion= 0;
    qns.finalise= false;
   //QsnMetrics.markAnswers();
    QsnMetrics.changeState("qns", false);
    QsnMetrics.changeState("results", true);
  }
 }
}());

