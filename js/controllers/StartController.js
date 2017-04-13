(function() {
 var app = angular.module("Questionaire");
 app.controller('StartController', StartController);
 StartController.$inject= ['QsnMetrics','DataService','$rootScope', 'MgrDataService','MgrQsnMetrics'];
 function StartController(QsnMetrics, DataService,$rootScope, MgrDataService,MgrQsnMetrics){
     strt=this;
     strt.QsnMetrics=QsnMetrics;
     strt.MgrQsnMetrics=MgrQsnMetrics;
     strt.StartQuestionaire=StartQuestionaire;
     strt.data = {
     availableOptions: [
      {id: '1', name: 'Vice President'},
      {id: '2', name: 'Manager'},
      {id: '3', name: 'Lead'}
    ],
    selectedOption: {id: '1', name: 'Vice President'} //This sets the default value of the select in the ui
  };
  strt.companycategory = {
    categoryOptions: [
      {id: '1', cat: 'Sales'},
      {id: '2', cat: 'Healthcare'},
      {id: '3', cat: 'Marketing'}
    ],
    selectedCategory: {id: '1', cat: 'Sales'} //This sets the default value for company category  of the select in the ui
  };
    function StartQuestionaire(selectedRole){
        $rootScope.selectedRole=selectedRole.name
         if($rootScope.selectedRole=="Vice President"){
          QsnMetrics.changeState("qns",true);
        }
    else if($rootScope.selectedRole=="Manager"){
     MgrQsnMetrics.changeStatemgr("qnst",true);
        }
   }
   };
}());



