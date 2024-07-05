import { useEffect, useState } from "react";
import { Table as TableContainer } from "./components/Table";
import { tableExampleData } from "./components/Table/const/tableExampleData";
export default function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    const timeout = () =>
      setTimeout(() => {
        setLoading(false);
      }, 5000);
    timeout();

    return () => clearTimeout(timeout());
  }, []);

  return (
    <div className="flex items-center justify-center p-12">
      <TableContainer
        data={tableExampleData.data}
        headers={tableExampleData.headers}
        loading={loading}
      />
    </div>
  );
}
