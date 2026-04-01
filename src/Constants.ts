export const COLOR_DARK_BLUE = '#1a365d';
export const COLOR_GREEN = '#96ca38';
export const COLOR_WHITE = '#ffffff';

export const FPS = 30;

export const DURATIONS = {
    INTRO: 147,                  // Logo Reveal: 4.90s
    ECOSYSTEM_HUB: 180,          // Slide 4: 6.00s (Snappier reveal)
    IMMUTABLE_LEDGER: 210,       // Slide 8: 7.00s (Reduced for snappier transition)
    PROFILE_OVERVIEW: 330,       // Full Video: 11.00s
    DASHBOARD: 287,              // 9.57s
    USER_MANAGEMENT: 1239,       // Trimmed (Manual: 1:04:26)
    ENTITY_VIEW: 1646,           // 54.87s
    ENTITY_REG: 4692,            // Exact Video: 156.40s (Verified)
    SALE_TRANS_1: 3458,          // Exact Video: 115.24s (Verified)
    SALE_TRANS_2: 7976,          // Exact MP4: 265.85s (Verified)
    RENTAL_TRANS: 1365,          // Exact Video: 45.50s (Verified)
    DEV_PERMIT: 750,             // NEW: ~25.00s (Estimated)
    FINANCIAL_INTEL: 1003,       // 33.43s
    ANALYSIS_HUB: 717,           // Exact Video: 23.90s (Verified)
    INVESTOR_PORTAL: 1230,       // Exact Video: 41.00s (Verified)
    BENEFITS: 190,               // WHY RENEXT: 6.33s (Snappier exit)
    OUTRO: 172                   // 5.73s
};

// No transitions = direct back-to-back sequences
export const TOTAL_DURATION = Object.values(DURATIONS).reduce((a, b) => a + b, 0);
