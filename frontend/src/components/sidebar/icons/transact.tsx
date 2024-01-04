import * as React from "react"

interface SvgTransactProps {
    color?: string;
    width?: number;
    height?: number;
}

const SvgTransact: React.FC<SvgTransactProps> = ({ color, width, height }: SvgTransactProps) => (
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
            d="m11 17-4 4-4-4M7 21V9M21 7l-4-4-4 4M17 15V3"
        />
    </svg>
)
export default SvgTransact
