import React from 'react';
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion';
import { Typography } from '../components/Typography';
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
        { id: 1, text: "Property Creation", icon: PlusCircle, delay: 30 },
        { id: 2, text: "Ownership Establishment", icon: User, delay: 90 },
        { id: 3, text: "Sale / Rental Transactions", icon: DollarSign, delay: 150 },
        { id: 4, text: "Market-Driven Pricing", icon: DollarSign, delay: 210 },
        { id: 5, text: "Dispute Resolution", icon: Gavel, delay: 270 },
        { id: 6, text: "Immutable Audit Trail", icon: History, delay: 330 },
    ];

    const rotateAnim = interpolate(frame, [0, 40 * 30], [0, 360]);

    return (
        <AbsoluteFill style={{ backgroundColor: '#050814' }}>
            <AbsoluteFill style={{ justifyContent: 'center', alignItems: 'center' }}>
                {/* Central Immutable Record */}
                <div style={{
                    width: 280,
                    height: 280,
                    backgroundColor: COLOR_DARK_BLUE,
                    borderRadius: 20,
                    border: `4px solid ${COLOR_GREEN}`,
                    boxShadow: `0 0 50px ${COLOR_GREEN}44`,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    zIndex: 100,
                }}>
                    <CheckCircle size={80} color={COLOR_GREEN} />
                    <Typography text="STATIC RECORD" fontSize={24} color="#fff" fontWeight={700} style={{ marginTop: 10 }} />
                </div>

                <div style={{ position: 'relative', width: 800, height: 800 }}>
                    {events.map((event, i) => {
                        const angle = (i / events.length) * Math.PI * 2 + (rotateAnim * Math.PI / 180);
                        const radius = 350;
                        const x = Math.cos(angle) * radius;
                        const y = Math.sin(angle) * radius;
                        
                        const eventAnim = spring({
                            frame: frame - event.delay,
                            fps,
                            config: { damping: 12, stiffness: 100 },
                        });
                        const op = interpolate(eventAnim, [0, 1], [0, 1]);
                        const sc = interpolate(eventAnim, [0, 1], [0.5, 1]);

                        return (
                            <div key={event.id} style={{
                                position: 'absolute',
                                left: 400 + x - 100,
                                top: 400 + y - 50,
                                width: 200,
                                opacity: op,
                                transform: `scale(${sc})`,
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                gap: 10,
                            }}>
                                <div style={{
                                    backgroundColor: COLOR_DARK_BLUE,
                                    padding: 15,
                                    borderRadius: '50%',
                                    border: `2px solid ${COLOR_GREEN}`,
                                }}>
                                    <event.icon size={32} color={COLOR_GREEN} />
                                </div>
                                <Typography text={event.text} fontSize={18} color="#fff" fontWeight={400} style={{ textAlign: 'center' }} />
                                
                                {/* Connection Line to Center */}
                                <div style={{
                                    position: 'absolute',
                                    top: 30,
                                    left: 100,
                                    width: radius - 140,
                                    height: 1,
                                    background: COLOR_GREEN,
                                    opacity: 0.2,
                                    transformOrigin: 'left',
                                    transform: `rotate(${angle + Math.PI}rad)`,
                                }} />
                            </div>
                        );
                    })}
                </div>

                <div style={{ position: 'absolute', bottom: 100, width: '100%', display: 'flex', justifyContent: 'center' }}>
                    <Typography
                        text="END-TO-END PROPERTY LIFECYCLE"
                        fontSize={36}
                        color={COLOR_GREEN}
                        fontWeight={600}
                        letterSpacing={2}
                    />
                </div>
            </AbsoluteFill>
        </AbsoluteFill>
    );
};
