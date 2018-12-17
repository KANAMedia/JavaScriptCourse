/***************************
 * CODING CHALLENGE 7
 */
(function() {

    var isgaming = true;

    var player = {
        name: 'Gustaf',
        score: 0
    }

    var Question = function(question, answers, solution){
        this.question = question;
        this.answers = answers;
        this.solution = solution;
    }

    Question.prototype.showAnswers = function(){
        this.answers.forEach(i => {
            console.log(i);
        }); 
    }

    Question.prototype.checkSolution = function(userInput){
        if (this.solution == userInput){
            console.log('Right answer! congrats!');
            return function addscore(){
                player.score += 1;
                console.log(`----------------`);
                console.log(`SCORE: ${player.score}`);
                console.log(`----------------`);
            }   
        } else if( userInput === 'exit'){
                isgaming = false;
                return function addscore(){
                    player.score += 0;
                    console.log(`----------------`);
                    console.log(`Okay bye ${player.name}! :)`);
                    console.log(`----------------`);
                    console.log(`FINAL SCORE: ${player.score}`);
                    console.log(`----------------`);
                }   
        } else {
            console.log('Sry not right, try again :)!')
            return function addscore(){
                player.score += 0;
                console.log(`----------------`);
                console.log(`SCORE: ${player.score}`);
                console.log(`----------------`);
            }
        }
    }

    Question.prototype.showQuestion = function(){
        console.log(this.question);
    }
    
    function randomQuestion() {
        var random = Math.floor(Math.random() * questions.length);
        // if there are questions in the Array
        if(questions.length){
            questions[random].showQuestion();
            questions[random].showAnswers();
            questions[random].checkSolution(userInput())();

            // delete question out of  questions array
            questions.splice(random,1);
        } else {
            console.log(`CONGRATULATION: You successfully completet the quiz ${player.name}!`);
            console.log(`FINAL SCORE: ${player.score}`);
            isgaming = false;
        }
    }
    
    function userInput() {
        var userInput = prompt('Please select the correct answer.');
        return userInput
    }

    var question1 = new Question('How many GB are one TB?',['1: 1GB', '2: 100GB', '3: 1000GB'], 3);
    var question2 = new Question(`Name the world's biggest island.`,['1: Greenland', '2: Majorca', '3: Mainau'], 1);
    var question3 = new Question(`What is the world's longest river?`,['1: Nile', '2: Amazon', '3: Volga'], 2);
    var question4 = new Question(`If you had Lafite-Rothschild on your dinner table, what would it be?`,['1: Wine', '2: Ham', '3: Vegetables'], 1);    
    var questions = [question1, question2, question3, question4];

    while(isgaming === true){  
        randomQuestion();
    }
})();