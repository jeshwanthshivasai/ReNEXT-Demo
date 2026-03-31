import React from 'react';
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion';
import { Typography } from '../components/Typography';
import { COLOR_DARK_BLUE, COLOR_GREEN } from '../Constants';
import { Bot, UserCheck, Zap, ShieldCheck } from 'lucide-react';

export const Section5_AIHuman: React.FC = () => {
    const frame = useCurrentFrame();
    const { fps } = useVideoConfig();

    const anim = spring({
        frame,
        fps,
        config: { damping: 12, stiffness: 100 },
    });

    const mergeAnim = spring({
        frame: frame - 450,
        fps,
        config: { damping: 15, stiffness: 100 },
    });

    const splitPos = interpolate(mergeAnim, [0, 1], [50, 0]);
    const opacity = interpolate(anim, [0, 0.5], [0, 1]);

    return (
        <AbsoluteFill style={{ backgroundColor: '#050814', flexDirection: 'row' }}>
            <div style={{
                flex: 1,
                backgroundColor: COLOR_DARK_BLUE,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                transform: `translateX(-${mergeAnim * 50}%)`,
                borderRight: `2px solid ${COLOR_GREEN}33`,
            }}>
                <div style={{ textAlign: 'center', opacity }}>
                    <Bot size={120} color={COLOR_GREEN} />
                    <Typography text="AI AUTOMATION" fontSize={36} color={COLOR_GREEN} fontWeight={700} style={{ marginTop: 20 }} />
                    <div style={{
                        marginTop: 20,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: 10,
                    }}>
                        <Zap size={24} color={COLOR_GREEN} />
                        <Typography text="High-Speed Processing" fontSize={24} color="#fff" />
                    </div>
                </div>
            </div>

            <div style={{
                flex: 1,
                backgroundColor: '#0a1226',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                transform: `translateX(${mergeAnim * 50}%)`,
            }}>
                <div style={{ textAlign: 'center', opacity }}>
                    <UserCheck size={120} color={COLOR_GREEN} />
                    <Typography text="HUMAN GOVERNANCE" fontSize={36} color={COLOR_GREEN} fontWeight={700} style={{ marginTop: 20 }} />
                    <div style={{
                        marginTop: 20,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: 10,
                    }}>
                        <ShieldCheck size={24} color={COLOR_GREEN} />
                        <Typography text="Regulatory Authority" fontSize={24} color="#fff" />
                    </div>
                </div>
            </div>

            {/* Merged Core Icon (appears as they merge) */}
            <div style={{
                position: 'absolute',
                top: '55%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                opacity: mergeAnim,
                textAlign: 'center',
            }}>
                <div style={{
                    backgroundColor: COLOR_DARK_BLUE,
                    padding: 40,
                    borderRadius: 30,
                    border: `4px solid ${COLOR_GREEN}`,
                    boxShadow: `0 0 50px ${COLOR_GREEN}66`,
                }}>
                    <ShieldCheck size={120} color={COLOR_GREEN} />
                </div>
                <Typography text="UNIFIED SYSTEM" fontSize={48} color={COLOR_GREEN} fontWeight={700} style={{ marginTop: 30 }} />
            </div>
        </AbsoluteFill>
    );
};
