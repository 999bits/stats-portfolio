"use client"
import { usePathname, useSearchParams } from 'next/navigation'

export default function Wallet() {
    console.log("Called here");

    const pathname = usePathname()
    const searchParams = useSearchParams()

    console.log("pathName = ", pathname);
    console.log("searchParam = ", searchParams.get('param'));

    return (
        <div className='w-full h-auto'>
            Wallet
        </div>
    )
}
