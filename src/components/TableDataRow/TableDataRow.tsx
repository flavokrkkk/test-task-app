import { TableCell, TableRow } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { IData } from "../../models/IData";
import { FC } from "react";
import { useActions } from "../../hooks/useActions";
import ModalEditData from "../Modal/ModalEdit/ModalEdit";

interface TableDataRowProps {
  dat: IData;
  deleteAsyncData: (id: string) => void;
  isVisibleEditModal: boolean;
  setIsVisibleEditModal: (active: boolean) => void;
}

const TableDataRow: FC<TableDataRowProps> = ({
  dat,
  deleteAsyncData,
  setIsVisibleEditModal,
  isVisibleEditModal,
}) => {
  const { setInstance } = useActions();

  const handleDeletCell = () => {
    deleteAsyncData(dat.id!);
  };

  const handleOpenModal = () => {
    setIsVisibleEditModal(true);
    setInstance(dat);
  };

  return (
    <>
      <TableRow>
        {Object.values(dat).map((_, i, arr) => (
          <TableCell>{arr[i + 1]}</TableCell>
        ))}
        <TableCell onClick={handleOpenModal}>
          <EditIcon />
        </TableCell>

        <TableCell onClick={handleDeletCell}>
          <DeleteIcon />
        </TableCell>
      </TableRow>
      <ModalEditData
        visible={isVisibleEditModal}
        setVisible={setIsVisibleEditModal}
      />
    </>
  );
};

export default TableDataRow;
