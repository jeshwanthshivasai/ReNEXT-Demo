import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig, Audio, staticFile } from 'remotion';
import { Typography } from '../components/Typography';
import { COLOR_DARK_BLUE, COLOR_GREEN } from '../Constants';
import { ShieldCheck, Zap, Users, Globe } from 'lucide-react';

export const Section10_Benefits: React.FC = () => {
    const frame = useCurrentFrame();
    const { fps } = useVideoConfig();

    const benefits = [
        { id: 1, title: "Unwavering Trust", desc: "Immutable records for every parcel.", icon: ShieldCheck, delay: 0 },
        { id: 2, title: "Accelerated Speed", desc: "Days to minutes for registrations.", icon: Zap, delay: 20 },
        { id: 3, title: "Unified Ecosystem", desc: "Seamless cross-department flow.", icon: Users, delay: 40 },
        { id: 4, title: "Automated Compliance", desc: "Zero-Trust policy enforcement.", icon: Globe, delay: 60 },
    ];

    return (
        <AbsoluteFill style={{ backgroundColor: 'transparent' }}>
            {frame >= 30 && <Audio src={staticFile('audio/benefits.wav')} />}
            <AbsoluteFill style={{ justifyContent: 'center', alignItems: 'center', padding: 80 }}>
                <div style={{ marginBottom: 80, textAlign: 'center' }}>
                    <Typography
                        text="WHY RENEXT?"
                        fontSize={48}
                        color={COLOR_GREEN}
                        fontWeight={700}
                        letterSpacing={4}
                    />
                    <Typography
                        text="The Standard for Data-Driven Governance"
                        fontSize={24}
                        color="#8892b0"
                    />
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: 40,
                    width: '100%',
                }}>
                    {benefits.map((benefit, i) => {
                        const benefitAnim = spring({
                            frame: frame - benefit.delay,
                            fps,
                            config: { damping: 15, stiffness: 100 },
                        });
                        const op = interpolate(benefitAnim, [0, 1], [0, 1]);
                        const x = interpolate(benefitAnim, [0, 1], [50, 0]);

                        return (
                            <div key={benefit.id} style={{
                                backgroundColor: `${COLOR_DARK_BLUE}ee`,
                                padding: '30px 40px',
                                borderRadius: 24,
                                borderLeft: `6px solid ${COLOR_GREEN}`,
                                opacity: op,
                                transform: `translateX(${x}px)`,
                                display: 'flex',
                                alignItems: 'center',
                                gap: 30,
                            }}>
                                <div style={{
                                    backgroundColor: `${COLOR_GREEN}11`,
                                    padding: 20,
                                    borderRadius: '50%',
                                }}>
                                    <benefit.icon size={48} color={COLOR_GREEN} />
                                </div>
                                <div style={{ flex: 1 }}>
                                    <Typography text={benefit.title} fontSize={28} color="#fff" fontWeight={600} />
                                    <Typography text={benefit.desc} fontSize={18} color="#8892b0" fontWeight={400} />
                                </div>
                            </div>
                        );
                    })}
                </div>
            </AbsoluteFill>
        </AbsoluteFill>
    );
};
