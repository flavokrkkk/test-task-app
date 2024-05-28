import { Button, Modal, TextField } from "@mui/material";
import { ChangeEventHandler, FC } from "react";
import {
  ButtonWrapper,
  ModalContent,
  ModalInputContainer,
  ModalTitle,
} from "./styles";
import { useAppSelector } from "../../../hooks/useAppSelector";
import { DataSelectors } from "../../../store/selectors";
import { useActions } from "../../../hooks/useActions";

interface ModalEditProps {
  visible: boolean;
  setVisible: (active: boolean) => void;
}

const ModalEdit: FC<ModalEditProps> = ({ visible, setVisible }) => {
  const { instance } = useAppSelector(DataSelectors);

  const { setInstance, editAsyncData } = useActions();

  const handleModalClose = () => {
    setVisible(false);
  };

  const handleChnageCurrentData: ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    setInstance({ ...instance, [event.target.name]: event.target.value });
  };

  const handleAsyncCurrentData = () => {
    editAsyncData(instance);
    setVisible(false);
  };

  return (
    <Modal
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      open={visible}
      onClose={handleModalClose}
    >
      <ModalContent>
        <ModalTitle id="modal-modal-title" variant="h6">
          Добавьте изменения в документ
        </ModalTitle>
        <ModalInputContainer>
          <TextField
            name="documentName"
            size="small"
            placeholder="Название документа"
            value={instance.documentName}
            onChange={handleChnageCurrentData}
          />
          <TextField
            name="documentStatus"
            size="small"
            placeholder="Статус документа"
            value={instance.documentStatus}
            onChange={handleChnageCurrentData}
          />
          <TextField
            name="documentType"
            size="small"
            placeholder="Тип документа"
            value={instance.documentType}
            onChange={handleChnageCurrentData}
          />
          <TextField
            name="employeeNumber"
            size="small"
            placeholder="Номер сотрудника"
            value={instance.employeeNumber}
            onChange={handleChnageCurrentData}
          />
          <TextField
            name="companySignatureName"
            size="small"
            placeholder="Подпись компании"
            value={instance.companySignatureName}
            onChange={handleChnageCurrentData}
          />
          <TextField
            name="employeeSignatureName"
            size="small"
            placeholder="Подпись сотрудника"
            value={instance.employeeSignatureName}
            onChange={handleChnageCurrentData}
          />
        </ModalInputContainer>
        <ButtonWrapper>
          <Button variant="outlined" onClick={handleAsyncCurrentData}>
            Сохранить
          </Button>
        </ButtonWrapper>
      </ModalContent>
    </Modal>
  );
};

export default ModalEdit;
