import React from 'react';
import { AbsoluteFill, staticFile } from 'remotion';
import { ScreenWalkthroughLayout } from '../components/ScreenWalkthroughLayout';

export const Section4h_SaleTransaction1: React.FC = () => {
    return (
        <AbsoluteFill>
            <ScreenWalkthroughLayout 
                title="SALE TRANSACTION WORKFLOW - PART 1"
                subtitle="Primary Sales Initiation & Contractual Framework"
                videoSrc={staticFile('screens/Sale Transaction 1.mov')}
                label="SALE TRANSACTION"
                badgeText="SMART CONTRACTS"
            />
            {/* Temporary debug to find exact duration */}
        </AbsoluteFill>
    );
};
