const categories = document.querySelectorAll('#categories .item');
const categoriesQty = categories.length;

console.log('Number of categories:', categoriesQty);

const items = document.querySelectorAll('#categories .item');

items.forEach(el => {
  const title = el.querySelector('h2').textContent;
  console.log('Category:', title);

  const elements = el.querySelectorAll('li').length;
  console.log('Elements:', elements);
});
