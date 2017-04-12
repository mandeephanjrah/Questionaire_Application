(function(){
var app= angular.module("Questionaire");
app.factory("DataService", DataService);
function DataService(){
    dataobj={
        questions:Questions,
    };
    
    return dataobj;
}

 var Questions  = [
       /* {
            type: "text",
            id: 'Q1',
            text: "Build & Fix Model is suitable for programming exercises of ___________ LOC (Line of Code).",
            possibilities: [
                 {
                    answer: "100-200",
                    weight:"100",
                    questions: [
                     { 
                         id: 'Q1A1-Q1',
                         text: "Which is not one of the types of prototype of Prototyping Model?",
                        possibilities:[
                        {
                             answer: "Horizontal Prototype",
                             weight:"0",

                             questions: null
                        },
                        {
                             answer: "Vertical Prototype",
                             weight:"50",
                             questions: null
                         },
                         {
                              answer: "Diagonal Prototype",
                              weight:"100",
                             questions: null
                         },
                         {
                                answer: "Domain Prototype",
                                weight:"25",
                                questions: null
                        }
                     ],
                         selected: null,
                         correct: null
                    },
                  {
                     id: 'Q1A1-Q2',
                     text: "Which one of the following is not a phase of Prototyping Model?",  

            possibilities: [
                {
                    answer: "Quick Design",
                    weight:"50",
                    questions: null
                },
                {
                    answer: "Coding",
                    weight:"100",
                    questions: [
                    {
                      id: 'Q1A1-Q2A2-Q1',
                      text: "Which of the following statements regarding Build & Fix Model is wrong?",
            possibilities: [
                {
                    answer: "No room for structured design",
                    weight:"25",
                    questions: null
                },
                {
                    answer: " Code soon becomes unfix-able & unchangeable",
                    weight:"50",
                    questions: null
                },
                {
                    answer: "Maintenance is practically not possible",
                    weight:"0",
                    questions: null
                },
                {
                    answer: "It scales up well to large projects",
                    weight:"100",
                    questions: null
                }
            ],
            selected: null,
            correct: null
        },
                    ]    
                },        
                {
                    answer: "Prototype Refinement",
                    weight:"25",
                    questions: null
                },
                {
                    answer: "Engineer Product",
                    weight:"0",
                    questions: null
                }
            ],
            selected: null,
            correct: null
        },

         {
             id: 'Q1A1-Q3',
            text:  "Which one of the following is not a phase of Prototyping Model?",  

            possibilities: [
                {
                    answer: "Quick Design",
                    weight:"50",
                     questions: [
                    {
                      id: 'Q1A1-Q3A1-Q1',
                      text: "Which of the following statements regarding Build & Fix Model is wrong?",
            possibilities: [
                {
                    answer: "No room for structured design",
                    weight:"25",
                    questions: null
                },
                {
                    answer: " Code soon becomes unfix-able & unchangeable",
                    weight:"50",
                    questions: null
                },
                {
                    answer: "Maintenance is practically not possible",
                    weight:"0",
                    questions: null
                },
                {
                    answer: "It scales up well to large projects",
                    weight:"100",
                    questions: null
                }
            ],
            selected: null,
            correct: null
        },
        {
                      id: 'Q1A1-Q3A1-Q2',
                      type: "text",
                     text: "Which model can be selected if user is involved in all the phases of SDLC?",
            possibilities: [
                {
                    answer: "Waterfall Model",
                    weight:"0",
                    questions: null
                },
                {
                    answer: "Prototyping Model",
                    weight:"25",
                    questions: null
                },
                {
                    answer: "RAD Model",
                    weight:"100",
                    questions: null
                },
                {
                    answer: "both b & c",
                    weight:"50",
                    questions: null
                }
            ],
            selected: null,
            correct: null
        },
        ]
                },

                {
                    answer: "Coding",
                    weight:"100",
                   questions: null
                },
                
                {
                    answer: "Prototype Refinement",
                    weight:"25",
                    questions: null
                },
                {
                    answer: "Engineer Product",
                    weight:"0",
                    questions: null
                }
            ],
            selected: null,
            correct: null
        },
                    ]
                 },
        
                {
                    answer: "200-400",
                    weight:"25",
                    questions: null
                },
                {
                    answer: "400-1000",
                    weight:"50",
                      questions: [
                    {
                      id: 'Q1A3-Q1',
                      text: "Which of the following statements regarding Build & Fix Model is wrong?",
            possibilities: [
                {
                    answer: "No room for structured design",
                    weight:"25",
                    questions: null
                },
                {
                    answer: " Code soon becomes unfix-able & unchangeable",
                    weight:"50",
                    questions: null
                },
                {
                    answer: "Maintenance is practically not possible",
                    weight:"0",
                    questions: null
                },
                {
                    answer: "It scales up well to large projects",
                    weight:"100",
                    questions: null
                }
            ],
            selected: null,
            correct: null
        },
        {
                      id: 'Q1A3-Q2',
                      type: "text",
                     text: "Which model can be selected if user is involved in all the phases of SDLC?",
            possibilities: [
                {
                    answer: "Waterfall Model",
                    weight:"0",
                    questions: null
                },
                {
                    answer: "Prototyping Model",
                    weight:"25",
                    questions: null
                },
                {
                    answer: "RAD Model",
                    weight:"100",
                    questions: null
                },
                {
                    answer: "both b & c",
                    weight:"50",
                    questions: null
                }
            ],
            selected: null,
            correct: null
        },
                      ]
                },
                {
                    answer: "above 1000",
                    weight:"0",
                    questions: null
                }
            ],
            selected: null,
            correct: null
        },

        {
            type: "text",
            id: 'Q2',
            text: "RAD stands for",
            possibilities: [
                {
                    answer: "Relative Application Development",
                    weight:"50",
                    questions: null
                },
                {
                    answer: " Rapid Application Development",
                     weight:"100",
                     questions: null
                },
                {
                    answer: "Rapid Application Document",
                    weight:"25",
                    questions: null
                },
                {
                    answer: "None of the above",
                    weight: "0",
                    questions: null

                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            id: 'Q3',
            text: "Which one of the following models is not suitable for accommodating any change?",
            possibilities: [
                {
                    answer: "Build & Fix Model",
                    weight:"50",
                    questions: [
            {
              id: 'Q3A1-Q1',
             text: "Which is not one of the types of prototype of Prototyping Model?",
            possibilities: [
                {
                  answer: "Horizontal Prototype",
                 weight:"0",
                  questions: [
                    {
                      id: 'Q3A1-Q1A1-Q1',
                      text: "Which one of the following is not a phase of Prototyping Model?",  

            possibilities: [
                {
                    answer: "Quick Design",
                    weight:"50",
                          questions: [
						    {
                              id: 'Q3A1-Q1A1-Q1A1-Q1',
                             text: "Which of the following statements regarding Build & Fix Model is wrong?",
                     possibilities: [
                         {
                                answer: "No room for structured design",
                                weight:"25",
                                questions: null
                                },
                                {
                                   answer: " Code soon becomes unfix-able & unchangeable",
                                    weight:"50",
                                    questions: null
                                 },
                                {
                                      answer: "Maintenance is practically not possible",
                                      weight:"0",
                                      questions: null
                                 },
                                 {
                                    answer: "It scales up well to large projects",
                                     weight:"100",
                                     questions: null
                                 }
                              ],
                               selected: null,
                                correct: null
                            }
						  ],
                        },

                            {
                           answer: "Coding",
                             weight:"100",
                          questions: [
						    {
                              id: 'Q3A1-Q1A1-Q1A2-Q1',
                              text: "RAD Model has",
                            possibilities: [
                                {
                                  answer: "2 phases",
                                  weight:"50",
                                  questions: null
                                },
                             {
                                 answer: "3 phase",
                                weight:"0",
                                questions: null
                             },
                             {
                                 answer: "5 phases",
                                weight:"100",
                                questions: null
                            },
                            {
                             answer: "6 phases",
                             weight:"25",
                             questions: null
                             }
                            ],
                          selected: null,
                          correct: null
                        }
                      ]
                    }
                  ],
                  selected: null,
                  correct: null
                },
                  ]
                },

         {
                  answer: "Vertical Prototype",
                    weight:"50",
                  questions: [
                    {
                      id: 'Q3A1-Q1A2-Q1',
                     text: "What is the major drawback of using RAD Model?",
            possibilities: [
                {
                    answer: "Highly specialized & skilled developers/designers are required.",
                    weight:"25",
                          questions: [
						    {
                              id: 'Q3A1-Q1A2-Q1A1-Q1',
                              text: "SDLC stands for",  
            possibilities: [
                {
                    answer: "Software Development Life Cycle",
                    weight:"100",
                    question: null
                },
                {
                    answer: "System Development Life cycle",
                    weight:"50",
                    question: null
                },
                {
                    answer: "Software Design Life Cycle",
                    weight:"25",
                    question: null
                },
                {
                    answer: "System Design Life Cycle",
                    weight:"0",
                    question: null
                }
            ],
            selected: null,
            correct: null
        },
                          ]
                },

         {
                          answer: "Increases re-usability of components.",
                         weight:"0",
                          questions: [
                            {
                              id: 'Q3A1-Q1A2-Q1A2-Q1',
                              text: "Which is not one of the types of prototype of Prototyping Model?",
            possibilities: [
                {
                    answer: "Horizontal Prototype",
                    weight:"0",
                                  questions: null,
                                
                                },
                                { answer: "Vertical Prototype",
                    weight:"50", 
                    questions: null,
                },
                {
                    answer: "Diagonal Prototype",
                    weight:"100",
                    questions: null,
                },
                {
                    answer: "Domain Prototype",
                    weight:"25",
                    questions: null,
                }
                              ],
                              selected:null,
                              correct:null
                            }
                          ],
                        }
                      ],
                       selected:null,
                   correct:null
                    }
                  ],
                   
                }
              ]
            }
          ],
         selected:null,
        correct:null
        },

                {
                    answer: "Prototyping Model",
                    weight:"0",
                     questions: [
                    {
                      id: 'Q3A2-Q1',
                      text: "Which of the following statements regarding Build & Fix Model is wrong?",
            possibilities: [
                {
                    answer: "No room for structured design",
                    weight:"25",
                    questions: null
                },
                {
                    answer: " Code soon becomes unfix-able & unchangeable",
                    weight:"50",
                    questions: null
                },
                {
                    answer: "Maintenance is practically not possible",
                    weight:"0",
                    questions: null
                },
                {
                    answer: "It scales up well to large projects",
                    weight:"100",
                    questions: null
                }
            ],
            selected: null,
            correct: null
        },
        {
             id: 'Q3A2-Q2',
            type: "text",
            text: "Which is not one of the types of prototype of Prototyping Model?",
            possibilities: [
                {
                    answer: "Horizontal Prototype",
                    weight:"0",
                    questions: null
                },
                {
                    answer: "Vertical Prototype",
                    weight:"50",
                    questions: null
                },
                {
                    answer: "Diagonal Prototype",
                    weight:"100",
                    questions: null
                },
                {
                    answer: "Domain Prototype",
                    weight:"25",
                    questions: null
                }
            ],
            selected: null,
            correct: null
        },
        {
             id: 'Q3A2-Q3',
            type: "text",
            text: "Which one of the following is not a phase of Prototyping Model?",  

            possibilities: [
                {
                    answer: "Quick Design",
                    weight:"50",
                    questions: null
                },
                {
                    answer: "Coding",
                    weight:"100",
                    questions: null
                },
                {
                    answer: "Prototype Refinement",
                    weight:"25",
                    questions: null
                },
                {
                    answer: "Engineer Product",
                    weight:"0",
                    questions: null
                }
            ],
            selected: null,
            correct: null
        },
         ],
                },
      
                {
                    answer: "RAD Model",
                    weight:"25",
                    questions: null
                },
                {
                    answer: "Waterfall Model",
                    weight:"100",
                    questions: null
                }
            ],
            selected: null,
            correct: null
        }*/

 {
            type: "text",
            id: 1,
            text: "Which model can be selected if user is involved in all the phases of SDLC?",
            possibilities: [
                {
                    answer: "Waterfall Model",
                    weight:"25",
                    nextid:1
                },
                {
                    answer: "Prototyping Model",
                    weight:"50",
                    nextid:2
                },
                {
                    answer: "RAD Model",
                    weight:"100",
                    nextid:3
                },
                {
                    answer: "both b & c",
                    weight:"0",
                    nextid:4
                }
            ],
            selected: null,
        },
         {
            type: "text",
            id:2,
            text: "SDLC stands for",  
            possibilities: [
                {
                    answer: "Software Development Life Cycle",
                    weight:"100",
                    nextid:2
                },
                {
                    answer: "System Development Life cycle",
                    weight:"0",
                    nextid:3
                },
                {
                    answer: "Software Design Life Cycle",
                    weight:"50",
                    nextid:4
                },
                {
                    answer: "System Design Life Cycle",
                    weight:"25",
                    nextid:5
                }
            ],
            selected: null,
           
        },
         {
            type: "text",
            id:3,
            text: "What is the major drawback of using RAD Model?",
            possibilities: [
                {
                    answer: "Highly specialized & skilled developers/designers are required.",
                    weight:"50",
                    nextid:3
                },
                {
                    answer: "Increases re-usability of components.",
                    weight:"25",
                    nextid:4
                },
                {
                    answer: "Encourages customer/client feedback.",
                    weight:"0",
                     nextid:5
                },
                {
                    answer: "Both a & c",
                    weight:"100",
                     nextid:6
                }
            ],
            selected: null,
            
        },
       
         {
            type: "text",
            id:4,
            text: "RAD Model has",
            possibilities: [
                {
                    answer: "2 phases",
                    weight:"50",
                    nextid:4
                },
                {
                    answer: "3 phase",
                    weight:"0",
                    nextid:5 
                },
                {
                    answer: "5 phases",
                    weight:"100",
                     nextid:6
                },
                {
                    answer: "6 phases",
                    weight:"25",
                     nextid:7
                }
            ],
            selected: null,
           
        },

        {
            type: "text",
            id:5,
            text: "Build & Fix Model is suitable for programming exercises of ___________ LOC ",
            possibilities: [
                 {
                    answer: "100-200",
                    weight:"100",
                     nextid:5
                },
                {
                    answer: "200-400",
                    weight:"25",
                     nextid:6
                },
                {
                    answer: "400-1000",
                    weight:"50",
                     nextid:7
                },
                {
                    answer: "above 1000",
                    weight:"0",
                     nextid:8
                }
            ],
            selected: null,
            
        },
       {
            type: "text",
            text: "RAD stands for",
            possibilities: [
                {
                    answer: "Relative Application Development",
                    weight:"50",
                    nextid:null
                },
                {
                    answer: " Rapid Application Development",
                     weight:"100",
                     nextid:null
                },
                {
                    answer: "Rapid Application Document",
                    weight:"25",
                    nextid:null
                },
                {
                    answer: "None of the above",
                    weight: "0",
                    nextid:null

                }
            ],
            selected: null,
             },
        {
            type: "text",
            text: "Which one of the following models is not suitable for accommodating any change?",
            possibilities: [
                {
                    answer: "Build & Fix Model",
                    weight:"50",
                    nextid:null
                },
                {
                    answer: "Prototyping Model",
                    weight:"0",
                    nextid:null
                },
                {
                    answer: "RAD Model",
                    weight:"25",
                    nextid:null
                },
                {
                    answer: "Waterfall Model",
                    weight:"100",
                    nextid:null
                }
            ],
            selected: null,
           
        },
        {
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
       /* {
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
 
