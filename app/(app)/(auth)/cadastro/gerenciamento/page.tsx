import { type Person } from '@/src/data/@types/Person';
import { GerenciarUsuariosView } from './View';
import { cache } from 'react';
import { apiService } from '@/src/data/services/apiService';

export const revalidate = 3600;

const getPeople = cache(async (): Promise<Person[]> => {
    const [userRes, doctorRes, attendentRes] = await Promise.all([
        apiService.get<Person[]>('/user/profile'),
        apiService.get<Person[]>('/doctor/profile'),
        apiService.get<Person[]>('/attendent/profile'),
    ]);

    const users: Person[] = userRes.data.map(user => ({
        ...user,
        type: 'usuário',
    }));
    const doctors: Person[] = doctorRes.data.map(user => ({
        ...user,
        type: 'médico',
    }));
    const attendents: Person[] = attendentRes.data.map(user => ({
        ...user,
        type: 'atendente',
    }));

    return [...users, ...doctors, ...attendents];
});

export default async function GerenciarUsuariosPage() {
    const users: Person[] = await getPeople();

    return <GerenciarUsuariosView users={users} />;
}
