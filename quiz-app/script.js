const quizData = [
    {
        question: "How did Harry Potter's parents die?",
        a: "Killed by a Hyppogriff",
        b: "Killed in a broom accident",
        c: "Killed by the dark lord",
        d: "Shot by a scared muggle",
        correct: "c",
    },
    {
        question: "What position does Harry play on his Quidditch team?",
        a: "Keeper",
        b: "Seeker",
        c: "Beater",
        d: "Chaser",
        correct: "b",
    },
    {
        question: "Why doesn't Draco like Harry?",
        a: "He did not share his food with him",
        b: "He did not accept his handshake",
        c: "He mocked him and his father",
        d: "He tripped over him",
        correct: "b",
    },
    {
        question: "What year did Harry defeat the Basilisk?",
        a: "First",
        b: "Second",
        c: "Third",
        d: "Forth",
        correct: "b",
    },
    {
        question: "Which houses did the sorting hat consider putting Harry in?",
        a: "Hufflepuff and Gryffindor",
        b: "Slytherin and Hufflepuff",
        c: "Gryffindor and Slytherin",
        d: "Gryffindor and Ravenclaw",
        correct: "c",
    },
    {
        question: "In the first book, what creature was released in the girl's lavatory?",
        a: "Dragon",
        b: "Three-headed dog",
        c: "Basilisk",
        d: "Troll",
        correct: "d",
    },
    {
        question: "What was Luna Lovegood's Patronus?",
        a: "A bunny",
        b: "A cat",
        c: "A badger",
        d: "A fox",
        correct: "a",
    },
    {
        question: "What was Lord Voldemort's original name?",
        a: "Volten Riddle",
        b: "Timothy Riddle",
        c: "Vixen Riddle",
        d: "Tom Riddle",
        correct: "d",
    },
    {
        question: "What did Hermione use to get to all her classes in the third book?",
        a: "Time Turner",
        b: "Time Mover",
        c: "Time Machine",
        d: "Time Teaser",
        correct: "a",
    },
    {
        question: "What sacrifice did Pettigrew use to bring Voldemort to human form?",
        a: "His hand",
        b: "His eye",
        c: "His foot",
        d: "His ear",
        correct: "a",
    },
];

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {
    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer

    answerEls.forEach(answerEl => {
        if(answerEl.checked){
            answer = answerEl.id
        }
    })

    return answer
}

    submitBtn.addEventListener('click', () => {
        const answer = getSelected()

        if(answer) {
            if(answer === quizData[currentQuiz].correct){
                score++
        } 
        
        currentQuiz++

        if(currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            quiz.innerHTML = ` 
                <h2>You answered ${score}/${quizData.length} questions correctly</h2>

                <button onclick="location.reload()">Reload</button>
            `
        }
    }
})





