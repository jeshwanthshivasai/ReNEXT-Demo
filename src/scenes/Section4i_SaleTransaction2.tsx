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
    },
    {
        name: 'Workflow - Approval Status',
        absStart: 13976,
        absEnd: 14225,
        x: 1374,          // Using your previous preferred 'workflow' X
        y: 680,           // Using your previous preferred 'workflow' Y
        w: 515,           // Wide highlight for the workflow banner
        h: 110,
        radius: 15,
        color: '#96CC39',
    },
    {
        name: 'Check - Sidepane Sale Transaction',
        absStart: 14573,
        absEnd: 14643,
        x: 399,           // Left sidepane area
        y: 687,           // Vertical position for the menu item
        w: 185,           // Width covering the menu label
        h: 45,
        radius: 8,
        color: '#96CC39',
    },
    {
        name: 'Action - Eye Button',
        absStart: 14661,
        absEnd: 14713,
        x: 1575,          // Using your previous preferred 'eye' X
        y: 506,           // Using your previous preferred 'eye' Y
        w: 60,            // Circular highlight
        h: 60,
        radius: 30,       // Circular radius
        color: '#96CC39',
    },
    {
        name: 'Workflow - Approval Status',
        absStart: 14720,
        absEnd: 14959,
        x: 1376,          // Using your previous preferred 'workflow' X
        y: 510,           // Using your previous preferred 'workflow' Y
        w: 510,           // Wide highlight for the workflow banner
        h: 233,
        radius: 20,
        color: '#96CC39',
    },
    {
        name: 'Workflow - Approval Status',
        absStart: 14959,
        absEnd: 15037,
        x: 1374,          // Using your previous preferred 'workflow' X
        y: 680,           // Using your previous preferred 'workflow' Y
        w: 515,           // Wide highlight for the workflow banner
        h: 110,
        radius: 15,
        color: '#96CC39',
    },
    {
        name: 'Workflow - Approval Status',
        absStart: 15037,
        absEnd: 15513,
        x: 1376,          // Using your previous preferred 'workflow' X
        y: 817,           // Using your previous preferred 'workflow' Y
        w: 474,           // Wide highlight for the workflow banner
        h: 180,
        radius: 15,
        color: '#96CC39',
    },
        {
        name: 'Check - Sidepane Sale Transaction',
        absStart: 15758,
        absEnd: 15820,    // Adjusted: 15800 - 16 (trim offset)
        x: 399,           // Left sidepane area
        y: 687,           // Vertical position for the menu item
        w: 185,           // Width covering the menu label
        h: 45,
        radius: 8,
        color: '#96CC39',
    },
    {
        name: 'Action - Eye Button (Final Check)',
        absStart: 15820,
        absEnd: 15863,
        x: 1575,          // Using your previous preferred 'eye' X
        y: 506,           // Using your previous preferred 'eye' Y
        w: 60,            // Circular highlight
        h: 60,
        radius: 30,       // Circular radius
        color: '#96CC39',
    },
    {
        name: 'Workflow - Approval Status',
        absStart: 15870,
        absEnd: 15905,
        x: 1374,          // Using your previous preferred 'workflow' X
        y: 680,           // Using your previous preferred 'workflow' Y
        w: 515,           // Wide highlight for the workflow banner
        h: 110,
        radius: 15,
        color: '#96CC39',
    },
    {
        name: 'Workflow - Approval Status',
        absStart: 16067,
        absEnd: 16618,
        x: 1376,          // Using your previous preferred 'workflow' X
        y: 853,           // Using your previous preferred 'workflow' Y
        w: 474,           // Wide highlight for the workflow banner
        h: 180,
        radius: 15,
        color: '#96CC39',
    },
    {
        name: 'Check - Sidepane Sale Transaction',
        absStart: 16941,
        absEnd: 17065,
        x: 399,           // Left sidepane area
        y: 687,           // Vertical position for the menu item
        w: 185,           // Width covering the menu label
        h: 45,
        radius: 8,
        color: '#96CC39',
    },
    {
        name: 'Action - Eye Button',
        absStart: 17088,
        absEnd: 17106,
        x: 1575,          // Using your previous preferred 'eye' X
        y: 506,           // Using your previous preferred 'eye' Y
        w: 60,            // Circular highlight
        h: 60,
        radius: 30,       // Circular radius
        color: '#96CC39',
    },
    {
        name: 'Workflow - Approval Status',
        absStart: 17114,
        absEnd: 17151,
        x: 1374,          // Using your previous preferred 'workflow' X
        y: 680,           // Using your previous preferred 'workflow' Y
        w: 515,           // Wide highlight for the workflow banner
        h: 110,
        radius: 15,
        color: '#96CC39',
    },
    {
        name: 'Workflow - Approval Status',
        absStart: 17220,
        absEnd: 17713,
        x: 1376,          // Using your previous preferred 'workflow' X
        y: 800,           // Using your previous preferred 'workflow' Y
        w: 474,           // Wide highlight for the workflow banner
        h: 180,
        radius: 15,
        color: '#96CC39',
    },
    {
        name: 'Check - Sidepane Sale Transaction',
        absStart: 18323,
        absEnd: 18360,
        x: 399,           // Left sidepane area
        y: 678,           // Vertical position for the menu item
        w: 185,           // Width covering the menu label
        h: 45,
        radius: 8,
        color: '#96CC39',
    },
    {
        name: 'Action - Eye Button',
        absStart: 18392,
        absEnd: 18461,
        x: 1576,          // Using your previous preferred 'eye' X
        y: 506,           // Using your previous preferred 'eye' Y
        w: 60,            // Circular highlight
        h: 60,
        radius: 30,       // Circular radius
        color: '#96CC39',
    },
    {
        name: 'Workflow - Approval Status',
        absStart: 18464,
        absEnd: 18493,
        x: 1374,          // Using your previous preferred 'workflow' X
        y: 680,           // Using your previous preferred 'workflow' Y
        w: 515,           // Wide highlight for the workflow banner
        h: 110,
        radius: 15,
        color: '#96CC39',
    },
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
                trimStart={2720} // Skip starts at relative frame 2720 (abs 15758)
                trimEnd={2735}   // Skip ends at relative frame 2735
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
