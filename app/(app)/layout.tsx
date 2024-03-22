import Header from '@/src/ui/components/header/Header';

export default function AppLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Header />
            {children}
        </>
    );
}
