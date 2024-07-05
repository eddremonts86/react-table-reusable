import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  Header,
  useReactTable,
} from "@tanstack/react-table";

type Student = {
  Application_No: number;
  Name: string;
  Father_Name: string;
  DOB: string;
};

const columnHelper = createColumnHelper<Student>();

const columns = [
  columnHelper.accessor("Application_No", {
    header: "Registration No",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("Name", {
    header: "Name",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("Father_Name", {
    header: "Father Name",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("DOB", {
    header: "Date of Birth",
    cell: (info) => info.getValue(),
  }),
];
const data = [
  {
    Application_No: 1,
    Name: "John Doe",
    Father_Name: "John Doe Sr.",
    DOB: "01/01/2000",
  },
  {
    Application_No: 2,
    Name: "Jane Doe",
    Father_Name: "John Doe Sr.",
    DOB: "01/01/2000",
  },
];

const getHeader = (header: Header<Student, unknown>) => {
  return flexRender(header.column.columnDef.header, header.getContext());
};

export default function TableExample() {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <table className="w-full m-12">
      <thead>
        {table.getHeaderGroups().map((headerGroup) => (
          <tr
            key={headerGroup.id}
            className="text-left border border-gray-300"
          >
            {headerGroup.headers.map((header) => (
              <th key={header.id}>
                {header.isPlaceholder ? null : getHeader(header)}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody>
        {table.getRowModel().rows.map((row) => (
          <tr key={row.id}>
            {row.getVisibleCells().map((cell) => (
              <td key={cell.id}>
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
