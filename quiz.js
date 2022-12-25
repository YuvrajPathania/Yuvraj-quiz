var readlineSync = require('readline-sync');
console.log("                       Welcome to the Yuvraj's Quiz      \n");
var name = readlineSync.question(" What is Your Name? ");
console.log(" Welcome! " + name + " Let's start Quiz \n");

var score = 0;


 function play(question , answer) {

  var userAns = readlineSync.question(question);

  if(userAns.toUpperCase() == answer.toUpperCase()){

      console.log("Answer: "+" Right \n");
    score++;
   
    
  }

  else{
       console.log("Answer: "+" Wrong \n")
  }

  
    
  
}
 play("Ques 1: Do you Know from which place Yuvraj is ? " , "Himachal");

var questions = [ {
   A : "Ques 2: Where Yuvraj is studying ? ",
    B: "Chandigarh University"

},
                 {
                   A: "Ques 3: Do you Know Where Yuvraj Used to Live in College ? ",
                   B: "Hostel"
                 },
                
 {
A : "Ques 4: Who is Best Friend of Yuvraj ? ",
 B: "sahil"
 } ,


 {
 A: "Ques 5: Can you tell What is the name of Yuvraj's Mother ? ",
 B: "bavita"
}
];

for(var i = 0 ; i<questions.length; i++){
  
 var x = questions[i];
  play(x.A , x.B);
  
}

console.log("Your Final Score is " + score);






