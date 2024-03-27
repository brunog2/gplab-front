'use server';

import { type UserFormSchema } from '@/src/ui/forms/UserForm';
import { apiService } from '../services/apiService';
import { isAxiosError } from 'axios';
import { redirect } from 'next/navigation';

interface actionReturnType {
    status: 'pending' | 'error' | 'success';
    message?: string;
    errors?: { [k in keyof UserFormSchema]?: string };
}

export async function createUserAction(
    prev: any,
    formData: FormData
): Promise<actionReturnType> {
    const data: UserFormSchema = Object.fromEntries(formData);

    try {
        await apiService.post('/user/profile', {
            cpf: data.cpf,
            name: data.name,
            phone: data.phone,
            password: data.password,
            birthDate: data.birth,
            address: data.address,
        });
    } catch (e) {
        if (isAxiosError(e)) {
            console.log(e.response?.data);
            return {
                status: 'error',
                message: e.response?.data,
            };
        }
    }

    redirect('/login');
}

export async function updateUserAction(
    prev: any,
    formData: FormData
): Promise<actionReturnType> {
    const data = Object.fromEntries(formData);

    console.log(data);

    return { status: 'success' };
}

export async function deleteUserAction(
    formData: FormData
): Promise<actionReturnType> {
    const data = Object.fromEntries(formData);

    console.log(data.id);

    return { status: 'success' };
}
