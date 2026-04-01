import { ScreenWalkthroughLayout } from '../components/ScreenWalkthroughLayout';
import { AbsoluteFill, interpolate, useCurrentFrame, staticFile } from 'remotion';

// --- MANUAL CONTROLS ---
// Edit these values to reposition, resize, or retime the highlight rings
const HIGHLIGHT_RINGS = [
    {
        name: 'Left Pane - Users',
        absStart: 2063,
        absEnd: 2172,
        x: 420,           // Centered on left side navigation
        y: 454,           // Vertical position for Users item
        w: 245,           // Ring width
        h: 45,            // Ring height
        radius: 12,       // Corner roundness
        color: '#96CC39',
    },
    {
        name: 'Top Right - Add User',
        absStart: 2660,
        absEnd: 2707,
        x: 1535,          // Top Right area
        y: 404,           // Vertical position
        w: 180,           // Ring width
        h: 80,            // Ring height
        radius: 20,       // Corner roundness
        color: '#96CC39',
    },
    {
        name: 'Left Pane - Roles',
        absStart: 2483,
        absEnd: 2600,
        x: 420,           // Matching user's sidebar X
        y: 520,           // Positioned below Users
        w: 245,           // Matching sidebar width
        h: 45,            // Matching sidebar height
        radius: 12,
        color: '#96CC39',
    }
];

const SECTION_START_FRAME = 2063;
// -----------------------

export const Section4a_UserManagement: React.FC = () => {
    const frame = useCurrentFrame();

    return (
        <AbsoluteFill>
            <ScreenWalkthroughLayout 
                title="END-TO-END PROPERTY LIFECYCLE"
                subtitle="Smart Admin Control & User Management"
                videoSrc={staticFile('screens/User Management.mp4')}
                label="USER MANAGEMENT"
                badgeText="ADMIN PORTAL"
                rotationY={5} // Balanced tilt for variety
            />

            {HIGHLIGHT_RINGS.map((ring, index) => {
                const relStart = ring.absStart - SECTION_START_FRAME;
                const relEnd = ring.absEnd - SECTION_START_FRAME;
                const isVisible = frame >= relStart && frame <= relEnd;

                if (!isVisible) return null;

                const opacity = interpolate(
                    frame,
                    [relStart, relStart + 5, relEnd - 5, relEnd],
                    [0, 1, 1, 0]
                );

                return (
                    <div key={index} style={{
                        position: 'absolute',
                        top: ring.y,
                        left: ring.x,
                        width: ring.w,
                        height: ring.h,
                        border: `4px solid ${ring.color}`,
                        borderRadius: `${ring.radius}px`,
                        boxShadow: `0 0 20px rgba(150, 204, 57, 0.6), inset 0 0 10px ${ring.color}`,
                        opacity,
                        transform: `translate(-50%, -50%)`,
                        pointerEvents: 'none',
                        zIndex: 100,
                    }} />
                );
            })}
        </AbsoluteFill>
    );
};
