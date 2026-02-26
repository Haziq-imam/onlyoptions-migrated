import React from 'react';

interface TableProps extends React.HTMLAttributes<HTMLTableElement> {
    children: React.ReactNode;
}

export const Table = ({ children, className = '', ...props }: TableProps) => {
    return (
        <div className="w-full">
            <table className={`w-full text-left border-collapse ${className}`} {...props}>
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
        <thead className={className} {...props}>
            {children}
        </thead>
    );
};

interface TableBodyProps extends React.HTMLAttributes<HTMLTableSectionElement> {
    children: React.ReactNode;
}

export const TableBody = ({ children, className = '', ...props }: TableBodyProps) => {
    return (
        <tbody className={className} {...props}>
            {children}
        </tbody>
    );
};

interface TableRowProps extends React.HTMLAttributes<HTMLTableRowElement> {
    children: React.ReactNode;
}

export const TableRow = ({ children, className = '', ...props }: TableRowProps) => {
    return (
        <tr className={`border-b border-white/5 transition-colors ${className}`} {...props}>
            {children}
        </tr>
    );
};

interface TableHeadProps extends React.ThHTMLAttributes<HTMLTableCellElement> {
    children: React.ReactNode;
}

export const TableHead = ({ children, className = '', ...props }: TableHeadProps) => {
    return (
        <th className={`py-4 px-3 md:py-5 md:px-6 text-[10px] md:text-xs font-black uppercase tracking-widest text-gray-500 align-bottom ${className}`} {...props}>
            {children}
        </th>
    );
};

interface TableCellProps extends React.TdHTMLAttributes<HTMLTableCellElement> {
    children: React.ReactNode;
}

export const TableCell = ({ children, className = '', ...props }: TableCellProps) => {
    return (
        <td className={`py-4 px-3 md:px-6 text-xs md:text-sm align-middle ${className}`} {...props}>
            {children}
        </td>
    );
};
