import React from 'react';
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig, Audio, staticFile } from 'remotion';
import { Typography } from '../components/Typography';
import { MediaPlaceholder } from '../components/MediaPlaceholder';
import { COLOR_DARK_BLUE, COLOR_GREEN } from '../Constants';
import { BarChart3, PieChart, TrendingUp, Search } from 'lucide-react';

export const Section9_Dashboard: React.FC = () => {
    const frame = useCurrentFrame();
    const { fps } = useVideoConfig();

    const metrics = [
        { id: 1, label: "Active Parcels", value: "1.2M+", icon: TrendingUp },
        { id: 2, label: "Daily Transactions", value: "45K+", icon: BarChart3 },
        { id: 3, label: "Resolved Disputes", value: "98%", icon: PieChart },
    ];

    return (
        <AbsoluteFill style={{ backgroundColor: '#050814' }}>
            {frame >= 30 && <Audio src={staticFile('audio/dashboard.wav')} />}
            <AbsoluteFill style={{ justifyContent: 'center', alignItems: 'center' }}>
                <div style={{ position: 'absolute', top: 100, textAlign: 'center' }}>
                    <Typography
                        text="EXECUTIVE DASHBOARD & INSIGHTS"
                        fontSize={36}
                        color={COLOR_GREEN}
                        fontWeight={600}
                        letterSpacing={2}
                    />
                    <Typography
                        text="Real-Time Jurisdictional Oversight"
                        fontSize={20}
                        color="#8892b0"
                        style={{ marginTop: 10 }}
                    />
                </div>

                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 30,
                    width: '90%',
                    height: '60%',
                    marginTop: 50,
                }}>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        gap: 20,
                    }}>
                        {metrics.map((metric, i) => {
                            const metricAnim = spring({
                                frame: frame - (i * 20),
                                fps,
                                config: { damping: 15, stiffness: 100 },
                            });
                            return (
                                <div key={metric.id} style={{
                                    flex: 1,
                                    backgroundColor: `${COLOR_DARK_BLUE}ee`,
                                    padding: '20px 30px',
                                    borderRadius: 16,
                                    border: `1px solid ${COLOR_GREEN}44`,
                                    opacity: metricAnim,
                                    transform: `scale(${interpolate(metricAnim, [0, 1], [0.8, 1])})`,
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 20,
                                }}>
                                    <div style={{
                                        backgroundColor: `${COLOR_GREEN}22`,
                                        padding: 10,
                                        borderRadius: 12,
                                    }}>
                                        <metric.icon size={32} color={COLOR_GREEN} />
                                    </div>
                                    <div>
                                        <Typography text={metric.label} fontSize={16} color="#8892b0" fontWeight={400} />
                                        <Typography text={metric.value} fontSize={28} color="#fff" fontWeight={700} />
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    <div style={{ flex: 1 }}>
                        <MediaPlaceholder 
                           label="EXECUTIVE DASHBOARD SCREENSHOT"
                           type="image"
                        />
                    </div>
                </div>
            </AbsoluteFill>
        </AbsoluteFill>
    );
};
