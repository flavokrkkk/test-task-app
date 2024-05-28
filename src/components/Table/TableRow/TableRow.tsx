import { TableCell, TableRow } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { FC } from "react";
import { IData } from "../../../models/IData";
import { useActions } from "../../../hooks/useActions";
import ModalEdit from "../../Modal/ModalEdit/ModalEdit";

interface TableDataRowProps {
  row: IData;
  deleteAsyncData: (id: string) => void;
  isVisibleEditModal: boolean;
  setIsVisibleEditModal: (active: boolean) => void;
}

const TableDataRow: FC<TableDataRowProps> = ({
  row,
  deleteAsyncData,
  setIsVisibleEditModal,
  isVisibleEditModal,
}) => {
  const { setInstance } = useActions();

  const handleDeletCell = () => {
    deleteAsyncData(row.id!);
  };

  const handleOpenModal = () => {
    setIsVisibleEditModal(true);
    setInstance(row);
  };

  return (
    <>
      <TableRow>
        {Object.values(row).map((_, i, arr) => (
          <TableCell>{arr[i + 1]}</TableCell>
        ))}
        <TableCell onClick={handleOpenModal}>
          <EditIcon />
        </TableCell>

        <TableCell onClick={handleDeletCell}>
          <DeleteIcon />
        </TableCell>
      </TableRow>
      <ModalEdit
        isVisible={isVisibleEditModal}
        setIsVisible={setIsVisibleEditModal}
      />
    </>
  );
};

export default TableDataRow;
