export interface FormActionReturnType<T> {
    status: 'pending' | 'error' | 'success';
    message?: string;
    errors?: { [k in keyof T]?: string };
}

export type FormAction<T> = (
    prev: any,
    formData: FormData
) => Promise<FormActionReturnType<T>>;
