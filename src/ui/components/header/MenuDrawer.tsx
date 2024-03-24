'use client';

import Link from 'next/link';
import { Button } from '../ui/button';
import { DrawerHeader, DrawerTitle, Drawer } from '../ui/drawer';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '../ui/accordion';
import { Cog, Home, LogOut } from 'lucide-react';

const MENUITEMS = [
    {
        label: 'Início',
        href: '/home',
        icon: <Home size={16} />,
    },
    {
        label: 'Cadastro',
        href: '/cadastro',
        subitems: [
            {
                label: 'Médico',
                href: '/medico',
            },
            {
                label: 'Usuário',
                href: '/usuario',
            },
            {
                label: 'Atendente',
                href: '/atendente',
            },
            {
                label: 'Gerenciar',
                href: '/gerenciamento',
            },
        ],
    },
    {
        label: 'Consultas',
        href: '/paciente/consultas',
    },
    {
        label: 'Consultas',
        href: '/medico/consultas',
    },
    {
        label: 'Configurações',
        href: '',
        icon: <Cog size={16} />,
    },
    {
        label: 'Sair',
        href: '',
        icon: <LogOut size={16} />,
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
            <div className="row-start-1 row-end-3 min-w-64 bg-blue-100">
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
                                {item.subitems ? (
                                    <Accordion type="multiple">
                                        {
                                            <AccordionItem
                                                value={`menuitem-${index}`}
                                            >
                                                <AccordionTrigger className="hover:bg-blue-700/25 text-sm rounded-md py-2 px-4 hover:no-underline">
                                                    {item.label}
                                                </AccordionTrigger>
                                                <AccordionContent>
                                                    <ul className="ml-4">
                                                        {item.subitems.map(
                                                            subitem => (
                                                                <li
                                                                    key={
                                                                        subitem.href
                                                                    }
                                                                >
                                                                    <Link
                                                                        href={`${item.href}${subitem.href}`}
                                                                    >
                                                                        <Button className="w-full justify-start bg-transparent text-black hover:bg-blue-700/25">
                                                                            {
                                                                                subitem.label
                                                                            }
                                                                        </Button>
                                                                    </Link>
                                                                </li>
                                                            )
                                                        )}
                                                    </ul>
                                                </AccordionContent>
                                            </AccordionItem>
                                        }
                                    </Accordion>
                                ) : (
                                    <Link href={item.href}>
                                        <Button className="w-full gap-2 justify-start bg-transparent text-black hover:bg-blue-700/25">
                                            {item.icon}
                                            {item.label}
                                        </Button>
                                    </Link>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </Drawer>
    );
};
