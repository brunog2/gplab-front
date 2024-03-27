'use client';

import { Button } from '@/src/ui/components/ui/button';

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    return (
        <div className="text-center space-y-6">
            <h5 className="text-red-500 font-bold text-3xl">
                Não foi possível carregar os usuários
            </h5>
            <p>{error.message}</p>
            <Button onClick={reset}>Tentar novamente</Button>
        </div>
    );
}
