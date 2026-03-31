import React from 'react';
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig, Audio, staticFile } from 'remotion';
import { Typography } from '../components/Typography';
import { COLOR_GREEN, COLOR_DARK_BLUE } from '../Constants';
import { Network, Landmark, User, Building2 } from 'lucide-react';

const ADMIN_ROLES = [
    { type: 'User Type 1', title: 'CCLA (State)', level: 'State' },
    { type: 'User Type 2', title: 'Special Chief Sec. (Revenue)', level: 'State' },
    { type: 'User Type 3', title: 'District Collector', level: 'District' },
    { type: 'User Type 4', title: 'Additional Collector', level: 'District' },
    { type: 'User Type 5', title: 'RDO / Sub-Collector', level: 'Revenue Division' },
    { type: 'User Type 6', title: 'Tahsildar / MRO', level: 'Mandal' },
    { type: 'User Type 7', title: 'Deputy Tahsildar', level: 'Mandal' },
    { type: 'User Type 8', title: 'Village Revenue Officer (VRO)', level: 'Village' },
    { type: 'User Type 9', title: 'Village Surveyor', level: 'Village' }
];

const CITIZEN_ROLES = [
    { type: 'User 10', title: 'Owner' },
    { type: 'User 11', title: 'Proxy' }
];

const COMMERCIAL_ROLES = [
    { type: 'User 12', title: 'Manager (On-Premise)' },
    { type: 'User 13', title: 'Agent' },
    { type: 'User 14', title: 'Tenant' },
    { type: 'User 15', title: 'RE Developer' },
    { type: 'User 16', title: 'RE Investment Analyst' },
    { type: 'User 17', title: 'RE Investor' }
];

export const Section1_EcosystemHub: React.FC = () => {
    const frame = useCurrentFrame();
    const { fps } = useVideoConfig();

    const hubAnim = spring({
        frame,
        fps,
        config: { damping: 12, stiffness: 100 },
    });

    const box1Anim = spring({ frame: frame - 15, fps, config: { damping: 15 } }); // Admin Box
    const box2Anim = spring({ frame: frame - 25, fps, config: { damping: 15 } }); // Citizen Box
    const box3Anim = spring({ frame: frame - 35, fps, config: { damping: 15 } }); // Commercial Box

    return (
        <AbsoluteFill style={{ backgroundColor: 'transparent' }}>
            <Audio src={staticFile('audio/intro.wav')} />
            
            {/* Background Glow */}
            <div style={{
                position: 'absolute',
                width: 1400,
                height: 1400,
                borderRadius: '50%',
                background: `radial-gradient(circle, ${COLOR_GREEN}03 0%, transparent 75%)`,
                left: '50%',
                top: '50%',
                transform: 'translate(-50%, -50%)',
                filter: 'blur(200px)',
            }} />

            {/* Header Title */}
            <div style={{
                position: 'absolute',
                top: 40,
                width: '100%',
                textAlign: 'center',
                zIndex: 10,
            }}>
                <Typography
                    text="THE ECOSYSTEM HUB: CONNECTING STAKEHOLDERS"
                    fontSize={36}
                    fontWeight={700}
                    color={COLOR_GREEN}
                    letterSpacing={2}
                />
            </div>

            <AbsoluteFill style={{ justifyContent: 'center', alignItems: 'center' }}>
                {/* Central Hub */}
                <div style={{
                    transform: `scale(${interpolate(hubAnim, [0, 1], [0.6, 1])})`,
                    opacity: interpolate(hubAnim, [0, 0.5], [0, 1]),
                    zIndex: 100,
                }}>
                    <div style={{
                        width: 200,
                        height: 200,
                        borderRadius: '50%',
                        backgroundColor: COLOR_DARK_BLUE,
                        border: `4px solid ${COLOR_GREEN}`,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        boxShadow: `0 0 60px ${COLOR_GREEN}33`,
                        textAlign: 'center',
                        position: 'relative'
                    }}>
                        <div>
                            <Typography text="RENEXT" fontSize={34} fontWeight={700} color={COLOR_GREEN} />
                            <Typography text="Hub" fontSize={28} fontWeight={400} color="#fff" />
                        </div>
                    </div>
                </div>

                {/* --- ADMINISTRATIVE/GOVERNANCE (Left) --- */}
                <div style={{
                    position: 'absolute',
                    left: '5%',
                    width: 540,
                    height: 840,
                    opacity: box1Anim,
                    background: 'rgba(5, 10, 25, 0.85)',
                    borderRadius: 24,
                    border: '1px solid rgba(150, 202, 56, 0.15)',
                    display: 'flex',
                    flexDirection: 'column',
                    overflow: 'hidden'
                }}>
                    {/* Glassmorphism Header Background Style - matching 'previous version' (Transparent/Subtle Green) */}
                    <div style={{ 
                        padding: '24px 30px', 
                        background: 'rgba(150, 202, 56, 0.05)', 
                        display: 'flex', 
                        alignItems: 'center', 
                        gap: 15,
                        borderBottom: '1px solid rgba(150, 202, 56, 0.1)'
                    }}>
                        <Landmark size={24} color={COLOR_GREEN} />
                        <Typography text="ADMINISTRATIVE GROUP" fontSize={20} fontWeight={700} color="#fff" />
                    </div>
                    
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 10, padding: 24, flex: 1, justifyContent: 'center' }}>
                        {ADMIN_ROLES.map((role, i) => {
                            const roleAnim = spring({ frame: frame - (20 + i * 4), fps });
                            return (
                                <div key={i} style={{
                                    height: 70, opacity: roleAnim,
                                    transform: `translateX(${interpolate(roleAnim, [0, 1], [-20, 0])}px)`,
                                    background: 'rgba(255,255,255,0.03)', borderRadius: 12,
                                    padding: '0 15px', display: 'flex', alignItems: 'center', gap: 12,
                                    border: '1px solid rgba(255,255,255,0.03)'
                                }}>
                                    <div style={{ fontSize: 10, background: COLOR_GREEN, color: COLOR_DARK_BLUE, padding: '4px 6px', borderRadius: 4, fontWeight: 700 }}>{role.type}</div>
                                    <div style={{ flex: 1 }}>
                                        <Typography text={role.title} fontSize={14} color="#fff" />
                                        <Typography text={`LVL: ${role.level}`} fontSize={11} color="#8892b0" />
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* --- RIGHT COLUMN --- */}
                <div style={{ position: 'absolute', right: '5%', width: 540, display: 'flex', flexDirection: 'column', gap: 24 }}>
                    
                    {/* CITIZEN GROUP */}
                    <div style={{
                        opacity: box2Anim,
                        background: 'rgba(5, 10, 25, 0.85)',
                        borderRadius: 24,
                        border: '1px solid rgba(150, 202, 56, 0.15)',
                        overflow: 'hidden'
                    }}>
                        <div style={{ padding: '20px 25px', background: 'rgba(150, 202, 56, 0.05)', display: 'flex', alignItems: 'center', gap: 15, borderBottom: '1px solid rgba(150, 202, 56, 0.1)' }}>
                            <User size={24} color={COLOR_GREEN} />
                            <Typography text="PERSONAL/CITIZEN GROUP" fontSize={20} fontWeight={700} color="#fff" />
                        </div>
                        <div style={{ padding: '24px', display: 'flex', gap: 12 }}>
                            {CITIZEN_ROLES.map((role, i) => {
                                const roleAnim = spring({ frame: frame - (30 + i * 4), fps });
                                return (
                                    <div key={i} style={{
                                        flex: 1, height: 60, opacity: roleAnim,
                                        background: 'rgba(255,255,255,0.03)', borderRadius: 12,
                                        display: 'flex', alignItems: 'center', padding: '0 15px', gap: 10,
                                        border: '1px solid rgba(255,255,255,0.03)'
                                    }}>
                                        <div style={{ fontSize: 11, background: COLOR_GREEN, color: COLOR_DARK_BLUE, padding: '4px 6px', borderRadius: 4, fontWeight: 700 }}>{role.type}</div>
                                        <Typography text={role.title} fontSize={14} color="#fff" />
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* COMMERCIAL GROUP */}
                    <div style={{
                        opacity: box3Anim,
                        background: 'rgba(5, 10, 25, 0.85)',
                        borderRadius: 24,
                        border: '1px solid rgba(150, 202, 56, 0.15)',
                        overflow: 'hidden'
                    }}>
                        <div style={{ padding: '20px 25px', background: 'rgba(150, 202, 56, 0.05)', display: 'flex', alignItems: 'center', gap: 15, borderBottom: '1px solid rgba(150, 202, 56, 0.1)' }}>
                            <Building2 size={24} color={COLOR_GREEN} />
                            <Typography text="COMMERCIAL GROUP" fontSize={20} fontWeight={700} color="#fff" />
                        </div>
                        <div style={{ padding: '24px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
                            {COMMERCIAL_ROLES.map((role, i) => {
                                const roleAnim = spring({ frame: frame - (45 + i * 4), fps });
                                return (
                                    <div key={i} style={{
                                        height: 55, opacity: roleAnim,
                                        background: 'rgba(255,255,255,0.03)', borderRadius: 10,
                                        display: 'flex', alignItems: 'center', padding: '0 12px', gap: 10,
                                        border: '1px solid rgba(255,255,255,0.03)'
                                    }}>
                                        <div style={{ fontSize: 10, background: COLOR_GREEN, color: COLOR_DARK_BLUE, padding: '3px 5px', borderRadius: 4, fontWeight: 700 }}>{role.type}</div>
                                        <Typography text={role.title} fontSize={12} color="#fff" />
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                </div>

                <svg width="100%" height="100%" viewBox="0 0 1920 1080" style={{ position: 'absolute', pointerEvents: 'none' }}>
                    <line x1="600" y1="540" x2="860" y2="540" stroke={COLOR_GREEN} strokeWidth="1" strokeDasharray="5,5" opacity={hubAnim * 0.3} />
                    <line x1="1060" y1="460" x2="1300" y2="350" stroke={COLOR_GREEN} strokeWidth="1" strokeDasharray="5,5" opacity={hubAnim * 0.3} />
                    <line x1="1060" y1="620" x2="1300" y2="730" stroke={COLOR_GREEN} strokeWidth="1" strokeDasharray="5,5" opacity={hubAnim * 0.3} />
                </svg>

            </AbsoluteFill>
        </AbsoluteFill>
    );
};
