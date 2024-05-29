import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { FC } from "react";
import { IData } from "../../../models/IData";
import { useAppSelector } from "../../../hooks/useAppSelector";
import { DataSelectors } from "../../../store/selectors";
import { useActions } from "../../../hooks/useActions";
import { TableDataContainer } from "./styles";
import TableDataRow from "../TableRow/TableRow";

interface TableDataProps {
  data: IData[];
  isVisibleEditModal: boolean;
  setIsVisibleEditModal: (active: boolean) => void;
}

const TableData: FC<TableDataProps> = ({
  data,
  isVisibleEditModal,
  setIsVisibleEditModal,
}) => {
  const { tableTitle } = useAppSelector(DataSelectors);

  const { deleteAsyncData } = useActions();

  return (
    <>
      <TableDataContainer>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                {tableTitle.map((_, i, arr) => (
                  <TableCell key={i}>{arr[i + 1]}</TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((row) => (
                <>
                  <TableDataRow
                    key={row.id}
                    isVisibleEditModal={isVisibleEditModal}
                    row={row}
                    deleteAsyncData={deleteAsyncData}
                    setIsVisibleEditModal={setIsVisibleEditModal}
                  />
                </>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </TableDataContainer>
    </>
  );
};

export default TableData;
