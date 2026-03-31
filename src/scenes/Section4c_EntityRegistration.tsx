import React from 'react';
import { AbsoluteFill, useCurrentFrame, staticFile } from 'remotion';
import { Typography } from '../components/Typography';
import { MediaPlaceholder } from '../components/MediaPlaceholder';
import { COLOR_GREEN } from '../Constants';

export const Section4c_EntityRegistration: React.FC = () => {
    const frame = useCurrentFrame();

    // Constant window dimensions as requested in previous UI feedback
    const windowWidth = 1400; 
    const windowHeight = (windowWidth * (1080 / 1920)) + 40;

    return (
        <AbsoluteFill style={{ backgroundColor: 'transparent' }}>
            {/* Standardized header for lifecycle technical walkthroughs */}
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
                    text="ENTITY REGISTRATION"
                    fontSize={42}
                    color={COLOR_GREEN}
                    fontWeight={700}
                    letterSpacing={2}
                />
                <Typography
                    text="Streamlined Asset Digitization & Compliance"
                    fontSize={20}
                    color="#8892b0"
                    style={{ marginTop: 10 }}
                />
            </div>

            {/* Media container: Registration technical walk-through */}
            <AbsoluteFill style={{ 
                justifyContent: 'center', 
                alignItems: 'center', 
                top: 80
            }}>
               <MediaPlaceholder 
                  src={staticFile('screens/Entity Registration.mp4')}
                  label="ENTITY REGISTRATION"
                  type="video"
                  width={windowWidth} 
                  height={windowHeight}
                  disableAnimation={true}
               />
            </AbsoluteFill>
        </AbsoluteFill>
    );
};
