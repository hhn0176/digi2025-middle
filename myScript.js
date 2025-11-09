document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("main");

    const menuItems = document.querySelectorAll('#myMenu li');
    
    menuItems.forEach(item => {
        item.addEventListener('click', (event) => {
            const targetId = event.target.textContent.trim();
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    const imgPaths = [
        "img/나이팅게일.png",
        "img/나이팅게일2.jpg",
        "img/나이팅게일3.png",
        "img/나이팅게일4.png",
        "img/세종대왕.png",
        "img/세종대왕2.png",
        "img/아인슈타인.png",
        "img/아인슈타인2.png",
        "img/아인슈타인3.png",
        "img/아인슈타인4.png",
        "img/안중근.png",
        "img/안중근2.png",
        "img/안중근3.png",
        "img/잔다르크.png",
        "img/잔다르크1.png",
        "img/잔다르크2.png",
        "img/흥선대원군.png",
        "img/흥선대원군2.png",
        "img/흥선대원군3.png"
    ];

    const imgs = [];
    imgPaths.forEach(src => {
        const img = document.createElement("img");
        img.src = src;
        img.classList.add("floatImg");
        container.appendChild(img);
        imgs.push(img);
    });

    function resetImage(img) {
        const screenW = window.innerWidth;
        const screenH = window.innerHeight;

        const randomW = 6 + Math.random() * 20;
        const maxX = 100 - randomW;
        const randomX = Math.random() * maxX;
        const randomY = screenH + Math.random() * screenH;
        const randomSpeed = 0.2 + Math.random() * 0.3;
        
        
        img.style.left = `${randomX}vw`;
        img.style.top = `${randomY}px`;
        img.style.width = `${randomW}vw`;
        img.dataset.speed = randomSpeed;
    }

    imgs.forEach(img => {
        img.onload = () => resetImage(img);
        if (img.complete) resetImage(img);
    });

    function animate() {
        imgs.forEach(img => {
            const y = parseFloat(img.style.top);
            const speed = parseFloat(img.dataset.speed);
            img.style.top = `${y - speed}px`;

            if (y + img.height < 0) {
                resetImage(img);
            }
        });
        requestAnimationFrame(animate);
    }

    animate();
});