'use client';

import { createDoctorAction } from '@/src/data/actions/createDoctorAction';
import { SubmitButton } from '@/src/ui/components/ui/SubmitButton';
import { Button } from '@/src/ui/components/ui/button';
import { DoctorForm } from '@/src/ui/forms/DoctorForm';
import { useRouter } from 'next/navigation';
import { useFormState } from 'react-dom';

export default function CadastroMedico() {
    const router = useRouter();
    const [formState, formAction] = useFormState(createDoctorAction, {});

    return (
        <div className="max-w-lg mx-auto py-20">
            <h2 className="font-bold text-3xl text-center">
                Cadastro de médico
            </h2>

            <form action={formAction} className="mt-8">
                <DoctorForm errors={formState.errors} />

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
