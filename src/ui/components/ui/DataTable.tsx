'use client';

import { flexRender, Table as TableType } from '@tanstack/react-table';

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from './table';
import { Button } from './button';
import { ArrowLeft, ArrowRight } from 'lucide-react';

interface DataTableProps<TData> {
    table: TableType<TData>;
}

export function DataTable<TData>({ table }: DataTableProps<TData>) {
    const columns = table.getAllColumns();
    const hasPagination: boolean = table.getPageCount() > 1;

    return (
        <div>
            <div className="rounded-md border">
                <Table>
                    <TableHeader>
                        {table.getHeaderGroups().map(headerGroup => (
                            <TableRow
                                key={headerGroup.id}
                                className="bg-blue-700 hover:bg-blue-700"
                            >
                                {headerGroup.headers.map(header => {
                                    return (
                                        <TableHead
                                            key={header.id}
                                            className="text-white"
                                        >
                                            {header.isPlaceholder
                                                ? null
                                                : flexRender(
                                                      header.column.columnDef
                                                          .header,
                                                      header.getContext()
                                                  )}
                                        </TableHead>
                                    );
                                })}
                            </TableRow>
                        ))}
                    </TableHeader>
                    <TableBody className="[&>tr:nth-of-type(even)]:bg-gray-100">
                        {table.getRowModel().rows?.length ? (
                            table.getRowModel().rows.map(row => (
                                <TableRow
                                    key={row.id}
                                    data-state={
                                        row.getIsSelected() && 'selected'
                                    }
                                >
                                    {row.getVisibleCells().map(cell => (
                                        <TableCell key={cell.id}>
                                            {flexRender(
                                                cell.column.columnDef.cell,
                                                cell.getContext()
                                            )}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell
                                    colSpan={columns.length}
                                    className="h-24 text-center"
                                >
                                    Sem resultados.
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>
            {hasPagination ? (
                <div className="flex gap-2 justify-end mt-4">
                    <Button
                        size="icon"
                        variant="ghost"
                        disabled={!table.getCanPreviousPage()}
                        onClick={table.previousPage}
                    >
                        <ArrowLeft />
                    </Button>
                    <Button
                        size="icon"
                        variant="ghost"
                        disabled={!table.getCanNextPage()}
                        onClick={table.nextPage}
                    >
                        <ArrowRight />
                    </Button>
                </div>
            ) : null}
        </div>
    );
}
