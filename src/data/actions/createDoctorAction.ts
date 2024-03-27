'use server';

import { type DoctorFormSchema } from '@/src/ui/forms/DoctorForm';
import { type FormAction } from '../@types/FormAction';
import { apiService } from '../services/apiService';
import { isAxiosError } from 'axios';

export const createDoctorAction: FormAction<DoctorFormSchema> = async (
    prev: any,
    formData: FormData
) => {
    const data: Partial<DoctorFormSchema> = Object.fromEntries(formData);

    try {
        await apiService.post('/doctor/profile', {
            name: data.name,
            crm: data.crm,
            phone: data.phone,
            birthDate: data.birth,
            password: data.password,
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
        message: 'Médico cadastrado(a) com sucesso!',
    };
};
