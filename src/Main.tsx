import React from 'react';
import { AbsoluteFill } from 'remotion';
import { TransitionSeries, linearTiming } from "@remotion/transitions";
import { fade } from "@remotion/transitions/fade";

import { DURATIONS, COLOR_WHITE } from './Constants';

// Scenes (to be created)
import { Section1_Intro } from './scenes/Section1_Intro';
import { Section2_Problem } from './scenes/Section2_Problem';
import { Section3_Solution } from './scenes/Section3_Solution';
import { Section4_Lifecycle } from './scenes/Section4_Lifecycle';
import { Section5_AIHuman } from './scenes/Section5_AIHuman';
import { Section6_Ecosystem } from './scenes/Section6_Ecosystem';
import { Section7_ZeroTrust } from './scenes/Section7_ZeroTrust';
import { Section8_Dispute } from './scenes/Section8_Dispute';
import { Section9_Dashboard } from './scenes/Section9_Dashboard';
import { Section10_Benefits } from './scenes/Section10_Benefits';
import { Section11_Outro } from './scenes/Section11_Outro';

export const Main: React.FC = () => {
    return (
        <AbsoluteFill style={{ backgroundColor: COLOR_WHITE }}>
            <TransitionSeries>
                <TransitionSeries.Sequence durationInFrames={DURATIONS.INTRO}>
                    <Section1_Intro />
                </TransitionSeries.Sequence>
                <TransitionSeries.Transition
                    presentation={fade()}
                    timing={linearTiming({ durationInFrames: 30 })}
                />

                <TransitionSeries.Sequence durationInFrames={DURATIONS.PROBLEM}>
                    <Section2_Problem />
                </TransitionSeries.Sequence>
                <TransitionSeries.Transition
                    presentation={fade()}
                    timing={linearTiming({ durationInFrames: 30 })}
                />

                <TransitionSeries.Sequence durationInFrames={DURATIONS.SOLUTION}>
                    <Section3_Solution />
                </TransitionSeries.Sequence>
                <TransitionSeries.Transition
                    presentation={fade()}
                    timing={linearTiming({ durationInFrames: 30 })}
                />

                <TransitionSeries.Sequence durationInFrames={DURATIONS.LIFECYCLE}>
                    <Section4_Lifecycle />
                </TransitionSeries.Sequence>
                <TransitionSeries.Transition
                    presentation={fade()}
                    timing={linearTiming({ durationInFrames: 30 })}
                />

                <TransitionSeries.Sequence durationInFrames={DURATIONS.AI_HUMAN}>
                    <Section5_AIHuman />
                </TransitionSeries.Sequence>
                <TransitionSeries.Transition
                    presentation={fade()}
                    timing={linearTiming({ durationInFrames: 30 })}
                />

                <TransitionSeries.Sequence durationInFrames={DURATIONS.ECOSYSTEM}>
                    <Section6_Ecosystem />
                </TransitionSeries.Sequence>
                <TransitionSeries.Transition
                    presentation={fade()}
                    timing={linearTiming({ durationInFrames: 30 })}
                />

                <TransitionSeries.Sequence durationInFrames={DURATIONS.ZERO_TRUST}>
                    <Section7_ZeroTrust />
                </TransitionSeries.Sequence>
                <TransitionSeries.Transition
                    presentation={fade()}
                    timing={linearTiming({ durationInFrames: 30 })}
                />

                <TransitionSeries.Sequence durationInFrames={DURATIONS.DISPUTE}>
                    <Section8_Dispute />
                </TransitionSeries.Sequence>
                <TransitionSeries.Transition
                    presentation={fade()}
                    timing={linearTiming({ durationInFrames: 30 })}
                />

                <TransitionSeries.Sequence durationInFrames={DURATIONS.DASHBOARD}>
                    <Section9_Dashboard />
                </TransitionSeries.Sequence>
                <TransitionSeries.Transition
                    presentation={fade()}
                    timing={linearTiming({ durationInFrames: 30 })}
                />

                <TransitionSeries.Sequence durationInFrames={DURATIONS.BENEFITS}>
                    <Section10_Benefits />
                </TransitionSeries.Sequence>
                <TransitionSeries.Transition
                    presentation={fade()}
                    timing={linearTiming({ durationInFrames: 30 })}
                />

                <TransitionSeries.Sequence durationInFrames={DURATIONS.OUTRO}>
                    <Section11_Outro />
                </TransitionSeries.Sequence>
            </TransitionSeries>
        </AbsoluteFill>
    );
};
