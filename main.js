//Get advcie id
//getadvice text
let adviceText = document.querySelector('#advice');
let adviceBtn = document.querySelector('#cta');

adviceBtn.addEventListener('submit', () =>{
    getAdvice();
});
function getAdvice(){
    fetch('https://api.adviceslip.com/advice').then(response =>{
        return response.json();
    }).then(adviceData => {
        const advice_Text = adviceData.slip;
        adviceText.innerHTML = advice_Text.advice;
        // const adviceNum = adviceData.slip[0];
        // adviceNum.innerHTML = adviceId.slip;
        const advice_Id = document.querySelector("#advice_id");
const advice = adviceData.slip;
advice_Id.innerHTML = `Advice #${advice.id}`;
        

    }).catch(err => {
        adviceText.innerHTML = "Error";
    })
};

