import React from 'react';
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig, Audio, staticFile } from 'remotion';
import { Typography } from '../components/Typography';
import { COLOR_GREEN, COLOR_DARK_BLUE } from '../Constants';
import { FileText, ShoppingCart, Key, ShieldAlert, BadgeDollarSign, FolderGit2, Boxes, Activity, Database } from 'lucide-react';

const ENTITIES = [
    { 
        title: 'OWNERSHIP RECORD', 
        icon: FileText, 
        fields: 'Owner Name, Type, Issuance Date,\nStatus: Active/Encumbered' 
    },
    { 
        title: 'SALE TRANSACTION', 
        icon: ShoppingCart, 
        fields: 'Seller, Buyer, Agent, Timestamps, Sale Price, Reference Records, Brokerage Details, Contract Digisig, Escrow, Money flow audit' 
    },
    { 
        title: 'RENTAL TRANSACTION', 
        icon: Key, 
        fields: 'Leaser, Tenant, Agent, Timestamps, Rental Price, Reference Records, Brokerage Details, Contract Digisig, Escrow, Money flow audit' 
    },
    { 
        title: 'DISPUTE RECORD', 
        icon: ShieldAlert, 
        fields: 'Claimant Name/Type,\nRespondent Name/Type' 
    },
    { 
        title: 'SALE PRICING RECORD', 
        icon: BadgeDollarSign, 
        fields: 'Market Rate, History,\nReference Sales' 
    },
    { 
        title: 'RENTAL PRICING RECORD', 
        icon: BadgeDollarSign, 
        fields: 'Average Rent,\nDemand Index' 
    },
    { 
        title: 'BROKERAGE PRICING RECORD', 
        icon: FolderGit2, 
        fields: 'Agent Rating,\nCommission Model' 
    },
    { 
        title: 'PROJECT RECORD', 
        icon: Boxes, 
        fields: 'Developer Name,\nDigital Clearances' 
    },
    { 
        title: 'IMMUTABLE LEDGER', 
        icon: Database, 
        fields: 'Chain-linked, Time-stamped,\nVerified Digital Twin' 
    }
];

export const Section2_ImmutableLedger: React.FC = () => {
    const frame = useCurrentFrame();
    const { fps } = useVideoConfig();

    return (
        <AbsoluteFill style={{ backgroundColor: 'transparent' }}>
            <Audio src={staticFile('audio/problem.wav')} />
            
            <div style={{
                position: 'absolute',
                top: 80,
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                zIndex: 10,
            }}>
                <Typography
                    text="CORE DATA ARCHITECTURE"
                    fontSize={42}
                    color={COLOR_GREEN}
                    fontWeight={700}
                    letterSpacing={2}
                />
                <Typography
                    text="The Immutable Ledger: Precise Data Entities"
                    fontSize={20}
                    color="#8892b0"
                    style={{ marginTop: 10 }}
                />
            </div>

            <AbsoluteFill style={{ 
                justifyContent: 'center', 
                alignItems: 'center', 
                top: 80 
            }}>
                <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    gap: 24,
                    width: '90%',
                    maxWidth: 1600,
                }}>
                    {ENTITIES.map((entity, i) => {
                        const stagger = i * 4; // Fast staggered entry
                        const anim = spring({
                            frame: frame - stagger,
                            fps,
                            config: { damping: 14, stiffness: 200 }
                        });
                        
                        const opacity = interpolate(anim, [0, 1], [0, 1]);
                        const scale = interpolate(anim, [0, 1], [0.95, 1]);
                        const translateY = interpolate(anim, [0, 1], [20, 0]);

                        return (
                            <div key={entity.title} style={{
                                width: 420,
                                height: 200,
                                opacity,
                                transform: `translateY(${translateY}px) scale(${scale})`,
                                backgroundColor: 'rgba(2, 6, 23, 0.8)',
                                borderRadius: 16,
                                border: `1px solid ${COLOR_GREEN}${Math.round(anim * 40).toString(16)}`,
                                padding: 25,
                                display: 'flex',
                                flexDirection: 'column',
                                gap: 12,
                                position: 'relative',
                                overflow: 'hidden',
                                boxShadow: anim > 0.5 ? `0 10px 40px rgba(0,0,0,0.4)` : 'none'
                            }}>
                                {/* Subtle scanline effect for technical feel */}
                                <div style={{
                                    position: 'absolute',
                                    height: 1,
                                    width: '100%',
                                    top: `${(frame * 2 % 100)}%`,
                                    background: `linear-gradient(90deg, transparent, ${COLOR_GREEN}22, transparent)`,
                                    opacity: 0.3,
                                }} />

                                <div style={{ display: 'flex', alignItems: 'center', gap: 15 }}>
                                    <div style={{
                                        width: 44,
                                        height: 44,
                                        borderRadius: 10,
                                        backgroundColor: `${COLOR_GREEN}11`,
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        color: COLOR_GREEN,
                                        border: `1px solid ${COLOR_GREEN}33`
                                    }}>
                                        <entity.icon size={22} />
                                    </div>
                                    <Typography
                                        text={entity.title}
                                        fontSize={18}
                                        fontWeight={700}
                                        color="#fff"
                                        letterSpacing={1}
                                    />
                                </div>
                                <div style={{ 
                                    fontSize: 13, 
                                    color: '#8892b0', 
                                    lineHeight: 1.5,
                                    fontWeight: 400,
                                    fontFamily: 'Inter, sans-serif'
                                }}>
                                    {entity.fields.split(',').map((f, fi) => (
                                        <span key={fi}>
                                            {f.trim()}{fi < entity.fields.split(',').length - 1 ? ' • ' : ''}
                                            {fi % 3 === 2 ? <br/> : null}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </AbsoluteFill>
        </AbsoluteFill>
    );
};
