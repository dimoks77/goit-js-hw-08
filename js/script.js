import { images } from './images.js';

let instance;

function modalWindow(imageUrl, imageDesc) {
  instance = basicLightbox.create(
    `
          <div class="modal">
            <img src="${imageUrl}">
            <div class="desc">${imageDesc}</div>
          </div>
      `,
    {
      onShow: (instance) => {
        document.addEventListener("keydown", keydownListener);
      },
      onClose: (instance) => {
        document.removeEventListener("keydown", keydownListener);
      }
    }
  );
  instance.show();
}

function keydownListener(event) {
  if (event.key === "Escape" || event.key === "Esc" || event.keyCode === 27) {
      instance.close();
  }
}

let gallery = document.querySelector(".gallery");

let imageElements = images.map(function (image) {
  let newImage = document.createElement("img");
  newImage.src = image.preview;
  newImage.alt = image.description;
  // console.log(newImage.alt);
  let li = document.createElement("li");
  li.appendChild(newImage);
  return li;
});

gallery.append(...imageElements);

gallery.addEventListener("click", (e) => {
  if (e.target.tagName === "IMG") {
    let selectedImage = images.find((img) => img.preview === e.target.src);
    
    if (selectedImage) {
      modalWindow(selectedImage.original, selectedImage.description);
    }
  }
});
  







