import React from 'react';
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion';
import { Typography } from '../components/Typography';
import { COLOR_DARK_BLUE, COLOR_GREEN } from '../Constants';
import { ShieldCheck, User, PenTool, Database, DollarSign, CheckCircle } from 'lucide-react';

export const Section7_ZeroTrust: React.FC = () => {
    const frame = useCurrentFrame();
    const { fps } = useVideoConfig();

    const anim = spring({
        frame,
        fps,
        config: { damping: 15, stiffness: 100 },
    });

    const steps = [
        { id: 1, text: "Price Validation", icon: ShieldCheck, delay: 60 },
        { id: 2, text: "Digital Signature", icon: PenTool, delay: 180 },
        { id: 3, text: "Escrow Allocation", icon: DollarSign, delay: 300 },
        { id: 4, text: "Immutable Audit Trail", icon: Database, delay: 420 },
    ];

    return (
        <AbsoluteFill style={{ backgroundColor: '#050814' }}>
            <AbsoluteFill style={{ padding: 80, justifyContent: 'center' }}>
                <div style={{ marginBottom: 40 }}>
                    <Typography
                        text="ZERO-TRUST TRANSACTION"
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

                {/* Stakeholder Flow */}
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: 100,
                    opacity: interpolate(frame, [0, 30], [0, 1]),
                }}>
                    <div className="flex flex-col items-center gap-4">
                        <User size={64} color={COLOR_GREEN} />
                        <Typography text="OWNER" fontSize={24} color="#fff" fontWeight={600} />
                    </div>
                    <div style={{ width: 100, height: 2, background: COLOR_GREEN, opacity: 0.3 }} />
                    <div className="flex flex-col items-center gap-4">
                        <User size={64} color="#8892b0" />
                        <Typography text="AGENT" fontSize={24} color="#8892b0" fontWeight={600} />
                    </div>
                    <div style={{ width: 100, height: 2, background: COLOR_GREEN, opacity: 0.3 }} />
                    <div className="flex flex-col items-center gap-4">
                        <User size={64} color={COLOR_GREEN} />
                        <Typography text="BUYER" fontSize={24} color="#fff" fontWeight={600} />
                    </div>
                </div>

                {/* Validation Pipeline */}
                <div style={{ display: 'flex', gap: 20 }}>
                    {steps.map((step, index) => {
                        const stepAnim = spring({
                            frame: frame - step.delay,
                            fps,
                            config: { damping: 12, stiffness: 100 },
                        });
                        const op = interpolate(stepAnim, [0, 1], [0, 1]);
                        const tx = interpolate(stepAnim, [0, 1], [-20, 0]);

                        return (
                            <div key={step.id} style={{
                                flex: 1,
                                backgroundColor: `${COLOR_DARK_BLUE}cc`,
                                padding: 30,
                                borderRadius: 16,
                                border: `1px solid ${COLOR_GREEN}44`,
                                opacity: op,
                                transform: `translateX(${tx}px)`,
                                position: 'relative',
                            }}>
                                <step.icon size={48} color={COLOR_GREEN} />
                                <Typography text={step.text} fontSize={20} color="#fff" fontWeight={500} style={{ marginTop: 20 }} />
                                
                                {index < steps.length - 1 && (
                                    <div style={{
                                        position: 'absolute',
                                        right: -10,
                                        top: '50%',
                                        width: 20,
                                        height: 2,
                                        background: COLOR_GREEN,
                                        opacity: 0.5,
                                    }} />
                                )}
                            </div>
                        );
                    })}
                </div>

                <div style={{
                    marginTop: 60,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 15,
                    opacity: interpolate(frame, [600, 630], [0, 1]),
                }}>
                    <CheckCircle size={40} color={COLOR_GREEN} />
                    <Typography text="COMPLETED & REGISTERED" fontSize={32} color={COLOR_GREEN} fontWeight={700} />
                </div>
            </AbsoluteFill>
        </AbsoluteFill>
    );
};
