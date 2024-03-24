'use client';

import { User } from '@/src/data/@types/User';
import { DataTable } from '@/src/ui/components/ui/DataTable';
import { Button } from '@/src/ui/components/ui/button';
import { Input } from '@/src/ui/components/ui/input';
import {
    createColumnHelper,
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    useReactTable,
} from '@tanstack/react-table';
import { Pencil, Search, Trash } from 'lucide-react';
import { useRef } from 'react';

interface GerenciarUsuariosViewProps {
    users: User[];
}

const columnHelper = createColumnHelper<User>();

export const GerenciarUsuariosView: React.FC<GerenciarUsuariosViewProps> = ({
    users,
}) => {
    const searchRef = useRef<HTMLInputElement>(null);

    const columns = [
        columnHelper.accessor('id', {
            header: 'Código',
            enableColumnFilter: false,
        }),
        columnHelper.accessor('name', {
            header: 'Nome',
            id: 'name',
            filterFn: 'includesString',
        }),
        columnHelper.accessor('type', {
            header: 'Tipo',
            enableColumnFilter: false,
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
        data: users,
        columns,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
    });

    const handleSearch = () => {
        const searchValue = searchRef.current?.value;

        table.setColumnFilters(state => {
            if (searchValue?.length == 0) {
                return [];
            }
            return [...state, { id: 'name', value: searchValue }];
        });
    };

    return (
        <div className="px-20">
            <h3 className="text-4xl font-bold text-blue-700">
                Tabela de usuários
            </h3>
            <div className="py-20">
                <div className="flex pb-4 gap-2 justify-end">
                    <Input
                        ref={searchRef}
                        type="search"
                        placeholder="Pesquisar"
                        className="max-w-72"
                    />
                    <Button size="icon" onClick={handleSearch}>
                        <Search />
                    </Button>
                </div>
                <DataTable table={table} />
            </div>
        </div>
    );
};
