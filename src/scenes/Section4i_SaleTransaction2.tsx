import React from 'react';
import { AbsoluteFill, staticFile } from 'remotion';
import { ScreenWalkthroughLayout } from '../components/ScreenWalkthroughLayout';

export const Section4i_SaleTransaction2: React.FC = () => {
    return (
        <AbsoluteFill>
            <ScreenWalkthroughLayout 
                title="SALE TRANSACTION WORKFLOW - PART 2"
                subtitle="Ownership Transfer & Registry Update"
                videoSrc={staticFile('screens/Sale Transaction 2.mp4')}
                label="SALE TRANSACTION"
                badgeText="ASSET TRANSFERS"
            />
        </AbsoluteFill>
    );
};
