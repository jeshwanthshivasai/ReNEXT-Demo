import React from 'react';
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion';
import { Typography } from '../components/Typography';
import { COLOR_DARK_BLUE, COLOR_GREEN } from '../Constants';
import { ShieldCheck, Zap, Search, Gavel, BarChart3 } from 'lucide-react';

export const Section10_Benefits: React.FC = () => {
    const frame = useCurrentFrame();
    const { fps } = useVideoConfig();

    const anim = spring({
        frame,
        fps,
        config: { damping: 15, stiffness: 100 },
    });

    const benefits = [
        { id: 1, text: "Unwavering Trust", icon: ShieldCheck, delay: 0 },
        { id: 2, text: "Accelerated Speed", icon: Zap, delay: 40 },
        { id: 3, text: "End-to-End Transparency", icon: Search, delay: 80 },
        { id: 4, text: "Automated Compliance", icon: Gavel, delay: 120 },
        { id: 5, text: "Data-Driven Decisions", icon: BarChart3, delay: 160 },
    ];

    return (
        <AbsoluteFill style={{ backgroundColor: '#050814' }}>
            <AbsoluteFill style={{ padding: 100, justifyContent: 'center' }}>
                <div style={{ marginBottom: 60 }}>
                    <Typography
                        text="WHY RENEXT?"
                        fontSize={48}
                        color={COLOR_GREEN}
                        fontWeight={600}
                        letterSpacing={2}
                    />
                    <div style={{
                        marginTop: 10,
                        width: interpolate(anim, [0, 1], [0, 400]),
                        height: 4,
                        background: COLOR_GREEN,
                    }} />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 20 }}>
                    {benefits.map((benefit, i) => {
                        const benefitAnim = spring({
                            frame: frame - benefit.delay,
                            fps,
                            config: { damping: 12, stiffness: 100 },
                        });
                        const op = interpolate(benefitAnim, [0, 1], [0, 1]);
                        const tx = interpolate(benefitAnim, [0, 1], [-30, 0]);

                        return (
                            <div key={benefit.id} style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: 30,
                                opacity: op,
                                transform: `translateX(${tx}px)`,
                                backgroundColor: `${COLOR_DARK_BLUE}aa`,
                                padding: '24px 40px',
                                borderRadius: 16,
                                border: `1px solid ${COLOR_GREEN}33`,
                            }}>
                                <benefit.icon size={48} color={COLOR_GREEN} />
                                <Typography text={benefit.text} fontSize={32} color="#fff" fontWeight={600} />
                            </div>
                        );
                    })}
                </div>
            </AbsoluteFill>
        </AbsoluteFill>
    );
};
