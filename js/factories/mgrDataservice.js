(function(){
var app= angular.module("Questionaire");
app.factory("MgrDataService", MgrDataService);
function MgrDataService(){
    mgrdataobj={
        questions:Questions,
    };
    return mgrdataobj;
}
 var Questions  = [
     {
            type: "text",
            id: 1,
            text: "Do you recently acquired any project?",
            possibilities: [
                {
                    answer: "Yes",
                    weight:"100",
                    nextid:1
                },
                {
                    answer: "No",
                    weight:"25",
                    nextid:2
                }
            ],
            selected: null,
        },
         {
            type: "text",
            id:2,
            text: "Your recently acquired project related with......",  
            possibilities: [
                {
                    answer: "Business",
                    weight:"100",
                    nextid:3
                },
                {
                    answer: "Healthcare",
                    weight:"100",
                    nextid:4
                },
                {
                    answer: "Banking",
                    weight:"100",
                    nextid:5
                },
                {
                    answer: "other",
                    weight:"75",
                    nextid:6
                }
            ],
            selected: null,
           
        },
         {
            type: "text",
            id:3,
            text: "When did you got your last project?",
            possibilities: [
                {
                    answer: "3-6 months ago",
                    weight:"100",
                    nextid:7
                },
                {
                    answer: "7-9 months ago",
                    weight:"75",
                    nextid:7
                },
                {
                    answer: "10-12 months ago",
                    weight:"50",
                     nextid:7
                },
                {
                    answer: "1-2 year ago",
                    weight:"25",
                     nextid:7
                }
            ],
            selected: null,
            
        },
       
         {
            type: "text",
            id:4,
            text: "Is this your first project related with business?",
            possibilities: [
                {
                    answer: "Yes",
                    weight:"50",
                    nextid:7
                },
                {
                    answer: "No",
                    weight:"100",
                    nextid:7 
                }
            ],
            selected: null,
           
        },

        {
            type: "text",
            id:5,
            text: "Is this your first project related with Healthcare?",
            possibilities: [
                 {
                    answer: "Yes",
                    weight:"50",
                    nextid:7
                },
                {
                    answer: "No",
                    weight:"100",
                    nextid:7 
                }
            ],
            selected: null,
            
        },
       {
            type: "text",
            id: 6,
            text: "Is this your first project related with Banking?",
            possibilities: [
                {
                    answer: "Yes",
                    weight:"50",
                    nextid:7
                },
                {
                    answer: "No",
                    weight:"100",
                    nextid:7 
                }
            ],
            selected: null,
             },
              {
            type: "text",
            id:7,
            text: "Is this your first project?",
            possibilities: [
                {
                    answer: "Yes",
                    weight:"50",
                    nextid:7
                },
                {
                    answer: "No",
                    weight:"100",
                    nextid:7
                }
            ],
            selected: null,
             },
        {
            type: "text",
            id:8,
            text: "On how many projects currently you are working on?",
            possibilities: [
                {
                    answer: "less than 3",
                    weight:"25",
                    nextid:null
                },
                {
                    answer: "more than 3",
                    weight:"50",
                    nextid:null
                },
                {
                    answer: "less than 7",
                    weight:"75",
                    nextid:null
                },
                {
                    answer: "more than 10",
                    weight:"100",
                    nextid:null
                }
            ],
            selected: null,
           
        },
      /*  {
            type: "text",
            text: "Which is not one of the types of prototype of Prototyping Model?",
            possibilities: [
                {
                    answer: "Horizontal Prototype",
                    weight:"0",
                    nextid:null
                },
                {
                    answer: "Vertical Prototype",
                    weight:"50",
                    nextid:null
                },
                {
                    answer: "Diagonal Prototype",
                    weight:"100",
                    nextid:null
                },
                {
                    answer: "Domain Prototype",
                    weight:"25",
                    nextid:null
                }
            ],
            selected: null,
            
        },
        {
            type: "text",
            text: "Which one of the following is not a phase of Prototyping Model?",  

            possibilities: [
                {
                    answer: "Quick Design",
                    weight:"50",
                    nextid:null
                },
                {
                    answer: "Coding",
                    weight:"100",
                    nextid:null
                },
                {
                    answer: "Prototype Refinement",
                    weight:"25",
                    nextid:null
                },
                {
                    answer: "Engineer Product",
                    weight:"0",
                    nextid:null
                }
            ],
            selected: null,
            
        },
       {
            type: "text",
            text: "Which of the following statements regarding Build & Fix Model is wrong?",
            possibilities: [
                {
                    answer: "No room for structured design",
                    weight:"0"
                },
                {
                    answer: " Code soon becomes unfix-able & unchangeable",
                    weight:"25"
                },
                {
                    answer: "Maintenance is practically not possible",
                    weight:"50"
                },
                {
                    answer: "It scales up well to large projects",
                    weight:"100"
                }
            ],
            selected: null,
            correct: null
        }*/

        
          ];

}());
 
