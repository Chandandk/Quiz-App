//Global variables
let timeValue =  15;
let que_count = 0;
let que_numb = 1;
let userScore = 0;
let counter;
let counterLine;
let widthValue = 0;
//selecting all required elements
const start_btn = document.querySelector(".start_btn button");

const info_box = document.querySelector(".info_box");
const exit_btn = info_box.querySelector(".buttons .quit");
const continue_btn = info_box.querySelector(".buttons .restart");
const quiz_box = document.querySelector(".quiz_box");
const result_box = document.querySelector(".result_box");
const option_list = document.querySelector(".option_list");
const time_line = document.querySelector("header .time_line");
const timeText = document.querySelector(".timer .time_left_txt");
const timeCount = document.querySelector(".timer .timer_sec");

const pipesQue=document.querySelector(".pipes");
const probQue=document.querySelector(".prob");
const agesQue=document.querySelector(".ages");
const profitQue=document.querySelector(".profit");
let currentCategory="";

// if startQuiz button clicked
start_btn.onclick = ()=>{
    const value = document.querySelector(".userName").value;
    document.querySelector(".userAssignName").innerHTML=value;
    info_box.classList.add("activeInfo"); //show info box
    quiz_box.classList.remove("activeQuiz"); //hide quiz box
    result_box.classList.remove("activeResult"); //hide result box
}

// if exitQuiz button clicked
exit_btn.onclick = ()=>{
    info_box.classList.remove("activeInfo"); //hide info box
}

// if quitQuiz button clicked
const quit_quiz = result_box.querySelector(".buttons .quit");
quit_quiz.onclick = ()=>{
    window.location.reload(); //reload the current window
}

// if continueQuiz button clicked
// continue_btn.onclick = ()=>{
//     info_box.classList.remove("activeInfo"); //hide info box
//     quiz_box.classList.add("activeQuiz"); //show quiz box
//     showQuetions(0); //calling showQestions function
//     queCounter(1); //passing 1 parameter to queCounter
//     startTimer(15); //calling startTimer function
//     startTimerLine(0); //calling startTimerLine function
// }
pipesQue.onclick = ()=>{
    info_box.classList.remove("activeInfo"); //hide info box
    quiz_box.classList.add("activeQuiz"); //show quiz box
    showPipesQuetions(0); //calling showQestions function
    queCounter(1); //passing 1 parameter to queCounter
    startTimer(15); //calling startTimer function
    startTimerLine(widthValue); //calling startTimerLine function
    currentCategory="pipes"; //
    
}
probQue.onclick = ()=>{
    info_box.classList.remove("activeInfo"); //hide info box
    quiz_box.classList.add("activeQuiz"); //show quiz box
    showProbQuetions(0); //calling showQestions function
    queCounter(1); //passing 1 parameter to queCounter
    startTimer(15); //calling startTimer function
    startTimerLine(widthValue); //calling startTimerLine function
    currentCategory="prob";
}
agesQue.onclick = ()=>{
    info_box.classList.remove("activeInfo"); //hide info box
    quiz_box.classList.add("activeQuiz"); //show quiz box
    showAgesQuetions(0); //calling showQestions function
    queCounter(1); //passing 1 parameter to queCounter
    startTimer(15); //calling startTimer function
    startTimerLine(widthValue); //calling startTimerLine function
    currentCategory="ages"; //
}
profitQue.onclick = ()=>{
    info_box.classList.remove("activeInfo"); //hide info box
    quiz_box.classList.add("activeQuiz"); //show quiz box
    showProfitQuetions(0); //calling showQestions function
    queCounter(1); //passing 1 parameter to queCounter
    startTimer(15); //calling startTimer function
    startTimerLine(widthValue); //calling startTimerLine function
    currentCategory="profit";
}

// getting questions and options from array
function showPipesQuetions(index){
    
    document.querySelector(".title").innerHTML="<h3>Pipes & Cisterns</h3>";
    const que_text = document.querySelector(".que_text");

    //creating a new span and div tag for question and option and passing the value using array index
    let que_tag = '<span>'+ pipes[index].numb + ". " + pipes[index].question +'</span>';
    let option_tag = 
    '<div class="option"><span>'+ pipes[index].options[0] +'</span></div>'
    + '<div class="option"><span>'+ pipes[index].options[1] +'</span></div>'
    + '<div class="option"><span>'+ pipes[index].options[2] +'</span></div>'
    + '<div class="option"><span>'+ pipes[index].options[3] +'</span></div>';
    que_text.innerHTML = que_tag; //adding new span tag inside que_tag
    option_list.innerHTML = option_tag; //adding new div tag inside option_tag
    
    const option = option_list.querySelectorAll(".option");

    // set onclick attribute to all available options
    for(i=0; i < option.length; i++){
        option[i].setAttribute("onclick", "pipesOptionSelected(this)");
    }
       // if Next Que button clicked
    next_btn.onclick = ()=>{

        if(que_count < pipes.length - 1){ //if question count is less than total question length
            que_count++; //increment the que_count value
            que_numb++; //increment the que_numb value
            showPipesQuetions(que_count); //calling showQestions function
           // showProbQuetions(que_count); //calling showQestions function
          //  showAgesQuetions(que_count); //calling showQestions function
          //  showProfitQuetions(que_count); //calling showQestions function
    
            queCounter(que_numb); //passing que_numb value to queCounter
            clearInterval(counter); //clear counter
            clearInterval(counterLine); //clear counterLine
            startTimer(timeValue); //calling startTimer function
            startTimerLine(widthValue); //calling startTimerLine function
            timeText.textContent = "Time Left"; //change the timeText to Time Left
            next_btn.classList.remove("show"); //hide the next button
        }else{
            clearInterval(counter); //clear counter
            clearInterval(counterLine); //clear counterLine
            showResult(); //calling showResult function
        }
    }
    // if restartQuiz button clicked
    const restart_quiz = result_box.querySelector(".buttons .restart");
    restart_quiz.onclick = ()=>{
    quiz_box.classList.add("activeQuiz"); //show quiz box
    result_box.classList.remove("activeResult"); //hide result box
    timeValue = 15; 
    que_count = 0;
    que_numb = 1;
    userScore = 0;
    widthValue = 0;
    showPipesQuetions(que_count); //calling showQestions function
    //showProbQuetions(que_count); //calling showQestions function
   // showAgesQuetions(que_count); //calling showQestions function
   // showProfitQuetions(que_count); //calling showQestions function

    queCounter(que_numb); //passing que_numb value to queCounter
    clearInterval(counter); //clear counter
    clearInterval(counterLine); //clear counterLine
    startTimer(timeValue); //calling startTimer function
    startTimerLine(widthValue); //calling startTimerLine function
    timeText.textContent = "Time Left"; //change the text of timeText to Time Left
    next_btn.classList.remove("show"); //hide the next button
    }

 }
function showProbQuetions(index){
    const que_text = document.querySelector(".que_text");
    document.querySelector(".title").innerHTML="<h3>Probability</h3>";
    //creating a new span and div tag for question and option and passing the value using array index
    let que_tag = '<span>'+ prob[index].numb + ". " + prob[index].question +'</span>';
    let option_tag = 
    '<div class="option"><span>'+ prob[index].options[0] +'</span></div>'
    + '<div class="option"><span>'+ prob[index].options[1] +'</span></div>'
    + '<div class="option"><span>'+ prob[index].options[2] +'</span></div>'
    + '<div class="option"><span>'+ prob[index].options[3] +'</span></div>';
    que_text.innerHTML = que_tag; //adding new span tag inside que_tag
    option_list.innerHTML = option_tag; //adding new div tag inside option_tag
    
    const option = option_list.querySelectorAll(".option");

    // set onclick attribute to all available options
    for(i=0; i < option.length; i++){
        option[i].setAttribute("onclick", "probOptionSelected(this)");
    }
       // if Next Que button clicked
    next_btn.onclick = ()=>{
        if(que_count < pipes.length - 1){ //if question count is less than total question length
            que_count++; //increment the que_count value
            que_numb++; //increment the que_numb value
           // showPipesQuetions(que_count); //calling showQestions function
            showProbQuetions(que_count); //calling showQestions function
          //  showAgesQuetions(que_count); //calling showQestions function
          //  showProfitQuetions(que_count); //calling showQestions function
    
            queCounter(que_numb); //passing que_numb value to queCounter
            clearInterval(counter); //clear counter
            clearInterval(counterLine); //clear counterLine
            startTimer(timeValue); //calling startTimer function
            startTimerLine(widthValue); //calling startTimerLine function
            timeText.textContent = "Time Left"; //change the timeText to Time Left
            next_btn.classList.remove("show"); //hide the next button
        }else{
            clearInterval(counter); //clear counter
            clearInterval(counterLine); //clear counterLine
            showResult(); //calling showResult function
        }
    }
        // if restartQuiz button clicked
        const restart_quiz = result_box.querySelector(".buttons .restart");
         restart_quiz.onclick = ()=>{
    quiz_box.classList.add("activeQuiz"); //show quiz box
    result_box.classList.remove("activeResult"); //hide result box
    timeValue = 15; 
    que_count = 0;
    que_numb = 1;
    userScore = 0;
    widthValue = 0;
    //showPipesQuetions(que_count); //calling showQestions function
    showProbQuetions(que_count); //calling showQestions function
   // showAgesQuetions(que_count); //calling showQestions function
   // showProfitQuetions(que_count); //calling showQestions function

    queCounter(que_numb); //passing que_numb value to queCounter
    clearInterval(counter); //clear counter
    clearInterval(counterLine); //clear counterLine
    startTimer(timeValue); //calling startTimer function
    startTimerLine(widthValue); //calling startTimerLine function
    timeText.textContent = "Time Left"; //change the text of timeText to Time Left
    next_btn.classList.remove("show"); //hide the next button
    }
}
function showAgesQuetions(index){
    const que_text = document.querySelector(".que_text");
    document.querySelector(".title").innerHTML="<h3>Ages</h3>";
    //creating a new span and div tag for question and option and passing the value using array index
    let que_tag = '<span>'+ ages[index].numb + ". " + ages[index].question +'</span>';
    let option_tag = 
    '<div class="option"><span>'+ ages[index].options[0] +'</span></div>'
    + '<div class="option"><span>'+ ages[index].options[1] +'</span></div>'
    + '<div class="option"><span>'+ ages[index].options[2] +'</span></div>'
    + '<div class="option"><span>'+ ages[index].options[3] +'</span></div>';
    que_text.innerHTML = que_tag; //adding new span tag inside que_tag
    option_list.innerHTML = option_tag; //adding new div tag inside option_tag
    
    const option = option_list.querySelectorAll(".option");

    // set onclick attribute to all available options
    for(i=0; i < option.length; i++){
        option[i].setAttribute("onclick", "agesOptionSelected(this)");
    }
       // if Next Que button clicked
    next_btn.onclick = ()=>{
        if(que_count < pipes.length - 1){ //if question count is less than total question length
            que_count++; //increment the que_count value
            que_numb++; //increment the que_numb value
           // showPipesQuetions(que_count); //calling showQestions function
           // showProbQuetions(que_count); //calling showQestions function
            showAgesQuetions(que_count); //calling showQestions function
          //  showProfitQuetions(que_count); //calling showQestions function
    
            queCounter(que_numb); //passing que_numb value to queCounter
            clearInterval(counter); //clear counter
            clearInterval(counterLine); //clear counterLine
            startTimer(timeValue); //calling startTimer function
            startTimerLine(widthValue); //calling startTimerLine function
            timeText.textContent = "Time Left"; //change the timeText to Time Left
            next_btn.classList.remove("show"); //hide the next button
        }else{
            clearInterval(counter); //clear counter
            clearInterval(counterLine); //clear counterLine
            showResult(); //calling showResult function
        }
    }
        // if restartQuiz button clicked
        const restart_quiz = result_box.querySelector(".buttons .restart");
        restart_quiz.onclick = ()=>{
    quiz_box.classList.add("activeQuiz"); //show quiz box
    result_box.classList.remove("activeResult"); //hide result box
    timeValue = 15; 
    que_count = 0;
    que_numb = 1;
    userScore = 0;
    widthValue = 0;
    //showPipesQuetions(que_count); //calling showQestions function
    //showProbQuetions(que_count); //calling showQestions function
    showAgesQuetions(que_count); //calling showQestions function
   // showProfitQuetions(que_count); //calling showQestions function

    queCounter(que_numb); //passing que_numb value to queCounter
    clearInterval(counter); //clear counter
    clearInterval(counterLine); //clear counterLine
    startTimer(timeValue); //calling startTimer function
    startTimerLine(widthValue); //calling startTimerLine function
    timeText.textContent = "Time Left"; //change the text of timeText to Time Left
    next_btn.classList.remove("show"); //hide the next button
        }
}
function showProfitQuetions(index){
    const que_text = document.querySelector(".que_text");
    document.querySelector(".title").innerHTML="<h3>Profit & Loss</h3>";
    //creating a new span and div tag for question and option and passing the value using array index
    let que_tag = '<span>'+ profit[index].numb + ". " + profit[index].question +'</span>';

    let option_tag = 
    '<div class="option"><span>'+ profit[index].options[0] +'</span></div>'
    + '<div class="option"><span>'+ profit[index].options[1] +'</span></div>'
    + '<div class="option"><span>'+ profit[index].options[2] +'</span></div>'
    + '<div class="option"><span>'+ profit[index].options[3] +'</span></div>';
    que_text.innerHTML = que_tag; //adding new span tag inside que_tag
    option_list.innerHTML = option_tag; //adding new div tag inside option_tag
    
    const option = option_list.querySelectorAll(".option");

    // set onclick attribute to all available options
    for(i=0; i < option.length; i++){
        option[i].setAttribute("onclick", "profitOptionSelected(this)");
    }
       // if Next Que button clicked
    next_btn.onclick = ()=>{
        if(que_count < pipes.length - 1){ //if question count is less than total question length
            que_count++; //increment the que_count value
            que_numb++; //increment the que_numb value
           // showPipesQuetions(que_count); //calling showQestions function
           // showProbQuetions(que_count); //calling showQestions function
          //  showAgesQuetions(que_count); //calling showQestions function
            showProfitQuetions(que_count); //calling showQestions function
    
            queCounter(que_numb); //passing que_numb value to queCounter
            clearInterval(counter); //clear counter
            clearInterval(counterLine); //clear counterLine
            startTimer(timeValue); //calling startTimer function
            startTimerLine(widthValue); //calling startTimerLine function
            timeText.textContent = "Time Left"; //change the timeText to Time Left
            next_btn.classList.remove("show"); //hide the next button
        }else{
            clearInterval(counter); //clear counter
            clearInterval(counterLine); //clear counterLine
            showResult(); //calling showResult function
        }
    }
        // if restartQuiz button clicked
        const restart_quiz = result_box.querySelector(".buttons .restart");
        restart_quiz.onclick = ()=>{
    quiz_box.classList.add("activeQuiz"); //show quiz box
    result_box.classList.remove("activeResult"); //hide result box
    timeValue = 15; 
    que_count = 0;
    que_numb = 1;
    userScore = 0;
    widthValue = 0;
    //showPipesQuetions(que_count); //calling showQestions function
    //showProbQuetions(que_count); //calling showQestions function
   // showAgesQuetions(que_count); //calling showQestions function
   showProfitQuetions(que_count); //calling showQestions function

    queCounter(que_numb); //passing que_numb value to queCounter
    clearInterval(counter); //clear counter
    clearInterval(counterLine); //clear counterLine
    startTimer(timeValue); //calling startTimer function
    startTimerLine(widthValue); //calling startTimerLine function
    timeText.textContent = "Time Left"; //change the text of timeText to Time Left
    next_btn.classList.remove("show"); //hide the next button
        }
}

//if user clicked on option

function pipesOptionSelected(answer){
    clearInterval(counter); //clear counter
    clearInterval(counterLine); //clear counterLine
    let userAns = answer.textContent; //getting user selected option
    let pipesCorrectAns = pipes[que_count].answer; //getting correct answer from pipes array
    
    const allOptions = option_list.children.length; //getting all option items

   
    if( currentCategory==="pipes" && userAns == pipesCorrectAns){ //if user selected option is equal to array's correct answer
        userScore += 1; //upgrading score value with 1
        answer.classList.add("correct"); //adding green color to correct selected option
        answer.insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to correct selected option
        console.log("Correct Answer");
        console.log("Your correct answers = " + userScore);
    } 
 
    else{
        answer.classList.add("incorrect"); //adding red color to correct selected option
        answer.insertAdjacentHTML("beforeend", crossIconTag); //adding cross icon to correct selected option
        console.log("Wrong Answer");

        for(i=0; i < allOptions; i++){
            if(option_list.children[i].textContent == pipesCorrectAns){ //if there is an option which is matched to an pipes array answer 
                option_list.children[i].setAttribute("class", "option correct"); //adding green color to matched option
                option_list.children[i].insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to matched option
                console.log("Auto selected correct answer.");
            } }
        }  // else statement end here

    for(i=0; i < allOptions; i++){
        option_list.children[i].classList.add("disabled"); //once user select an option then disabled all options
    }
    next_btn.classList.add("show"); //show the next button if user selected any option
}
function probOptionSelected(answer){
    clearInterval(counter); //clear counter
    clearInterval(counterLine); //clear counterLine
    let userAns = answer.textContent; //getting user selected option
    let probCorrectAns = prob[que_count].answer; //getting correct answer from prob array
    const allOptions = option_list.children.length; //getting all option items

   
    if(currentCategory==="prob" && userAns == probCorrectAns){ //if user selected option is equal to array's correct answer
        userScore += 1; //upgrading score value with 1
        answer.classList.add("correct"); //adding green color to correct selected option
        answer.insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to correct selected option
        console.log("Correct Answer");
        console.log("Your correct answers = " + userScore);
    } 
 
    else{
        answer.classList.add("incorrect"); //adding red color to correct selected option
        answer.insertAdjacentHTML("beforeend", crossIconTag); //adding cross icon to correct selected option
        console.log("Wrong Answer");

        for(i=0; i < allOptions; i++){
            if(option_list.children[i].textContent == probCorrectAns){ //if there is an option which is matched to an pipes array answer 
                option_list.children[i].setAttribute("class", "option correct"); //adding green color to matched option
                option_list.children[i].insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to matched option
                console.log("Auto selected correct answer.");
            } }
        }  // else statement end here

    for(i=0; i < allOptions; i++){
        option_list.children[i].classList.add("disabled"); //once user select an option then disabled all options
    }
    next_btn.classList.add("show"); //show the next button if user selected any option
}
function agesOptionSelected(answer){
    clearInterval(counter); //clear counter
    clearInterval(counterLine); //clear counterLine
    let userAns = answer.textContent; //getting user selected option
    let agesCorrectAns = ages[que_count].answer; //getting correct answer from ages array
    const allOptions = option_list.children.length; //getting all option items

   
    if(currentCategory==="ages" && userAns == agesCorrectAns){ //if user selected option is equal to array's correct answer
        userScore += 1; //upgrading score value with 1
        answer.classList.add("correct"); //adding green color to correct selected option
        answer.insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to correct selected option
        console.log("Correct Answer");
        console.log("Your correct answers = " + userScore);
    } 
 
    else{
        answer.classList.add("incorrect"); //adding red color to correct selected option
        answer.insertAdjacentHTML("beforeend", crossIconTag); //adding cross icon to correct selected option
        console.log("Wrong Answer");

        for(i=0; i < allOptions; i++){
            if(option_list.children[i].textContent == agesCorrectAns){ //if there is an option which is matched to an pipes array answer 
                option_list.children[i].setAttribute("class", "option correct"); //adding green color to matched option
                option_list.children[i].insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to matched option
                console.log("Auto selected correct answer.");
            } }
        }  // else statement end here

    for(i=0; i < allOptions; i++){
        option_list.children[i].classList.add("disabled"); //once user select an option then disabled all options
    }
    next_btn.classList.add("show"); //show the next button if user selected any option
}
function profitOptionSelected(answer){
    clearInterval(counter); //clear counter
    clearInterval(counterLine); //clear counterLine
    let userAns = answer.textContent; //getting user selected option
    let profitCorrectAns = profit[que_count].answer; //getting correct answer from profit array
    const allOptions = option_list.children.length; //getting all option items

   
    if( currentCategory==="profit" && userAns == profitCorrectAns){ //if user selected option is equal to array's correct answer
        userScore += 1; //upgrading score value with 1
        answer.classList.add("correct"); //adding green color to correct selected option
        answer.insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to correct selected option
        console.log("Correct Answer");
        console.log("Your correct answers = " + userScore);
    } 
 
    else{
        answer.classList.add("incorrect"); //adding red color to correct selected option
        answer.insertAdjacentHTML("beforeend", crossIconTag); //adding cross icon to correct selected option
        console.log("Wrong Answer");

        for(i=0; i < allOptions; i++){
            if(option_list.children[i].textContent == profitCorrectAns){ //if there is an option which is matched to an pipes array answer 
                option_list.children[i].setAttribute("class", "option correct"); //adding green color to matched option
                option_list.children[i].insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to matched option
                console.log("Auto selected correct answer.");
            } }
        }  // else statement end here

    for(i=0; i < allOptions; i++){
        option_list.children[i].classList.add("disabled"); //once user select an option then disabled all options
    }
    next_btn.classList.add("show"); //show the next button if user selected any option
}



const bottom_ques_counter = document.querySelector("footer .total_que");
const next_btn = document.querySelector("footer .next_btn");

// creating the new div tags which for icons
let tickIconTag = '<div class="icon tick"><i class="fas fa-check"></i></div>';
let crossIconTag = '<div class="icon cross"><i class="fas fa-times"></i></div>';

function startTimer(time){
    counter = setInterval(timer, 1000);
    function timer(){
        timeCount.textContent = time; //changing the value of timeCount with time value
        time--; //decrement the time value
        if(time < 9){ //if timer is less than 9
            let addZero = timeCount.textContent; 
            timeCount.textContent = "0" + addZero; //add a 0 before time value
        }
        if(time < 0){ //if timer is less than 0
            clearInterval(counter); //clear counter
            timeText.textContent = "Time Off"; //change the time text to time off
            const allOptions = option_list.children.length; //getting all option items
            let pipesCorrectAns = pipes[que_count].answer; //getting correct answer from pipes array
            let probCorrectAns = prob[que_count].answer; //getting correct answer from prob array
            let agesCorrectAns = ages[que_count].answer; //getting correct answer from ages array
            let profitCorrectAns = profit[que_count].answer; //getting correct answer from profit array
            for(i=0; i < allOptions; i++){
                if(option_list.children[i].textContent == pipesCorrectAns){ //if there is an option which is matched to an array answer
                    option_list.children[i].setAttribute("class", "option correct"); //adding green color to matched option
                    option_list.children[i].insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to matched option
                    console.log("Time Off: Auto selected correct answer.");
                }
                if(option_list.children[i].textContent == probCorrectAns){ //if there is an option which is matched to an array answer
                    option_list.children[i].setAttribute("class", "option correct"); //adding green color to matched option
                    option_list.children[i].insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to matched option
                    console.log("Time Off: Auto selected correct answer.");
                }
                if(option_list.children[i].textContent == agesCorrectAns){ //if there is an option which is matched to an array answer
                    option_list.children[i].setAttribute("class", "option correct"); //adding green color to matched option
                    option_list.children[i].insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to matched option
                    console.log("Time Off: Auto selected correct answer.");
                }
                if(option_list.children[i].textContent == profitCorrectAns){ //if there is an option which is matched to an array answer
                    option_list.children[i].setAttribute("class", "option correct"); //adding green color to matched option
                    option_list.children[i].insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to matched option
                    console.log("Time Off: Auto selected correct answer.");
                }
             }
                for(i=0; i < allOptions; i++){
                option_list.children[i].classList.add("disabled"); //once user select an option then disabled all options
            }
            next_btn.classList.add("show"); //show the next button if user selected any option
        }
    }
}

function startTimerLine(time){
     counterLine = setInterval(timer, 29);
    function timer(){
        time += 1; //upgrading time value with 1
        time_line.style.width = time + "px"; //increasing width of time_line with px by time value
        if(time > 549){ //if time value is greater than 549
            clearInterval(counterLine); //clear counterLine
        }
    }
}

function queCounter(index){
    //creating a new span tag and passing the question number and total question
    let totalQueCounTag = '<span><p>'+ index +'</p> of <p>'+ pipes.length +'</p> Questions</span>';
    bottom_ques_counter.innerHTML = totalQueCounTag;  //adding new span tag inside bottom_ques_counter
}
function showResult(){
    start_btn.classList.remove("activeStart"); //hide star_btn
    info_box.classList.remove("activeInfo"); //hide info box
    quiz_box.classList.remove("activeQuiz"); //hide quiz box
    result_box.classList.add("activeResult"); //show result box

   const scoreText = result_box.querySelector(".score_text");
    if (userScore > 3){ // if user scored more than 3
        //creating a new span tag and passing the user score number and total question number
        let scoreTag = `<span>and congrats! 🎉, You got <p> ${userScore} </p> out of <p> ${pipes.length} </p></span>`;
        scoreText.innerHTML = scoreTag;  //adding new span tag inside score_Text
    }
    else if(userScore > 1){ // if user scored more than 1
        let scoreTag = '<span>and nice 😎, You got <p>'+ userScore +'</p> out of <p>'+ pipes.length +'</p></span>';
        scoreText.innerHTML = scoreTag;
    }
    else{ // if user scored less than 1
        let scoreTag = '<span>and sorry 😐, You got only <p>'+ userScore +'</p> out of <p>'+ pipes.length +'</p></span>';
        scoreText.innerHTML = scoreTag;
    }
}
