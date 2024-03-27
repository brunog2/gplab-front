'use client';

import { Toaster } from '@/src/ui/components/ui/toaster';

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            {children}
            <Toaster />
        </>
    );
}
