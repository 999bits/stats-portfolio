import React from "react";

interface SvgComponentProps {
    color?: string;
    width?: number;
    height?: number;
}

const SvgDashboard: React.FC<SvgComponentProps> = ({ color, width, height }: SvgComponentProps) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        fill="none"
    >
        <path
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M22 12h-4l-3 9L9 3l-3 9H2"
        />
    </svg>
);



export default SvgDashboard;