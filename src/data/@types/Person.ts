export interface Doctor {
    crm: string;
    name: string;
    birthDate: string;
    phone: string;
    type: PersonTypeEnum.doctor;
}

export interface Attendent {
    cpf: string;
    name: string;
    address: string;
    birthDate: string;
    phone: string;
    type: PersonTypeEnum.attendent;
}

export interface User {
    cpf: string;
    name: string;
    address: string;
    birthDate: string;
    phone: string;
    type: PersonTypeEnum.user;
}

export enum PersonTypeEnum {
    doctor = 'Médico',
    attendent = 'Atendente',
    user = 'Usuário',
}

export type Person = Doctor | Attendent | User;
