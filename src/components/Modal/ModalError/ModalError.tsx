import { Button, Modal } from "@mui/material";
import { FC, useEffect } from "react";
import { ButtonWrapper, ModalContent, ModalTitle } from "./styles";

interface ModalErrorProps {
  error: string | null;
  isVisible: boolean;
  setIsVisible: (active: boolean) => void;
}

const ModalError: FC<ModalErrorProps> = ({
  error,
  isVisible,
  setIsVisible,
}) => {
  const handleCloseModal = () => {
    setIsVisible(false);
  };

  useEffect(() => {
    if (error) {
      setIsVisible(true);
    }
  }, []);

  return (
    <Modal
      open={isVisible}
      onClose={handleCloseModal}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <ModalContent>
        <ModalTitle
          id="modal-modal-title"
          variant="h6"
          sx={{ textAlign: "center" }}
        >
          {error}
        </ModalTitle>
        <ButtonWrapper>
          <Button color="error" variant="outlined" onClick={handleCloseModal}>
            Закрыть
          </Button>
        </ButtonWrapper>
      </ModalContent>
    </Modal>
  );
};

export default ModalError;
