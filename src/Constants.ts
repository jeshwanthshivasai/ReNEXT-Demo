export const COLOR_DARK_BLUE = '#1a365d';
export const COLOR_GREEN = '#96ca38';
export const COLOR_WHITE = '#ffffff';

export const FPS = 30;

export const DURATIONS = {
    INTRO: 147,                 // 4.90s
    PROBLEM: 373,               // 12.43s
    SOLUTION: 277,              // 9.23s
    USER_MANAGEMENT: 1239,      // Trimmed (Manual: 1:04:26)
    ENTITY_VIEW: 1646,          // 54.87s
    FINANCIAL_INTEL: 1003,      // 33.43s
    ENTITY_REG: 939,            // 31.30s
    AI_HUMAN: 281,              // 9.37s
    ECOSYSTEM: 249,             // 8.30s
    ZERO_TRUST: 321,            // 10.70s
    DISPUTE: 293,               // 9.77s
    DASHBOARD: 287,             // 9.57s
    BENEFITS: 312,              // 10.40s
    OUTRO: 172                  // 5.73s
};

// No transitions = direct back-to-back sequences
export const TOTAL_DURATION = Object.values(DURATIONS).reduce((a, b) => a + b, 0);
