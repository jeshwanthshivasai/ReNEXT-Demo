import React from 'react';
import { AbsoluteFill, interpolate, useCurrentFrame, staticFile } from 'remotion';
import { ScreenWalkthroughLayout } from '../components/ScreenWalkthroughLayout';

// --- MANUAL CONTROLS ---
interface HighlightRing {
    name: string;
    absStart: number;
    absEnd: number;
    x: number;
    y: number;
    w: number;
    h: number;
    radius: number;
    color: string;
    x2?: number;
    y2?: number;
    w2?: number;
    h2?: number;
}

const HIGHLIGHT_RINGS: HighlightRing[] = [
    // Add highlights here
];

const SECTION_START_FRAME = 21958; // Calculated start for Section4e
// -----------------------

export const Section4e_DevelopmentPermit: React.FC = () => {
    const frame = useCurrentFrame();

    return (
        <AbsoluteFill>
            <ScreenWalkthroughLayout 
                title="DEVELOPMENT PERMIT WORKFLOW"
                subtitle="Automated Approvals & Compliance Verification"
                videoSrc={staticFile('screens/Development Permit.mov')}
                label="DEVELOPMENT PERMIT"
                badgeText="APPROVAL PORTAL"
                trimStart={0}  // Skip starts at absolute frame 21958 (rel 0)
                trimEnd={81}   // Skip ends at relative frame 81
            />

            {HIGHLIGHT_RINGS.map((ring, index) => {
                const relStart = ring.absStart - SECTION_START_FRAME;
                const relEnd = ring.absEnd - SECTION_START_FRAME;
                const isVisible = frame >= relStart && frame <= relEnd;

                if (!isVisible) return null;

                const duration = relEnd - relStart;
                const offset = Math.min(5, duration / 3);

                const opacity = interpolate(
                    frame,
                    [relStart, relStart + offset, relEnd - offset, relEnd],
                    [0, 1, 1, 0]
                );

                const animX = interpolate(frame, [relStart, relEnd], [ring.x, ring.x2 ?? ring.x]);
                const animY = interpolate(frame, [relStart, relEnd], [ring.y, ring.y2 ?? ring.y]);
                const animW = interpolate(frame, [relStart, relEnd], [ring.w, ring.w2 ?? ring.w]);
                const animH = interpolate(frame, [relStart, relEnd], [ring.h, ring.h2 ?? ring.h]);

                return (
                    <div key={index} style={{
                        position: 'absolute',
                        top: animY,
                        left: animX,
                        width: animW,
                        height: animH,
                        border: `4px solid ${ring.color}`,
                        borderRadius: `${ring.radius}px`,
                        boxShadow: `0 0 20px rgba(150, 204, 57, 0.6), inset 0 0 10px ${ring.color}`,
                        opacity,
                        transform: `translate(-50%, -50%)`,
                        pointerEvents: 'none',
                        zIndex: 100,
                    }} />
                );
            })}
        </AbsoluteFill>
    );
};
