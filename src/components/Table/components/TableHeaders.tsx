import { flexRender, type HeaderGroup } from "@tanstack/react-table";
interface TableHeadersProps {
  headers: HeaderGroup<unknown>[];
  className?: string;
}
export default function TableHeaders({
  headers,
  className,
}: Readonly<TableHeadersProps>) {
  return (
    <thead className={className}>
      {headers.map((header) => (
        <tr
          key={`table_header_tr_${header.id}`}
          className="border-gray-300"
        >
          {header.headers.map((subHeader) => {
            const headerHtml = flexRender(
              subHeader.column.columnDef.header,
              subHeader.getContext()
            );
            return (
              <th
                className="py-6 border"
                key={`header_th_${subHeader.id}`}
                colSpan={subHeader.colSpan}
                rowSpan={subHeader.colSpan || 1}
              >
                {headerHtml}
              </th>
            );
          })}
        </tr>
      ))}
    </thead>
  );
}
