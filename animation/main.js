// Document timeline
// requestAnimationFrame(function raf(now) {
//     console.log(document.timeline);

//     requestAnimationFrame(raf)
// });

const init = async () => {
    if ('animationWorklet' in CSS) {

        await CSS.animationWorklet.addModule('animation.js');

        new WorkletAnimation(
            'allround',
            new KeyframeEffect(
                document.querySelector('.element'),
                [
                    {
                        transform: 'translate3d(0, 0, 0)'
                    },
                    {
                        transform: 'translate3d(calc(100vw - 250px), 0, 0)'
                    },
                    {
                        transform: 'translate3d(calc(100vw - 250px), calc(100vh - 250px), 0)'
                    },
                    {
                        transform: 'translate3d(0, calc(100vh - 250px), 0)'
                    },
                    {
                        transform: 'translate3d(0, 0, 0)'
                    }
                ],
                {
                    duration: 4000,
                    iterations: Number.POSITIVE_INFINITY
                }
            ),
            // Time based animation
            // document.timeline

            // Scroll based animation
            new ScrollTimeline({
                scrollSource: document.querySelector('.scroller'),
                orientation: "vertical", // "horizontal" or "vertical".
                timeRange: 4000
            })
        )
        .play();
    }
}

init();
