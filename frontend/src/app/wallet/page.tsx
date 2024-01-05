"use client"
import { usePathname, useSearchParams } from 'next/navigation'

export default function Wallet() {

    const pathname = usePathname()
    const searchParams = useSearchParams()

    return (
        <div className='w-full h-auto'>
            Wallet
        </div>
    )
}
