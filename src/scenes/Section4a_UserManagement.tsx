import React from 'react';
import { AbsoluteFill, useCurrentFrame, useVideoConfig, Audio, staticFile } from 'remotion';
import { Typography } from '../components/Typography';
import { MediaPlaceholder } from '../components/MediaPlaceholder';
import { COLOR_GREEN } from '../Constants';

export const Section4a_UserManagement: React.FC = () => {
    const frame = useCurrentFrame();

    // Scaled down for better margins and focus
    const windowWidth = 1400; 
    const windowHeight = (windowWidth * (1080 / 1920)) + 40;

    return (
        <AbsoluteFill style={{ backgroundColor: 'transparent' }}>
            {frame >= 30 && <Audio src={staticFile('audio/lifecycle.wav')} />}
            
            {/* Perfectly centered header */}
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
                    text="END-TO-END PROPERTY LIFECYCLE"
                    fontSize={42}
                    color={COLOR_GREEN}
                    fontWeight={700}
                    letterSpacing={2}
                />
                <Typography
                    text="Powered by a Single Source of Truth"
                    fontSize={20}
                    color="#8892b0"
                    style={{ marginTop: 10 }}
                />
            </div>

            {/* Centered App Preview with breathable margins */}
            <AbsoluteFill style={{ 
                justifyContent: 'center', 
                alignItems: 'center', 
                top: 80
            }}>
               <MediaPlaceholder 
                  src={staticFile('screens/User Management.mp4')}
                  label="USER MANAGEMENT"
                  type="video"
                  width={windowWidth} 
                  height={windowHeight}
                  disableAnimation={true}
               />
            </AbsoluteFill>
        </AbsoluteFill>
    );
};
