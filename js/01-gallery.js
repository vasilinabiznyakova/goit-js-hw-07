import { galleryItems } from './gallery-items.js';
// Change code below this line

// Создание и рендер разметки по массиву данных galleryItems и предоставленному шаблону элемента галереи.
// Ссылка на оригинальное изображение должна храниться в data-атрибуте source на элементе <img>, и указываться в href ссылки. Не добавляй другие HTML теги или CSS классы кроме тех, что есть в этом шаблоне.
// Обрати внимание на то, что изображение обернуто в ссылку, а значит при клике по умолчанию пользователь будет перенаправлен на другую страницу. Запрети это поведение по умолчанию.

const divToContainGallery = document.querySelector('.gallery');

const createLinksFromArray = (array) =>
    array.reduce((acc, {description, original,preview}) => acc + `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`, ''
    );

const galleryMarkup = createLinksFromArray(galleryItems);



divToContainGallery.insertAdjacentHTML('beforeend', galleryMarkup);

// console.log(galleryMarkup);

divToContainGallery.addEventListener("click", onGalleryItemClick);

function onGalleryItemClick(event) {

  event.preventDefault();

  const activeElement = event.target;
  const bigImgUrl = activeElement.dataset.source;


  if (activeElement.nodeName !== "IMG") {
    return;
  }

  const modal = basicLightbox.create(`<img src="${bigImgUrl}">`, {
    onShow: (modal) => {
       divToContainGallery.addEventListener("keydown",onPressEscape);
    },
    onClose: (modal) => {
       divToContainGallery.removeEventListener("keydown",onPressEscape);
    }   
  });

  modal.show()
  
    function onPressEscape ({code}) {
      if (code !== "Escape") {
        return
      }
      modal.close();
    }

  }
   

