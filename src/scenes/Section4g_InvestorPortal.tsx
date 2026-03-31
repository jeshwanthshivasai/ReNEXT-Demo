import React from 'react';
import { AbsoluteFill, staticFile } from 'remotion';
import { ScreenWalkthroughLayout } from '../components/ScreenWalkthroughLayout';

export const Section4g_InvestorPortal: React.FC = () => {
    return (
        <AbsoluteFill>
            <ScreenWalkthroughLayout 
                title="INTEGRATED INVESTOR PORTAL"
                subtitle="Transparent Financial Insights & Asset Performance"
                videoSrc={staticFile('screens/Investor Portal-F3.mp4')}
                label="INVESTOR PORTAL"
                badgeText="STAKEHOLDER HUB"
            />
            {/* Temporary debug to find exact duration */}
        </AbsoluteFill>
    );
};
