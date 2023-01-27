const questions = [
    {
        'Quastion': "Which country is poor country ?",
        'a': "India",
        'b': "Pakistan",
        'c': "Srilanka",
        'correct': "b"
    },
    {
        'Question': "World highest population is ?",
        'a': "India",
        'b': "Pakistan",
        'c': "Srilanka",
        'correct': "a"
    },
    {
        'Question': "Best Economic country ?",
        'a': "India",
        'b': "Pakistan",
        'c': "Srilanka",
        'correct': "a"
    },
    {
        'Question': "Tata head office in ?",
        'a': "India",
        'b': "Pakistan",
        'c': "Srilanka",
        'correct': "a",
    }


]
let index = 0;
let total = questions.length;
let right = 0,
    wrong = 0;

const queBox = document.getElementById("queBox"); // first we should call this by DOM
const optionsInput = document.querySelectorAll('.options'); // by this we are pulling the Q-Options from HTML throght QuerySelecterAll
const loadQuestion = () => {
    if (index === total) {
        return endQuiz()
    }

    reset()
    const data = questions[index]
    queBox.innerText = ` ${index + 1}) ${data.Quastion}`;
    optionsInput[0].nextElementSibling.innerText = data.a;
    optionsInput[1].nextElementSibling.innerText = data.b;
    optionsInput[2].nextElementSibling.innerText = data.c;
    optionsInput[3].nextElementSibling.innerText = data.d;

}
// Will put the submit login here
const submitQuiz = () => {
    const data = questions[index];
    const ans = getAnswer()
    // console.log(ans, data.correct)
    if (ans == data.correct) { 
        right++;
    } else { 
        wrong ++;
    }
    index++; // OTHER QUESTIONS RELOADING HERE BY THIS
    loadQuestion();
    return;
}
const getAnswer = () => {
    let answer;
    optionsInput.forEach(
        (input) => {
            if (input.checked) {
                answer = input.value;
            }

        }
    )
    return answer;
}

const reset = () => {
    optionsInput.forEach(
        (input) => {
            input.checked = false
        }
    )
}

const endQuiz = () => {
    document.getElementById("box").innerHTML = `
    <div style="text-align:center">
       <h3> Thanks for playing the Quiz </h3> 
       <h2> ${right} / ${total} are correct </h2>
       </div>
       `
}

loadQuestion();