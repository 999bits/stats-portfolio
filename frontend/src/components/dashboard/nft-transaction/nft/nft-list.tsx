"use client"
import { useState } from "react";
import { Separator } from "@/components/ui/separator";
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

import NftItem from "./nft-item";
import { Nft } from "@/interface/nft";
import { dummy_nfts } from "@/config";

export const NftList: React.FC = () => {

    const [nfts, setNfts] = useState<any>(dummy_nfts);

    return (
        <Carousel className="mt-8" opts={{
            align: "start",
        }}>
            <CarouselContent>
                {nfts && Array.isArray(nfts) ? (
                    nfts.map((nft: Nft, index) => (
                        <CarouselItem className="basis-1/2 lg:basis-1/3 xl:basis-1/4 pr-[5px]" key={index}>
                            <NftItem nftImage={nft.image} nftTitle={nft.title} nftDesc={nft.desc} />
                        </CarouselItem>
                    ))
                ) : (
                    <></>
                )}
            </CarouselContent>
        </Carousel>
    )
}

export default NftList;