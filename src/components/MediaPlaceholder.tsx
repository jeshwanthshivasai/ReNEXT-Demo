import React from 'react';
import { AbsoluteFill, interpolate, useCurrentFrame, useVideoConfig, Video, Img, Series } from 'remotion';
import { COLOR_DARK_BLUE, COLOR_GREEN } from '../Constants';

interface MediaPlaceholderProps {
    src?: string;
    type?: 'image' | 'video';
    label?: string;
    width?: number | string;
    height?: number | string;
    borderRadius?: number;
    delay?: number;
    disableAnimation?: boolean;
    trimStart?: number; // Relative frame to start skipping
    trimEnd?: number;   // Relative frame to end the skip
}

export const MediaPlaceholder: React.FC<MediaPlaceholderProps> = ({
    src,
    type = 'image',
    label = 'APP SCREEN RECORDING',
    width = '90%',
    height = '80%',
    borderRadius = 20,
    delay = 0,
    disableAnimation = false,
    trimStart,
    trimEnd,
}) => {
    const frame = useCurrentFrame();
    const { fps } = useVideoConfig();

    const opacity = disableAnimation ? 1 : interpolate(frame - delay, [0, 20], [0, 1], { extrapolateLeft: 'clamp' });
    const scale = disableAnimation ? 1 : interpolate(frame - delay, [0, 40], [0.95, 1], { extrapolateLeft: 'clamp' });

    return (
        <div style={{
            width,
            height,
            backgroundColor: `${COLOR_DARK_BLUE}ee`,
            borderRadius,
            border: `1px solid ${COLOR_GREEN}55`, // Thinner, more precise glass border
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
            position: 'relative',
            opacity,
            transform: `scale(${scale})`,
            boxShadow: `
                0 30px 100px rgba(0,0,0,0.8), 
                0 0 40px ${COLOR_GREEN}15,
                inset 0 0 20px rgba(255,255,255,0.05)
            `, // Deep 3D Shadow + Internal Glow
        }}>
            {/* Premium Browser Header Mockup */}
            <div style={{
                height: 40,
                width: '100%',
                backgroundColor: 'rgba(255,255,255,0.08)',
                borderBottom: '1px solid rgba(255,255,255,0.15)',
                display: 'flex',
                alignItems: 'center',
                padding: '0 15px',
                gap: 8,
                zIndex: 20,
                flexShrink: 0,
            }}>
                <div style={{ width: 10, height: 10, borderRadius: '50%', backgroundColor: '#ff5f56' }} />
                <div style={{ width: 10, height: 10, borderRadius: '50%', backgroundColor: '#ffbd2e' }} />
                <div style={{ width: 10, height: 10, borderRadius: '50%', backgroundColor: '#27c93f' }} />
                
                {/* Minimal Address Bar */}
                <div style={{
                    marginLeft: 20,
                    flex: 1,
                    height: 24,
                    backgroundColor: 'rgba(255,255,255,0.05)',
                    borderRadius: 12,
                    border: '1px solid rgba(255,255,255,0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    padding: '0 10px',
                    color: 'rgba(255,255,255,0.3)',
                    fontSize: 10,
                    fontFamily: 'sans-serif',
                }}>
                    renext.com/portal
                </div>
            </div>

            {/* Media Content Area (Positioned below the header) */}
            <div style={{ 
                flex: 1, 
                position: 'relative', 
                backgroundColor: '#000',
                width: '100%',
                height: 'calc(100% - 40px)',
            }}>
                {src ? (
                    type === 'video' ? (
                        trimStart !== undefined && trimEnd !== undefined ? (
                            <Series>
                                {trimStart > 0 && (
                                    <Series.Sequence durationInFrames={trimStart}>
                                        <Video src={src} muted style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                                    </Series.Sequence>
                                )}
                                <Series.Sequence durationInFrames={100000}> {/* Excess duration handled by parent sequence */}
                                    <Video 
                                        src={src} 
                                        muted 
                                        startFrom={trimEnd + 1} 
                                        style={{ width: '100%', height: '100%', objectFit: 'contain' }} 
                                    />
                                </Series.Sequence>
                            </Series>
                        ) : (
                            <Video src={src} muted style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                        )
                    ) : (
                        <Img src={src} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                    )
                ) : (
                    <AbsoluteFill style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        background: `linear-gradient(135deg, ${COLOR_DARK_BLUE} 0%, #0a1226 100%)`,
                    }}>
                        <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            gap: 20
                        }}>
                            <div style={{
                                width: 80,
                                height: 80,
                                borderRadius: '50%',
                                border: `2px dashed ${COLOR_GREEN}`,
                                opacity: 0.5,
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                color: COLOR_GREEN,
                                fontSize: 40
                            }}>
                                +
                            </div>
                            <div style={{
                                color: COLOR_GREEN,
                                fontSize: 24,
                                fontWeight: 600,
                                letterSpacing: 2,
                                opacity: 0.8,
                                textAlign: 'center',
                                fontFamily: 'Inter, sans-serif'
                            }}>
                                 {label}<br/>
                                <span style={{ fontSize: 14, fontWeight: 400, opacity: 0.6 }}>
                                    (Drop asset in public/assets/screens/)
                                </span>
                            </div>
                        </div>
                    </AbsoluteFill>
                )}
            </div>
        </div>
    );
};
