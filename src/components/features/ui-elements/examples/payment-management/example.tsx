'use client';

import React, { useState } from 'react';
import {
    Table,
    TableHeader,
    TableBody,
    TableColumn,
    TableRow,
    TableCell
} from "@nextui-org/table";
import {
    ColumnDef,
    ColumnFiltersState,
    SortingState,
    VisibilityState,
    flexRender,
    getCoreRowModel,
    getFacetedRowModel,
    getFacetedUniqueValues,
    getFilteredRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    useReactTable,
} from "@tanstack/react-table";
import { ArrowUpDown, ChevronDown, MoreHorizontal } from "lucide-react";
import { Button } from '@nextui-org/button';
import { Checkbox } from '@nextui-org/checkbox';
import {
    Dropdown,
    DropdownTrigger,
    DropdownMenu,
    DropdownSection,
    DropdownItem
} from "@nextui-org/dropdown";
import { Input } from '@nextui-org/input';
import { Card, CardBody, CardFooter, CardHeader } from '@nextui-org/react';

type Payment = {
    id: string;
    amount: number;
    status: "pending" | "processing" | "success" | "failed";
    email: string;
};

const data: Payment[] = [
    { id: "m5gr84i9", amount: 316, status: "success", email: "ken99@yahoo.com" },
    { id: "3u1reuv4", amount: 242, status: "success", email: "abe45@gmail.com" },
    { id: "derv1ws0", amount: 837, status: "processing", email: "monserrat44@gmail.com" },
    { id: "5kma53ae", amount: 874, status: "success", email: "silas22@gmail.com" },
    { id: "bhqecj4p", amount: 721, status: "failed", email: "carmella@hotmail.com" },
];

const columns: ColumnDef<Payment>[] = [
    {
        id: "select",
        header: ({ table }) => {
            const {
                toggleAllPageRowsSelected,
                getIsAllPageRowsSelected,
                getIsSomePageRowsSelected,
            } = table;

            const isActive = getIsAllPageRowsSelected() || (getIsSomePageRowsSelected() && "indeterminate") as boolean;

            return (
                <Checkbox
                    isSelected={getIsAllPageRowsSelected() || (getIsSomePageRowsSelected() && "indeterminate") as boolean}
                    onValueChange={(value) => {
                        toggleAllPageRowsSelected(!!value);
                        console.log("table: ", {
                            value,
                            isActive,
                            isActive1: getIsAllPageRowsSelected(),
                            isActive2: getIsSomePageRowsSelected() && "indeterminate"
                        });
                    }}
                    aria-label="Select all"
                />
            )
        },
        cell: ({ row }) => (
            <Checkbox
                isSelected={row.getIsSelected()}
                onValueChange={(value) => row.toggleSelected(!!value)}
                aria-label="Select row"
            />
        ),
        enableSorting: false,
        enableHiding: false,
    },
    {
        accessorKey: "status",
        header: "Status",
        cell: ({ row }) => <div className="capitalize">{row.getValue("status")}</div>,
    },
    {
        accessorKey: "email",
        header: ({ column }) => (
            <Button variant="flat" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
                Email
                <ArrowUpDown className="ml-2 h-4 w-4" />
            </Button>
        ),
        cell: ({ row }) => <div className="lowercase">{row.getValue("email")}</div>,
    },
    {
        accessorKey: "amount",
        header: () => <div className="text-right">Amount</div>,
        cell: ({ row }) => {
            const amount = parseFloat(row.getValue("amount"));
            const formatted = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(amount);
            return <div className="text-right font-medium">{formatted}</div>;
        },
    },
    {
        id: "actions",
        enableHiding: false,
        cell: ({ row }) => {
            const payment = row.original;
            return (
                <Dropdown>
                    <DropdownTrigger>
                        <Button variant="flat" className="h-8 w-8 p-0">
                            <span className="sr-only">Open menu</span>
                            <MoreHorizontal className="h-4 w-4" />
                        </Button>
                    </DropdownTrigger>
                    <DropdownMenu aria-label="Actions">
                        <DropdownSection>
                            <DropdownItem key="copy" onClick={() => navigator.clipboard.writeText(payment.id)}>
                                Copy payment ID
                            </DropdownItem>
                            <DropdownItem key="viewCustomer">View customer</DropdownItem>
                            <DropdownItem key="viewPayment">View payment details</DropdownItem>
                        </DropdownSection>
                    </DropdownMenu>
                </Dropdown>
            );
        },
    },
];

export default function DataTableDemo() {

    const [rowSelection, setRowSelection] = useState({})
    const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({})
    const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])
    const [sorting, setSorting] = useState<SortingState>([])

    const table = useReactTable({
        data,
        columns,
        state: {
            sorting,
            columnVisibility,
            rowSelection,
            columnFilters,
        },
        enableRowSelection: true,
        onRowSelectionChange: setRowSelection,
        onSortingChange: setSorting,
        onColumnFiltersChange: setColumnFilters,
        onColumnVisibilityChange: setColumnVisibility,
        getCoreRowModel: getCoreRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getFacetedRowModel: getFacetedRowModel(),
        getFacetedUniqueValues: getFacetedUniqueValues(),
    });

    return (
        <Card className="w-full">
            <CardHeader className="flex items-center justify-between p-6">
                <Input
                    placeholder="Filter emails..."
                    value={(table.getColumn("email")?.getFilterValue() as string) ?? ""}
                    onChange={(event) => {
                        table.getColumn("email")?.setFilterValue(event.target.value);
                    }}
                    className="max-w-sm"
                />
                <Dropdown>
                    <DropdownTrigger>
                        <Button className="ml-auto">
                            Columns <ChevronDown className="ml-2 h-4 w-4" />
                        </Button>
                    </DropdownTrigger>
                    <DropdownMenu aria-label="Columns" className='capitalize'>
                        {table.getAllColumns().filter((column) => column.getCanHide()).map((column) => (
                            <DropdownItem key={column.id} onClick={() => column.toggleVisibility(!column.getIsVisible())}>
                                <Checkbox
                                    isSelected={column.getIsVisible()}
                                    onValueChange={() => column.toggleVisibility(!column.getIsVisible())}
                                    className="mr-2"
                                />
                                {column.id}
                            </DropdownItem>
                        ))}
                    </DropdownMenu>
                </Dropdown>
            </CardHeader>
            <CardBody className="rounded-md">
                <Table
                    aria-label='Payments'
                    aria-labelledby='Payments'
                >
                    <TableHeader columns={table.getHeaderGroups().flatMap(headerGroup => headerGroup.headers)}>
                        {(header) => (
                            <TableColumn key={header.id}>
                                {header.isPlaceholder
                                    ? null
                                    : flexRender(header.column.columnDef.header, header.getContext())}
                            </TableColumn>
                        )}
                    </TableHeader>
                    <TableBody>
                        {table.getRowModel().rows?.length ? (
                            table.getRowModel().rows.map((row) => (
                                <TableRow key={row.id} data-state={row.getIsSelected() && "selected"}>
                                    {row.getVisibleCells().map((cell) => (
                                        <TableCell key={cell.id}>
                                            {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell colSpan={columns.length} className="h-24 text-center">
                                    No results.
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </CardBody>
            <CardFooter className="flex items-center justify-end space-x-2 p-6">
                <div className="flex-1 text-sm text-muted-foreground">
                    {table.getFilteredSelectedRowModel().rows.length} of {table.getFilteredRowModel().rows.length} row(s) selected.
                </div>
                <div className="space-x-2">
                    <Button size="sm" onClick={() => table.previousPage()} disabled={!table.getCanPreviousPage()}>
                        Previous
                    </Button>
                    <Button size="sm" onClick={() => table.nextPage()} disabled={!table.getCanNextPage()}>
                        Next
                    </Button>
                </div>
            </CardFooter>
        </Card>
    );
}
