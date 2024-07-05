interface TableFooterProps {
  colSpan: number;
}
export default function TableFooter({ colSpan }: Readonly<TableFooterProps>) {
  return (
    <tfoot>
      <tr>
        <td
          colSpan={colSpan}
          className="py-4 text-center border"
        >
          Footer
        </td>
      </tr>
    </tfoot>
  );
}
