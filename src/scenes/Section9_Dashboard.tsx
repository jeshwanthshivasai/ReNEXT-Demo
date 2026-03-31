import React from 'react';
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion';
import { Typography } from '../components/Typography';
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
            {/* Map-based visualization placeholder */}
            <div style={{
                position: 'absolute',
                inset: 0,
                opacity: 0.15,
                backgroundImage: 'url("https://images.unsplash.com/photo-1526778548025-fa2f459cd5ce?q=80&w=2666&auto=format&fit=crop")',
                backgroundSize: 'cover',
                filter: 'grayscale(100%) brightness(0.5)',
            }} />

            <AbsoluteFill style={{ padding: 80, justifyContent: 'center' }}>
                <div style={{ marginBottom: 40, opacity: interpolate(frame, [0, 30], [0, 1]) }}>
                    <Typography
                        text="LIVE DASHBOARD & INSIGHTS"
                        fontSize={48}
                        color={COLOR_GREEN}
                        fontWeight={600}
                        letterSpacing={2}
                    />
                    <div style={{
                        marginTop: 10,
                        width: interpolate(anim, [0, 1], [0, 700]),
                        height: 4,
                        background: COLOR_GREEN,
                    }} />
                </div>

                <div style={{ display: 'flex', gap: 30, opacity: interpolate(frame, [60, 90], [0, 1]) }}>
                    {metrics.map((metric, i) => {
                        const metricAnim = spring({
                            frame: frame - 60 - (i * 30),
                            fps,
                            config: { damping: 12, stiffness: 100 },
                        });
                        const op = interpolate(metricAnim, [0, 1], [0, 1]);
                        const tx = interpolate(metricAnim, [0, 1], [20, 0]);

                        return (
                            <div key={metric.id} style={{
                                flex: 1,
                                backgroundColor: `${COLOR_DARK_BLUE}cc`,
                                padding: 40,
                                borderRadius: 24,
                                border: `2px solid ${COLOR_GREEN}44`,
                                opacity: op,
                                transform: `translateY(${tx}px)`,
                                boxShadow: `0 0 30px ${COLOR_GREEN}11`,
                            }}>
                                <metric.icon size={48} color={COLOR_GREEN} />
                                <Typography text={metric.label} fontSize={20} color="#8892b0" fontWeight={500} style={{ marginTop: 20 }} />
                                <Typography text={metric.value} fontSize={48} color="#fff" fontWeight={700} style={{ marginTop: 10 }} />
                            </div>
                        );
                    })}
                </div>

                <div style={{
                    marginTop: 60,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 15,
                    opacity: interpolate(frame, [300, 330], [0, 1]),
                }}>
                    <LayoutDashboard size={40} color={COLOR_GREEN} />
                    <Typography text="REAL-TIME OPERATIONAL VISIBILITY" fontSize={28} color={COLOR_GREEN} fontWeight={600} />
                </div>
            </AbsoluteFill>
        </AbsoluteFill>
    );
};
