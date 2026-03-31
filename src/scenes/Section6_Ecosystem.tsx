import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig, Audio, staticFile } from 'remotion';
import { Typography } from '../components/Typography';
import { COLOR_DARK_BLUE, COLOR_GREEN } from '../Constants';
import { Building2, User, Landmark, ShieldCheck } from 'lucide-react';

export const Section6_Ecosystem: React.FC = () => {
    const frame = useCurrentFrame();
    const { fps } = useVideoConfig();

    const anim = spring({
        frame,
        fps,
        config: { damping: 12, stiffness: 100 },
    });

    const mergeAnim = spring({
        frame: frame - 180,
        fps,
        config: { damping: 15, stiffness: 100 },
    });

    const groups = [
        { id: 1, name: "GOVERNMENT", icon: Landmark, delay: 0 },
        { id: 2, name: "CITIZENS", icon: User, delay: 30 },
        { id: 3, name: "COMMERCIAL", icon: Building2, delay: 60 },
    ];

    return (
        <AbsoluteFill style={{ backgroundColor: '#050814' }}>
            {frame >= 30 && <Audio src={staticFile('audio/ecosystem.wav')} />}
            <AbsoluteFill style={{ justifyContent: 'center', alignItems: 'center' }}>
                <div style={{ position: 'relative', width: 800, height: 800 }}>
                    {/* Unified Hub appearing in the center */}
                    <div style={{
                        position: 'absolute',
                        left: 400 - 100,
                        top: 400 - 100,
                        width: 200,
                        height: 200,
                        backgroundColor: COLOR_DARK_BLUE,
                        borderRadius: '50%',
                        border: `4px solid ${COLOR_GREEN}`,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        zIndex: 100,
                        opacity: mergeAnim,
                        boxShadow: `0 0 50px ${COLOR_GREEN}88`,
                    }}>
                        <ShieldCheck size={80} color={COLOR_GREEN} />
                    </div>

                    {groups.map((group, i) => {
                        const angle = (i / groups.length) * Math.PI * 2 - Math.PI / 2;
                        const dist = interpolate(mergeAnim, [0, 1], [300, 0]);
                        const x = Math.cos(angle) * dist;
                        const y = Math.sin(angle) * dist;

                        const op = interpolate(anim, [0, 0.5], [0, 1]);

                        return (
                            <div key={group.id} style={{
                                position: 'absolute',
                                left: 400 + x - 125,
                                top: 400 + y - 125,
                                width: 250,
                                height: 250,
                                backgroundColor: `${COLOR_DARK_BLUE}aa`,
                                borderRadius: '50%',
                                border: `2px solid ${COLOR_GREEN}33`,
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'center',
                                opacity: op,
                                zIndex: 50,
                            }}>
                                <group.icon size={64} color={COLOR_GREEN} />
                                <Typography text={group.name} fontSize={24} color="#fff" fontWeight={600} style={{ marginTop: 15 }} />
                            </div>
                        );
                    })}
                </div>

                <div style={{ position: 'absolute', bottom: 100, opacity: interpolate(frame, [60, 90], [0, 1]) }}>
                    <Typography
                        text="UNIFIED ECOSYSTEM"
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
