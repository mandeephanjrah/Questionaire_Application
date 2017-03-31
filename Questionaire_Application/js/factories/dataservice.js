(function(){
var app= angular.module("Questionaire");
app.factory("DataService", DataService);
function DataService(){
    dataobj={
        questions:Questions,
       // correctanswers:correctanswers
    };
    return dataobj;
}

var correctanswers= [1, 2, 4, 3, 2, 4, 3, 4, 1, 3];

 var Questions  = [
        {
            type: "text",
            text: "Build & Fix Model is suitable for programming exercises of ___________ LOC (Line of Code).",
            possibilities: [
                {
                    answer: "100-200"
                },
                {
                    answer: "200-400"
                },
                {
                    answer: "400-1000"
                },
                {
                    answer: "above 1000"
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
                    answer: "Relative Application Development"
                },
                {
                    answer: " Rapid Application Development"
                },
                {
                    answer: "Rapid Application Document"
                },
                {
                    answer: "None of the above"
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
                    answer: "Build & Fix Model"
                },
                {
                    answer: "Prototyping Model"
                },
                {
                    answer: "RAD Model"
                },
                {
                    answer: "Waterfall Model"
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
                    answer: "Horizontal Prototype"
                },
                {
                    answer: "Vertical Prototype"
                },
                {
                    answer: "Diagonal Prototype"
                },
                {
                    answer: "Domain Prototype"
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
                    answer: "Quick Design"
                },
                {
                    answer: "Coding"
                },
                {
                    answer: "Prototype Refinement"
                },
                {
                    answer: "Engineer Product"
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
                    answer: "No room for structured design"
                },
                {
                    answer: " Code soon becomes unfix-able & unchangeable"
                },
                {
                    answer: "Maintenance is practically not possible"
                },
                {
                    answer: "It scales up well to large projects"
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
                    answer: "2 phases"
                },
                {
                    answer: "3 phase"
                },
                {
                    answer: "5 phases"
                },
                {
                    answer: "6 phases"
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
                    answer: "Highly specialized & skilled developers/designers are required."
                },
                {
                    answer: "Increases re-usability of components."
                },
                {
                    answer: "Encourages customer/client feedback."
                },
                {
                    answer: "Both a & c"
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
                    answer: "Software Development Life Cycle"
                },
                {
                    answer: "System Development Life cycle"
                },
                {
                    answer: "Software Design Life Cycle"
                },
                {
                    answer: "System Design Life Cycle"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "Which model can be selected if user is involved in all the phases of SDLC?",
            possibilities: [
                {
                    answer: "Waterfall Model"
                },
                {
                    answer: "Prototyping Model"
                },
                {
                    answer: "RAD Model"
                },
                {
                    answer: "both b & c"
                }
            ],
            selected: null,
            correct: null
        }
    ];

}());



   
   