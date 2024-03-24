import { Consulta } from '@/src/data/@types/Consulta';
import { ConsultasView } from './View';

export default function ConsultasPage() {
    const consultas: Consulta[] = [
        {
            categoria: 'Odontologia',
            data: '2024-05-02',
            id: 0,
            medico: 'médico',
            paciente: 'Lorem',
        },
        {
            categoria: 'Nutrição',
            data: '2024-05-02',
            id: 1,
            medico: 'médico',
            paciente: 'Lorem',
        },
        {
            categoria: 'Psicologia',
            data: '2024-05-02',
            id: 2,
            medico: 'médico',
            paciente: 'Lorem',
        },
    ];

    return <ConsultasView consultas={consultas} />;
}
