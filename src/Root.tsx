import React from 'react';
import { Composition } from 'remotion';
import { Main } from './Main';
import { FPS, TOTAL_DURATION } from './Constants';

export const RemotionRoot: React.FC = () => {
    return (
        <>
            <Composition
                id="ReNEXT-Explainer"
                component={Main}
                durationInFrames={TOTAL_DURATION}
                fps={FPS}
                width={1920}
                height={1080}
            />
        </>
    );
};
