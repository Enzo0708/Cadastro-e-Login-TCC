let currentIndex = 0;
const images = document.querySelectorAll('.carousel-container img');
const totalImages = images.length;

document.querySelector('.arrow_forward_ios').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % totalImages;
    updateCarousel();
});

document.querySelector('.arrow_back_ios').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + totalImages) % totalImages;
    updateCarousel();
});

function updateCarousel() {
    const offset = -currentIndex * 480; // Largura de uma imagem
    images.forEach((img) => {
        img.style.transform = `translateX(${offset}px)`;
    });
}
