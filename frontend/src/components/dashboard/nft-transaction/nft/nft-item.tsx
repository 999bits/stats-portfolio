"use client"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import Image from "next/image"

interface NftItemProps {
    nftImage: string;
    nftTitle: string;
    nftDesc: string;
}


export const NftItem: React.FC<NftItemProps> = ({ nftImage, nftTitle, nftDesc }: NftItemProps) => {
    return (
        <>
            <div className="w-full flex flex-col p-0 border-zinc-700 overflow-hidden">
                <AspectRatio ratio={1 / 1}>
                    <Image
                        src={nftImage}
                        alt="Photo by Drew Beamer"
                        fill
                        className="object-cover border border-solid rounded-3xl"
                    />
                </AspectRatio>
                <div className="flex flex-col pt-4">
                    <p className="text-neutral-200 text-base font-bold">{nftTitle}</p>
                    <p className="text-neutral-500 text-[12px] pt-2 font-medium leading-4">{nftDesc}</p>
                </div>
            </div>
        </>
    )
}

export default NftItem;
