import React from 'react';
import { AbsoluteFill, useCurrentFrame, staticFile } from 'remotion';
import { ScreenWalkthroughLayout } from '../components/ScreenWalkthroughLayout';

export const Section4a_UserManagement: React.FC = () => {
    const frame = useCurrentFrame();

    return (
        <AbsoluteFill>
            
            <ScreenWalkthroughLayout 
                title="END-TO-END PROPERTY LIFECYCLE"
                subtitle="Smart Admin Control & User Management"
                videoSrc={staticFile('screens/User Management.mp4')}
                label="USER MANAGEMENT"
                badgeText="ADMIN PORTAL"
                rotationY={5} // Balanced tilt for variety
            />
        </AbsoluteFill>
    );
};
