const input = document.getElementById('image-url');
const addBtn = document.getElementById('add-image-btn');
const removeBtn = document.getElementById('remove-image-btn');
const gallery = document.getElementById('gallery');

let selectedImage = null;

// Agregar imagen
addBtn.addEventListener('click', () => {
  const url = input.value.trim();
  if (url) {
    const img = document.createElement('img');
    img.src = url;
    img.alt = "Imagen de galería";
    img.addEventListener('click', () => selectImage(img));
    gallery.appendChild(img);
    input.value = '';
  }
});

// Seleccionar imagen
function selectImage(img) {
  if (selectedImage) {
    selectedImage.classList.remove('selected');
  }
  selectedImage = img;
  selectedImage.classList.add('selected');
}

// Eliminar imagen
removeBtn.addEventListener('click', () => {
  if (selectedImage) {
    gallery.removeChild(selectedImage);
    selectedImage = null;
  }
});

// Atajo de teclado: Enter para agregar
input.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    addBtn.click();
  }
});
