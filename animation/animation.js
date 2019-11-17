class AllRound {
    animate(currentTime, effect) {
        effect.localTime = currentTime; // Timeline we want to use
    }
}

registerAnimator('allround', AllRound);
