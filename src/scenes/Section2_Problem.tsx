import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig, Audio, staticFile } from 'remotion';
import { Typography } from '../components/Typography';
import { COLOR_DARK_BLUE, COLOR_GREEN } from '../Constants';
import { AlertCircle, FileText, Clock, ShieldAlert } from 'lucide-react';

export const Section2_Problem: React.FC = () => {
    const frame = useCurrentFrame();
    const { fps } = useVideoConfig();

    const anim = spring({
        frame,
        fps,
        config: { damping: 15, stiffness: 200 },
    });

    const entries = [
        { id: 1, text: "Disconnected Systems", icon: AlertCircle, delay: 30 },
        { id: 2, text: "Siloed Data", icon: FileText, delay: 60 },
        { id: 3, text: "Complex Governance Layers", icon: ShieldAlert, delay: 90 },
        { id: 4, text: "Delayed Resolutions", icon: Clock, delay: 120 },
    ];

    return (
        <AbsoluteFill style={{ backgroundColor: 'transparent' }}>
            {frame >= 30 && <Audio src={staticFile('audio/problem.wav')} />}
            <AbsoluteFill style={{ padding: 100, justifyContent: 'center' }}>
                <div style={{ marginBottom: 60 }}>
                    <Typography
                        text="THE PROBLEM"
                        fontSize={48}
                        color={COLOR_GREEN}
                        fontWeight={600}
                        letterSpacing={2}
                    />
                    <div style={{
                        marginTop: 10,
                        width: interpolate(anim, [0, 1], [0, 400]),
                        height: 4,
                        background: COLOR_GREEN,
                    }} />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40 }}>
                    {entries.map((entry, index) => {
                        const entryAnim = spring({
                            frame: frame - entry.delay,
                            fps,
                            config: { damping: 10, stiffness: 150 },
                        });
                        const op = interpolate(entryAnim, [0, 1], [0, 1]);
                        const tx = interpolate(entryAnim, [0, 1], [-50, 0]);

                        return (
                            <div key={entry.id} style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: 20,
                                opacity: op,
                                transform: `translateX(${tx}px)`,
                            }}>
                                <div style={{
                                    backgroundColor: `${COLOR_DARK_BLUE}aa`,
                                    padding: 20,
                                    borderRadius: 12,
                                    border: `1px solid ${COLOR_GREEN}33`,
                                }}>
                                    <entry.icon color={COLOR_GREEN} size={48} />
                                </div>
                                <Typography
                                    text={entry.text}
                                    fontSize={32}
                                    color="#fff"
                                    fontWeight={400}
                                />
                            </div>
                        );
                    })}
                </div>

                {/* Hierarchy representation */}
                <div style={{
                    marginTop: 100,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 20,
                    opacity: interpolate(frame, [150, 180], [0, 1], { extrapolateLeft: 'clamp' }),
                }}>
                    <Typography text="State" fontSize={24} color="#8892b0" />
                    <div style={{ width: 40, height: 2, background: COLOR_GREEN }} />
                    <Typography text="District" fontSize={24} color="#8892b0" />
                    <div style={{ width: 40, height: 2, background: COLOR_GREEN }} />
                    <Typography text="Mandal" fontSize={24} color="#8892b0" />
                    <div style={{ width: 40, height: 2, background: COLOR_GREEN }} />
                    <Typography text="Village" fontSize={24} color="#8892b0" />
                </div>
            </AbsoluteFill>
        </AbsoluteFill>
    );
};
