import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';

export interface UserFormSchema {
    id?: string;
    name?: string;
    cpf?: string;
    address?: string;
    birth?: string;
    phone?: string;
    password?: string;
}

interface UserFormProps {
    defaultValues?: UserFormSchema;
    errors?: { [k in keyof UserFormSchema]: string };
}

export const UserForm: React.FC<UserFormProps> = ({
    defaultValues,
    errors,
}) => {
    return (
        <div className="space-y-4 [&>label]:block [&_input]:mt-2 [&_input]:bg-gray-100">
            <Label>
                Nome
                <Input
                    type="text"
                    name="name"
                    required
                    maxLength={128}
                    defaultValue={defaultValues?.name}
                />
                <span className="text-red-500 text-xs">
                    {errors?.name ? errors.name : ''}
                </span>
            </Label>
            <Label>
                CPF
                <Input
                    className="invalid:border-red-500"
                    type="text"
                    pattern="\d{11}"
                    placeholder="00000000000"
                    name="cpf"
                    required
                    minLength={11}
                    maxLength={11}
                    defaultValue={defaultValues?.cpf}
                />
                <span className="text-red-500 text-xs">
                    {errors?.cpf ? errors.cpf : ''}
                </span>
            </Label>
            <Label>
                Endereço
                <Input
                    type="text"
                    name="address"
                    required
                    maxLength={128}
                    defaultValue={defaultValues?.address}
                />
                <span className="text-red-500 text-xs">
                    {errors?.address ? errors.address : ''}
                </span>
            </Label>
            <Label>
                Data de nascimento
                <Input
                    type="date"
                    name="birth"
                    required
                    defaultValue={defaultValues?.birth}
                />
                <span className="text-red-500 text-xs">
                    {errors?.birth ? errors.birth : ''}
                </span>
            </Label>
            <Label>
                Telefone
                <Input
                    type="tel"
                    name="phone"
                    required
                    minLength={11}
                    maxLength={11}
                    defaultValue={defaultValues?.phone}
                />
                <span className="text-red-500 text-xs">
                    {errors?.phone ? errors.phone : ''}
                </span>
            </Label>
            <Label>
                Senha
                <Input
                    type="password"
                    name="password"
                    required
                    minLength={8}
                    maxLength={32}
                    defaultValue={defaultValues?.password}
                />
                <span className="text-red-500 text-xs">
                    {errors?.password ? errors.password : ''}
                </span>
            </Label>
        </div>
    );
};
