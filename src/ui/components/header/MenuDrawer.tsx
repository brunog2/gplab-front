'use client';

import Link from 'next/link';
import { Button } from '../ui/button';
import { DrawerHeader, DrawerTitle, Drawer } from '../ui/drawer';

const MENUITEMS = [
    {
        label: 'Início',
        href: '/',
    },
    {
        label: 'Cadastro',
        href: '',
    },
    {
        label: 'Configurações',
        href: '',
    },
    {
        label: 'Sair',
        href: '',
    },
];

export const MenuDrawer: React.FC = () => {
    const isDesktop = true;

    return (
        <Drawer
            open={isDesktop}
            direction="left"
            dismissible={!isDesktop}
            modal={!isDesktop}
            fixed={false}
        >
            <div className="row-start-1 row-end-3 min-w-96 bg-blue-100">
                <DrawerHeader className="py-10">
                    <DrawerTitle className="text-center font-bold text-5xl">
                        GP
                        <span className="text-blue-700">Lab</span>
                    </DrawerTitle>
                </DrawerHeader>
                <hr className="border-white mx-4 pb-10" />
                <div className="px-4">
                    <ul className="space-y-2">
                        {MENUITEMS.map((item, index) => (
                            <li key={index}>
                                <Link href={item.href}>
                                    <Button className="w-full bg-transparent text-black hover:bg-blue-700/25">
                                        {item.label}
                                    </Button>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </Drawer>
    );
};
