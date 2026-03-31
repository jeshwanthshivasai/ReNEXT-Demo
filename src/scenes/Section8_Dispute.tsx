import React from 'react';
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion';
import { Typography } from '../components/Typography';
import { COLOR_DARK_BLUE, COLOR_GREEN } from '../Constants';
import { Gavel, ArrowUpCircle, Database, ShieldAlert } from 'lucide-react';

export const Section8_Dispute: React.FC = () => {
    const frame = useCurrentFrame();
    const { fps } = useVideoConfig();

    const anim = spring({
        frame,
        fps,
        config: { damping: 15, stiffness: 100 },
    });

    const levels = [
        { id: 1, name: "VILLAGE", delay: 60 },
        { id: 2, name: "DIVISION", delay: 150 },
        { id: 3, name: "DISTRICT", delay: 240 },
        { id: 4, name: "STATE", delay: 330 },
    ];

    return (
        <AbsoluteFill style={{ backgroundColor: '#050814' }}>
            <AbsoluteFill style={{ padding: 100, justifyContent: 'center' }}>
                <div style={{ marginBottom: 60 }}>
                    <Typography
                        text="DISPUTE RESOLUTION ENGINE"
                        fontSize={48}
                        color={COLOR_GREEN}
                        fontWeight={600}
                        letterSpacing={2}
                    />
                    <div style={{
                        marginTop: 10,
                        width: interpolate(anim, [0, 1], [0, 600]),
                        height: 4,
                        background: COLOR_GREEN,
                    }} />
                </div>

                <div style={{ position: 'relative', height: 600 }}>
                    {levels.map((level, i) => {
                        const levelAnim = spring({
                            frame: frame - level.delay,
                            fps,
                            config: { damping: 12, stiffness: 100 },
                        });
                        const op = interpolate(levelAnim, [0, 1], [0, 1]);
                        const tx = interpolate(levelAnim, [0, 1], [20, 0]);

                        return (
                            <div key={level.id} style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: 30,
                                marginBottom: 40,
                                opacity: op,
                                transform: `translateX(${tx}px)`,
                            }}>
                                <div style={{
                                    width: 100,
                                    height: 100,
                                    backgroundColor: COLOR_DARK_BLUE,
                                    borderRadius: 16,
                                    border: `2px solid ${COLOR_GREEN}`,
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}>
                                    <ShieldAlert size={48} color={COLOR_GREEN} />
                                </div>
                                <div style={{ flex: 1 }}>
                                    <Typography text={level.name} fontSize={32} color="#fff" fontWeight={700} />
                                    <div style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: 10,
                                        marginTop: 5,
                                    }}>
                                        <Database size={16} color={COLOR_GREEN} />
                                        <Typography text="Automated Data Pulling" fontSize={18} color="#8892b0" />
                                    </div>
                                </div>
                                {i < levels.length - 1 && (
                                    <div style={{
                                        position: 'absolute',
                                        bottom: -40,
                                        left: 50,
                                        opacity: levelAnim,
                                    }}>
                                        <ArrowUpCircle size={32} color={COLOR_GREEN} />
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>

                <div style={{
                    position: 'absolute',
                    right: 150,
                    top: '50%',
                    transform: 'translateY(-50%)',
                    width: 300,
                    textAlign: 'right',
                    opacity: interpolate(frame, [400, 430], [0, 1]),
                }}>
                    <Gavel size={120} color={COLOR_GREEN} style={{ marginLeft: 'auto' }} />
                    <Typography
                        text="POWERED BY IMMUTABLE RECORDS"
                        fontSize={24}
                        color={COLOR_GREEN}
                        fontWeight={600}
                        style={{ marginTop: 20 }}
                    />
                </div>
            </AbsoluteFill>
        </AbsoluteFill>
    );
};
