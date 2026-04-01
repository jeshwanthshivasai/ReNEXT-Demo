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
        name: 'Sidepane - Entities',
        absStart: 3420,
        absEnd: 3634,
        x: 420,           // Consistent sidebar X
        y: 440,           // Vertical position for entities item
        w: 245,           // Sidebar width
        h: 45,            // Sidebar height
        radius: 12,
        color: '#96CC39',
    },
    {
        name: 'Main Content - Unit Detail',
        absStart: 4022,
        absEnd: 4087,
        x: 1503,          // Centered in main view
        y: 399,           // Positioned on a unit/entity record
        w: 230,           // Wide highlight for table row
        h: 75,
        radius: 20,
        color: '#96CC39',
    }
];

const SECTION_START_FRAME = 3302; // Calculated start for Section4b
// -----------------------

export const Section4b_EntityView: React.FC = () => {
    const frame = useCurrentFrame();

    return (
        <AbsoluteFill>
            <ScreenWalkthroughLayout 
                title="ENTITY VIEW"
                subtitle="Detailed Property Analytics & Asset Monitoring"
                videoSrc={staticFile('screens/Entity View.mp4')}
                label="ENTITY VIEW"
                badgeText="ASSET MONITOR"
                rotationY={-6}
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
