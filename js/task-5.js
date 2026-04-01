function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const button = document.querySelector('.change-color');
const body = document.querySelector('body');
const colorSpan = document.querySelector('.color');

const handleClick = event => {
  const color = getRandomHexColor();
  body.style.backgroundColor = color;
  colorSpan.textContent = color; 
  
};

button.addEventListener('click', handleClick);