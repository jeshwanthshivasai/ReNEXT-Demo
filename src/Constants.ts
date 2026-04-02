export const COLOR_DARK_BLUE = '#1a365d';
export const COLOR_GREEN = '#96ca38';
export const COLOR_WHITE = '#ffffff';

export const FPS = 30;

export const DURATIONS = {
    INTRO: 147,                  // Logo Reveal: 4.90s
    ECOSYSTEM_HUB: 180,          // Slide 4: 6.00s (Snappier reveal)
    IMMUTABLE_LEDGER: 210,       // Slide 8: 7.00s (Reduced for snappier transition)
    PROFILE_OVERVIEW: 330,       // Full Video: 11.00s
    DASHBOARD: 1196,             // Exact Video: 39.87s (Verified)
    USER_MANAGEMENT: 1239,       // Trimmed (Manual: 1:04:26)
    ENTITY_VIEW: 1646,           // 54.87s
    ENTITY_REG: 4632,            // Trimmed 60 frames (4632-4691 removed)
    SALE_TRANS_1: 3458,          // Exact Video: 115.24s (Verified)
    SALE_TRANS_2: 7607,          // Trimmed 16 (15758-15773) + 353 (20645-20997) frames
    RENTAL_TRANS: 1313,          // Trimmed 52 frames (21958-22009 removed)
    DEV_PERMIT: 1063,            // Trimmed 81 frames (21958-22039 skipped)
    FINANCIAL_INTEL: 1003,       // 33.43s
    ANALYSIS_HUB: 717,           // Exact Video: 23.90s (Verified)
    INVESTOR_PORTAL: 1230,       // Exact Video: 41.00s (Verified)
    BENEFITS: 190,               // WHY RENEXT: 6.33s (Snappier exit)
    OUTRO: 172                   // 5.73s
};

// No transitions = direct back-to-back sequences
export const TOTAL_DURATION = Object.values(DURATIONS).reduce((a, b) => a + b, 0);
