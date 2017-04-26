(function() {
 var app = angular.module("Questionaire");
 app.controller('StartController', StartController);
 StartController.$inject= ['QsnMetrics','$rootScope','$http','$location'];
 function StartController(QsnMetrics, $rootScope,$http,$location){
     strt=this;
     strt.QsnMetrics=QsnMetrics;
     strt.getData=getData;
     strt.data = {
     availableOptions: [
      {id: '1', name: 'Vice President', value: 'VP'},
      {id: '2', name: 'Manager', value: 'MGR'},
      {id: '3', name: 'Lead', value: 'LEAD'}
    ],
    selectedOption: {id: '1', name: 'Vice President', value: 'VP'} //This sets the default value of the select in the ui
  };
  strt.companycategory = {
    categoryOptions: [
      {id: '1', cat: 'Sales'},
      {id: '2', cat: 'Healthcare'},
      {id: '3', cat: 'Marketing'}
    ],
    selectedCategory: {id: '1', cat: 'Sales'} //This sets the default value for company category  of the select in the ui
  };

//getting data according to selected value through $http call
function getData( selectedRole){
        $http.get("http://172.16.29.64:3000/questions/getFirstQuestionByRoleAndTeam/?role=" +selectedRole.value+ "&team=SALES").then(function(response) {
        question=response.data.role;
        $rootScope.questionLable=response.data;
        QsnMetrics.changeState("qns",true);
        $location.path('/questions')
      });
    }
  };
}());



