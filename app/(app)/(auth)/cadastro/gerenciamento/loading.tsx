import { Skeleton } from '@/src/ui/components/ui/skeleton';

export default function Loading() {
    return (
        <>
            <div className="flex pb-4 gap-2 justify-end">
                <Skeleton className="w-64 py-6" />
            </div>
            <Skeleton className="w-full h-96" />
        </>
    );
}
