import React from 'react';
import { Composition } from 'remotion';
import { DummyMain } from './DummyMain';
import { Main } from './Main';
import { FPS, TOTAL_DURATION } from './Constants';

export const RemotionRoot: React.FC = () => {
    return (
        <>
            {/* The Dummy Main for Sir's Preview */}
            <Composition
                id="ReNEXT-Preview"
                component={DummyMain}
                durationInFrames={15 * FPS}
                fps={FPS}
                width={1920}
                height={1080}
            />

            {/* Main high-end production (Hidden for now) */}
            {/* 
            <Composition
                id="ReNEXT-Explainer"
                component={Main}
                durationInFrames={TOTAL_DURATION}
                fps={FPS}
                width={1920}
                height={1080}
            /> 
            */}
        </>
    );
};
