import { useEffect, useState } from "react";
import { useActions } from "../../hooks/useActions";
import { useAppSelector } from "../../hooks/useAppSelector";
import { DataSelectors } from "../../store/selectors";
import { Button } from "@mui/material";
import { ButtonModalWrapper, HomeContainer } from "./styles";
import ModalCreate from "../../components/Modal/ModalCreate/ModalCreate";
import TableData from "../../components/Table/TableData/TableData";
import Loader from "../../components/Loader/Loader";
import ModalError from "../../components/Modal/ModalError/ModalError";

const HomePage = () => {
  const { fetchAsyncData } = useActions();

  const [isVisibleCreateModal, setIsVisibleCreateModal] = useState(false);

  const [isVisibleModalError, setIsVisibleModalError] = useState(false);

  const { data, isLoading, error } = useAppSelector(DataSelectors);

  const handleModalOnOpen = () => {
    setIsVisibleCreateModal(true);
  };

  useEffect(() => {
    fetchAsyncData();
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <HomeContainer>
      <TableData data={data} />
      <ModalCreate
        isVisible={isVisibleCreateModal}
        setIsVisible={setIsVisibleCreateModal}
      />

      <ButtonModalWrapper>
        <Button
          color="primary"
          variant="contained"
          size="large"
          onClick={handleModalOnOpen}
        >
          Добавить документ
        </Button>
      </ButtonModalWrapper>
      <ModalError
        isVisible={isVisibleModalError}
        error={error}
        setIsVisible={setIsVisibleModalError}
      />
    </HomeContainer>
  );
};

export default HomePage;
