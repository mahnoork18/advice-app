//Get advcie id
//getadvice text
let adviceText = document.querySelector('#advice');
let adviceNum = document.querySelector('#id');
let adviceBtn = document.querySelector('#cta');

function getAdvice(){
    fetch('https://api.adviceslip.com/advice').then(response =>{
        return response.json();
    }).then(adviceData => {
        const adviceId = adviceData.slip;
        adviceText.innerHTML = adviceId.advice;
        // const adviceNum = adviceData.slip[0];
        // adviceNum.innerHTML = adviceId.slip;
        

    }).catch(err => {
        adviceText.innerHTML = "Error";
    })
}

window.onload = () =>{
    getAdvice();
};
adviceBtn.addEventListener('click', () =>{
    getAdvice();
});

   
