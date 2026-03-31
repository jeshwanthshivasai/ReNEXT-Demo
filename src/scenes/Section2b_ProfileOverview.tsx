import React from 'react';
import { AbsoluteFill, useCurrentFrame, staticFile } from 'remotion';
import { ScreenWalkthroughLayout } from '../components/ScreenWalkthroughLayout';

export const Section2b_ProfileOverview: React.FC = () => {
    const frame = useCurrentFrame();

    return (
        <AbsoluteFill>
            
            <ScreenWalkthroughLayout 
                title="THE SINGLE SOURCE OF TRUTH: PROFILE OVERVIEW"
                subtitle="Consolidated Asset Performance & Historical Records"
                videoSrc={staticFile('screens/Profile-Overview.mp4')}
                label="PROFILE OVERVIEW"
                badgeText="PROPERTY PORTAL"
                rotationY={-6}
            />
        </AbsoluteFill>
    );
};
