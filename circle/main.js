window.CSS.registerProperty({
    name: '--color',
    syntax: '<color>',
    inherits: false,
    initialValue: 'transparent'
});

const init = async () => {
    if ('paintWorklet' in CSS) {
        await CSS.paintWorklet.addModule('circle.js');
    }
};

init();