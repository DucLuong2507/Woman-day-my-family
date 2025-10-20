window.addEventListener('load', () => {
    const messages = [
        
        "Happy Vietnamese Women'Day!",
        " Nhân ngày Phụ nữ Việt Nam 20/10, con kính chúc bà luôn mạnh khỏe, sống vui, sống lâu bên con cháu. Bà mãi là ngọn lửa ấm áp, là điểm tựa yêu thương của cả gia đình. Con yêu bà thật nhiều! ❤️",
        "Nhân ngày 20/10, chúc các bác Én và bác Dinh luôn vui vẻ, hạnh phúc và trẻ trung. Chúc bác có thật nhiều sức khỏe để mãi là người phụ nữ đảm đang, dịu dàng và là tấm gương cho con cháu noi theo. 🌼",
        "Nhân ngày Phụ nữ Việt Nam, con gửi đến mẹ ngàn lời yêu thương nhất. Chúc mẹ luôn mạnh khỏe, hạnh phúc và mãi nở nụ cười thật tươi. Cảm ơn mẹ đã hy sinh và yêu thương con vô điều kiện.💕",
        "Ngày 20/10, chúc cô Hoa và cô Quỳnh luôn xinh đẹp, vui tươi và gặp nhiều may mắn trong cuộc sống. Cảm ơn cô vì luôn quan tâm, yêu thương và là người truyền cảm hứng cho con cháu. 💖" ,
        "🌷 Chúc chị Chi và chị My 20/10 thật vui vẻ, xinh đẹp, luôn hạnh phúc và thành công trong cuộc sống, bình an và được yêu thương mỗi ngày!",
        "Chúc em Nhi ngày 20/10 thật vui vẻ, đáng nhớ, luôn rạng rỡ và tràn đầy năng lượng. Mong em luôn được yêu thương, gặp nhiều may mắn và đạt được mọi ước mơ của mình. 🌸",
    ];

    const msgEl = document.getElementById('message');
    let i = 0;
    msgEl.style.opacity = 1;
    setInterval(() => {
        msgEl.style.opacity = 0;
        setTimeout(() => {
            i = (i + 1) % messages.length;
            msgEl.textContent = messages[i];
            msgEl.style.opacity = 1;
        }, 800);
    }, 4800);

    const falling = [];
    for (let k = 1; k <= 12; k++) falling.push(`style/img/Anh (${k}).png`);

    const activePositions = [];
    function createFallingImage() {
        let left;
        const safe = 8;
        const minDistance = 10;
        let tries = 0;
        do {
            left = safe + Math.random() * (100 - 2 * safe);
            tries++;
        } while (activePositions.some(x => Math.abs(x - left) < minDistance) && tries < 20);

        const el = document.createElement('img');
        el.className = 'falling-img';
        el.src = falling[Math.floor(Math.random() * falling.length)];
        el.style.left = left + 'vw';

        let min = 80, max = 120;
        if (window.innerWidth <= 480) { min = 40; max = 70; }
        else if (window.innerWidth <= 768) { min = 60; max = 90; }
        el.style.width = (min + Math.random() * (max - min)) + 'px';
        el.style.animationDuration = (8 + Math.random() * 4) + 's';
        el.style.transform = `rotate(${Math.random() * 360}deg)`;

        document.body.appendChild(el);
        activePositions.push(left);

        setTimeout(() => {
            el.remove();
            const idx = activePositions.indexOf(left);
            if (idx !== -1) activePositions.splice(idx, 1);
        }, 14000);
    }

    setInterval(createFallingImage, 1100);

    const bgm = document.getElementById('bgm');
    const toggle = document.getElementById('soundToggle');
    let playing = false;

    toggle.addEventListener('click', async () => {
        try {
            if (!playing) {
                bgm.currentTime = 68;
                await bgm.play();
                toggle.textContent = "🔈";
                playing = true;
            } else {
                bgm.pause();
                toggle.textContent = "🔇";
                playing = false;
            }
        } catch (err) {
            console.log("Không thể phát", err);
        }
    });
});
