import React from 'react';
import { AbsoluteFill, interpolate, useCurrentFrame, useVideoConfig, Video, Img } from 'remotion';
import { COLOR_DARK_BLUE, COLOR_GREEN } from '../Constants';

interface MediaPlaceholderProps {
    src?: string;
    type?: 'image' | 'video';
    label?: string;
    width?: number | string;
    height?: number | string;
    borderRadius?: number;
    delay?: number;
}

export const MediaPlaceholder: React.FC<MediaPlaceholderProps> = ({
    src,
    type = 'image',
    label = 'APP SCREEN RECORDING',
    width = '90%',
    height = '80%',
    borderRadius = 20,
    delay = 0,
}) => {
    const frame = useCurrentFrame();
    const { fps } = useVideoConfig();

    const opacity = interpolate(frame - delay, [0, 20], [0, 1], { extrapolateLeft: 'clamp' });
    const scale = interpolate(frame - delay, [0, 40], [0.95, 1], { extrapolateLeft: 'clamp' });

    return (
        <div style={{
            width,
            height,
            backgroundColor: `${COLOR_DARK_BLUE}ee`,
            borderRadius,
            border: `3px solid ${COLOR_GREEN}44`,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            overflow: 'hidden',
            position: 'relative',
            opacity,
            transform: `scale(${scale})`,
            boxShadow: `0 20px 50px rgba(0,0,0,0.5), 0 0 30px ${COLOR_GREEN}22`,
        }}>
            {src ? (
                type === 'video' ? (
                    <Video src={src} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                ) : (
                    <Img src={src} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
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
                            width: 100,
                            height: 100,
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
                                (Place asset in public/assets/screens/)
                            </span>
                        </div>
                    </div>
                </AbsoluteFill>
            )}

            {/* Premium Browser Header Mockup */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: 40,
                backgroundColor: 'rgba(255,255,255,0.05)',
                borderBottom: '1px solid rgba(255,255,255,0.1)',
                display: 'flex',
                alignItems: 'center',
                padding: '0 20px',
                gap: 8
            }}>
                <div style={{ width: 10, height: 10, borderRadius: '50%', backgroundColor: '#ff5f56' }} />
                <div style={{ width: 10, height: 10, borderRadius: '50%', backgroundColor: '#ffbd2e' }} />
                <div style={{ width: 10, height: 10, borderRadius: '50%', backgroundColor: '#27c93f' }} />
            </div>
        </div>
    );
};
