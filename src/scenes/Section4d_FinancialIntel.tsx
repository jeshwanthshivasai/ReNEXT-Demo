import React from 'react';
import { AbsoluteFill, useCurrentFrame, staticFile } from 'remotion';
import { ScreenWalkthroughLayout } from '../components/ScreenWalkthroughLayout';

export const Section4d_FinancialIntel: React.FC = () => {
    return (
        <AbsoluteFill>
            <ScreenWalkthroughLayout 
                title="FINANCIAL INTELLIGENCE"
                subtitle="Real-time Revenue Analysis & Financial Modeling"
                videoSrc={staticFile('screens/Financial Intelligence-F1.mp4')}
                label="FINANCIAL INTELLIGENCE"
                badgeText="REVENUE PORTAL"
                rotationY={-6} // Alternating tilt
            />
        </AbsoluteFill>
    );
};
