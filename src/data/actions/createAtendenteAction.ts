'use server';

import { type UserFormSchema } from '@/src/ui/forms/UserForm';
import { type FormAction } from '../@types/FormAction';
import { apiService } from '../services/apiService';
import { isAxiosError } from 'axios';

export const createAtendenteAction: FormAction<UserFormSchema> = async (
    prev: any,
    formData: FormData
) => {
    const data = Object.fromEntries(formData);

    try {
        await apiService.post('/attendent/profile', {
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

    return {
        status: 'success',
        message: 'Atendente cadastrado(a) com sucesso!',
    };
};
