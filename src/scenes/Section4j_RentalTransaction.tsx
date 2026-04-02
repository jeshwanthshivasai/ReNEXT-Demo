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
    {
        name: 'Check - Sidepane Rental Transaction',
        absStart: 20645,
        absEnd: 20707,
        x: 399,           // Left sidepane area
        y: 778,           // Using your most recent menu selection Y
        w: 185,           // Width covering the menu label
        h: 45,
        radius: 8,
        color: '#96CC39',
    },
    {
        name: 'Action - Eye Button Row 4',
        absStart: 20716,
        absEnd: 20749,
        x: 1567,          // Using standard eye button X
        y: 669,           // Estimating Row 4 Y (506 + (3 * 90))
        w: 60,
        h: 60,
        radius: 30,
        color: '#96CC39',
    }
];

const SECTION_START_FRAME = 20645; // Calculated start for Section4j
// -----------------------

export const Section4j_RentalTransaction: React.FC = () => {
    const frame = useCurrentFrame();

    return (
        <AbsoluteFill>
            <ScreenWalkthroughLayout 
                title="RENTAL TRANSACTION WORKFLOW"
                subtitle="Automated Lease Agreements & Recurring Payments"
                videoSrc={staticFile('screens/Rental Transaction.mov')} // Reverted to .mov
                label="RENTAL TRANSACTION"
                badgeText="PROPERTY LEASES"
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
