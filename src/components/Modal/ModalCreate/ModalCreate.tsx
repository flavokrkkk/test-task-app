import { Button, Modal, TextField } from "@mui/material";
import { ChangeEventHandler, FC, useEffect, useState } from "react";
import {
  ButtonWrapper,
  ModalContent,
  ModalInputContainer,
  ModalTitle,
} from "./styled";
import { IData } from "../../../models/IData";
import { useActions } from "../../../hooks/useActions";
import { patternData } from "../../../utils/patternData";

interface ModalCreateProps {
  isVisible: boolean;
  setIsVisible: (active: boolean) => void;
}

const ModalCreate: FC<ModalCreateProps> = ({ isVisible, setIsVisible }) => {
  const { createAsyncData } = useActions();

  const [dataRequest, setDataRequest] = useState<IData>(patternData);

  const [isDisabled, setIsDisabled] = useState(true);

  const handleChangeData: ChangeEventHandler<HTMLInputElement> = (event) => {
    setDataRequest({
      ...dataRequest,
      [event.target.name]: event.target.value,
    });
  };

  const handleCreateData = () => {
    createAsyncData(dataRequest);
    setDataRequest(patternData);
    setIsVisible(false);
  };

  const handleModalClose = () => {
    setIsVisible(false);
  };

  useEffect(() => {
    dataRequest.documentName &&
    dataRequest.documentStatus &&
    dataRequest.documentType &&
    dataRequest.employeeNumber &&
    dataRequest.companySignatureName &&
    dataRequest.employeeSignatureName
      ? setIsDisabled(false)
      : setIsDisabled(true);
  }, [
    dataRequest.documentName.length,
    dataRequest.documentStatus.length,
    dataRequest.documentType.length,
    dataRequest.employeeNumber.length,
    dataRequest.companySignatureName.length,
    dataRequest.employeeSignatureName.length,
  ]);

  return (
    <Modal
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      open={isVisible}
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
          <Button
            disabled={isDisabled}
            variant="outlined"
            onClick={handleCreateData}
          >
            Добавить
          </Button>
          <Button variant="outlined" color="error" onClick={handleModalClose}>
            Закрыть
          </Button>
        </ButtonWrapper>
      </ModalContent>
    </Modal>
  );
};

export default ModalCreate;
