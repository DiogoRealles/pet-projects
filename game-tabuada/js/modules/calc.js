export default function calc(){
  
  const button = document.querySelector('[data-js="responseButton"]');
  const input = document.querySelector('[data-js="responseInput"]');
  const responseStatus = document.querySelector('[data-js="responseStatus"]');
  let pointsCorrect = document.querySelector('[data-js="pointsCorrect"]');
  let pointsIncorrect = document.querySelector('[data-js="pointsIncorrect"]');

  let question;

  button.addEventListener('click', (event) => {
    event.preventDefault();
    
    if(input.value === ''){
      alert('Digite um valor para responder a equação! 👆')
    } else {

      const responseValue = +input.value;
  
      if(responseValue == question){
        responseStatus.innerHTML = 'Acertô Mizeravi 😎';
        responseStatus.classList.add('correct');
        responseStatus.classList.remove('incorrect');
        pointsCorrect.innerHTML = (+pointsCorrect.innerHTML + 1);
      } else {
        responseStatus.innerHTML = 'Errô Disgraça 😡';
        responseStatus.classList.add('incorrect');
        responseStatus.classList.remove('correct');
        pointsIncorrect.innerHTML = (+pointsIncorrect.innerHTML + 1);
      }
      
      input.value = '';
      input.focus();
      generateCalculate();
    }
  });

  function generateCalculate(){
    let num1 = document.querySelector('[data-js="num1"]');
    let num2 = document.querySelector('[data-js="num2"]');
    num1 = num1.innerHTML = generateNumberRandom(),
    num2 = num2.innerHTML = generateNumberRandom()
    
    question = Number(num1 * num2);
  }

  window.addEventListener('load', () => {
    generateCalculate();
  });

  function generateNumberRandom(){
    return Math.floor(Math.random() * 11);
  }
  
  // function validDigits(text) {
  //   return text.replace(/[^0-9,]/g, "");
  // }
}