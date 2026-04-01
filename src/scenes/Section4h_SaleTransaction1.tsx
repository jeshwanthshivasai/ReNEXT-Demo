import React from 'react';
import { AbsoluteFill, staticFile, interpolate, useCurrentFrame } from 'remotion';
import { ScreenWalkthroughLayout } from '../components/ScreenWalkthroughLayout';

// --- MANUAL CONTROLS ---
// Edit these values to reposition, resize, or retime the highlight ring
const RING_CONFIG = {
    absStartFrame: 9051, // Start visibility at this absolute video frame
    absEndFrame: 9519,   // End visibility at this absolute video frame
    startX: 1368,        // Horizontal position (Center of ring)
    startY: 910,         // Vertical start (at absStartFrame)
    endY: 610,           // Vertical end (at absEndFrame)
    width: 480,          // Ring width
    height: 250,         // Ring height
    borderRadius: 16,    // Corner roundness
    color: '#96CC39',    // Highlight color
    glowOpacity: 0.6,    // Outer glow intensity
};

const SECTION_START_FRAME = 9640; // Updated to account for 909-frame shift in preceding content
// -----------------------

export const Section4h_SaleTransaction1: React.FC = () => {
    const frame = useCurrentFrame();

    // Map absolute frames to section-relative frames
    const relStart = RING_CONFIG.absStartFrame - SECTION_START_FRAME;
    const relEnd = RING_CONFIG.absEndFrame - SECTION_START_FRAME;

    const showHighlight = frame >= relStart && frame <= relEnd;
    
    const highlightY = interpolate(
        frame,
        [relStart, relEnd],
        [RING_CONFIG.startY, RING_CONFIG.endY],
        { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' }
    );

    const opacity = interpolate(
        frame,
        [relStart, relStart + 10, relEnd - 10, relEnd],
        [0, 1, 1, 0]
    );

    return (
        <AbsoluteFill>
            <ScreenWalkthroughLayout 
                title="SALE TRANSACTION WORKFLOW - PART 1"
                subtitle="Primary Sales Initiation & Contractual Framework"
                videoSrc={staticFile('screens/Sale Transaction 1.mov')}
                label="SALE TRANSACTION"
                badgeText="SMART CONTRACTS"
            />
            
            {showHighlight && (
                <div style={{
                    position: 'absolute',
                    top: highlightY,
                    left: RING_CONFIG.startX,
                    width: RING_CONFIG.width,
                    height: RING_CONFIG.height,
                    border: `4px solid ${RING_CONFIG.color}`,
                    borderRadius: `${RING_CONFIG.borderRadius}px`,
                    boxShadow: `0 0 20px rgba(150, 204, 57, ${RING_CONFIG.glowOpacity}), inset 0 0 10px #96CC39`,
                    opacity,
                    transform: `translate(-50%, -50%)`,
                    pointerEvents: 'none',
                    zIndex: 100,
                }}>
                </div>
            )}
        </AbsoluteFill>
    );
};
