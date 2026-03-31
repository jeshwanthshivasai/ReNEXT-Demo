import React from 'react';
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig, Audio, staticFile } from 'remotion';
import { Typography } from '../components/Typography';
import { MediaPlaceholder } from '../components/MediaPlaceholder';
import { COLOR_DARK_BLUE, COLOR_GREEN } from '../Constants';
import { ShieldCheck, FileText, Lock, Key, Signature } from 'lucide-react';

export const Section7_ZeroTrust: React.FC = () => {
    const frame = useCurrentFrame();
    const { fps } = useVideoConfig();

    const steps = [
        { id: 1, text: "Price Validation", icon: FileText, delay: 0 },
        { id: 2, text: "Digital Signatures", icon: Signature, delay: 30 },
        { id: 3, text: "Escrow & Payment", icon: Lock, delay: 60 },
        { id: 4, text: "Final Registration", icon: Key, delay: 90 },
    ];

    return (
        <AbsoluteFill style={{ backgroundColor: '#050814' }}>
            {frame >= 30 && <Audio src={staticFile('audio/zero_trust.wav')} />}
            <AbsoluteFill style={{ justifyContent: 'center', alignItems: 'center' }}>
                <div style={{ position: 'absolute', top: 100, textAlign: 'center' }}>
                    <Typography
                        text="ZERO-TRUST TRANSACTION FLOW"
                        fontSize={36}
                        color={COLOR_GREEN}
                        fontWeight={600}
                        letterSpacing={2}
                    />
                    <Typography
                        text="Secure, Immutable, Verifiable"
                        fontSize={20}
                        color="#8892b0"
                        style={{ marginTop: 10 }}
                    />
                </div>

                <div style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: 40,
                    width: '90%',
                    height: '60%',
                    marginTop: 50,
                }}>
                    <div style={{ flex: 1.5 }}>
                        <MediaPlaceholder 
                           label="TRANSACTION FLOW RECORDING"
                           type="video"
                        />
                    </div>

                    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 20 }}>
                        {steps.map((step, i) => {
                            const stepAnim = spring({
                                frame: frame - step.delay,
                                fps,
                                config: { damping: 15, stiffness: 100 },
                            });
                            const x = interpolate(stepAnim, [0, 1], [50, 0]);
                            const op = interpolate(stepAnim, [0, 1], [0, 1]);

                            return (
                                <div key={step.id} style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 20,
                                    backgroundColor: `${COLOR_DARK_BLUE}ee`,
                                    padding: '20px 30px',
                                    borderRadius: 16,
                                    border: `1px solid ${COLOR_GREEN}44`,
                                    opacity: op,
                                    transform: `translateX(${x}px)`,
                                    boxShadow: `0 4px 20px rgba(0,0,0,0.3)`,
                                }}>
                                    <div style={{
                                        backgroundColor: `${COLOR_GREEN}22`,
                                        padding: 10,
                                        borderRadius: 12,
                                    }}>
                                        <step.icon size={32} color={COLOR_GREEN} />
                                    </div>
                                    <Typography text={step.text} fontSize={22} color="#fff" fontWeight={500} />
                                    <div style={{ marginLeft: 'auto' }}>
                                        <ShieldCheck size={24} color={COLOR_GREEN} opacity={stepAnim} />
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </AbsoluteFill>
        </AbsoluteFill>
    );
};
