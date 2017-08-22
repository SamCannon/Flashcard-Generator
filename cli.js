const inq = require("inquirer");
const Cloze = require("./ClozeCard.js");
const Basic = require("./BasicCard.js");


 var firstPresident = BasicCard("Who was the first president of the United States?", "George Washington");
 var front = firstPresident.Front;
 var back = firstPresident.Back;
 var prezCloze = ClozeCard("George Washington was the first president of the United States.", "...was the first president of the United States.", "George Washington");

 var startQuestioning = () => {

 	inq.prompt([
 		{
 			type: "input",
 			name: "prompt",
 			message: firstPresident.Front
 		}
 	]).then((reply) => {

 		let rep = reply.prompt;
 		

 		if(rep == back) {

 			console.log("Right!");
	
 		} else {

 			throw "Your answer is incorrect."

 		};

 	}).catch((e) => {

 		console.log(e);

 	});

 };

 var answerCloze = () => {



 }

 startQuestioning();