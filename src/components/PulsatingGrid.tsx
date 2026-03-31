import React from 'react';
import { AbsoluteFill, interpolate, useCurrentFrame } from 'remotion';
import { COLOR_DARK_BLUE } from '../Constants';

export const PulsatingGrid: React.FC = () => {
    const frame = useCurrentFrame();
    const opacity = interpolate(Math.sin(frame / 30), [-1, 1], [0.05, 0.15]);

    return (
        <AbsoluteFill style={{ overflow: 'hidden', pointerEvents: 'none' }}>
            <div style={{
                position: 'absolute',
                inset: 0,
                backgroundImage: `
                    linear-gradient(to right, ${COLOR_DARK_BLUE} 1px, transparent 1px),
                    linear-gradient(to bottom, ${COLOR_DARK_BLUE} 1px, transparent 1px)
                `,
                backgroundSize: '80px 80px',
                opacity,
            }} />
        </AbsoluteFill>
    );
};
