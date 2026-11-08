
const images = [
    'heart.gif',
    '107685_0.jpg',
    '107688_0.jpg',
    '107687_0.jpg',
    '107693_0.jpg',
    '107689_0.jpg',
    '107686_0.jpg',
    '107694_0.jpg',
    '107690_0.jpg',
    '107692_0.jpg'
];

let currentSlideIndex = 0;

window.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        document.getElementById('curtainLeft').classList.add('open');
        document.getElementById('curtainRight').classList.add('open');
    }, 500);
});

function openSlideshow() {
    switchPage('page1', 'page2');
    showSlide(currentSlideIndex);
}

function showSlide(index) {
    const imgElement = document.getElementById('sliderImage');
    const counterElement = document.getElementById('slideCounter');
    
    imgElement.src = images[index];
    counterElement.innerText = `${index + 1}`;
}

function nextSlide() {
    currentSlideIndex++;
    
    if (currentSlideIndex < images.length) {
        showSlide(currentSlideIndex);
    } else {
        switchPage('page2', 'page3');
    }
}

function switchPage(fromPageId, toPageId) {
    document.getElementById(fromPageId).classList.remove('active');
    document.getElementById(toPageId).classList.add('active');
}

function sayLove() {
    alert('ชาไบก็รักแอนดริวมากๆๆๆน้าาา รักสุดๆๆ รักที่สุด รักทุกอย่างที่เป็นแอนดริว รักตั้งแต่วันแรกจนวันนี้และตลอดไปไม่มีวันหายไปไหนนน จะอยู่กับแอนดริวตรงนี้!❤️');
}

