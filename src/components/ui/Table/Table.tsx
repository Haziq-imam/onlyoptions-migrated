import React from 'react';
import { cn } from '../Card/Card';

interface TableProps extends React.HTMLAttributes<HTMLTableElement> {
    children: React.ReactNode;
}

export const Table = ({ children, className = '', ...props }: TableProps) => {
    return (
        <div className="w-full overflow-hidden">
            <table className={cn("w-full text-left border-collapse", className)} {...props}>
                {children}
            </table>
        </div>
    );
};

interface TableHeaderProps extends React.HTMLAttributes<HTMLTableSectionElement> {
    children: React.ReactNode;
}

export const TableHeader = ({ children, className = '', ...props }: TableHeaderProps) => {
    return (
        <thead className={cn("hidden md:table-header-group", className)} {...props}>
            {children}
        </thead>
    );
};

interface TableBodyProps extends React.HTMLAttributes<HTMLTableSectionElement> {
    children: React.ReactNode;
}

export const TableBody = ({ children, className = '', ...props }: TableBodyProps) => {
    return (
        <tbody className={cn("block md:table-row-group", className)} {...props}>
            {children}
        </tbody>
    );
};

interface TableRowProps extends React.HTMLAttributes<HTMLTableRowElement> {
    children: React.ReactNode;
}

export const TableRow = ({ children, className = '', ...props }: TableRowProps) => {
    return (
        <tr className={cn(
            "border-b border-white/5 transition-colors",
            "block md:table-row mb-4 md:mb-0 last:mb-0",
            className
        )} {...props}>
            {children}
        </tr>
    );
};

interface TableHeadProps extends React.ThHTMLAttributes<HTMLTableCellElement> {
    children: React.ReactNode;
}

export const TableHead = ({ children, className = '', ...props }: TableHeadProps) => {
    return (
        <th className={cn(
            "py-4 px-3 md:py-5 md:px-6 text-[10px] md:text-xs font-black uppercase tracking-widest text-gray-500 align-bottom",
            className
        )} {...props}>
            {children}
        </th>
    );
};

interface TableCellProps extends React.TdHTMLAttributes<HTMLTableCellElement> {
    children: React.ReactNode;
    label?: string;
}

export const TableCell = ({ children, label, className = '', ...props }: TableCellProps) => {
    return (
        <td className={cn(
            "py-3 px-4 md:py-4 md:px-6 text-xs md:text-sm align-middle leading-relaxed",
            "flex justify-between items-center md:table-cell",
            "border-b border-white/[0.02] md:border-none last:border-none",
            className
        )} {...props}>
            {label && (
                <span className="md:hidden font-black uppercase tracking-[0.2em] text-[10px] text-gray-500 mr-4">
                    {label}
                </span>
            )}
            <div className="md:contents text-right md:text-left font-medium">
                {children}
            </div>
        </td>
    );
};
