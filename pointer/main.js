const init = async () => {
    if ('paintWorklet' in CSS) {
        await CSS.paintWorklet.addModule('pointer.js');
    }

    const duration = 400;
    const el = document.querySelector('.element');
    const parentBb = el.closest('.wrapper').getBoundingClientRect();

    el.addEventListener('click', e => {
        el.classList.add('is-animating');
        let start = performance.now();

        [x, y] = [(e.clientX - parentBb.left), (e.clientY - parentBb.top)];

        requestAnimationFrame(function raf(now) {
            let count = Math.floor(now - start);

            el.style.setProperty('--mouse-x', x);
            el.style.setProperty('--mouse-y', y);
            el.style.setProperty('--tick', count);
            el.style.setProperty('--radius', (count / duration * 30));

            if (count > duration) {
                el.classList.remove('is-animating');
                el.style.setProperty('--tick', 0);
                return;
            }

            requestAnimationFrame(raf);
        })
    })
};

init();