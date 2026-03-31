import React from 'react';
import { AbsoluteFill, useCurrentFrame, staticFile } from 'remotion';
import { Typography } from '../components/Typography';
import { MediaPlaceholder } from '../components/MediaPlaceholder';
import { COLOR_GREEN } from '../Constants';

export const Section4b_EntityView: React.FC = () => {
    const frame = useCurrentFrame();

    // Consistency check with previous video segments
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
                    text="ENTITY VIEW"
                    fontSize={42}
                    color={COLOR_GREEN}
                    fontWeight={700}
                    letterSpacing={2}
                />
                <Typography
                    text="Detailed Property Analytics & Asset Monitoring"
                    fontSize={20}
                    color="#8892b0"
                    style={{ marginTop: 10 }}
                />
            </div>

            {/* Media container using premium browser frame */}
            <AbsoluteFill style={{ 
                justifyContent: 'center', 
                alignItems: 'center', 
                top: 80
            }}>
               <MediaPlaceholder 
                  src={staticFile('screens/Entity View.mp4')}
                  label="ENTITY VIEW"
                  type="video"
                  width={windowWidth} 
                  height={windowHeight}
                  disableAnimation={true}
               />
            </AbsoluteFill>
        </AbsoluteFill>
    );
};
