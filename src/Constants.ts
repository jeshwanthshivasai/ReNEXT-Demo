export const COLOR_DARK_BLUE = '#1a365d';
export const COLOR_GREEN = '#96ca38';
export const COLOR_WHITE = '#ffffff';

export const FPS = 30;

export const DURATIONS = {
    INTRO: 10 * FPS,            // 0:00 - 0:10
    PROBLEM: 20 * FPS,          // 0:10 - 0:30
    SOLUTION: 15 * FPS,         // 0:30 - 0:45
    LIFECYCLE: 30 * FPS,        // 0:45 - 1:15
    AI_HUMAN: 15 * FPS,         // 1:15 - 1:30
    ECOSYSTEM: 15 * FPS,        // 1:30 - 1:45
    ZERO_TRUST: 20 * FPS,       // 1:45 - 2:05
    DISPUTE: 15 * FPS,          // 2:05 - 2:20
    DASHBOARD: 20 * FPS,        // 2:20 - 2:40
    BENEFITS: 25 * FPS,         // 2:40 - 3:05
    OUTRO: 15 * FPS             // 3:05 - 3:20
};

// Account for 10 transitions of 30 frames each (overlap)
export const TOTAL_DURATION = Object.values(DURATIONS).reduce((a, b) => a + b, 0) - (10 * 30);
