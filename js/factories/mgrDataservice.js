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
            text: "Which model can be selected if user is involved in all the phases of SDLC?",
            possibilities: [
                {
                    answer: "Waterfall Model",
                    weight:"25"
                },
                {
                    answer: "Prototyping Model",
                    weight:"50"
                },
                {
                    answer: "RAD Model",
                    weight:"100"
                },
                {
                    answer: "both b & c",
                    weight:"0"
                }
            ],
            selected: null,
            correct: null
        },
         {
            type: "text",
            text: "SDLC stands for",  
            possibilities: [
                {
                    answer: "Software Development Life Cycle",
                    weight:"100"
                },
                {
                    answer: "System Development Life cycle",
                    weight:"0"
                },
                {
                    answer: "Software Design Life Cycle",
                    weight:"50"
                },
                {
                    answer: "System Design Life Cycle",
                    weight:"25"
                }
            ],
            selected: null,
            correct: null
        },
         {
            type: "text",
            text: "What is the major drawback of using RAD Model?",
            possibilities: [
                {
                    answer: "Highly specialized & skilled developers/designers are required.",
                    weight:"50"
                },
                {
                    answer: "Increases re-usability of components.",
                    weight:"25"
                },
                {
                    answer: "Encourages customer/client feedback.",
                    weight:"0"
                },
                {
                    answer: "Both a & c",
                    weight:"100"
                }
            ],
            selected: null,
            correct: null
        },
       
         {
            type: "text",
            text: "RAD Model has",
            possibilities: [
                {
                    answer: "2 phases",
                    weight:"50"
                },
                {
                    answer: "3 phase",
                    weight:"0"
                },
                {
                    answer: "5 phases",
                    weight:"100"
                },
                {
                    answer: "6 phases",
                    weight:"25"
                }
            ],
            selected: null,
            correct: null
        },

        {
            type: "text",
            text: "Build & Fix Model is suitable for programming exercises of ___________ LOC ",
            possibilities: [
                 {
                    answer: "100-200",
                    weight:"100"
                },
                {
                    answer: "200-400",
                    weight:"25"
                },
                {
                    answer: "400-1000",
                    weight:"50"
                },
                {
                    answer: "above 1000",
                    weight:"0"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "RAD stands for",
            possibilities: [
                {
                    answer: "Relative Application Development",
                    weight:"50"
                },
                {
                    answer: " Rapid Application Development",
                     weight:"100"
                },
                {
                    answer: "Rapid Application Document",
                    weight:"25"
                },
                {
                    answer: "None of the above",
                    weight: "0"

                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "Which one of the following models is not suitable for accommodating any change?",
            possibilities: [
                {
                    answer: "Build & Fix Model",
                    weight:"50"
                },
                {
                    answer: "Prototyping Model",
                    weight:"0"
                },
                {
                    answer: "RAD Model",
                    weight:"25"
                },
                {
                    answer: "Waterfall Model",
                    weight:"100"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "Which is not one of the types of prototype of Prototyping Model?",
            possibilities: [
                {
                    answer: "Horizontal Prototype",
                    weight:"0"
                },
                {
                    answer: "Vertical Prototype",
                    weight:"50"
                },
                {
                    answer: "Diagonal Prototype",
                    weight:"100"
                },
                {
                    answer: "Domain Prototype",
                    weight:"25"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "Which one of the following is not a phase of Prototyping Model?",  

            possibilities: [
                {
                    answer: "Quick Design",
                    weight:"50"
                },
                {
                    answer: "Coding",
                    weight:"100"
                },
                {
                    answer: "Prototype Refinement",
                    weight:"25"
                },
                {
                    answer: "Engineer Product",
                    weight:"0"
                }
            ],
            selected: null,
            correct: null
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
        }
      ];
}());



   
   