'use server';

import { UserFormSchema } from '@/src/ui/forms/UserForm';

interface actionReturnType {
    errors?: { [k in keyof UserFormSchema]?: string };
}

export async function createUserAction(
    prev: any,
    formData: FormData
): Promise<actionReturnType> {
    const data = Object.fromEntries(formData);

    console.log(data);

    return {};
}

export async function updateUserAction(
    prev: any,
    formData: FormData
): Promise<actionReturnType> {
    const data = Object.fromEntries(formData);

    console.log(data);

    return {};
}

export async function deleteUserAction(
    formData: FormData
): Promise<actionReturnType> {
    const data = Object.fromEntries(formData);

    console.log(data.id);

    return {};
}
