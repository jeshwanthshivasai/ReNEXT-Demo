import React from 'react';
import { AbsoluteFill, useCurrentFrame, staticFile } from 'remotion';
import { Typography } from '../components/Typography';
import { MediaPlaceholder } from '../components/MediaPlaceholder';
import { COLOR_GREEN } from '../Constants';

export const Section4d_FinancialIntel: React.FC = () => {
    const frame = useCurrentFrame();

    // Consistency check with previous video walkthrough segments
    const windowWidth = 1400; 
    const windowHeight = (windowWidth * (1080 / 1920)) + 40;

    return (
        <AbsoluteFill style={{ backgroundColor: 'transparent' }}>
            {/* Perfectly centered header consistent with other Lifecycle sections */}
            <div style={{
                position: 'absolute',
                top: 60,
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                zIndex: 10,
            }}>
                <Typography
                    text="FINANCIAL INTELLIGENCE"
                    fontSize={42}
                    color={COLOR_GREEN}
                    fontWeight={700}
                    letterSpacing={2}
                />
                <Typography
                    text="Real-time Revenue Analysis & Financial Modeling"
                    fontSize={20}
                    color="#8892b0"
                    style={{ marginTop: 10 }}
                />
            </div>

            {/* Media container using premium browser frame - Static as requested */}
            <AbsoluteFill style={{ 
                justifyContent: 'center', 
                alignItems: 'center', 
                top: 80
            }}>
                <MediaPlaceholder 
                    src={staticFile('screens/Financial Intelligence-F1.mp4')}
                    type="video"
                    label="FINANCIAL INTELLIGENCE"
                    width={1400} 
                    height={787.5}
                    disableAnimation={true}
                />
            </AbsoluteFill>
        </AbsoluteFill>
    );
};
