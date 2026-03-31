import React from 'react';
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig, staticFile } from 'remotion';
import { Typography } from '../components/Typography';
import { COLOR_DARK_BLUE, COLOR_GREEN } from '../Constants';

export const Section11_Outro: React.FC = () => {
    const frame = useCurrentFrame();
    const { fps } = useVideoConfig();

    const anim = spring({
        frame,
        fps,
        config: { damping: 12, stiffness: 100 },
    });

    const scale = interpolate(anim, [0, 1], [1.1, 1]); // Slight Zoom in
    const opacity = interpolate(anim, [0, 0.5], [0, 1]);

    return (
        <AbsoluteFill style={{ backgroundColor: 'transparent' }}>
            
            <div style={{
                position: 'absolute',
                width: 1000,
                height: 1000,
                borderRadius: '50%',
                background: `radial-gradient(circle, ${COLOR_GREEN}08 0%, transparent 70%)`,
                left: '50%',
                top: '50%',
                transform: 'translate(-50%, -50%)',
                filter: 'blur(120px)',
            }} />

            <AbsoluteFill style={{ justifyContent: 'center', alignItems: 'center' }}>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    transform: `scale(${scale})`,
                    opacity,
                }}>
                    {/* Typographic Hero mirroring Intro */}
                    <Typography
                        text="RENEXT"
                        fontSize={160}
                        fontWeight={600}
                        color={COLOR_GREEN}
                        letterSpacing={-8}
                    />

                    <div style={{
                        marginTop: 10,
                        display: 'flex',
                        alignItems: 'center',
                        gap: 20,
                    }}>
                        <div style={{
                            width: interpolate(anim, [0, 1], [0, 180]),
                            height: 2,
                            background: `linear-gradient(90deg, transparent, ${COLOR_GREEN})`,
                        }} />

                        <Typography
                            text="Digital Nervous System"
                            fontSize={32}
                            fontWeight={400}
                            color="#fff"
                        />

                        <div style={{
                            width: interpolate(anim, [0, 1], [0, 180]),
                            height: 2,
                            background: `linear-gradient(90deg, ${COLOR_GREEN}, transparent)`,
                        }} />
                    </div>

                    <div style={{ marginTop: 40, opacity: interpolate(frame, [40, 70], [0, 1], { extrapolateLeft: 'clamp' }) }}>
                        <Typography
                            text="Re-imagining Governance. Re-defining Trust."
                            fontSize={24}
                            color="#8892b0"
                            letterSpacing={2}
                        />
                    </div>
                </div>
            </AbsoluteFill>
        </AbsoluteFill>
    );
};
