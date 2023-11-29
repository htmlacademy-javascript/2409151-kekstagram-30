import { createArrayOfPosts } from './data.js';

const picturesContainer = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');
const arrayOfPhotos = createArrayOfPosts();
const documentFragment = document.createDocumentFragment();

arrayOfPhotos.forEach((post) => {
  const linkPicture = pictureTemplate.cloneNode(true);
  const pictureImg = linkPicture.querySelector('.picture__img');
  pictureImg.src = post.url;
  pictureImg.alt = post.description;
  const pictureInfo = linkPicture.querySelector('.picture__info');
  const pictureComments = pictureInfo.querySelector('.picture__comments');
  const pictureLikes = pictureInfo.querySelector('.picture__likes');
  pictureComments.textContent = post.comments.length;
  pictureLikes.textContent = post.likes;
  documentFragment.appendChild(linkPicture);
});
picturesContainer.appendChild(documentFragment);
