import {
    type User,
    type Person,
    type Doctor,
    type Attendent,
    PersonTypeEnum,
} from '@/src/data/@types/Person';
import { GerenciarUsuariosView } from './View';
import { cache } from 'react';
import { apiService } from '@/src/data/services/apiService';

export const revalidate = 3600;

const getPeople = cache(async (): Promise<Person[]> => {
    const [userRes, doctorRes, attendentRes] = await Promise.all([
        apiService.get<User[]>('/user/profile'),
        apiService.get<Doctor[]>('/doctor/profile'),
        apiService.get<Attendent[]>('/attendent/profile'),
    ]);

    const users: User[] = userRes.data.map(user => ({
        ...user,
        type: PersonTypeEnum.user,
    }));
    const doctors: Doctor[] = doctorRes.data.map(user => ({
        ...user,
        type: PersonTypeEnum.doctor,
    }));
    const attendents: Attendent[] = attendentRes.data.map(user => ({
        ...user,
        type: PersonTypeEnum.attendent,
    }));

    return [...users, ...doctors, ...attendents];
});

export default async function GerenciarUsuariosPage() {
    const users: Person[] = await getPeople();

    return <GerenciarUsuariosView users={users} />;
}
