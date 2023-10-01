// Add imports above this line
import { galleryItems } from './gallery-items';

// Change code below this line
import SimpleLightbox from 'simplelightbox';
// Import suplimentar de stil
import 'simplelightbox/dist/simple-lightbox.min.css';

document.addEventListener('DOMContentLoaded', function () {
  const galleryList = document.querySelector('.gallery');
  galleryItems.forEach(item => {
    const galleryItem = document.createElement('li');
    galleryItem.style.listStyleType = 'none';
    galleryItem.innerHTML = `<a href="${item.original}">
  <img src = "${item.preview}" alt="${item.description}"> </a>`;
    galleryList.appendChild(galleryItem);
  });

  new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionPosition: 'bottom',
    captionDelay: 250,
  });
});
