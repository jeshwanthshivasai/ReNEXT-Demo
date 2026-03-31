import React from 'react';
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig, Audio, staticFile } from 'remotion';
import { Typography } from '../components/Typography';
import { COLOR_GREEN, COLOR_DARK_BLUE } from '../Constants';
import { Database, FileText, ShoppingCart, Key, AlertTriangle, Tag, Building } from 'lucide-react';

const ENTITIES = [
    {
        id: 1,
        title: 'Entity 1: RE Record',
        type: 'Static',
        fields: 'Property Type, Unique Identifier, Address, GPS (Lat, Lon), Size (Area)',
        icon: Database,
        color: COLOR_GREEN
    },
    {
        id: 2,
        title: 'Entity 2: Ownership Record',
        type: 'Dynamic',
        fields: 'Owner Name, Type, Issuance Date, Status: Active/Encumbered',
        icon: FileText,
        color: '#4fd1c5'
    },
    {
        id: 3,
        title: 'Entity 3: Sale Transaction',
        type: 'Dynamic',
        fields: 'Seller, Buyer, Agent, Timestamps, Sale Price, Reference Records, Brokerage Details, Contract Digisig, Escrow, Money flow audit',
        icon: ShoppingCart,
        color: '#4fd1c5'
    },
    {
        id: 4,
        title: 'Entity 4: Rental Transaction',
        type: 'Dynamic',
        fields: 'Leaser, Tenant, Agent, Timestamps, Rental Price, Reference Records, Brokerage Details, Contract Digisig, Escrow, Money flow audit',
        icon: Key,
        color: '#4fd1c5'
    },
    {
        id: 5,
        title: 'Entity 5: Dispute Record',
        type: 'Dynamic',
        fields: 'Claimant Name/Type, Respondent Name/Type',
        icon: AlertTriangle,
        color: '#4fd1c5'
    },
    {
        id: 6,
        title: 'Entity 6: Sale Pricing Record',
        type: 'Dynamic',
        fields: 'Amount, Timestamp',
        icon: Tag,
        color: '#4fd1c5'
    },
    {
        id: 7,
        title: 'Entity 7: Rental Pricing Record',
        type: 'Dynamic',
        fields: 'Amount, Timestamp',
        icon: Tag,
        color: '#4fd1c5'
    },
    {
        id: 8,
        title: 'Entity 8: Brokerage Pricing Record',
        type: 'Dynamic',
        fields: 'Amount, Timestamp',
        icon: Tag,
        color: '#4fd1c5'
    },
    {
        id: 9,
        title: 'Entity 9: Project Record',
        type: 'Dynamic',
        fields: 'Developer Name, Developer Type',
        icon: Building,
        color: '#4fd1c5'
    }
];

export const Section2_ImmutableLedger: React.FC = () => {
    const frame = useCurrentFrame();
    const { fps } = useVideoConfig();

    const STAGGER = 15; // 0.5 second
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
                
                {/* --- Row 1 (Top Entities: 2, 3, 4, 5) --- */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 30, marginBottom: 40 }}>
                    {[1, 2, 3, 4].map((idIdx) => {
                        const entity = ENTITIES[idIdx];
                        const anim = spring({ frame: frame - (START_OFFSET + idIdx * STAGGER), fps, config: { damping: 15 } });
                        return <EntityCard key={entity.id} entity={entity} anim={anim} />;
                    })}
                </div>

                {/* --- Row 2 (Middle Entities: 6, 7, 8, 9) --- */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 30, marginBottom: 60 }}>
                    {[5, 6, 7, 8].map((idIdx) => {
                        const entity = ENTITIES[idIdx];
                        const anim = spring({ frame: frame - (START_OFFSET + idIdx * STAGGER), fps, config: { damping: 15 } });
                        return <EntityCard key={entity.id} entity={entity} anim={anim} />;
                    })}
                </div>

                {/* --- Row 3 (Foundational Entity 1) --- */}
                <div style={{ display: 'flex', justifyContent: 'center', position: 'relative' }}>
                    {(() => {
                        const entity = ENTITIES[0];
                        const anim = spring({ frame: frame - START_OFFSET, fps, config: { damping: 18 } });
                        return (
                            <div style={{
                                width: '100%',
                                opacity: anim,
                                transform: `translateY(${interpolate(anim, [0, 1], [40, 0])}px)`,
                                background: 'rgba(5, 15, 40, 0.95)',
                                borderRadius: 16,
                                border: `2px solid ${COLOR_GREEN}`,
                                overflow: 'hidden',
                                boxShadow: `0 0 50px ${COLOR_GREEN}22`,
                                zIndex: 10
                            }}>
                                <div style={{ 
                                    padding: '20px 40px', 
                                    background: 'rgba(150, 202, 56, 0.1)', 
                                    display: 'flex', 
                                    alignItems: 'center', 
                                    justifyContent: 'center',
                                    gap: 25,
                                    borderBottom: '1px solid rgba(150, 202, 56, 0.3)'
                                }}>
                                    <entity.icon size={32} color={COLOR_GREEN} />
                                    <div>
                                        <Typography text={entity.title} fontSize={28} fontWeight={700} color="#fff" />
                                        <div style={{ display: 'inline-block', background: COLOR_GREEN, color: COLOR_DARK_BLUE, padding: '2px 10px', borderRadius: 4, fontSize: 12, fontWeight: 700, marginTop: 4 }}>
                                            Entity Type = {entity.type}
                                        </div>
                                    </div>
                                </div>
                                <div style={{ padding: '20px', textAlign: 'center' }}>
                                    <Typography text={entity.fields} fontSize={20} color="#a8b2d1" italic />
                                </div>
                            </div>
                        );
                    })()}
                </div>

                {/* --- Connecting Lines SVG --- */}
                <svg style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: -1 }}>
                    {/* Simplified growing lines from bottom to top rows */}
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((idIdx) => {
                        const anim = spring({ frame: frame - (START_OFFSET + idIdx * STAGGER), fps });
                        // Coordinates are approximate based on 4-col grid
                        // Base center is approx (960, 800)
                        const x = 240 + (idIdx % 4) * 440;
                        const y = idIdx < 5 ? 300 : 500;
                        return (
                            <path
                                key={idIdx}
                                d={`M 960 700 L ${x} ${y}`}
                                stroke={COLOR_GREEN}
                                strokeWidth="2"
                                strokeDasharray="8,8"
                                opacity={anim * 0.2}
                                fill="none"
                            />
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
            transform: `translateY(${interpolate(anim, [0, 1], [40, 0])}px)`,
            background: 'rgba(5, 10, 25, 0.85)',
            borderRadius: 16,
            border: '1px solid rgba(150, 202, 56, 0.2)',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
            height: '240px',
            boxShadow: '0 10px 30px rgba(0,0,0,0.5)'
        }}>
            <div style={{ 
                padding: '16px 20px', 
                background: 'rgba(150, 202, 56, 0.08)', 
                display: 'flex', 
                alignItems: 'center', 
                gap: 12,
                borderBottom: '1px solid rgba(150, 202, 56, 0.15)'
            }}>
                <entity.icon size={22} color={COLOR_GREEN} />
                <Typography text={entity.title} fontSize={16} fontWeight={700} color="#fff" />
            </div>
            <div style={{ padding: '18px', display: 'flex', flexDirection: 'column', height: '100%' }}>
                <div style={{ 
                    background: 'rgba(150, 202, 56, 0.15)', 
                    color: COLOR_GREEN, 
                    padding: '2px 8px', 
                    borderRadius: 4, 
                    fontSize: 11, 
                    fontWeight: 700,
                    alignSelf: 'flex-start',
                    marginBottom: 12 
                }}>
                    Entity Type = {entity.type}
                </div>
                <div style={{ flex: 1, overflow: 'hidden' }}>
                    <Typography text={entity.fields} fontSize={13} color="#a8b2d1" lineHeight="1.5" />
                </div>
            </div>
            {/* Accented corner decoration */}
            <div style={{ 
                position: 'absolute', 
                right: 0, 
                bottom: 0, 
                width: 15, 
                height: 15, 
                background: COLOR_GREEN, 
                opacity: 0.2,
                clipPath: 'polygon(100% 0, 100% 100%, 0 100%)' 
            }} />
        </div>
    );
};
