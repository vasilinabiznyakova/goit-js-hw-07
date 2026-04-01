function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const input = document.querySelector('#controls input');
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const boxes = document.querySelector('#boxes');

createBtn.addEventListener('click', () => {
  const amount = Number(input.value);

  if (amount < 1 || amount > 100) return;

  createBoxes(amount);
  input.value = '';
});

destroyBtn.addEventListener('click', destroyBoxes);

function createBoxes(amount) {
  destroyBoxes();

  let size = 30;
  const elements = [];

  for (let i = 0; i < amount; i += 1) {
    const box = document.createElement('div');
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();

    elements.push(box);
    size += 10;
  }

  boxes.append(...elements);
}

function destroyBoxes() {
  boxes.innerHTML = '';
}