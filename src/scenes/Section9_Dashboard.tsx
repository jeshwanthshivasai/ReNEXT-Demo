import React from 'react';
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion';
import { Typography } from '../components/Typography';
import { MediaPlaceholder } from '../components/MediaPlaceholder';
import { COLOR_DARK_BLUE, COLOR_GREEN } from '../Constants';
import { LayoutDashboard, Map as MapIcon, TrendingUp, AlertTriangle } from 'lucide-react';

export const Section9_Dashboard: React.FC = () => {
    const frame = useCurrentFrame();
    const { fps } = useVideoConfig();

    const anim = spring({
        frame,
        fps,
        config: { damping: 15, stiffness: 100 },
    });

    const metrics = [
        { id: 1, label: "Active Parcels", value: "1.2M+", icon: MapIcon },
        { id: 2, label: "Transactions", value: "450K+", icon: TrendingUp },
        { id: 3, label: "Disputes Resolved", value: "98.4%", icon: AlertTriangle },
    ];

    return (
        <AbsoluteFill style={{ backgroundColor: '#050814' }}>
            <AbsoluteFill style={{ padding: 60, justifyContent: 'center', alignItems: 'center' }}>
                <div style={{ marginBottom: 30, opacity: interpolate(frame, [0, 30], [0, 1]) }}>
                    <Typography
                        text="LIVE DASHBOARD & INSIGHTS"
                        fontSize={40}
                        color={COLOR_GREEN}
                        fontWeight={600}
                        letterSpacing={2}
                    />
                    <div style={{
                        marginTop: 10,
                        width: interpolate(anim, [0, 1], [0, 600]),
                        height: 4,
                        background: COLOR_GREEN,
                    }} />
                </div>

                <div style={{ display: 'flex', width: '100%', height: '70%', gap: 30 }}>
                    {/* Metrics sidebar */}
                    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 20, justifyContent: 'center' }}>
                        {metrics.map((metric, i) => {
                            const metricAnim = spring({
                                frame: frame - (i * 30),
                                fps,
                                config: { damping: 12, stiffness: 100 },
                            });
                            const op = interpolate(metricAnim, [0, 1], [0, 1]);
                            const sc = interpolate(metricAnim, [0, 1], [0.9, 1]);

                            return (
                                <div key={metric.id} style={{
                                    backgroundColor: `${COLOR_DARK_BLUE}cc`,
                                    padding: 24,
                                    borderRadius: 20,
                                    border: `2px solid ${COLOR_GREEN}33`,
                                    opacity: op,
                                    transform: `scale(${sc})`,
                                    boxShadow: `0 0 20px ${COLOR_GREEN}11`,
                                }}>
                                    <metric.icon size={32} color={COLOR_GREEN} />
                                    <div style={{ marginTop: 15 }}>
                                        <Typography text={metric.label} fontSize={16} color="#8892b0" fontWeight={500} />
                                        <Typography text={metric.value} fontSize={32} color="#fff" fontWeight={700} style={{ marginTop: 5 }} />
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* App Dashboard Placeholder */}
                    <div style={{ flex: 2, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <MediaPlaceholder 
                            label="EXECUTIVE DASHBOARD SCREENSHOT"
                            type="image"
                            width="100%" 
                            height="100%"
                        />
                    </div>
                </div>

                <div style={{
                    marginTop: 40,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 15,
                    opacity: interpolate(frame, [300, 330], [0, 1]),
                }}>
                    <LayoutDashboard size={32} color={COLOR_GREEN} />
                    <Typography text="REAL-TIME OPERATIONAL VISIBILITY" fontSize={24} color={COLOR_GREEN} fontWeight={600} />
                </div>
            </AbsoluteFill>
        </AbsoluteFill>
    );
};
