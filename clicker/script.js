
const body = document.querySelector('body');

body.addEventListener('click', (e) => {
    const circleElement = document.createElement('div');
    circleElement.textContent = "Hie!";
    const color = ['#ff6b6b', '#feca57', '#48dbfb', '#1dd1a1', '#5f27cd', '#c8d6e5'];
    const randomColor = color[Math.floor(Math.random() * color.length)];
    circleElement.style.backgroundColor = randomColor;
    circleElement.classList.add('circle');
    circleElement.style.left = `${e.clientX-25}px`;
    circleElement.style.top = `${e.clientY-25}px`;
    body.appendChild(circleElement);

    setTimeout(() => {
        circleElement.remove();
    }   , 5000);
});
