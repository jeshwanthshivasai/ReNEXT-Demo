import React from 'react';
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig, Audio, staticFile } from 'remotion';
import { Typography } from '../components/Typography';
import { COLOR_DARK_BLUE, COLOR_GREEN } from '../Constants';
import { ShieldCheck } from 'lucide-react';

export const Section11_Outro: React.FC = () => {
    const frame = useCurrentFrame();
    const { fps } = useVideoConfig();

    const anim = spring({
        frame,
        fps,
        config: { damping: 12, stiffness: 100 },
    });

    const scale = interpolate(anim, [0, 1], [1.2, 1]);
    const opacity = interpolate(anim, [0, 0.5], [0, 1]);

    return (
        <AbsoluteFill style={{ backgroundColor: 'transparent' }}>
            {frame >= 30 && <Audio src={staticFile('audio/outro.wav')} />}
            
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
                    <div style={{
                        backgroundColor: COLOR_DARK_BLUE,
                        padding: 30,
                        borderRadius: 24,
                        border: `3px solid ${COLOR_GREEN}`,
                        boxShadow: `0 0 40px ${COLOR_GREEN}44`,
                        marginBottom: 40,
                    }}>
                        <ShieldCheck size={80} color={COLOR_GREEN} />
                    </div>

                    <Typography
                        text="RENEXT"
                        fontSize={120}
                        fontWeight={600}
                        color={COLOR_GREEN}
                        letterSpacing={-4}
                    />

                    <div style={{
                        marginTop: 20,
                        backgroundColor: `${COLOR_GREEN}11`,
                        padding: '10px 30px',
                        borderRadius: 30,
                        border: `1px solid ${COLOR_GREEN}33`,
                    }}>
                        <Typography
                            text="The Digital Nervous System for Real Estate"
                            fontSize={24}
                            fontWeight={400}
                            color="#fff"
                            letterSpacing={1}
                        />
                    </div>
                </div>

                <div style={{
                    position: 'absolute',
                    bottom: 100,
                    opacity: interpolate(frame, [60, 90], [0, 1]),
                }}>
                    <Typography
                        text="Re-imagining Governance. Re-defining Trust."
                        fontSize={20}
                        color="#8892b0"
                        letterSpacing={4}
                    />
                </div>
            </AbsoluteFill>
        </AbsoluteFill>
    );
};
