import * as React from "react"

interface SvgSwapProps {
    color?: string;
    width?: number;
    height?: number;
}

const SvgSwap: React.FC<SvgSwapProps> = ({ color, width, height }: SvgSwapProps) => (
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
            d="m17 11 4-4-4-4M21 7H9M7 21l-4-4 4-4M15 17H3"
        />
    </svg>
)
export default SvgSwap
