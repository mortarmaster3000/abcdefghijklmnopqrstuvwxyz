document.getElementById('epstein').addEventListener('click', () => {
    const rain = () => {
        const img = document.createElement('img');
        img.src = 'epstein.jpg';
        img.style.position = 'absolute';
        img.style.width = '100px';
        img.style.height = '100px';
        img.style.borderRadius = '50%';
        img.style.left = Math.random() * (window.innerWidth - 100) + 'px';
        img.style.top = '-100px';
        img.style.zIndex = '10';
        document.body.appendChild(img);

        let pos = -100;
        let rotation = Math.random() * 360;
        const fall = () => {
            pos += 3;
            rotation += 5;
            img.style.top = pos + 'px';
            img.style.transform = `rotate(${rotation}deg)`;
            if (pos < window.innerHeight) {
                requestAnimationFrame(fall);
            } else {
                img.remove();
            }
        };
        fall();
    };

    setInterval(rain, 100);
});

document.getElementById('epstein2').addEventListener('click', () => {
    const rain = () => {
        const img = document.createElement('img');
        img.src = 'epstein.jpg';
        img.style.position = 'absolute';
        img.style.width = '100px';
        img.style.height = '100px';
        img.style.borderRadius = '50%';
        img.style.left = Math.random() * (window.innerWidth - 100) + 'px';
        img.style.top = '-100px';
        img.style.zIndex = '10';
        document.body.appendChild(img);

        let pos = -100;
        let rotation = Math.random() * 360;
        const fall = () => {
            pos += 3;
            rotation += 5;
            img.style.top = pos + 'px';
            img.style.transform = `rotate(${rotation}deg)`;
            if (pos < window.innerHeight) {
                requestAnimationFrame(fall);
            } else {
                img.remove();
            }
        };
        fall();
    };

    setInterval(rain, 10);
});