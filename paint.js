window.CSS.registerProperty({
    name: '--color',
    syntax: '<color>',
    inherits: false, // Inherits up the DOM tree, from parent
    initialValue: 'transparent'
});

const init = async () => {
    if ('paintWorklet' in CSS) {
        await CSS.paintWorklet.addModule('circle.js');
    }

    // await CSS.animationWorklet.addModule('animation.js');
};

init();