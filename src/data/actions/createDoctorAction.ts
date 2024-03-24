'use server';

import { DoctorFormSchema } from '@/src/ui/forms/DoctorForm';

interface actionReturnType {
    errors?: { [k in keyof DoctorFormSchema]?: string };
}

export async function createDoctorAction(
    prev: any,
    formData: FormData
): Promise<actionReturnType> {
    const data = Object.fromEntries(formData);

    console.log(data);

    return {};
}
