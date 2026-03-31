import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig, Audio, staticFile } from 'remotion';
import { Typography } from '../components/Typography';
import { COLOR_DARK_BLUE, COLOR_GREEN } from '../Constants';

export const Section1_Intro: React.FC = () => {
    const frame = useCurrentFrame();
    const { fps } = useVideoConfig();

    const anim = spring({
        frame,
        fps,
        config: { damping: 12, stiffness: 100 },
    });

    const scale = interpolate(anim, [0, 1], [0.8, 1]);
    const opacity = interpolate(anim, [0, 0.5], [0, 1]);

    return (
        <AbsoluteFill style={{ backgroundColor: 'transparent' }}>
            <Audio src={staticFile('audio/intro.wav')} />
            
            <div style={{
                position: 'absolute',
                width: 800,
                height: 800,
                borderRadius: '50%',
                background: `radial-gradient(circle, ${COLOR_GREEN}11 0%, transparent 70%)`,
                left: '20%',
                top: '10%',
                filter: 'blur(100px)',
            }} />

            <AbsoluteFill style={{ justifyContent: 'center', alignItems: 'center' }}>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    transform: `scale(${scale})`,
                    opacity,
                }}>
                    <Typography
                        text="RENEXT"
                        fontSize={160}
                        fontWeight={600}
                        color={COLOR_GREEN}
                        letterSpacing={-8}
                    />
                    
                    <div style={{
                        marginTop: 10,
                        display: 'flex',
                        alignItems: 'center',
                        gap: 20,
                    }}>
                        <div style={{
                            width: interpolate(anim, [0, 1], [0, 180]),
                            height: 2,
                            background: `linear-gradient(90deg, transparent, ${COLOR_GREEN})`,
                        }} />

                        <Typography
                            text="Digital Nervous System"
                            fontSize={32}
                            fontWeight={400}
                            color="#fff"
                        />

                        <div style={{
                            width: interpolate(anim, [0, 1], [0, 180]),
                            height: 2,
                            background: `linear-gradient(90deg, ${COLOR_GREEN}, transparent)`,
                        }} />
                    </div>

                    <div style={{ marginTop: 40, opacity: interpolate(frame, [20, 50], [0, 1], { extrapolateLeft: 'clamp' }) }}>
                        <Typography
                            text="For Real Estate Ecosystem"
                            fontSize={24}
                            color="#8892b0"
                            letterSpacing={2}
                        />
                    </div>
                </div>
            </AbsoluteFill>
        </AbsoluteFill>
    );
};
