import React from 'react';
import { AbsoluteFill, useCurrentFrame, staticFile } from 'remotion';
import { ScreenWalkthroughLayout } from '../components/ScreenWalkthroughLayout';

export const Section4b_EntityView: React.FC = () => {
    return (
        <AbsoluteFill>
            <ScreenWalkthroughLayout 
                title="ENTITY VIEW"
                subtitle="Detailed Property Analytics & Asset Monitoring"
                videoSrc={staticFile('screens/Entity View.mp4')}
                label="ENTITY VIEW"
                badgeText="ASSET MONITOR"
                rotationY={-6}
            />
        </AbsoluteFill>
    );
};
