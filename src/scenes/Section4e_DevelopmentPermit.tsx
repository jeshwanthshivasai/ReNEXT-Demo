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
        name: 'Action - Eye Button',
        absStart: 21965,
        absEnd: 21993,
        x: 1567,          // Using your previous preferred 'eye' X
        y: 561,           // Using your previous preferred 'eye' Y
        w: 60,            // Circular highlight
        h: 60,
        radius: 30,       // Circular radius
        color: '#96CC39',
    },
    {
        name: 'Check - Project Details',
        absStart: 21997,
        absEnd: 22037,
        x: 1369,          // Dimensions from previous detail card blocks
        y: 686,
        w: 509,
        h: 235,
        radius: 20,
        color: '#96CC39',
    },
    {
        name: 'Workflow - Approval Status',
        absStart: 22196,
        absEnd: 22460,
        x: 1369,          // Dimensions from previous workflow blocks
        y: 598,           // Positioned below the main details
        w: 509,
        h: 109,
        radius: 20,
        color: '#96CC39',
    },
    {
        name: 'Action - Create Permit Button',
        absStart: 22479,
        absEnd: 22506,
        x: 1549,          // standard top-right button X
        y: 415,           // standard top-right button Y
        w: 155,           // typical button width
        h: 55,            // typical button height
        radius: 15,
        color: '#96CC39',
    },
    {
        name: 'Action - Cancel Button',
        absStart: 22515,
        absEnd: 22930,
        x: 1068,          // Positioned adjacent to create button
        y: 872,
        w: 220,
        h: 60,
        radius: 15,
        color: '#96CC39',
    }
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
