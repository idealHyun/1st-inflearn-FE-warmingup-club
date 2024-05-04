const quizList = [
    {
        question: '2+2는?',
        choice: ['1', '2', '3', '4'],
        answer: '4'
    },
    {
        question: '3+3은?',
        choice: ['5', '6', '7', '8'],
        answer: '6'
    },
    { 
        question: '8/2는?',
        choice: ['2', '4', '6', '8'],
        answer: '4'
    }
];

const body= document.querySelector('body');
const quizBtns = document.querySelectorAll('.quiz-content');
const nextBtn= document.querySelector('.next-btn');
const restartBtn = document.querySelector('.restart-btn');
const quizTitle = document.querySelector('.quiz-title');

let quizIndex = 0;

document.addEventListener('DOMContentLoaded', () => quizUpdate());

quizBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        if(e.target.textContent===quizList[quizIndex].answer){
            body.classList.add('correct');
        } else{
            body.classList.add('wrong');
        }
        quizBtns.forEach((btn) => {
            btn.disabled = true;
        });
        nextBtn.classList.remove('hidden');
})});

nextBtn.addEventListener('click', () => {
    body.classList.remove('correct');
    body.classList.remove('wrong');
    nextBtn.classList.add('hidden');
    quizIndex++;
    if(quizIndex>=quizList.length){
        quizTitle.textContent = '퀴즈 끝!';
        quizBtns.forEach((btn) => {
            btn.classList.add('hidden');
        });
        restartBtn.classList.remove('hidden');
    } else{
        quizUpdate();
    }
});

restartBtn.addEventListener('click', () => {
    quizIndex = 0;
    quizUpdate();
    restartBtn.classList.add('hidden');
    quizBtns.forEach((btn) => {
        btn.classList.remove('hidden');
    });
});

function quizUpdate(){
    quizTitle.textContent = quizList[quizIndex].question;
    quizBtns.forEach((btn, i) => {
        btn.textContent = quizList[quizIndex].choice[i];
        btn.disabled = false;
    });
}