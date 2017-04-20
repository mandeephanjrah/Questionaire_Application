(function(){
var app= angular.module("Questionaire");
app.factory("DataService", DataService);

function DataService($http){
function questions(next_qid) {
   // console.log(next_qid);
      return $http.get("http://172.16.29.64:3000/questions/getQuestionByID/" +next_qid)      
        .then(function(response) {
            // console.log(response.data);
          return response.data;
         
        });
    };
    return {
      questions: questions,
    };
  };
}());
 
