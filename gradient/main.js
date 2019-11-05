window.CSS.registerProperty({
    name: '--mouse-x',
    syntax: '<length>',
    inherits: false,
    initialValue: '0px'
});

window.CSS.registerProperty({
    name: '--mouse-y',
    syntax: '<length>',
    inherits: false,
    initialValue: '0px'
});

window.CSS.registerProperty({
    name: '--end-stop',
    syntax: '<percentage>',
    inherits: false,
    initialValue: '0%'
});

const init = async () => {
    const el = document.querySelector('.element');
    const parentBb = el.closest('.wrapper').getBoundingClientRect();

    el.addEventListener('mousemove', (e) => {
        [x, y] = [(e.clientX - parentBb.left), (e.clientY - parentBb.top)];

        el.style.cssText = `--mouse-x: ${x}px; --mouse-y: ${y}px;`;
    });

    el.addEventListener('click', () => {
        el.classList[el.classList.contains('is-small') ? 'remove' : 'add']('is-small');
    });
};

init();