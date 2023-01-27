const quizData = [
    {
        question: 'How old is Florin?',
        a: '10',
        b: '17',
        c: '25',
        d: '50',
        coreect: 'b'
    },
    {
        question: 'What is the most used programming language in 2018?',
        a: 'Java',
        b: 'C+',
        c: 'Python',
        d: 'Javascript',
        coreect: 'd'
    },
    {
        question: 'Who is he President of US?',
        a: 'Trump',
        b: 'Obama',
        c: 'Sathya',
        d: 'Modi',
        coreect: 'a'
    },
    {
        question: 'What does CSS stand for?',
        a: 'Hyper Markup Lamnguage',
        b: 'Jason object Notation',
        c: 'Cascading style sheet',
        d: 'helicapter Terminal motorboats',
        coreect: 'c'
    },
]; 

 const questionEl = document.getElementById("question");
 const a_text = document.getElementById("a_text");
 const b_text = document.getElementById("b_text");
 const c_text = document.getElementById("c_text");
 const d_text = document.getElementById("d_text");
 const submitBtn = document.getElementById("submit");

 const currentQuiz = 0;
 let answer = undefined;
 let score = 0;

 loadQuiz();

 function loadQuiz() {
    const currentQuizData = quizData[currentQuiz];
    questionEl.innerText = currentQuizData.question;
    
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
     
    // currentQuiz++;
 }

 function getSelected() {
    const answersEls = document.querySelectorAll(".answer");

    answersEls.forEach((answerEl) => {
    //    console.log(answer.value);
    if (answerEl.checked) {
       return answerEl.id;
    }
    })
 }

 submitBtn.addEventListener("click", () =>  {
    currentQuiz++;

    if(currentQuiz < quizData.length) {
        loadQuiz();
    }else {
        alert("You are finished it - Congratulastions");
    }
    


 });
 
