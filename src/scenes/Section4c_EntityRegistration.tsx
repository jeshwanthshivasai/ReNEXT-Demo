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
        name: 'Top Right - Register Property',
        absStart: 4948,
        absEnd: 4997,
        x: 1535,          // Your preferred button X
        y: 415,           // Your preferred button Y
        w: 180,           // Your preferred width
        h: 60,            // Your preferred height
        radius: 20,
        color: '#96CC39',
    },
    {
        name: 'Main Content - Data Field',
        absStart: 7510,
        absEnd: 7553,
        x: 1083,           // Centered
        y: 922,           // Centered
        w: 260,           // Highlight box width
        h: 65,           // Highlight box height
        radius: 20,
        color: '#96CC39',
    }
];

const SECTION_START_FRAME = 4948; // Calculated start for Section4c
// -----------------------

export const Section4c_EntityRegistration: React.FC = () => {
    const frame = useCurrentFrame();

    return (
        <AbsoluteFill>
            <ScreenWalkthroughLayout 
                title="ENTITY REGISTRATION"
                subtitle="Streamlined Asset Digitization & Compliance"
                videoSrc={staticFile('screens/Register Property.mov')}
                label="ENTITY REGISTRATION"
                badgeText="DIGITIZATION PORTAL"
                rotationY={5} // Alternating tilt
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
