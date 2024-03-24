import Header from '@/src/ui/components/header/Header';
import { MenuDrawer } from '@/src/ui/components/header/MenuDrawer';

export default function AppLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <div className="grid grid-cols-[auto_1fr] grid-rows-[auto_1fr]">
                <Header />
                <MenuDrawer />
                <div className="overflow-y-auto">{children}</div>
            </div>
        </>
    );
}
