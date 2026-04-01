import React from 'react';
import { ScreenWalkthroughLayout } from '../components/ScreenWalkthroughLayout';
import { AbsoluteFill, interpolate, useCurrentFrame, staticFile } from 'remotion';

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
    {
        name: 'Legacy Highlight (Previously Animated)',
        absStart: 9051,
        absEnd: 9519,
        x: 1368,
        y: 910,
        w: 480,
        h: 250,
        radius: 16,
        color: '#96CC39',
        y2: 610, // Preserve the previous vertical animation
    },
    {
        name: 'New Highlight - Transaction Detail',
        absStart: 10095,
        absEnd: 10476,
        x: 1376,          // Centered area
        y: 608,
        w: 510,
        h: 120,
        radius: 12,
        color: '#96CC39',
    }
];

const SECTION_START_FRAME = 9580; // Adjusted for 60-frame trim in preceding section
// -----------------------

export const Section4h_SaleTransaction1: React.FC = () => {
    const frame = useCurrentFrame();

    return (
        <AbsoluteFill>
            <ScreenWalkthroughLayout 
                title="SALE TRANSACTION WORKFLOW - PART 1"
                subtitle="Primary Sales Initiation & Contractual Framework"
                videoSrc={staticFile('screens/Sale Transaction 1.mp4')}
                label="SALE TRANSACTION"
                badgeText="SMART CONTRACTS"
            />

            {HIGHLIGHT_RINGS.map((ring, index) => {
                const relStart = ring.absStart - SECTION_START_FRAME;
                const relEnd = ring.absEnd - SECTION_START_FRAME;
                const isVisible = frame >= relStart && frame <= relEnd;

                if (!isVisible) return null;

                const opacity = interpolate(
                    frame,
                    [relStart, relStart + 5, relEnd - 5, relEnd],
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
