'use client';

import {
    deleteUserAction,
    updateUserAction,
} from '@/src/data/actions/UserActions';
import { SubmitButton } from '@/src/ui/components/ui/SubmitButton';
import { UserForm, UserFormSchema } from '@/src/ui/forms/UserForm';
import { useFormState } from 'react-dom';

interface props {
    defaultValues: UserFormSchema;
}

export default function ProfilePageView({ defaultValues }: props) {
    const [formState, formAction] = useFormState(updateUserAction, {});

    return (
        <div className="max-w-lg mx-auto py-20">
            <h2 className="font-bold text-3xl text-center">
                Perfil de usuário
            </h2>

            <form action={formAction} className="mt-8">
                <input type="hidden" name="id" value={defaultValues.id} />
                <UserForm
                    errors={formState.errors}
                    defaultValues={defaultValues}
                />

                <div className="flex gap-2 justify-end mt-4">
                    <SubmitButton
                        variant="ghost"
                        className="text-red-500 hover:bg-red-200 hover:text-red-800"
                        formAction={deleteUserAction}
                    >
                        Deletar usuário
                    </SubmitButton>
                    <SubmitButton type="submit">Cadastrar</SubmitButton>
                </div>
            </form>
        </div>
    );
}
