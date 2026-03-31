import React from 'react';
import { AbsoluteFill, useCurrentFrame, staticFile, Audio } from 'remotion';
import { ScreenWalkthroughLayout } from '../components/ScreenWalkthroughLayout';

export const Section9_Dashboard: React.FC = () => {
    const frame = useCurrentFrame();

    return (
        <AbsoluteFill>
            {frame >= 30 && <Audio src={staticFile('audio/dashboard.wav')} />}
            
            <ScreenWalkthroughLayout 
                title="EXECUTIVE DASHBOARD & INSIGHTS"
                subtitle="Real-Time Jurisdictional Oversight & Analytics"
                videoSrc={staticFile('screens/Dashboard.mp4')}
                label="EXECUTIVE DASHBOARD"
                badgeText="INSIGHTS HUB"
            />
        </AbsoluteFill>
    );
};
