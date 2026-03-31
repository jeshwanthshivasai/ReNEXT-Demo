import React from 'react';
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig, Audio, staticFile } from 'remotion';
import { Typography } from '../components/Typography';
import { COLOR_GREEN, COLOR_DARK_BLUE } from '../Constants';
import { Database, FileText, Handshake, Gavel, Coins, Map } from 'lucide-react';

const ENTITIES = [
    {
        id: 1,
        title: 'Entity 1: RE Record',
        status: 'STATIC',
        fields: ['Property Type', 'Unique Identifier', 'Address', 'GPS (Lat, Lon)', 'Size (Area)'],
        icon: Database,
    },
    {
        id: 2,
        title: 'Entity 2: Ownership Record',
        status: 'DYNAMIC',
        fields: ['Owner Name', 'Owner Type', 'Issuance Date', 'Status: Active/Encumbered'],
        icon: FileText,
    },
    {
        id: 3,
        title: 'Entity 3: Sale Transaction',
        status: 'DYNAMIC',
        fields: ['Seller', 'Buyer', 'Agent', 'Timestamps', 'Sale Price', 'Ref Records', 'Brokerage', 'Digisig', 'Escrow', 'Money Audit'],
        icon: Handshake,
    },
    {
        id: 4,
        title: 'Entity 4: Rental Transaction',
        status: 'DYNAMIC',
        fields: ['Leaser', 'Tenant', 'Agent', 'Timestamps', 'Rental Price', 'Ref Records', 'Brokerage', 'Digisig', 'Escrow', 'Money Audit'],
        icon: Handshake,
    },
    {
        id: 5,
        title: 'Entity 5: Dispute Record',
        status: 'DYNAMIC',
        fields: ['Claimant Name', 'Claimant Type', 'Respondent Name', 'Respondent Type'],
        icon: Gavel,
    },
    {
        id: 6,
        title: 'Entity 6: Sale Pricing Record',
        status: 'DYNAMIC',
        fields: ['Amount', 'Timestamp'],
        icon: Coins,
    },
    {
        id: 7,
        title: 'Entity 7: Rental Pricing Record',
        status: 'DYNAMIC',
        fields: ['Amount', 'Timestamp'],
        icon: Coins,
    },
    {
        id: 8,
        title: 'Entity 8: Brokerage Pricing Record',
        status: 'DYNAMIC',
        fields: ['Amount', 'Timestamp'],
        icon: Coins,
    },
    {
        id: 9,
        title: 'Entity 9: Project Record',
        status: 'DYNAMIC',
        fields: ['Developer Name', 'Developer Type'],
        icon: Map,
    }
];

export const Section2_ImmutableLedger: React.FC = () => {
    const frame = useCurrentFrame();
    const { fps } = useVideoConfig();

    const STAGGER = 15;
    const START_OFFSET = 20;

    return (
        <AbsoluteFill style={{ backgroundColor: 'transparent' }}>
            <Audio src={staticFile('audio/solution.wav')} />

            <div style={{
                position: 'absolute',
                top: 30, // Compact header to reclaim bottom space
                width: '100%',
                textAlign: 'center',
                zIndex: 10,
            }}>
                <Typography
                    text="CORE DATA ARCHITECTURE: THE IMMUTABLE LEDGER"
                    fontSize={36}
                    fontWeight={700}
                    color={COLOR_GREEN}
                    letterSpacing={2}
                />
            </div>

            <AbsoluteFill style={{
                padding: '100px 80px 80px 80px', // Uniform 80px padding (top adjusted for title)
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center', // Vertically center the entire architecture
                gap: 20
            }}>

                {/* --- Grid Layout (Top & Middle Rows) with Dynamic Height --- */}
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 20,
                }}>
                    {/* Row 1 (2, 3, 4, 5) */}
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 30, alignItems: 'start' }}>
                        {[1, 2, 3, 4].map((idIdx) => {
                            const entity = ENTITIES[idIdx];
                            const anim = spring({ frame: frame - (START_OFFSET + idIdx * STAGGER), fps, config: { damping: 15 } });
                            return <EntityCard key={entity.id} entity={entity} anim={anim} />;
                        })}
                    </div>

                    {/* Row 2 (6, 7, 8, 9) */}
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 30, alignItems: 'start' }}>
                        {[5, 6, 7, 8].map((idIdx) => {
                            const entity = ENTITIES[idIdx];
                            const anim = spring({ frame: frame - (START_OFFSET + idIdx * STAGGER), fps, config: { damping: 15 } });
                            return <EntityCard key={entity.id} entity={entity} anim={anim} />;
                        })}
                    </div>
                </div>

                {/* --- Foundational Entity 1 --- */}
                <div style={{ display: 'flex', justifyContent: 'center', marginTop: 20 }}>
                    {(() => {
                        const entity = ENTITIES[0];
                        const anim = spring({ frame: frame - START_OFFSET, fps, config: { damping: 18 } });
                        return (
                            <div style={{
                                width: '100%',
                                opacity: anim,
                                transform: `translateY(${interpolate(anim, [0, 1], [40, 0])}px)`,
                                background: 'rgba(5, 15, 40, 0.98)',
                                borderRadius: 16,
                                border: `2px solid ${COLOR_GREEN}`,
                                overflow: 'hidden',
                                boxShadow: `0 0 60px ${COLOR_GREEN}11`,
                                zIndex: 10
                            }}>
                                <div style={{
                                    padding: '16px 40px',
                                    background: 'rgba(150, 202, 56, 0.12)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    gap: 30,
                                    borderBottom: '1px solid rgba(150, 202, 56, 0.4)'
                                }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
                                        <entity.icon size={28} color={COLOR_GREEN} />
                                        <Typography text={entity.title} fontSize={28} fontWeight={700} color="#fff" />
                                        <div style={{ background: COLOR_GREEN, color: COLOR_DARK_BLUE, padding: '3px 12px', borderRadius: 4, fontSize: 14, fontWeight: 800 }}>{entity.status}</div>
                                    </div>
                                </div>
                                <div style={{ padding: '16px 40px', display: 'flex', justifyContent: 'space-between', gap: 15 }}>
                                    {entity.fields.map((f, i) => (
                                        <div key={i} style={{ flex: 1, padding: '14px 5px', background: 'rgba(150, 202, 56, 0.05)', border: '1px solid rgba(150, 202, 56, 0.15)', borderRadius: 8, textAlign: 'center' }}>
                                            <Typography text={f} fontSize={14} fontWeight={600} color="#fff" />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        );
                    })()}
                </div>

                {/* --- Animated Connector Paths --- */}
                <svg style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: -1 }}>
                    <defs>
                        <linearGradient id="lineGrad" x1="0%" y1="100%" x2="0%" y2="0%">
                            <stop offset="0%" stopColor={COLOR_GREEN} stopOpacity="0.1" />
                            <stop offset="100%" stopColor={COLOR_GREEN} stopOpacity="0.4" />
                        </linearGradient>
                    </defs>
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((idIdx) => {
                        const anim = spring({ frame: frame - (START_OFFSET + idIdx * STAGGER), fps });
                        const col = idIdx < 5 ? (idIdx - 1) : (idIdx - 5);
                        const row = idIdx < 5 ? 0 : 1;
                        const targetX = 80 + (col * (1760 / 4)) + 210;
                        const targetY = row === 0 ? 280 : 530;
                        const baseX = 960;
                        const baseY = 840;
                        return (
                            <path key={idIdx} d={`M ${baseX} ${baseY} L ${targetX} ${targetY}`} stroke="url(#lineGrad)" strokeWidth="2" strokeDasharray="10,20" strokeDashoffset={-frame * 5} opacity={anim} fill="none" />
                        );
                    })}
                </svg>
            </AbsoluteFill>
        </AbsoluteFill>
    );
};

const EntityCard: React.FC<{ entity: any, anim: number }> = ({ entity, anim }) => {
    return (
        <div style={{
            opacity: anim,
            transform: `translateY(${interpolate(anim, [0, 1], [30, 0])}px)`,
            background: 'rgba(5, 10, 25, 0.96)',
            borderRadius: 16,
            border: '1px solid rgba(150, 202, 56, 0.25)',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
            boxShadow: '0 10px 40px rgba(0,0,0,0.4)',
            position: 'relative'
        }}>
            <div style={{ padding: '14px 20px', background: 'rgba(150, 202, 56, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid rgba(150, 202, 56, 0.2)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <entity.icon size={20} color={COLOR_GREEN} />
                    <Typography text={entity.title} fontSize={16} fontWeight={700} color="#fff" />
                </div>
                <div style={{ background: 'rgba(150, 202, 56, 0.25)', color: COLOR_GREEN, padding: '2px 8px', borderRadius: 4, fontSize: 10, fontWeight: 900 }}>{entity.status}</div>
            </div>

            <div style={{ padding: '12px', display: 'flex', flexDirection: 'column', gap: 6 }}>
                {entity.fields.map((f: string, i: number) => (
                    <div key={i} style={{
                        background: 'rgba(150, 202, 56, 0.05)', border: '1px solid rgba(150, 202, 56, 0.12)',
                        borderRadius: 6, padding: '6px 12px', display: 'flex', alignItems: 'center'
                    }}>
                        <Typography text={f} fontSize={12} color="#fff" fontWeight={500} />
                    </div>
                ))}
            </div>

            {/* Trimmed bottom accent */}
            <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 1, background: `linear-gradient(90deg, transparent, ${COLOR_GREEN}44, transparent)` }} />
        </div>
    );
};
