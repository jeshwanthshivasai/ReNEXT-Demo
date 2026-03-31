import React from 'react';
import { Series, AbsoluteFill } from 'remotion';

// All Scenes
import { Section1_Intro } from './scenes/Section1_Intro';
import { Section1_EcosystemHub } from './scenes/Section1_EcosystemHub';
import { Section2_ImmutableLedger } from './scenes/Section2_ImmutableLedger';
import { Section3_Solution } from './scenes/Section3_Solution';
import { Section4a_UserManagement } from './scenes/Section4a_UserManagement';
import { Section4b_EntityView } from './scenes/Section4b_EntityView';
import { Section4d_FinancialIntel } from './scenes/Section4d_FinancialIntel';
import { Section4c_EntityRegistration } from './scenes/Section4c_EntityRegistration';
import { Section5_AIHuman } from './scenes/Section5_AIHuman';
import { Section6_Ecosystem } from './scenes/Section6_Ecosystem';
import { Section7_ZeroTrust } from './scenes/Section7_ZeroTrust';
import { Section8_Dispute } from './scenes/Section8_Dispute';
import { Section9_Dashboard } from './scenes/Section9_Dashboard';
import { Section10_Benefits } from './scenes/Section10_Benefits';
import { Section11_Outro } from './scenes/Section11_Outro';

import { StaticGrid } from './components/StaticGrid';
import { DURATIONS } from './Constants';

export const Main: React.FC = () => {
    return (
        <AbsoluteFill style={{ 
            background: `linear-gradient(135deg, #050814 0%, #0a1226 50%, #050814 100%)` 
        }}>
            {/* Global Static Grid Background */}
            <StaticGrid />
            
            {/* Standard Series for back-to-back playback (No Transitions) */}
            <Series>
                {/* 1. Brand Intro */}
                <Series.Sequence durationInFrames={DURATIONS.INTRO}>
                    <Section1_Intro />
                </Series.Sequence>

                {/* 2. Technical Foundations (Slides 4 & 8) */}
                <Series.Sequence durationInFrames={DURATIONS.ECOSYSTEM_HUB}>
                    <Section1_EcosystemHub />
                </Series.Sequence>

                <Series.Sequence durationInFrames={DURATIONS.IMMUTABLE_LEDGER}>
                    <Section2_ImmutableLedger />
                </Series.Sequence>

                {/* 3. Core Presentation */}
                <Series.Sequence durationInFrames={DURATIONS.SOLUTION}>
                    <Section3_Solution />
                </Series.Sequence>

                {/* --- Functional Walkthrough Trio --- */}

                <Series.Sequence durationInFrames={DURATIONS.USER_MANAGEMENT}>
                    <Section4a_UserManagement />
                </Series.Sequence>

                <Series.Sequence durationInFrames={DURATIONS.ENTITY_VIEW}>
                    <Section4b_EntityView />
                </Series.Sequence>

                <Series.Sequence durationInFrames={DURATIONS.ENTITY_REG}>
                    <Section4c_EntityRegistration />
                </Series.Sequence>

                <Series.Sequence durationInFrames={DURATIONS.FINANCIAL_INTEL}>
                    <Section4d_FinancialIntel />
                </Series.Sequence>

                {/* ------------------------------------ */}

                <Series.Sequence durationInFrames={DURATIONS.AI_HUMAN}>
                    <Section5_AIHuman />
                </Series.Sequence>

                <Series.Sequence durationInFrames={DURATIONS.ECOSYSTEM}>
                    <Section6_Ecosystem />
                </Series.Sequence>

                <Series.Sequence durationInFrames={DURATIONS.ZERO_TRUST}>
                    <Section7_ZeroTrust />
                </Series.Sequence>

                <Series.Sequence durationInFrames={DURATIONS.DISPUTE}>
                    <Section8_Dispute />
                </Series.Sequence>

                <Series.Sequence durationInFrames={DURATIONS.DASHBOARD}>
                    <Section9_Dashboard />
                </Series.Sequence>

                <Series.Sequence durationInFrames={DURATIONS.BENEFITS}>
                    <Section10_Benefits />
                </Series.Sequence>

                <Series.Sequence durationInFrames={DURATIONS.OUTRO}>
                    <Section11_Outro />
                </Series.Sequence>
            </Series>
        </AbsoluteFill>
    );
};
