import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';

export interface DoctorFormSchema {
    name: string;
    crm: string;
    phone: string;
    birth: string;
    password: string;
}

interface DoctorFormProps {
    defaultValues?: Partial<DoctorFormSchema>;
    errors?: { [k in keyof DoctorFormSchema]?: string };
}

export const DoctorForm: React.FC<DoctorFormProps> = ({
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
                CRM
                <Input
                    type="text"
                    name="crm"
                    required
                    minLength={8}
                    maxLength={8}
                    defaultValue={defaultValues?.crm}
                />
                <span className="text-red-500 text-xs">
                    {errors?.crm ? errors.crm : ''}
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
