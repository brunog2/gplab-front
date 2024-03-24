'use client';

import { useFormStatus } from 'react-dom';
import { Button, ButtonProps } from './button';

export const SubmitButton: React.FC<ButtonProps> = props => {
    const { pending } = useFormStatus();

    return <Button {...props} disabled={pending} aria-disabled={pending} />;
};
