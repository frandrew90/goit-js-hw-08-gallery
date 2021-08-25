const galleryItems = [
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg',
    description: 'Hokkaido Flower',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
    description: 'Container Haulage Freight',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
    description: 'Aerial Beach View',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
    description: 'Flower Blooms',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
    description: 'Alpine Mountains',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
    description: 'Mountain Lake Sailing',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
    description: 'Alpine Spring Meadows',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
    description: 'Nature Landscape',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
    description: 'Lighthouse Coast Sea',
  },
];

// Разбей задание на несколько подзадач:

// Создание и рендер разметки по массиву данных galleryItems из app.js и
// предоставленному шаблону.
// Реализация делегирования на галерее ul.js - gallery и получение url большого
// изображения.
// Открытие модального окна по клику на элементе галереи.
// Подмена значения атрибута src элемента img.lightbox__image.
// Закрытие модального окна по клику на кнопку button[data-action="close-lightbox"].
// Очистка значения атрибута src элемента img.lightbox__image.Это необходимо для
// того, чтобы при следующем открытии модального окна, пока грузится изображение,
//   мы не видели предыдущее.

const refs = {
  list: document.querySelector('.js-gallery'),
  lightBox: document.querySelector('.js-lightbox'),
  // lightBoxOverlay: document.querySelector('.lightbox__overlay'),
  // lightBoxContent: document.querySelector('.lightbox__content'),
  contentImg: document.querySelector('.lightbox__image'),
  closeButton: document.querySelector('.lightbox__button'),
};

const gallaryList = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<li class="gallery__item">
    <a
      class="gallery__link"
      href="${original}"
    >
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </a>
  </li>`
  )
  .join('');

// console.log(gallaryList);

refs.list.insertAdjacentHTML('beforeend', gallaryList);

// console.log(refs.list);

refs.list.addEventListener('click', onImgClick);

function onImgClick(e) {
  e.preventDefault();
  // const listItem = e.target;
  // if (listItem.classList.contains('gallery__item'))
  if (e.target !== e.currentTarget) {
    refs.lightBox.classList.add('is-open');
    // createOriginalImg()
    // refs.contentImg.src=
    refs.closeButton.addEventListener('click', onCloseBtn);
    window.addEventListener('keydown', onEscDown);
    // e.target.src = e.target.dataset.source;
    // console.log(e.target.src);
    // console.log(e.target.dataset.source);
    refs.contentImg.src = e.target.dataset.source;
  }
  // console.log(refs.contentImg.src);
}

// refs.closeButton.addEventListener('click', onCloseBtn);
function onCloseBtn(e) {
  closeLightBox();
  removeCloseBtnListener();
  removeEscListener();
}

function onEscDown(e) {
  if (e.code === 'Escape') {
    closeLightBox();
    removeCloseBtnListener();
    removeEscListener();
  }
}

const closeLightBox = function (e) {
  refs.lightBox.classList.remove('is-open');
  refs.contentImg.src = '';
};

const removeEscListener = function (e) {
  window.removeEventListener('keydown', onEscDown);
};
const removeCloseBtnListener = function (e) {
  refs.closeButton.removeEventListener('click', onCloseBtn);
};
