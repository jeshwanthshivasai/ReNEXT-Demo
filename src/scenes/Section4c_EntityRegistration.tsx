import React from 'react';
import { AbsoluteFill, useCurrentFrame, staticFile } from 'remotion';
import { ScreenWalkthroughLayout } from '../components/ScreenWalkthroughLayout';

export const Section4c_EntityRegistration: React.FC = () => {
    return (
        <AbsoluteFill>
            <ScreenWalkthroughLayout 
                title="ENTITY REGISTRATION"
                subtitle="Streamlined Asset Digitization & Compliance"
                videoSrc={staticFile('screens/Register Property.mov')}
                label="ENTITY REGISTRATION"
                badgeText="DIGITIZATION PORTAL"
                rotationY={5} // Alternating tilt
            />
            {/* Temporary debug to find exact duration */}
        </AbsoluteFill>
    );
};
