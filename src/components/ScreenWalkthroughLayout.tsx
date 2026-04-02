import React from 'react';
import { AbsoluteFill, interpolate, useCurrentFrame, useVideoConfig } from 'remotion';
import { Typography } from './Typography';
import { MediaPlaceholder } from './MediaPlaceholder';
import { COLOR_GREEN, COLOR_DARK_BLUE } from '../Constants';

interface ScreenWalkthroughLayoutProps {
    title: string;
    subtitle?: string;
    videoSrc: string;
    label: string;
    badgeText?: string;
    rotationY?: number;
    trimStart?: number;
    trimEnd?: number;
}

export const ScreenWalkthroughLayout: React.FC<ScreenWalkthroughLayoutProps> = ({
    title,
    subtitle,
    videoSrc,
    label,
    badgeText = "LIVE INTERFACE",
    rotationY = -5, // Subtle 3D skew
    trimStart,
    trimEnd,
}) => {
    const frame = useCurrentFrame();
    const { fps } = useVideoConfig();

    const entrance = 1; // Animation removed per request
    const scale = 1;
    const blur = 0;

    // Standardized window sizing
    const windowWidth = 1350; 
    const windowHeight = (windowWidth * (1080 / 1920)) + 40;

    return (
        <AbsoluteFill style={{ backgroundColor: 'transparent' }}>
            
            {/* 1. Ambient Background Halo */}
            <div style={{
                position: 'absolute',
                width: 1000,
                height: 800,
                borderRadius: '50%',
                background: `radial-gradient(circle, ${COLOR_GREEN}15 0%, transparent 70%)`,
                left: '50%',
                top: '50%',
                transform: `translate(-50%, -40%) scale(${1 + (entrance * 0.2)})`,
                filter: 'blur(100px)',
                opacity: entrance * 0.6,
                zIndex: 1,
            }} />

            {/* 2. Premium Header */}
            <div style={{
                position: 'absolute',
                top: 80,
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                zIndex: 50,
                opacity: entrance,
                transform: `translateY(${interpolate(entrance, [0, 1], [-20, 0])}px)`,
            }}>
                <Typography
                    text={title}
                    fontSize={42}
                    color={COLOR_GREEN}
                    fontWeight={700}
                    letterSpacing={2}
                />
                {subtitle && (
                    <Typography
                        text={subtitle}
                        fontSize={20}
                        color="#8892b0"
                        style={{ marginTop: 10, opacity: 0.8 }}
                    />
                )}
            </div>

            {/* 3. Flat Container (3D removed per request) */}
            <AbsoluteFill style={{ 
                justifyContent: 'center', 
                alignItems: 'center', 
                top: 100, // Balanced offset from header
                zIndex: 10,
            }}>
                
                {/* Main Flat Framed Media */}
                <div style={{
                    width: windowWidth,
                    height: windowHeight,
                    transform: `scale(${scale})`,
                    filter: `blur(${blur}px)`,
                    transition: 'transform 0.1s ease-out',
                }}>
                    <MediaPlaceholder 
                        src={videoSrc}
                        label={label}
                        type="video"
                        width="100%" 
                        height="100%"
                        disableAnimation={true} // Animation handled by layout
                        trimStart={trimStart}
                        trimEnd={trimEnd}
                    />

                    {/* Bottom Reflection Glow (Simulated) */}
                    <div style={{
                        position: 'absolute',
                        bottom: -40,
                        left: '10%',
                        right: '10%',
                        height: 20,
                        background: `linear-gradient(to bottom, ${COLOR_GREEN}11, transparent)`,
                        filter: 'blur(15px)',
                        borderRadius: '50%',
                        zIndex: -1,
                    }} />
                </div>
            </AbsoluteFill>
        </AbsoluteFill>
    );
};
