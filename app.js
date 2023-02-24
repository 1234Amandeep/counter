const value = document.getElementById('value');
const btns = document.querySelector('.button-container');

btns.addEventListener('click', (e) => {
  const targetedBtn = e.target;
  if(targetedBtn.classList.contains('increase') )
  {
    value.innerText = Number(value.innerText) + 1; 
  }
  else if(targetedBtn.classList.contains('decrease'))
  {
    value.innerText = Number(value.innerText) - 1;
  }
  else
  {
    value.innerText = 0;
  }
  colorChanger();
})

const colorChanger = () => {
  if(Number(value.innerText) > 0)
  {
    value.style.color = 'green';
  }
  else if(Number(value.innerText) < 0)
  {
    value.style.color = 'red';
  }
  else {
    value.style.color = 'black'
  }
}















































