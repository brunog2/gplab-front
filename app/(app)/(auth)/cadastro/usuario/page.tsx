'use client';

import { createUserAction } from '@/src/data/actions/UserActions';
import { SubmitButton } from '@/src/ui/components/ui/SubmitButton';
import { Button } from '@/src/ui/components/ui/button';
import { useToast } from '@/src/ui/components/ui/use-toast';
import { UserForm } from '@/src/ui/forms/UserForm';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useFormState } from 'react-dom';

export default function CadastroUsuario() {
    const router = useRouter();
    const [formState, formAction] = useFormState(createUserAction, {
        status: 'pending',
    });
    const toast = useToast();

    useEffect(() => {
        if (formState.message) {
            toast.toast({
                description: formState.message,
                variant:
                    formState.status == 'error' ? 'destructive' : 'success',
            });
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [formState, formState.message]);

    return (
        <div className="max-w-lg mx-auto py-20">
            <h2 className="font-bold text-3xl text-center">
                Cadastro de usuário
            </h2>

            <form action={formAction} className="mt-8">
                <UserForm errors={formState.errors} />

                <div className="flex gap-2 justify-end mt-4">
                    <Button
                        variant={'ghost'}
                        type="reset"
                        onClick={router.back}
                    >
                        Cancelar
                    </Button>
                    <SubmitButton type="submit">Cadastrar</SubmitButton>
                </div>
            </form>
        </div>
    );
}
