import React from 'react';
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig, Audio, staticFile } from 'remotion';
import { Typography } from '../components/Typography';
import { COLOR_GREEN, COLOR_DARK_BLUE } from '../Constants';
import { Database, FileText, ShoppingCart, Key, AlertTriangle, Tag, Building } from 'lucide-react';

const ENTITIES = [
    {
        id: 1,
        title: 'Entity 1: RE Record',
        status: 'STATIC',
        fields: 'Property Type, Unique Identifier, Address, GPS (Lat, Lon), Size (Area)',
        icon: Database,
    },
    {
        id: 2,
        title: 'Entity 2: Ownership Record',
        status: 'DYNAMIC',
        fields: 'Owner Name, Type, Issuance Date, Status: Active/Encumbered',
        icon: FileText,
    },
    {
        id: 3,
        title: 'Entity 3: Sale Transaction',
        status: 'DYNAMIC',
        fields: 'Seller, Buyer, Agent, Timestamps, Sale Price, Reference Records, Brokerage Details, Contract Digisig, Escrow, Money flow audit',
        icon: ShoppingCart,
    },
    {
        id: 4,
        title: 'Entity 4: Rental Transaction',
        status: 'DYNAMIC',
        fields: 'Leaser, Tenant, Agent, Timestamps, Rental Price, Reference Records, Brokerage Details, Contract Digisig, Escrow, Money flow audit',
        icon: Key,
    },
    {
        id: 5,
        title: 'Entity 5: Dispute Record',
        status: 'DYNAMIC',
        fields: 'Claimant Name/Type, Respondent Name/Type',
        icon: AlertTriangle,
    },
    {
        id: 6,
        title: 'Entity 6: Sale Pricing Record',
        status: 'DYNAMIC',
        fields: 'Amount, Timestamp',
        icon: Tag,
    },
    {
        id: 7,
        title: 'Entity 7: Rental Pricing Record',
        status: 'DYNAMIC',
        fields: 'Amount, Timestamp',
        icon: Tag,
    },
    {
        id: 8,
        title: 'Entity 8: Brokerage Pricing Record',
        status: 'DYNAMIC',
        fields: 'Amount, Timestamp',
        icon: Tag,
    },
    {
        id: 9,
        title: 'Entity 9: Project Record',
        status: 'DYNAMIC',
        fields: 'Developer Name, Developer Type',
        icon: Building,
    }
];

export const Section2_ImmutableLedger: React.FC = () => {
    const frame = useCurrentFrame();
    const { fps } = useVideoConfig();

    const STAGGER = 15; // 0.5 second snappiness
    const START_OFFSET = 20;

    return (
        <AbsoluteFill style={{ backgroundColor: 'transparent' }}>
            <Audio src={staticFile('audio/solution.wav')} />
            
            {/* Header Title */}
            <div style={{
                position: 'absolute',
                top: 60,
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

            <AbsoluteFill style={{ padding: '160px 80px 40px 80px' }}>
                
                {/* --- Grid Layout (Top & Middle Rows) --- */}
                <div style={{ 
                    display: 'grid', 
                    gridTemplateRows: 'repeat(2, 280px)', 
                    gap: 30, // Precise grid to avoid negative spacing
                    marginBottom: 50 
                }}>
                    {/* Row 1 (2, 3, 4, 5) */}
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 30 }}>
                        {[1, 2, 3, 4].map((idIdx) => {
                            const entity = ENTITIES[idIdx];
                            const anim = spring({ frame: frame - (START_OFFSET + idIdx * STAGGER), fps, config: { damping: 15 } });
                            return <EntityCard key={entity.id} entity={entity} anim={anim} />;
                        })}
                    </div>

                    {/* Row 2 (6, 7, 8, 9) */}
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 30 }}>
                        {[5, 6, 7, 8].map((idIdx) => {
                            const entity = ENTITIES[idIdx];
                            const anim = spring({ frame: frame - (START_OFFSET + idIdx * STAGGER), fps, config: { damping: 15 } });
                            return <EntityCard key={entity.id} entity={entity} anim={anim} />;
                        })}
                    </div>
                </div>

                {/* --- Foundational Entity 1 --- */}
                <div style={{ display: 'flex', justifyContent: 'center' }}>
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
                                    padding: '24px 40px', 
                                    background: 'rgba(150, 202, 56, 0.1)', 
                                    display: 'flex', 
                                    alignItems: 'center', 
                                    justifyContent: 'center',
                                    gap: 30,
                                    borderBottom: '1px solid rgba(150, 202, 56, 0.4)'
                                }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
                                        <entity.icon size={36} color={COLOR_GREEN} />
                                        <Typography text={entity.title} fontSize={32} fontWeight={700} color="#fff" />
                                        {/* Status box Right side of title */}
                                        <div style={{ 
                                            background: COLOR_GREEN, 
                                            color: COLOR_DARK_BLUE, 
                                            padding: '4px 14px', 
                                            borderRadius: 4, 
                                            fontSize: 16, 
                                            fontWeight: 800,
                                            marginLeft: 10
                                        }}>
                                            {entity.status}
                                        </div>
                                    </div>
                                </div>
                                <div style={{ padding: '30px', textAlign: 'center' }}>
                                    <Typography text={entity.fields} fontSize={22} color="#fff" fontWeight={600} />
                                </div>
                            </div>
                        );
                    })()}
                </div>

                {/* --- Animated Connector Points 'Flowing' Upward --- */}
                <svg style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: -1 }}>
                    <defs>
                        <linearGradient id="lineGrad" x1="0%" y1="100%" x2="0%" y2="0%">
                            <stop offset="0%" stopColor={COLOR_GREEN} stopOpacity="0.1" />
                            <stop offset="100%" stopColor={COLOR_GREEN} stopOpacity="0.4" />
                        </linearGradient>
                    </defs>
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((idIdx) => {
                        const anim = spring({ frame: frame - (START_OFFSET + idIdx * STAGGER), fps });
                        
                        // Precise layout math
                        const col = idIdx < 5 ? (idIdx - 1) : (idIdx - 5);
                        const row = idIdx < 5 ? 0 : 1;
                        
                        const targetX = 80 + (col * 440) + 210; 
                        const targetY = 160 + (row * 310) + 240; 
                        const baseX = 960; 
                        const baseY = 800;

                        return (
                            <g key={idIdx} style={{ opacity: anim }}>
                                <path
                                    d={`M ${baseX} ${baseY} L ${targetX} ${targetY}`}
                                    stroke="url(#lineGrad)"
                                    strokeWidth="3"
                                    strokeDasharray="10,20"
                                    strokeDashoffset={-frame * 5} // QUICK FLOW as requested
                                    fill="none"
                                />
                            </g>
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
            position: 'relative',
            transform: `translateY(${interpolate(anim, [0, 1], [40, 0])}px)`,
            background: 'rgba(5, 10, 25, 0.95)',
            borderRadius: 16,
            border: '1px solid rgba(150, 202, 56, 0.25)',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
            boxShadow: '0 15px 45px rgba(0,0,0,0.4)'
        }}>
            {/* Header Header background with status tag in Top-Right Corner */}
            <div style={{ 
                padding: '18px 20px', 
                background: 'rgba(150, 202, 56, 0.12)', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'space-between',
                borderBottom: '1px solid rgba(150, 202, 56, 0.3)'
            }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                    <entity.icon size={22} color={COLOR_GREEN} />
                    <Typography text={entity.title} fontSize={17} fontWeight={700} color="#fff" />
                </div>
                {/* Simplified Status Label Top-Right Corner */}
                <div style={{ 
                    background: 'rgba(150, 202, 56, 0.3)', 
                    color: COLOR_GREEN, 
                    padding: '2px 8px', 
                    borderRadius: 4, 
                    fontSize: 10, 
                    fontWeight: 900,
                    border: `1px solid ${COLOR_GREEN}44`
                }}>
                    {entity.status}
                </div>
            </div>

            <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'center' }}>
                <Typography text={entity.fields} fontSize={14} color="#f0f0f0" fontWeight={400} lineHeight="1.6" />
            </div>

            {/* Premium visual accent */}
            <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 1, background: `linear-gradient(90deg, transparent, ${COLOR_GREEN}44, transparent)` }} />
        </div>
    );
};
