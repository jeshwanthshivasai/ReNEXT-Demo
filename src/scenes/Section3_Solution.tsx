import React from 'react';
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion';
import { Typography } from '../components/Typography';
import { COLOR_DARK_BLUE, COLOR_GREEN } from '../Constants';
import { ShieldCheck, Network, Database, Users } from 'lucide-react';

export const Section3_Solution: React.FC = () => {
    const frame = useCurrentFrame();
    const { fps } = useVideoConfig();

    const anim = spring({
        frame,
        fps,
        config: { damping: 12, stiffness: 100 },
    });

    const scale = interpolate(anim, [0, 1], [0.5, 1]);
    const opacity = interpolate(anim, [0, 0.5], [0, 1]);

    const stakeholders = ["Govt", "Citizens", "Commercial", "Agents", "Mandal", "District"];

    return (
        <AbsoluteFill style={{ backgroundColor: '#050814' }}>
            <AbsoluteFill style={{ justifyContent: 'center', alignItems: 'center' }}>
                <div style={{
                    position: 'relative',
                    width: 400,
                    height: 400,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    transform: `scale(${scale})`,
                    opacity,
                }}>
                    {/* Glowing Core */}
                    <div style={{
                        position: 'absolute',
                        width: 200,
                        height: 200,
                        borderRadius: '50%',
                        background: `radial-gradient(circle, ${COLOR_GREEN}44 0%, transparent 70%)`,
                        filter: 'blur(30px)',
                        animation: 'pulse 2s infinite',
                    }} />

                    <div style={{
                        width: 160,
                        height: 160,
                        backgroundColor: COLOR_DARK_BLUE,
                        borderRadius: '50%',
                        border: `4px solid ${COLOR_GREEN}`,
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        zIndex: 10,
                        boxShadow: `0 0 40px ${COLOR_GREEN}66`,
                    }}>
                        <ShieldCheck size={64} color={COLOR_GREEN} />
                        <Typography text="ReNEXT" fontSize={24} color={COLOR_GREEN} fontWeight={700} />
                    </div>

                    {/* Connecting Stakeholders */}
                    {stakeholders.map((name, i) => {
                        const angle = (i / stakeholders.length) * Math.PI * 2;
                        const dist = interpolate(anim, [0, 1], [0, 300]);
                        const x = Math.cos(angle) * dist;
                        const y = Math.sin(angle) * dist;

                        return (
                            <div key={name} style={{
                                position: 'absolute',
                                transform: `translate(${x}px, ${y}px)`,
                                opacity: anim,
                            }}>
                                <div style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    gap: 8,
                                    backgroundColor: `${COLOR_DARK_BLUE}cc`,
                                    padding: '12px 24px',
                                    borderRadius: 30,
                                    border: `1px solid ${COLOR_GREEN}44`,
                                }}>
                                    <div style={{ fontSize: 18, color: '#fff', fontWeight: 500 }}>{name}</div>
                                </div>
                                <div style={{
                                    position: 'absolute',
                                    top: 20,
                                    left: 40,
                                    width: 200,
                                    height: 2,
                                    background: `linear-gradient(90deg, ${COLOR_GREEN}, transparent)`,
                                    transformOrigin: 'left',
                                    transform: `rotate(${angle + Math.PI}rad) scaleX(${dist / 300})`,
                                    opacity: 0.3,
                                }} />
                            </div>
                        );
                    })}
                </div>

                <div style={{ marginTop: 250, opacity: interpolate(frame, [60, 90], [0, 1]) }}>
                    <Typography
                        text="A UNIFIED DIGITAL NERVOUS SYSTEM"
                        fontSize={32}
                        color={COLOR_GREEN}
                        fontWeight={600}
                        letterSpacing={2}
                    />
                </div>
            </AbsoluteFill>
        </AbsoluteFill>
    );
};
