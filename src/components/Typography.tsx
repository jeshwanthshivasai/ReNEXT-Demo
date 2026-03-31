import React from 'react';

interface TypographyProps {
    text: string;
    fontSize?: number;
    fontWeight?: number | string;
    color?: string;
    letterSpacing?: number;
    style?: React.CSSProperties;
    delay?: number;
}

export const Typography: React.FC<TypographyProps> = ({
    text,
    fontSize = 24,
    fontWeight = 400,
    color = '#000000',
    letterSpacing = 0,
    style = {},
}) => {
    return (
        <div style={{
            fontSize,
            fontWeight,
            color,
            letterSpacing,
            fontFamily: 'Inter, sans-serif',
            ...style
        }}>
            {text}
        </div>
    );
};
