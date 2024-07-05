import { useEffect, useState } from "react";
import { Table as TableContainer } from "./components/Table";
import TableExample from "./components/Table/components/tableExample";
import { tableExampleData } from "./components/Table/const/tableExampleData";
export default function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    const timeout = () =>
      setTimeout(() => {
        setLoading(false);
      }, 1500);
    timeout();

    return () => clearTimeout(timeout());
  }, []);

  return (
    <div className="flex flex-col items-center justify-center p-12">
      <TableContainer
        data={tableExampleData.data}
        headers={tableExampleData.headers}
        loading={loading}
      />
      <TableExample />
    </div>
  );
}
