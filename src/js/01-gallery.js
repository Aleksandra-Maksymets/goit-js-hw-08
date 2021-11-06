// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

// Imports library SimpleLightbox
import SimpleLightbox from 'simplelightbox';
// Imports CSS styles from the library SimpleLightbox
import 'simplelightbox/dist/simple-lightbox.min.css';

// Gains reference of the container
const galleryListRef = document.querySelector('.gallery');

// Renders gallery cards
const galleryMarkup = galleryItems
  .map(({ preview, original, description }) => {
    return `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`;
  })
  .join('');

// Adds created markup to the 01-gallery.html

galleryListRef.insertAdjacentHTML('afterbegin', galleryMarkup);

// All eventListeners and functions are created through SimpleLightbox library
// Create new inctance of SimpleLightbox
const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
  captionPosition: 'bottom',
});
console.log(galleryItems);
