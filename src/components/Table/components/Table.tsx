import type { HeaderGroup } from "@tanstack/react-table";
import {
  ColumnDef,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";

import TableContent from "./TableContent";
import TableFooter from "./TableFooter";
import TableHeaders from "./TableHeaders";

interface TableProps {
  data: unknown[];
  headers: unknown[];
  loading: boolean;
}

export default function Table({
  data,
  headers,
  loading,
}: Readonly<TableProps>) {
  const table = useReactTable({
    data,
    columns: headers as ColumnDef<unknown>[],
    getCoreRowModel: getCoreRowModel(),
  });

  const tableHeaders: HeaderGroup<unknown>[] = table.getHeaderGroups();
  const headersLength = tableHeaders[0].headers.length;

  return (
    <table className="w-full">
      <TableHeaders
        headers={tableHeaders}
        className="bg-gray-100 rounded-l rounded-r"
      />
      <TableContent
        loading={loading}
        table={table}
        headersLength={headersLength}
        className="p-2 text-center border border-slate-300 hover:bg-gray-500"
      />
      <TableFooter colSpan={headersLength} />
    </table>
  );
}
