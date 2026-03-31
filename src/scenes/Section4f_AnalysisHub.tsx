import React from 'react';
import { AbsoluteFill, staticFile } from 'remotion';
import { ScreenWalkthroughLayout } from '../components/ScreenWalkthroughLayout';

export const Section4f_AnalysisHub: React.FC = () => {
    return (
        <AbsoluteFill>
            <ScreenWalkthroughLayout 
                title="AI-DRIVEN ANALYSIS HUB"
                subtitle="Predictive Insights & Strategic Forecasting"
                videoSrc={staticFile('screens/Analysis Hub-F2.mp4')}
                label="ANALYSIS HUB"
                badgeText="INTELLIGENCE PORTAL"
            />
            {/* Temporary debug to find exact duration */}
        </AbsoluteFill>
    );
};
