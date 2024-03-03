// sellecting all required element 
const info_Box = document.querySelector(".info_Box");
const continue_btn = document.querySelector(".buttons .restart");
const quiz_box =document.querySelector(".quiz_box");
const result_box =document.querySelector(".result_box");
const option_list =document.querySelector(".option_list");
const time_line =document.querySelector("header .time_line");
const time_text =document.querySelector(".timer.time_left_text");
const timeCount =document.querySelector(".timer .timer_sce");
 // Show info box 
 info_Box.classList.add("activeInfo"); 
  // if continueQuiz button clicked 
  continue_btn.onclick = ()=>{
    info_Box.classList.remove("activeInfo"); // hide info box 
    quiz_box.classList.add("activeQuiz"); // show Quiz 
    showQuetions(0);
    queCounter(1);
    startTimer(10);
    startTimerLine(0);

  }
  let timevalue =10;
  let que_counter =0;
  let que_numb =1; 
  let userScore =0;
  let counter;
  let counterLine ;
  let widthValue =0;
