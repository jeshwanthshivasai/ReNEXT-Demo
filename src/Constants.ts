export const COLOR_DARK_BLUE = '#1a365d';
export const COLOR_GREEN = '#96ca38';
export const COLOR_WHITE = '#ffffff';

export const FPS = 30;

export const DURATIONS = {
    INTRO: 15 * FPS,            // 0:00 - 0:15
    PROBLEM: 25 * FPS,          // 0:15 - 0:40
    SOLUTION: 20 * FPS,         // 0:40 - 1:00
    LIFECYCLE: 40 * FPS,        // 1:00 - 1:40
    AI_HUMAN: 20 * FPS,         // 1:40 - 2:00
    ECOSYSTEM: 20 * FPS,        // 2:00 - 2:20
    ZERO_TRUST: 25 * FPS,       // 2:20 - 2:45
    DISPUTE: 20 * FPS,          // 2:45 - 3:05
    DASHBOARD: 20 * FPS,        // 3:05 - 3:25
    BENEFITS: 30 * FPS,         // 3:25 - 3:55
    OUTRO: 15 * FPS             // 3:55 - 4:10
};

export const TOTAL_DURATION = Object.values(DURATIONS).reduce((a, b) => a + b, 0) - (10 * 30);
