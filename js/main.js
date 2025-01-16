const card = document.querySelector('[data-card]');
const gloss = document.querySelector('[ data-gloss]');

// rotate3D(x, y, z, deg)
card.addEventListener('mousemove', (e) => {
    // clientX and clientY properties define the coordinates of the mouse pointer, relative to the browser's visible viewport
    const pointerX = e.clientX;
    const pointerY = e.clientY;

    const cardRect = card.getBoundingClientRect();

    const halfWidth = cardRect.width / 2;
    const halfHeight = cardRect.height / 2;

    const cardCenterX = cardRect.left + halfWidth;
    const cardCenterY = cardRect.top + halfHeight;

    // calculating the mouse cursor coordinates relative to the card center in deltaX and deltaY
    const deltaX = pointerX - cardCenterX;
    const deltaY = pointerY - cardCenterY;

    // calculating the dynamic values for the X and Y arguments of the rotate3D property
    // rotate3D(x, y, z, deg)
    const rX = deltaY / halfHeight;
    const rY = deltaX / halfWidth;

    // calculating the distance from the card center with Pythagorean theorem
    const distanceFromCardCenter = Math.sqrt(Math.pow(deltaX, 2) + Math.pow(deltaY, 2));

    // calculating the maximum distance from the card center and the furthest edge
    const maximumDistance = Math.max(halfWidth, halfHeight);

    const degrees = (distanceFromCardCenter * 5) / maximumDistance;
    // we multiply it to get at least 5 degree angle, since without it the value could be very small
    card.style.transform = `perspective(400px) rotate3D(${-rX}, ${rY}, 0, ${degrees}deg)`;

    // gloss effect
    gloss.style.transform = `translate(${-rY * 100}%, ${-rX * 100}%) scale(2)`;
    // we use ry for X and rx for Y values because we want gloss effect to mirror the mouse movement
    gloss.style.opacity = (distanceFromCardCenter * 0.7) / maximumDistance;

});

card.addEventListener('mouseleave', () => {
    card.style = null;

    gloss.style.opacity = null;
});
