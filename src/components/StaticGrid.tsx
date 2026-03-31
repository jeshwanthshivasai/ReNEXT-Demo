import React from 'react';
import { AbsoluteFill } from 'remotion';
import { COLOR_DARK_BLUE } from '../Constants';

export const StaticGrid: React.FC = () => {
    // Constant, subtle but visible opacity
    const opacity = 0.15;

    return (
        <AbsoluteFill style={{ overflow: 'hidden', pointerEvents: 'none' }}>
            <div style={{
                position: 'absolute',
                inset: 0,
                backgroundImage: `
                    linear-gradient(to right, rgba(255,255,255,0.15) 1px, transparent 1px),
                    linear-gradient(to bottom, rgba(255,255,255,0.15) 1px, transparent 1px)
                `,
                backgroundSize: '80px 80px',
                opacity,
            }} />
        </AbsoluteFill>
    );
};
