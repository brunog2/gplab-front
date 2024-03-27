export interface Person {
    cpf: string;
    name: string;
    address: string;
    birthDate: string;
    phone: string;
    type?: 'médico' | 'usuário' | 'atendente';
}
