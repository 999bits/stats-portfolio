"use client"
import Image from "next/image";

export const SidebarHeader: React.FC = () => {
    return (
        <div className='flex mt-4 space-x-4 items-center justify-center'>
            <Image width={40} height={40} src={"/images/logo.svg"} alt="logo" />
            <span className='text-neutral-100 text-[20px] font-bold'>Stats-Portfolio</span>
        </div>
    )
}

export default SidebarHeader;