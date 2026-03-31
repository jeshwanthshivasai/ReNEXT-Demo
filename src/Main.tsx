import React from 'react';
import { Series, AbsoluteFill } from 'remotion';

// All Scenes
import { Section1_Intro } from './scenes/Section1_Intro';
import { Section1_EcosystemHub } from './scenes/Section1_EcosystemHub';
import { Section2_ImmutableLedger } from './scenes/Section2_ImmutableLedger';
import { Section2b_ProfileOverview } from './scenes/Section2b_ProfileOverview';
import { Section4a_UserManagement } from './scenes/Section4a_UserManagement';
import { Section4b_EntityView } from './scenes/Section4b_EntityView';
import { Section4c_EntityRegistration } from './scenes/Section4c_EntityRegistration';
import { Section4h_SaleTransaction1 } from './scenes/Section4h_SaleTransaction1';
import { Section4i_SaleTransaction2 } from './scenes/Section4i_SaleTransaction2';
import { Section4j_RentalTransaction } from './scenes/Section4j_RentalTransaction';
import { Section4e_DevelopmentPermit } from './scenes/Section4e_DevelopmentPermit';
import { Section4d_FinancialIntel } from './scenes/Section4d_FinancialIntel';
import { Section4f_AnalysisHub } from './scenes/Section4f_AnalysisHub';
import { Section4g_InvestorPortal } from './scenes/Section4g_InvestorPortal';
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

                <Series.Sequence durationInFrames={DURATIONS.PROFILE_OVERVIEW}>
                    <Section2b_ProfileOverview />
                </Series.Sequence>

                <Series.Sequence durationInFrames={DURATIONS.DASHBOARD}>
                    <Section9_Dashboard />
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

                <Series.Sequence durationInFrames={DURATIONS.SALE_TRANS_1}>
                    <Section4h_SaleTransaction1 />
                </Series.Sequence>

                <Series.Sequence durationInFrames={DURATIONS.SALE_TRANS_2}>
                    <Section4i_SaleTransaction2 />
                </Series.Sequence>

                <Series.Sequence durationInFrames={DURATIONS.RENTAL_TRANS}>
                    <Section4j_RentalTransaction />
                </Series.Sequence>

                <Series.Sequence durationInFrames={DURATIONS.DEV_PERMIT}>
                    <Section4e_DevelopmentPermit />
                </Series.Sequence>

                <Series.Sequence durationInFrames={DURATIONS.FINANCIAL_INTEL}>
                    <Section4d_FinancialIntel />
                </Series.Sequence>

                <Series.Sequence durationInFrames={DURATIONS.ANALYSIS_HUB}>
                    <Section4f_AnalysisHub />
                </Series.Sequence>

                <Series.Sequence durationInFrames={DURATIONS.INVESTOR_PORTAL}>
                    <Section4g_InvestorPortal />
                </Series.Sequence>

                {/* ------------------------------------ */}

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
