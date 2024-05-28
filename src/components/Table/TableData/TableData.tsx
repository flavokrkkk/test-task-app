import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { FC, useState } from "react";
import { IData } from "../../../models/IData";
import { useAppSelector } from "../../../hooks/useAppSelector";
import { DataSelectors } from "../../../store/selectors";
import { useActions } from "../../../hooks/useActions";
import { TableDataContainer } from "./styles";
import TableDataRow from "../TableRow/TableRow";

interface TableDataProps {
  data: IData[];
}

const TableData: FC<TableDataProps> = ({ data }) => {
  const { tableTitle } = useAppSelector(DataSelectors);

  const { deleteAsyncData } = useActions();

  const [isVisibleEditModal, setIsVisibleEditModal] = useState(false);

  return (
    <>
      <TableDataContainer>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                {tableTitle.map((_, i, arr) => (
                  <TableCell>{arr[i + 1]}</TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((row) => (
                <TableDataRow
                  isVisibleEditModal={isVisibleEditModal}
                  row={row}
                  deleteAsyncData={deleteAsyncData}
                  setIsVisibleEditModal={setIsVisibleEditModal}
                />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </TableDataContainer>
    </>
  );
};

export default TableData;
