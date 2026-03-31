import React from 'react';
import { AbsoluteFill, useCurrentFrame, staticFile } from 'remotion';
import { ScreenWalkthroughLayout } from '../components/ScreenWalkthroughLayout';

export const Section9_Dashboard: React.FC = () => {
    const frame = useCurrentFrame();

    return (
        <AbsoluteFill>
            
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
