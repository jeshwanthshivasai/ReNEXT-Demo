import React from 'react';
import { AbsoluteFill, staticFile } from 'remotion';
import { ScreenWalkthroughLayout } from '../components/ScreenWalkthroughLayout';

export const Section4j_RentalTransaction: React.FC = () => {
    return (
        <AbsoluteFill>
            <ScreenWalkthroughLayout 
                title="RENTAL TRANSACTION WORKFLOW"
                subtitle="Automated Lease Agreements & Recurring Payments"
                videoSrc={staticFile('screens/Rental Transaction.mov')}
                label="RENTAL TRANSACTION"
                badgeText="PROPERTY LEASES"
            />
            {/* Temporary debug to find exact duration */}
        </AbsoluteFill>
    );
};
