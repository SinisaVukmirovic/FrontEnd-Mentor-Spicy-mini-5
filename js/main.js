const card = document.querySelector('main');

const tiltMove = (x, y) => `perspective(500px) rotateX(${x}deg) rotateY(${y}deg)`;

const height = card.clientHeight;
const width = card.clientWidth;

card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const multiplierX = 4;
    const multiplierY= 2;

    const xRotate = - multiplierX * ((y - width / 6) / width * 2.25);
    const yRotate = multiplierY * ((x - height / 2) / height);

    card.style.transform = tiltMove(xRotate, yRotate);
})

card.addEventListener('mouseout', () => card.style.transform = tiltMove(0, 0));