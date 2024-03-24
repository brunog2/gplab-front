'use client';

import { loginAction } from '@/src/data/actions/loginAction';
import { Button } from '@/src/ui/components/ui/button';
import { Input } from '@/src/ui/components/ui/input';
import { Label } from '@/src/ui/components/ui/label';
import { useFormState } from 'react-dom';

export const LoginForm: React.FC = () => {
    const [formState, formAction] = useFormState(loginAction, { login: '' });

    return (
        <form action={formAction} className="w-full">
            <div className="space-y-4">
                <Label className="block">
                    Email
                    <Input
                        type="email"
                        name="email"
                        required
                        className="mt-2"
                    />
                </Label>
                <Label className="block">
                    Senha
                    <Input
                        type="password"
                        name="password"
                        required
                        className="mt-2"
                    />
                </Label>
            </div>
            <Button size={'lg'} type="submit" className="mt-6 w-full">
                Entrar
            </Button>
        </form>
    );
};
