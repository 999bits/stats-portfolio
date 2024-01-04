"use client"

import { Sidebar, Menu, SubMenu, MenuItem } from 'react-pro-sidebar';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { PageType } from '@/config/constants';
import SidebarHeader from './sidebar-header';
import { SvgDashboard, SvgWallet, SvgSetting, SvgSwap, SvgTransact } from './icons';
import { Wallet } from '@/interface';

interface SidebarWrapperProps {
    children: React.ReactNode;
}

export const SidebarWrapper: React.FC<SidebarWrapperProps> = ({ children }: SidebarWrapperProps) => {

    const DUMMY_WALLETS = [
        {
            name: 'Wallet 01',
            address: '0xEE86283a2DFCc1f52E86790e275e5b07b44A50E5',
        },
        {
            name: 'Wallet 02',
            address: '0xFF86283a2DFCc1f52E86790e275e5b07b44A50E5'
        }
    ];

    const [wallets, setWallets] = useState<any>(DUMMY_WALLETS);
    const [pageType, setPageType] = useState<PageType>(PageType.DASHBOARD);
    const [selectedWallet, setSelectedWallet] = useState<string | null>('');
    const router = useRouter();

    const handleMenuItemClick = (selectedPage: PageType, param: string | null = '') => {
        let routePath = "/";

        switch (selectedPage) {
            case PageType.DASHBOARD:
                routePath = "/dashboard";
                break;
            case PageType.WALLET:
                routePath = "/wallet";
                setSelectedWallet(param);
                break;
            case PageType.SWAP:
                routePath = "/swap";
                break;
            case PageType.TRANSACT:
                routePath = "/transact";
                break;
            case PageType.SETTINGS:
                routePath = "/settings";
                break;
            default:
                break;
        }

        // Add query parameter if param is provided
        const routeWithQuery = param ? `${routePath}?param=${encodeURIComponent(param)}` : routePath;

        // Update the URL
        router.push(routeWithQuery);

        // Update the page type
        setPageType(selectedPage);
    };

    const getMenuItemSelectedState = (type: PageType) => {
        return pageType === type ? true : false
    }

    const getMenuItemSelectedColor = (type: PageType) => {
        return pageType === type ? '#AFF1F5' : 'white';
    }

    console.log("Selected Wallet = ", selectedWallet);

    return (
        <div className='flex flex-row h-screen bg-zinc-900 border-[16px] border-zinc-900 space-x-6'>
            <div className='flex flex-col w-[227px]'>
                <SidebarHeader />
                <Sidebar className='mt-12 !border-0 text-sm' width='227px' backgroundColor='#18181B'>
                    <Menu
                        menuItemStyles={{
                            button: ({ level, active, disabled }) => {
                                // only apply styles on first level elements of the tree
                                return {
                                    color: active ? '#AFF1F5' : '#FFFFFF',
                                    backgroundColor: active ? '#000000' : undefined,
                                };
                            },
                        }}
                    >
                        <MenuItem
                            active={getMenuItemSelectedState(PageType.DASHBOARD)}
                            component={<div className='rounded-md hover:!bg-black/30 text-neutral-300' onClick={() => handleMenuItemClick(PageType.DASHBOARD)} />}
                            icon={<SvgDashboard color={getMenuItemSelectedColor(PageType.DASHBOARD)} width={24} height={24} />}>
                            Dashboard
                        </MenuItem>
                        <SubMenu
                            component={<div className='rounded-md hover:!bg-black/30' />}
                            label="Wallets"
                            icon={<SvgWallet color={getMenuItemSelectedColor(PageType.WALLET)} width={24} height={24} />}>
                            {wallets && Array.isArray(wallets) ? (
                                wallets.map((wallet: Wallet, index) => (
                                    <MenuItem
                                        key={index}
                                        active={getMenuItemSelectedState(PageType.WALLET) && wallet.address === selectedWallet}
                                        className='bg-zinc-900'
                                        component={<div className='ml-2 mr-2 rounded-md hover:!bg-black/30 text-neutral-300' onClick={() => handleMenuItemClick(PageType.WALLET, wallet.address)} />}>
                                        {wallet.name}
                                    </MenuItem>
                                ))
                            ) : (
                                <div></div>
                            )}
                        </SubMenu>
                        <MenuItem
                            active={getMenuItemSelectedState(PageType.SWAP)}
                            component={<div className='rounded-md hover:!bg-black/30 text-neutral-300' onClick={() => handleMenuItemClick(PageType.SWAP)} />}
                            icon={<SvgSwap color={getMenuItemSelectedColor(PageType.SWAP)} width={24} height={24} />}>
                            Swap
                        </MenuItem>
                        <MenuItem
                            active={getMenuItemSelectedState(PageType.TRANSACT)}
                            component={<div className='rounded-md hover:!bg-black/30 text-neutral-300' onClick={() => handleMenuItemClick(PageType.TRANSACT)} />}
                            icon={<SvgTransact color={getMenuItemSelectedColor(PageType.TRANSACT)} width={24} height={24} />}>
                            Transact
                        </MenuItem>
                        <MenuItem
                            active={getMenuItemSelectedState(PageType.SETTINGS)}
                            component={<div className='rounded-md hover:!bg-black/30 text-neutral-300' onClick={() => handleMenuItemClick(PageType.SETTINGS)} />}
                            icon={<SvgSetting color={getMenuItemSelectedColor(PageType.SETTINGS)} width={24} height={24} />}
                        >
                            Settings
                        </MenuItem>
                    </Menu>
                </Sidebar>
            </div>
            <div className='w-full bg-black rounded-lg rounded-tl-[40px] p-4'>
                {children}
            </div>
        </div>
    )
}
