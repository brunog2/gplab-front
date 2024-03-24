'use server';

export async function loginAction(state: any, formData: FormData) {
    const data = Object.fromEntries(formData);
    console.log(data);

    return {
        login: 'OK',
    };
}
