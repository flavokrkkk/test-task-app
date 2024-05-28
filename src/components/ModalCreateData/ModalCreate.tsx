import { Button, Modal, TextField } from "@mui/material";
import { ChangeEventHandler, FC, useState } from "react";
import {
  ButtonWrapper,
  ModalContent,
  ModalInputContainer,
  ModalTitle,
} from "./styled";
import { IData } from "../../models/IData";
import { useActions } from "../../hooks/useActions";
import { patternData } from "../../utils/patternData";

interface ModalCreateProps {
  visible: boolean;
  setVisible: (active: boolean) => void;
}

const ModalCreate: FC<ModalCreateProps> = ({ visible, setVisible }) => {
  const { createAsyncData } = useActions();

  const [dataRequest, setDataRequest] = useState<IData>(patternData);

  const handleChangeData: ChangeEventHandler<HTMLInputElement> = (event) => {
    setDataRequest({
      ...dataRequest,
      [event.target.name]: event.target.value,
    });
  };

  const handleCreateData = () => {
    createAsyncData(dataRequest);
    setDataRequest(patternData);
    setVisible(false);
  };

  const handleModalClose = () => {
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
          Добавьте описание документа
        </ModalTitle>
        <ModalInputContainer>
          <TextField
            name="documentName"
            size="small"
            placeholder="Название документа"
            value={dataRequest.documentName}
            onChange={handleChangeData}
          />
          <TextField
            name="documentStatus"
            size="small"
            placeholder="Статус документа"
            value={dataRequest.documentStatus}
            onChange={handleChangeData}
          />
          <TextField
            name="documentType"
            size="small"
            placeholder="Тип документа"
            value={dataRequest.documentType}
            onChange={handleChangeData}
          />
          <TextField
            name="employeeNumber"
            size="small"
            placeholder="Номер сотрудника"
            value={dataRequest.employeeNumber}
            onChange={handleChangeData}
          />
          <TextField
            name="companySignatureName"
            size="small"
            placeholder="Подпись компании"
            value={dataRequest.companySignatureName}
            onChange={handleChangeData}
          />
          <TextField
            name="employeeSignatureName"
            size="small"
            placeholder="Подпись сотрудника"
            value={dataRequest.employeeSignatureName}
            onChange={handleChangeData}
          />
        </ModalInputContainer>
        <ButtonWrapper>
          <Button variant="outlined" onClick={handleCreateData}>
            Добавить
          </Button>
        </ButtonWrapper>
      </ModalContent>
    </Modal>
  );
};

export default ModalCreate;
