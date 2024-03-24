import { User } from '@/src/data/@types/User';
import { GerenciarUsuariosView } from './View';

export default function GerenciarUsuariosPage() {
    const users: User[] = [
        {
            name: 'rwer',
            id: 0,
            type: 'atendente',
        },
        {
            name: 'ghrdh',
            id: 1,
            type: 'médico',
        },
        {
            name: 'asidmnsa',
            id: 2,
            type: 'usuário',
        },
    ];

    return <GerenciarUsuariosView users={users} />;
}
