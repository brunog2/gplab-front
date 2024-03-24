import { UserFormSchema } from '@/src/ui/forms/UserForm';
import ProfilePageView from './View';

export default function ProfilePage() {
    const defaultValues: UserFormSchema = {
        id: '1',
        name: 'Nome',
        cpf: '11111111111',
        address: 'asdsad asdasd sa',
        birth: '2023-02-05',
        phone: '3123712809321',
    };

    return <ProfilePageView defaultValues={defaultValues} />;
}
