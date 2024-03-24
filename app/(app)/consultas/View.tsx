'use client';

import { Consulta } from '@/src/data/@types/Consulta';
import { DataTable } from '@/src/ui/components/ui/DataTable';
import { Button } from '@/src/ui/components/ui/button';
import {
    createColumnHelper,
    getCoreRowModel,
    getPaginationRowModel,
    useReactTable,
} from '@tanstack/react-table';
import { Pencil, Trash } from 'lucide-react';

interface ConsultasViewProps {
    consultas: Consulta[];
}

const columnHelper = createColumnHelper<Consulta>();

export const ConsultasView: React.FC<ConsultasViewProps> = ({ consultas }) => {
    const columns = [
        columnHelper.accessor('id', {
            header: 'Código',
        }),
        columnHelper.accessor('medico', {
            header: 'Médico',
        }),
        columnHelper.accessor('categoria', {
            header: 'Categoria',
        }),
        columnHelper.accessor('data', {
            header: 'Data',
            cell: info => new Date(info.getValue()).toLocaleDateString(),
        }),
        columnHelper.display({
            header: 'Ações',
            cell(props) {
                return (
                    <div className="flex gap-2">
                        <Button size="icon" variant="ghost">
                            <Pencil size={16} />
                        </Button>
                        <Button size="icon" variant="ghost">
                            <Trash size={16} />
                        </Button>
                    </div>
                );
            },
        }),
    ];

    const table = useReactTable({
        data: consultas,
        columns,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
    });

    return (
        <div className="px-20">
            <h3 className="text-4xl font-bold text-blue-700">Consultas</h3>
            <div className="py-20">
                <DataTable table={table} />
            </div>
        </div>
    );
};
