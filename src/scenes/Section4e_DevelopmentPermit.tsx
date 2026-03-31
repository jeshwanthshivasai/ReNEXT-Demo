import React from 'react';
import { AbsoluteFill, staticFile } from 'remotion';
import { ScreenWalkthroughLayout } from '../components/ScreenWalkthroughLayout';

export const Section4e_DevelopmentPermit: React.FC = () => {
    return (
        <AbsoluteFill>
            <ScreenWalkthroughLayout 
                title="DEVELOPMENT PERMIT WORKFLOW"
                subtitle="Automated Approvals & Compliance Verification"
                videoSrc={staticFile('screens/Development Permit.mov')}
                label="DEVELOPMENT PERMIT"
                badgeText="APPROVAL PORTAL"
            />
        </AbsoluteFill>
    );
};
