import React from 'react';
import { AbsoluteFill, staticFile, Series } from 'remotion';
import { ScreenWalkthroughLayout } from '../components/ScreenWalkthroughLayout';

export const Section4i_SaleTransaction2: React.FC = () => {
    return (
        <AbsoluteFill>
            <Series>
                {/* Segment 1: Before the trim */}
                <Series.Sequence durationInFrames={1579}>
                    <ScreenWalkthroughLayout 
                        title="SALE TRANSACTION WORKFLOW - PART 2"
                        subtitle="Ownership Transfer & Registry Update"
                        videoSrc={staticFile('screens/Sale Transaction 2.mov')}
                        label="SALE TRANSACTION"
                        badgeText="ASSET TRANSFERS"
                        endAt={1579}
                    />
                </Series.Sequence>

                {/* Segment 2: After the trim */}
                <Series.Sequence durationInFrames={7543}>
                    <ScreenWalkthroughLayout 
                        title="SALE TRANSACTION WORKFLOW - PART 2"
                        subtitle="Ownership Transfer & Registry Update"
                        videoSrc={staticFile('screens/Sale Transaction 2.mov')}
                        label="SALE TRANSACTION"
                        badgeText="ASSET TRANSFERS"
                        startFrom={1967}
                    />
                </Series.Sequence>
            </Series>
            {/* Temporary debug to find exact duration */}
        </AbsoluteFill>
    );
};
