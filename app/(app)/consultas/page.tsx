import { Consulta } from '@/src/data/@types/Consulta';
import { ConsultasView } from './View';

export default function ConsultasPage() {
    const consultas: Consulta[] = [
        {
            categoria: 'Odontologia',
            data: '2024-05-02',
            id: 0,
            medico: 'médico',
        },
        {
            categoria: 'Nutrição',
            data: '2024-05-02',
            id: 1,
            medico: 'médico',
        },
        {
            categoria: 'Psicologia',
            data: '2024-05-02',
            id: 2,
            medico: 'médico',
        },
    ];

    return <ConsultasView consultas={consultas} />;
}
