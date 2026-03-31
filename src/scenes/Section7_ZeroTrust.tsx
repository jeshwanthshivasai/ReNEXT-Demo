import React from 'react';
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion';
import { Typography } from '../components/Typography';
import { MediaPlaceholder } from '../components/MediaPlaceholder';
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
        { id: 1, text: "Price Validation", icon: ShieldCheck, delay: 30 },
        { id: 2, text: "Digital Signature", icon: PenTool, delay: 90 },
        { id: 3, text: "Escrow Allocation", icon: DollarSign, delay: 150 },
        { id: 4, text: "Immutable Audit Trail", icon: Database, delay: 210 },
    ];

    return (
        <AbsoluteFill style={{ backgroundColor: '#050814' }}>
            <AbsoluteFill style={{ padding: 40, justifyContent: 'center', alignItems: 'center' }}>
                <div style={{ marginBottom: 20, zIndex: 100 }}>
                    <Typography
                        text="ZERO-TRUST TRANSACTION"
                        fontSize={40}
                        color={COLOR_GREEN}
                        fontWeight={600}
                        letterSpacing={2}
                    />
                    <div style={{
                        marginTop: 10,
                        width: interpolate(anim, [0, 1], [0, 500]),
                        height: 4,
                        background: COLOR_GREEN,
                    }} />
                </div>

                <div style={{ display: 'flex', width: '100%', height: '70%', gap: 30 }}>
                    {/* App Recording Placeholder */}
                    <div style={{ flex: 1.5, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <MediaPlaceholder 
                            label="TRANSACTION SYSTEM RECORDING"
                            type="video"
                            width="100%" 
                            height="100%"
                        />
                    </div>

                    {/* Step-by-Step Validation List */}
                    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 15, justifyContent: 'center' }}>
                        {steps.map((step, index) => {
                            const stepAnim = spring({
                                frame: frame - step.delay,
                                fps,
                                config: { damping: 12, stiffness: 100 },
                            });
                            const op = interpolate(stepAnim, [0, 1], [0, 1]);
                            const tx = interpolate(stepAnim, [0, 1], [30, 0]);

                            return (
                                <div key={step.id} style={{
                                    backgroundColor: `${COLOR_DARK_BLUE}cc`,
                                    padding: 20,
                                    borderRadius: 16,
                                    border: `1px solid ${COLOR_GREEN}44`,
                                    opacity: op,
                                    transform: `translateX(${tx}px)`,
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 15
                                }}>
                                    <step.icon size={32} color={COLOR_GREEN} />
                                    <Typography text={step.text} fontSize={18} color="#fff" fontWeight={500} />
                                </div>
                            );
                        })}

                        <div style={{
                            marginTop: 20,
                            display: 'flex',
                            alignItems: 'center',
                            gap: 15,
                            opacity: interpolate(frame, [350, 380], [0, 1]),
                        }}>
                            <CheckCircle size={32} color={COLOR_GREEN} />
                            <Typography text="COMPLETED & REGISTERED" fontSize={24} color={COLOR_GREEN} fontWeight={700} />
                        </div>
                    </div>
                </div>
            </AbsoluteFill>
        </AbsoluteFill>
    );
};
