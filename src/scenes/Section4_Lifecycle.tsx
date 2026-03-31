import React from 'react';
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion';
import { Typography } from '../components/Typography';
import { MediaPlaceholder } from '../components/MediaPlaceholder';
import { COLOR_DARK_BLUE, COLOR_GREEN } from '../Constants';
import { PlusCircle, User, DollarSign, Gavel, History, CheckCircle } from 'lucide-react';

export const Section4_Lifecycle: React.FC = () => {
    const frame = useCurrentFrame();
    const { fps } = useVideoConfig();

    const anim = spring({
        frame,
        fps,
        config: { damping: 15, stiffness: 100 },
    });

    const events = [
        { id: 1, text: "Property Creation", icon: PlusCircle, delay: 0 },
        { id: 2, text: "Ownership Establishment", icon: User, delay: 30 },
        { id: 3, text: "Sale / Rental Transactions", icon: DollarSign, delay: 60 },
        { id: 4, text: "Market-Driven Pricing", icon: DollarSign, delay: 90 },
        { id: 5, text: "Dispute Resolution", icon: Gavel, delay: 120 },
        { id: 6, text: "Immutable Audit Trail", icon: History, delay: 150 },
    ];

    // Faster rotation for the shorter duration
    const rotateAnim = interpolate(frame, [0, 30 * 30], [0, 360]);

    return (
        <AbsoluteFill style={{ backgroundColor: '#050814' }}>
            <AbsoluteFill style={{ justifyContent: 'center', alignItems: 'center' }}>
                <div style={{
                    position: 'absolute',
                    top: 100,
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    zIndex: 10,
                }}>
                    <Typography
                        text="END-TO-END PROPERTY LIFECYCLE"
                        fontSize={36}
                        color={COLOR_GREEN}
                        fontWeight={600}
                        letterSpacing={2}
                    />
                    <Typography
                        text="Powered by a Single Source of Truth"
                        fontSize={20}
                        color="#8892b0"
                        style={{ marginTop: 10 }}
                    />
                </div>

                <AbsoluteFill style={{ justifyContent: 'center', alignItems: 'center', top: 50 }}>
                   <MediaPlaceholder 
                      label="PROPERTY LIFECYCLE RECORDING"
                      type="video"
                      width="70%" 
                      height="60%"
                   />
                </AbsoluteFill>

                {/* Orbiting Icons around the MediaPlaceholder */}
                <div style={{ position: 'relative', width: 900, height: 900 }}>
                    {events.map((event, i) => {
                        const angle = (i / events.length) * Math.PI * 2 + (rotateAnim * Math.PI / 180);
                        const radius = 420;
                        const x = Math.cos(angle) * radius;
                        const y = Math.sin(angle) * radius;
                        
                        const eventAnim = spring({
                            frame: frame - event.delay,
                            fps,
                            config: { damping: 12, stiffness: 100 },
                        });
                        const op = interpolate(eventAnim, [0, 1], [0, 0.8]);
                        const sc = interpolate(eventAnim, [0, 1], [0.5, 1]);

                        return (
                            <div key={event.id} style={{
                                position: 'absolute',
                                left: 450 + x - 80,
                                top: 450 + y - 40,
                                width: 160,
                                opacity: op,
                                transform: `scale(${sc})`,
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                gap: 10,
                            }}>
                                <div style={{
                                    backgroundColor: COLOR_DARK_BLUE,
                                    padding: 12,
                                    borderRadius: '50%',
                                    border: `2px solid ${COLOR_GREEN}`,
                                    boxShadow: `0 0 20px ${COLOR_GREEN}33`,
                                }}>
                                    <event.icon size={28} color={COLOR_GREEN} />
                                </div>
                                <Typography text={event.text} fontSize={16} color="#fff" fontWeight={400} style={{ textAlign: 'center' }} />
                            </div>
                        );
                    })}
                </div>
            </AbsoluteFill>
        </AbsoluteFill>
    );
};
