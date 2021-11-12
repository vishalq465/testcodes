const quizDB=[
    {
        question: "Q1: what",
        a: "aa",
        b: "bb",
        c: "cc",
        d: "dd",
        ans: "ans2"
    },
    {
        question: "Q2: whaaat",
        a: "aaaa",
        b: "bbaa",
        c: "caac",
        d: "ddaa",
        ans: "ans1"
    },
    {
        question: "Q3: wssshat",
        a: "assa",
        b: "ssbb",
        c: "cssc",
        d: "ddss",
        ans: "ans3"
    },
    {
        question: "Q4: wdfahat",
        a: "aafdasa",
        b: "bfadsfb",
        c: "cafa",
        d: "dafad",
        ans: "ans2"
    },
    {
        question: "Q5: whasdgaat",
        a: "aadsafad",
        b: "bssffffb",
        c: "cssssc",
        d: "ddffff",
        ans: "ans2"
    }
];

const question=document.querySelector('.question');
const option1=document.querySelector('#option1');
const option2=document.querySelector('#option2');
const option3=document.querySelector('#option3');
const option4=document.querySelector('#option4');
const submit=document.querySelector('#sumbit');
const answers=document.querySelectorAll('.answer');
const showScore=document.querySelector('#showScore');
let questionCount=0;
let score=0;
const loadQuestion=()=>{
    const questionList=quizDB[questionCount];
    question.innerText=questionList.question;
    option1.innerText=questionList.a;
    option2.innerText=questionList.b;
    option3.innerText=questionList.c;
    option4.innerText=questionList.d;
}
loadQuestion();
const getCheckAnswer=()=>{
    let answer;
    answers.forEach((curAnsElem) => {
        if (curAnsElem.checked){
            answer=curAnsElem.id;
        }
    });
    return answer;
};
document.getElementById("submit").addEventListener("click", myFunction);
function myFunction() {
    const checkedAnswer=getCheckAnswer();
    console.log(checkedAnswer);
    if (checkedAnswer==quizDB[questionCount].ans){
        score++
    };
    questionCount++;
    document.querySelector('input[name="answer"]:checked').checked = false;
    if (questionCount<quizDB.length){
        loadQuestion();
    }else{

        document.getElementById("showScore").innerHTML="<h3>You socred:" + score +"/"+quizDB.length+"</h3>";
        
        showScore.classList.remove('scoreArea');
    }
}