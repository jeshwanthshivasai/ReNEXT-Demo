import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig, Audio, staticFile } from 'remotion';
import { Typography } from '../components/Typography';
import { COLOR_DARK_BLUE, COLOR_GREEN } from '../Constants';
import { Gavel, ArrowUp, CheckCircle, ShieldIcon } from 'lucide-react';

export const Section8_Dispute: React.FC = () => {
    const frame = useCurrentFrame();
    const { fps } = useVideoConfig();

    const anim = spring({
        frame,
        fps,
        config: { damping: 12, stiffness: 100 },
    });

    const escalations = [
        { id: 1, text: "Village Level", color: `${COLOR_GREEN}44`, delay: 0 },
        { id: 2, text: "Mandal Level", color: `${COLOR_GREEN}66`, delay: 20 },
        { id: 3, text: "District Level", color: `${COLOR_GREEN}88`, delay: 40 },
        { id: 4, text: "State Level", color: COLOR_GREEN, delay: 60 },
    ];

    return (
        <AbsoluteFill style={{ backgroundColor: '#050814' }}>
            {frame >= 30 && <Audio src={staticFile('audio/dispute.wav')} />}
            <AbsoluteFill style={{ justifyContent: 'center', alignItems: 'center' }}>
                <div style={{ position: 'absolute', top: 100, textAlign: 'center' }}>
                    <Typography
                        text="DISPUTE RESOLUTION ENGINE"
                        fontSize={36}
                        color={COLOR_GREEN}
                        fontWeight={600}
                        letterSpacing={2}
                    />
                    <Typography
                        text="Automated, Rapid Escalation"
                        fontSize={20}
                        color="#8892b0"
                        style={{ marginTop: 10 }}
                    />
                </div>

                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: 30,
                    width: 600,
                    marginTop: 100,
                }}>
                    {escalations.map((level, i) => {
                        const levelAnim = spring({
                            frame: frame - level.delay,
                            fps,
                            config: { damping: 15, stiffness: 100 },
                        });
                        const y = interpolate(levelAnim, [0, 1], [30, 0]);
                        const op = interpolate(levelAnim, [0, 1], [0, 1]);

                        return (
                            <div key={level.id} style={{
                                width: '100%',
                                display: 'flex',
                                alignItems: 'center',
                                gap: 20,
                                opacity: op,
                                transform: `translateY(${y}px)`,
                            }}>
                                <div style={{
                                    backgroundColor: level.color,
                                    width: 100,
                                    height: 10,
                                    borderRadius: 5,
                                    boxShadow: `0 0 20px ${level.color}44`,
                                }} />
                                <div style={{
                                    flex: 1,
                                    backgroundColor: COLOR_DARK_BLUE,
                                    padding: '15px 30px',
                                    borderRadius: 12,
                                    border: `1px solid ${COLOR_GREEN}22`,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                }}>
                                    <Typography text={level.text} fontSize={20} color="#fff" fontWeight={500} />
                                    {i < escalations.length - 1 && <ArrowUp size={20} color={COLOR_GREEN} />}
                                    {i === escalations.length - 1 && <CheckCircle size={20} color={COLOR_GREEN} />}
                                </div>
                            </div>
                        );
                    })}
                </div>

                <div style={{
                    marginTop: 60,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 15,
                    backgroundColor: `${COLOR_GREEN}11`,
                    padding: '10px 25px',
                    borderRadius: 30,
                    border: `1px solid ${COLOR_GREEN}44`,
                    opacity: interpolate(frame, [100, 130], [0, 1]),
                }}>
                    <ShieldIcon size={24} color={COLOR_GREEN} />
                    <Typography text="Powered by Immutable Records" fontSize={18} color={COLOR_GREEN} fontWeight={500} />
                </div>
            </AbsoluteFill>
        </AbsoluteFill>
    );
};
