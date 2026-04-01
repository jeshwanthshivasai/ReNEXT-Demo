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
    x2?: number; // Optional end horizontal position
    y2?: number; // Optional end vertical position
    w2?: number; // Optional end width
    h2?: number; // Optional end height
}

// Edit these values to reposition, resize, or retime the highlight rings
const HIGHLIGHT_RINGS: HighlightRing[] = [
    {
        name: 'Left Pane - Users',
        absStart: 2063,
        absEnd: 2172,
        x: 420,
        y: 454,
        w: 245,
        h: 45,
        radius: 12,
        color: '#96CC39',
    },
    {
        name: 'Top Right - Add User',
        absStart: 2660,
        absEnd: 2707,
        x: 1535,
        y: 404,
        w: 180,
        h: 80,
        radius: 20,
        color: '#96CC39',
    },
    {
        name: 'Left Pane - Roles',
        absStart: 2483,
        absEnd: 2600,
        x: 434,
        y: 580,
        w: 220,
        h: 45,
        radius: 12,
        color: '#96CC39',
    },
    {
        name: 'Main Screen - User Row',
        absStart: 3000,
        absEnd: 3274,
        x: 1209,
        y: 952,
        w: 165,
        h: 75,
        radius: 20,
        color: '#96CC39',
        // Example: Add x2, y2, w2, h2 here to animate
        x2: 1202,
        y2: 952,
        w2: 180,
        h2: 75,
    }
];

const SECTION_START_FRAME = 2063;
// -----------------------

export const Section4a_UserManagement: React.FC = () => {
    const frame = useCurrentFrame();

    return (
        <AbsoluteFill>
            <ScreenWalkthroughLayout 
                title="END-TO-END PROPERTY LIFECYCLE"
                subtitle="Smart Admin Control & User Management"
                videoSrc={staticFile('screens/User Management.mp4')}
                label="USER MANAGEMENT"
                badgeText="ADMIN PORTAL"
                rotationY={5} // Balanced tilt for variety
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

                // Animated dimensions and position (defaults to same if ring.x2 etc are missing)
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
