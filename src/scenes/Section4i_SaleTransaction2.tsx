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
        name: 'Top Right - Initiate Sale',
        absStart: 13038,
        absEnd: 13090,
        x: 1564,          // Top right button area
        y: 414,           // Vertical position
        w: 140,           // Width of the initiate button
        h: 60,            // Height of the button
        radius: 20,
        color: '#96CC39',
    },
    {
        name: 'Action - Initiate Sale Button',
        absStart: 13851,
        absEnd: 13898,
        x: 1090,          // Centered horizontally
        y: 924,           // Lower portion of the screen
        w: 260,           // Standard button width
        h: 60,            // Standard button height
        radius: 12,
        color: '#96CC39',
    },
    {
        name: 'Action - Eye Button',
        absStart: 13942,
        absEnd: 13969,
        x: 1575,          // Using your previous preferred 'eye' X
        y: 506,           // Using your previous preferred 'eye' Y
        w: 60,            // Circular highlight
        h: 60,
        radius: 30,       // Circular radius
        color: '#96CC39',
    }
];

const SECTION_START_FRAME = 13038; // Calculated start for Section4i
// -----------------------

export const Section4i_SaleTransaction2: React.FC = () => {
    const frame = useCurrentFrame();

    return (
        <AbsoluteFill>
            <ScreenWalkthroughLayout 
                title="SALE TRANSACTION WORKFLOW - PART 2"
                subtitle="Ownership Transfer & Registry Update"
                videoSrc={staticFile('screens/Sale Transaction 2.mp4')}
                label="SALE TRANSACTION"
                badgeText="ASSET TRANSFERS"
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
