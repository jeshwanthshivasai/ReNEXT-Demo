export const COLOR_DARK_BLUE = '#1a365d';
export const COLOR_GREEN = '#96ca38';
export const COLOR_WHITE = '#ffffff';

export const FPS = 30;

export const DURATIONS = {
    INTRO: 4 * FPS,             // 0:00 - 0:04
    PROBLEM: 20 * FPS,          // 0:04 - 0:24
    SOLUTION: 15 * FPS,         // 0:24 - 0:39
    LIFECYCLE: 30 * FPS,        // 0:39 - 1:09
    AI_HUMAN: 15 * FPS,         // 1:09 - 1:24
    ECOSYSTEM: 15 * FPS,        // 1:24 - 1:39
    ZERO_TRUST: 20 * FPS,       // 1:39 - 1:59
    DISPUTE: 15 * FPS,          // 1:59 - 2:14
    DASHBOARD: 20 * FPS,        // 2:14 - 2:34
    BENEFITS: 25 * FPS,         // 2:34 - 2:59
    OUTRO: 4 * FPS              // 2:59 - 3:03
};

// Account for 10 transitions of 30 frames each (overlap)
export const TOTAL_DURATION = Object.values(DURATIONS).reduce((a, b) => a + b, 0) - (10 * 30);
