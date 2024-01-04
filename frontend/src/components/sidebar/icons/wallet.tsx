import React from "react";

interface SvgWalletProps {
    color?: string;
    width?: number;
    height?: number;
}

const SvgWallet: React.FC<SvgWalletProps> = ({ color, width, height }: SvgWalletProps) => (
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
            d="M20 12V8H6a2 2 0 1 1 0-4h12v4"
        />
        <path
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6v12c0 1.1.9 2 2 2h14v-4"
        />
        <path
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M18 12a2 2 0 0 0 0 4h4v-4h-4Z"
        />
    </svg>
);

export default SvgWallet;