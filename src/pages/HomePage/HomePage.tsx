import { useEffect } from "react";
import TableData from "../../components/TableData/TableData";
import { useActions } from "../../hooks/useActions";
import { useAppSelector } from "../../hooks/useAppSelector";
import { DataSelectors } from "../../store/selectors";

const HomePage = () => {
  const { fetchAsyncData } = useActions();

  const { data } = useAppSelector(DataSelectors);

  useEffect(() => {
    fetchAsyncData();
  }, []);

  return (
    <div>
      <TableData data={data} />
    </div>
  );
};

export default HomePage;
