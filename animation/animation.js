function remap(minIn, maxIn, minOut, maxOut, v) {
    return (v - minIn) / (maxIn - minIn) * (maxOut - minOut) + minOut;
}

class AllRound {
    animate(currentTime, effect) {
        effect.localTime = currentTime; // Timeline we want to use
    }
}

registerAnimator('allround', AllRound);
